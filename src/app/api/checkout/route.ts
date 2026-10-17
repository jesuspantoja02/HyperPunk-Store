import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey || stripeKey.includes("REPLACE")) {
    return NextResponse.json(
      { error: "Stripe no configurado. Agrega tu STRIPE_SECRET_KEY en .env" },
      { status: 503 }
    );
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2025-02-24.acacia" });

  try {
    const body = await req.json();
    const { items, customerInfo } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    const lineItems = items.map((item: {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image?: string;
    }) => ({
      price_data: {
        currency: "pen", // Soles peruanos
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
          metadata: { productId: item.id },
        },
        unit_amount: Math.round(item.price * 100), // Stripe uses cents
      },
      quantity: item.quantity,
    }));

    // Add shipping as a line item if applicable
    const subtotal = items.reduce((acc: number, item: { price: number; quantity: number }) => acc + item.price * item.quantity, 0);
    if (subtotal < 200) {
      lineItems.push({
        price_data: {
          currency: "pen",
          product_data: { name: "Envío estándar" },
          unit_amount: 1500,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      customer_email: customerInfo?.email,
      metadata: {
        customerName: customerInfo?.name || "",
        address: customerInfo?.address || "",
        city: customerInfo?.city || "",
      },
      payment_method_types: ["card"],
      locale: "es",
      shipping_address_collection: {
        allowed_countries: ["PE", "CL", "CO", "MX", "AR"],
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Error al crear sesión de pago" },
      { status: 500 }
    );
  }
}
