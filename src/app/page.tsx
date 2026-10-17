import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Shield, Truck, Award } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts, getNewProducts, categories } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-mm-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm text-mm-blue font-medium tracking-wide uppercase">
              Arma tu setup
            </p>
            <h1 className="font-semibold text-4xl sm:text-5xl leading-tight">
              Los mejores periféricos y accesorios gaming
            </h1>
            <p className="text-[#c4c4c4] text-base max-w-lg leading-relaxed">
              Teclados, mouse, audífonos, monitores, consolas y más. Productos originales con garantía y envío rápido.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/catalog" className="btn-neon px-7 py-3 text-sm flex items-center gap-2">
                Ver catálogo <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/catalog?sort=new" className="px-7 py-3 text-sm rounded-lg border border-white/25 text-white hover:bg-white/5 transition-colors">
                Novedades
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/10">
              <Image
                src="/image/ConsolaPs5.png"
                alt="Setup gaming"
                fill
                className="object-contain p-8"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="mb-8">
          <h2 className="font-semibold text-2xl text-mm-text">Categorías</h2>
          <p className="text-mm-muted text-sm mt-1">Explora por tipo de producto</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className="card-punk p-5 hover:border-mm-blue group"
            >
              <p className="font-medium text-mm-text group-hover:text-mm-blue text-sm transition-colors">
                {cat.label}
              </p>
              <p className="text-xs text-mm-muted mt-1">{cat.count} productos</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="bg-mm-surface border-y border-mm-border py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-semibold text-2xl text-mm-text">Destacados</h2>
              <p className="text-mm-muted text-sm mt-1">Selección del catálogo</p>
            </div>
            <Link href="/catalog?sort=featured" className="text-sm text-mm-blue hover:underline flex items-center gap-1 font-medium">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="rounded-xl bg-mm-black text-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-mm-blue font-medium mb-2 uppercase tracking-wide">Promoción</p>
            <h3 className="font-semibold text-2xl mb-1">Hasta 30% de descuento</h3>
            <p className="text-[#c4c4c4] text-sm">En teclados, audífonos y monitores seleccionados</p>
          </div>
          <Link href="/catalog" className="btn-neon whitespace-nowrap px-6 py-3 text-sm">
            Ver ofertas
          </Link>
        </div>
      </section>

      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-semibold text-2xl text-mm-text">Nuevos ingresos</h2>
              <p className="text-mm-muted text-sm mt-1">Últimas incorporaciones</p>
            </div>
            <Link href="/catalog?sort=new" className="text-sm text-mm-blue hover:underline flex items-center gap-1 font-medium">
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

      <section className="border-t border-mm-border py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Originales", desc: "Productos auténticos con factura y garantía." },
            { icon: Truck, title: "Envío", desc: "Despacho en 24h Lima y 48h provincias." },
            { icon: Award, title: "Precio", desc: "Si encuentras más barato, igualamos." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-mm-blue-soft flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-mm-blue" />
              </div>
              <div>
                <h3 className="font-medium text-mm-text text-sm">{title}</h3>
                <p className="text-sm text-mm-muted mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
