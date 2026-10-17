"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Shield, Lock, ChevronRight, CreditCard, Truck } from "lucide-react";
import { useRouter } from "next/navigation";

type Step = "info" | "shipping" | "payment";

export default function CheckoutPage() {
  const { items, subtotal, total, clearCart } = useCartStore();
  const sub = subtotal();
  const tot = total();
  const shipping = sub >= 200 ? 0 : 15;
  const router = useRouter();

  const [step, setStep] = useState<Step>("info");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", district: "", zip: "",
    cardName: "", cardNumber: "", cardExpiry: "", cardCvc: "",
  });

  const updateField = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleStripeCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(i => ({
            id: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
            image: i.product.images[0],
          })),
          customerInfo: formData,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Error al crear sesión");
      }
    } catch (error) {
      console.error(error);
      alert("Error al procesar el pago. Verifica tu configuración de Stripe.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-6xl mb-4">🛒</p>
        <h2 className="font-display font-bold text-2xl mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-6">Agrega productos antes de continuar al pago.</p>
        <Link href="/catalog" className="btn-neon px-8 py-3">Ver Catálogo</Link>
      </div>
    );
  }

  const steps: { id: Step; label: string }[] = [
    { id: "info", label: "Datos" },
    { id: "shipping", label: "Envío" },
    { id: "payment", label: "Pago" },
  ];

  const stepIndex = steps.findIndex(s => s.id === step);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cart" className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">← Carrito</Link>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-10 max-w-sm">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
              i < stepIndex ? "step-done" : i === stepIndex ? "step-active" : "step-pending"
            }`}>
              {i < stepIndex ? "✓" : i + 1}
            </div>
            <span className={`text-sm hidden sm:block ${i === stepIndex ? "text-neon-cyan" : i < stepIndex ? "text-neon-green" : "text-gray-600"}`}>
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-700" />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {step === "info" && (
            <div className="glass rounded-2xl p-6 space-y-4">
              <h2 className="font-semibold text-xl text-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm flex items-center justify-center font-bold">1</span>
                Información personal
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Nombre completo *</label>
                  <input className="input-punk w-full" placeholder="Juan Pérez" value={formData.name} onChange={e => updateField("name", e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Email *</label>
                  <input type="email" className="input-punk w-full" placeholder="tu@email.com" value={formData.email} onChange={e => updateField("email", e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-gray-500 mb-1 block">Teléfono</label>
                  <input className="input-punk w-full" placeholder="+51 999 999 999" value={formData.phone} onChange={e => updateField("phone", e.target.value)} />
                </div>
              </div>
              <button
                onClick={() => setStep("shipping")}
                disabled={!formData.name || !formData.email}
                className="btn-neon w-full py-3 mt-2 disabled:opacity-40"
              >
                Continuar → Dirección de envío
              </button>
            </div>
          )}

          {step === "shipping" && (
            <div className="glass rounded-2xl p-6 space-y-4">
              <h2 className="font-semibold text-xl text-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm flex items-center justify-center font-bold">2</span>
                Dirección de envío
                <Truck className="w-4 h-4 text-neon-cyan ml-1" />
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Dirección *</label>
                  <input className="input-punk w-full" placeholder="Av. Principal 123, Apt. 4B" value={formData.address} onChange={e => updateField("address", e.target.value)} />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Ciudad *</label>
                    <input className="input-punk w-full" placeholder="Lima" value={formData.city} onChange={e => updateField("city", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Distrito</label>
                    <input className="input-punk w-full" placeholder="Miraflores" value={formData.district} onChange={e => updateField("district", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Código Postal</label>
                    <input className="input-punk w-full" placeholder="15001" value={formData.zip} onChange={e => updateField("zip", e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setStep("info")} className="btn-ghost py-3 px-6">← Atrás</button>
                <button
                  onClick={() => setStep("payment")}
                  disabled={!formData.address || !formData.city}
                  className="btn-neon flex-1 py-3 disabled:opacity-40"
                >
                  Continuar → Pago
                </button>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="glass rounded-2xl p-6 space-y-6">
              <h2 className="font-semibold text-xl text-gray-100 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm flex items-center justify-center font-bold">3</span>
                Pago seguro
                <Lock className="w-4 h-4 text-neon-green" />
              </h2>

              {/* Stripe info box */}
              <div className="bg-neon-cyan/5 border border-neon-cyan/20 rounded-xl p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-200">Pago procesado por Stripe</p>
                  <p className="text-xs text-gray-500 mt-0.5">Tus datos de tarjeta se ingresan directamente en Stripe. HyperPunk nunca ve tu información de pago.</p>
                </div>
              </div>

              {/* Payment methods */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Métodos de pago aceptados:</p>
                <div className="flex flex-wrap gap-2">
                  {["💳 Tarjeta de crédito", "💳 Tarjeta de débito", "🏦 Yape/Plin (próximamente)"].map(m => (
                    <span key={m} className="text-xs px-3 py-1.5 rounded-full glass border border-punk-700/40 text-gray-400">{m}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep("shipping")} className="btn-ghost py-3 px-6">← Atrás</button>
                <button
                  onClick={handleStripeCheckout}
                  disabled={loading}
                  className="btn-neon flex-1 py-4 text-base font-bold flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Pagar {formatPrice(tot)} con Stripe
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-600 text-center">
                🔒 Conexión encriptada SSL/TLS · PCI DSS Compliant
              </p>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 sticky top-24">
            <h3 className="font-semibold text-gray-100 mb-4">Resumen del pedido</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-punk-900 shrink-0">
                    <Image src={product.images[0]} alt={product.name} fill className="object-contain p-1" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-300 line-clamp-2 leading-tight">{product.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">x{quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-neon-cyan shrink-0">{formatPrice(product.price * quantity)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-punk-800/50 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span><span>{formatPrice(sub)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Envío</span>
                <span className={shipping === 0 ? "text-neon-green" : ""}>{shipping === 0 ? "GRATIS" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-punk-800/50">
                <span className="text-gray-100">Total</span>
                <span className="text-neon-cyan font-display text-xl">{formatPrice(tot)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
