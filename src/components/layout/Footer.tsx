"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Shield, Truck, RotateCcw, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-punk-800/50 mt-20">
      {/* Trust badges */}
      <div className="border-b border-punk-800/30">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: "Envío Rápido", desc: "Despacho en 24-48h" },
            { icon: Shield, title: "Pago Seguro", desc: "Encriptado con Stripe" },
            { icon: RotateCcw, title: "Devoluciones", desc: "30 días sin preguntas" },
            { icon: CreditCard, title: "Cuotas", desc: "Hasta 12 sin intereses" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-punk-800/60 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-200">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-punk-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-punk-100" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-lg text-punk-100">
              HYPER<span className="text-punk-300">PUNK</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Tu destino de tecnología gaming de élite. Productos originales, garantía real, experiencia de compra sin igual.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neon-purple" /> Lima, Perú</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-neon-purple" /> +51 999 999 999</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-neon-purple" /> ventas@hyperpunk.pe</div>
          </div>
        </div>

        {/* Categorías */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Categorías</h3>
          <ul className="space-y-2">
            {[
              { href: "/catalog?category=teclados",   label: "Teclados Mecánicos" },
              { href: "/catalog?category=audifonos",  label: "Audífonos Gaming" },
              { href: "/catalog?category=microfonos", label: "Micrófonos" },
              { href: "/catalog?category=monitores",  label: "Monitores" },
              { href: "/catalog?category=mouse",      label: "Mouse Gaming" },
              { href: "/catalog?category=consolas",   label: "Consolas" },
              { href: "/catalog?category=laptops",    label: "Laptops Gaming" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Soporte</h3>
          <ul className="space-y-2">
            {[
              { href: "#", label: "Centro de Ayuda" },
              { href: "#", label: "Seguimiento de pedido" },
              { href: "#", label: "Política de devoluciones" },
              { href: "#", label: "Garantía" },
              { href: "#", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-gray-500 hover:text-neon-cyan transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Newsletter</h3>
          <p className="text-sm text-gray-500 mb-4">Recibe ofertas exclusivas y novedades gaming.</p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="input-punk w-full text-sm"
            />
            <button type="submit" className="btn-neon w-full text-sm py-2.5">
              Suscribirme
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-2">Sin spam. Cancela cuando quieras.</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-punk-800/30">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} HyperPunk Store. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Payment method icons */}
              <div className="px-2 py-1 rounded bg-white/10 text-xs text-gray-400">Visa</div>
              <div className="px-2 py-1 rounded bg-white/10 text-xs text-gray-400">MC</div>
              <div className="px-2 py-1 rounded bg-white/10 text-xs text-gray-400">Amex</div>
              <div className="px-2 py-1 rounded bg-white/10 text-xs text-gray-400">Stripe</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
