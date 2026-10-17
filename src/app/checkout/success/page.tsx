"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { CheckCircle, Package, Home, Mail, Truck } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 rounded-full bg-punk-800 border border-punk-600 mx-auto flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-punk-300" />
        </div>
      </div>

      <h1 className="font-display font-bold text-3xl text-punk-100 mb-3">Pedido confirmado</h1>
      <p className="text-punk-400 mb-2">Tu pago fue procesado correctamente.</p>
      <p className="text-punk-500 text-sm mb-8">
        Recibirás un email con los detalles y el seguimiento del envío.
      </p>

      <div className="glass rounded-xl p-6 mb-8 text-left space-y-4">
        <h3 className="font-medium text-punk-200 mb-2">Próximos pasos</h3>
        {[
          { icon: Mail, title: "Confirmación por email", desc: "Revisa tu bandeja en los próximos minutos." },
          { icon: Package, title: "Preparación", desc: "Despacho en 24-48 horas hábiles." },
          { icon: Truck, title: "Seguimiento", desc: "Te enviaremos el número de guía." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-3">
            <Icon className="w-5 h-5 text-punk-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-punk-200">{title}</p>
              <p className="text-xs text-punk-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-ghost py-3 px-6 flex items-center justify-center gap-2">
          <Home className="w-4 h-4" /> Inicio
        </Link>
        <Link href="/catalog" className="btn-neon py-3 px-6 flex items-center justify-center gap-2">
          <Package className="w-4 h-4" /> Seguir comprando
        </Link>
      </div>
    </div>
  );
}
