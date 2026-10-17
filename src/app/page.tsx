import Link from "next/link";
import Image from "next/image";
import { Zap, ChevronRight, Star, Shield, Truck, Award } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts, getNewProducts, categories } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[90vh] flex items-center bg-grid">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-punk-700/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-punk-800/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-punk-800/60 text-sm text-punk-200">
              <Zap className="w-4 h-4" />
              <span>Nueva colección gaming 2025</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight">
              <span className="block text-punk-100">TECH</span>
              <span className="block text-punk-200">GAMING</span>
              <span className="block text-punk-300">DE ÉLITE</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              El mejor catálogo de tecnología gaming: teclados mecánicos, audífonos, monitores, consolas, laptops y más. Todo con garantía real.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="btn-neon px-8 py-4 text-base flex items-center gap-2">
                Explorar Catálogo <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/catalog?sort=new" className="btn-ghost px-8 py-4 text-base">
                Novedades
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "300+", label: "Productos" },
                { value: "50+", label: "Marcas" },
                { value: "4.8★", label: "Valoración" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-neon-cyan">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[500px]">
              {/* Glowing circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-punk-700/50 rounded-full blur-2xl" />
              <div className="relative w-full h-full">
                <Image
                  src="/image/ConsolaPs5.png"
                  alt="PS5 Gaming Console"
                  fill
                  className="object-contain animate-float drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CATEGORIES ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl text-neon-cyan mb-2">CATEGORÍAS</h2>
          <p className="text-gray-500">Todo lo que necesitas para tu setup definitivo</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className="card-punk p-5 text-center hover:border-neon-cyan/50 group flex flex-col items-center gap-3"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
              <div>
                <p className="font-semibold text-gray-100 group-hover:text-neon-cyan transition-colors text-sm">
                  {cat.label}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">{cat.count} productos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════ FEATURED ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl">
              <span className="text-neon-purple">★</span> PRODUCTOS DESTACADOS
            </h2>
            <p className="text-gray-500 text-sm mt-1">La selección premium de HyperPunk</p>
          </div>
          <Link href="/catalog?sort=featured" className="text-sm text-neon-cyan hover:underline flex items-center gap-1">
            Ver todos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ═══════════════ BANNER PROMO ═══════════════ */}
      <section className="mx-4 sm:mx-8 lg:mx-auto max-w-7xl my-8">
        <div className="relative rounded-2xl overflow-hidden bg-punk-800 border border-white/5 p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-punk-300" />
                <span className="text-sm text-punk-300 font-semibold uppercase tracking-wider">Oferta especial</span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl mb-2 text-punk-100">
                Hasta <span className="text-punk-200">30% OFF</span>
              </h3>
              <p className="text-gray-400 text-sm">En teclados mecánicos, audífonos y monitores seleccionados</p>
            </div>
            <Link href="/catalog" className="btn-cyan whitespace-nowrap px-8 py-4 text-base font-bold">
              Ver ofertas →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ NEW ARRIVALS ═══════════════ */}
      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-8 pb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl">
                <span className="text-neon-green">⚡</span> NUEVOS INGRESOS
              </h2>
              <p className="text-gray-500 text-sm mt-1">Lo último en tecnología gaming</p>
            </div>
            <Link href="/catalog?sort=new" className="text-sm text-neon-cyan hover:underline flex items-center gap-1">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {newProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* ═══════════════ TRUST ═══════════════ */}
      <section className="bg-dark-900/50 border-y border-punk-800/30 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: "100% Originales", desc: "Todos los productos son auténticos con factura oficial y garantía de fabricante.", color: "text-neon-cyan" },
            { icon: Truck, title: "Envío Express", desc: "Despacho en 24h Lima y 48h provincias. Seguimiento en tiempo real.", color: "text-neon-purple" },
            { icon: Award, title: "Mejor Precio", desc: "Si encuentras más barato te hacemos el precio. Garantía de precio mínimo.", color: "text-neon-green" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className={`w-14 h-14 rounded-2xl bg-punk-800/60 flex items-center justify-center ${color}`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-gray-100">{title}</h3>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
