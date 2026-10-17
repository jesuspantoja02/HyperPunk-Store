"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import { CheckCircle, Package, Home } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-neon-green/10 border-2 border-neon-green mx-auto flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-neon-green" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-neon-green/5 animate-ping" />
        </div>
      </div>

      <h1 className="font-display font-bold text-3xl text-neon-green mb-3">¡PEDIDO CONFIRMADO!</h1>
      <p className="text-gray-400 mb-2">Tu pago fue procesado exitosamente. 🎉</p>
      <p className="text-gray-600 text-sm mb-8">
        Recibirás un email de confirmación con los detalles de tu pedido y número de seguimiento.
      </p>

      <div className="glass rounded-2xl p-6 mb-8 text-left space-y-3">
        <h3 className="font-semibold text-gray-200 mb-4">¿Qué sigue?</h3>
        {[
          { icon: "📧", title: "Email de confirmación", desc: "Revisa tu bandeja de entrada en los próximos minutos." },
          { icon: "📦", title: "Preparación del pedido", desc: "Tu pedido será preparado y enviado en 24-48 horas hábiles." },
          { icon: "🚚", title: "Seguimiento", desc: "Te enviaremos el número de guía para rastrear tu envío." },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="flex gap-3">
            <span className="text-xl shrink-0">{icon}</span>
            <div>
              <p className="text-sm font-medium text-gray-200">{title}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-ghost py-3 px-6 flex items-center justify-center gap-2">
          <Home className="w-4 h-4" /> Ir al inicio
        </Link>
        <Link href="/catalog" className="btn-neon py-3 px-6 flex items-center justify-center gap-2">
          <Package className="w-4 h-4" /> Seguir comprando
        </Link>
      </div>
    </div>
  );
}
