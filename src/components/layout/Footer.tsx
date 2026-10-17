"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Shield, Truck, RotateCcw, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-mm-surface border-y border-mm-border">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Envío rápido", desc: "Despacho en 24-48h" },
            { icon: Shield, title: "Pago seguro", desc: "Encriptado con Stripe" },
            { icon: RotateCcw, title: "Devoluciones", desc: "30 días sin preguntas" },
            { icon: CreditCard, title: "Cuotas", desc: "Hasta 12 sin intereses" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-mm-border flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-mm-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-mm-text">{title}</p>
                <p className="text-xs text-mm-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-mm-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-mm-blue flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="font-semibold text-lg">HYPERPUNK</span>
            </Link>
            <p className="text-sm text-[#c4c4c4] leading-relaxed mb-4">
              Especialistas en periféricos y tecnología gaming. Productos originales con garantía.
            </p>
            <div className="space-y-2 text-sm text-[#c4c4c4]">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-mm-blue" /> Lima, Perú</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-mm-blue" /> +51 999 999 999</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-mm-blue" /> ventas@hyperpunk.pe</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categorías</h3>
            <ul className="space-y-2">
              {[
                { href: "/catalog?category=teclados", label: "Teclados" },
                { href: "/catalog?category=audifonos", label: "Audífonos" },
                { href: "/catalog?category=microfonos", label: "Micrófonos" },
                { href: "/catalog?category=monitores", label: "Monitores" },
                { href: "/catalog?category=mouse", label: "Mouse" },
                { href: "/catalog?category=consolas", label: "Consolas" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#c4c4c4] hover:text-mm-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Soporte</h3>
            <ul className="space-y-2">
              {["Centro de ayuda", "Seguimiento de pedido", "Devoluciones", "Garantía", "Contacto"].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-sm text-[#c4c4c4] hover:text-mm-blue transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-[#c4c4c4] mb-4">Ofertas y novedades en tu correo.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-lg bg-[#1a1a1a] border border-[#333] text-white text-sm px-3 py-2.5 outline-none focus:border-mm-blue placeholder:text-gray-500"
              />
              <button type="submit" className="btn-neon w-full text-sm py-2.5">
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8a9297]">
              © {new Date().getFullYear()} HyperPunk Store. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              {["Visa", "MC", "Amex", "Stripe"].map((m) => (
                <span key={m} className="px-2 py-1 rounded bg-white/10 text-xs text-[#c4c4c4]">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
