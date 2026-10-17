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
      <section className="relative min-h-[78vh] flex items-center border-b border-punk-700">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm text-punk-400 tracking-wide">Colección 2025</p>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-punk-100">
              Tecnología gaming
              <span className="block text-punk-300 font-medium text-3xl sm:text-4xl lg:text-5xl mt-2">
                para tu setup
              </span>
            </h1>

            <p className="text-punk-400 text-base max-w-lg leading-relaxed">
              Catálogo de teclados, audífonos, monitores, consolas, laptops y accesorios.
              Productos originales con garantía.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/catalog" className="btn-cyan px-7 py-3 text-sm flex items-center gap-2">
                Ver catálogo <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/catalog?sort=new" className="btn-ghost px-7 py-3 text-sm">
                Novedades
              </Link>
            </div>

            <div className="flex gap-10 pt-2 border-t border-punk-700 mt-4 pt-6">
              {[
                { value: "170+", label: "Productos" },
                { value: "40+", label: "Marcas" },
                { value: "4.8", label: "Valoración" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-display font-semibold text-punk-100">{stat.value}</p>
                  <p className="text-xs text-punk-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[420px] bg-punk-800 rounded-xl border border-punk-700">
              <Image
                src="/image/ConsolaPs5.png"
                alt="Consola gaming"
                fill
                className="object-contain p-10"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="font-display font-semibold text-2xl text-punk-100">Categorías</h2>
          <p className="text-punk-500 text-sm mt-1">Explora por tipo de producto</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className="card-punk p-5 hover:border-punk-500 group"
            >
              <p className="font-medium text-punk-100 group-hover:text-white text-sm">
                {cat.label}
              </p>
              <p className="text-xs text-punk-500 mt-1">{cat.count} productos</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-semibold text-2xl text-punk-100">Destacados</h2>
            <p className="text-punk-500 text-sm mt-1">Selección del catálogo</p>
          </div>
          <Link href="/catalog?sort=featured" className="text-sm text-punk-400 hover:text-punk-200 flex items-center gap-1">
            Ver todos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-4 sm:mx-8 lg:mx-auto max-w-7xl mb-16">
        <div className="rounded-xl border border-punk-700 bg-punk-800 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs text-punk-500 uppercase tracking-wider mb-2">Promoción</p>
            <h3 className="font-display font-semibold text-2xl text-punk-100 mb-1">
              Hasta 30% de descuento
            </h3>
            <p className="text-punk-400 text-sm">En teclados, audífonos y monitores seleccionados</p>
          </div>
          <Link href="/catalog" className="btn-cyan whitespace-nowrap px-6 py-3 text-sm">
            Ver ofertas
          </Link>
        </div>
      </section>

      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-semibold text-2xl text-punk-100">Nuevos ingresos</h2>
              <p className="text-punk-500 text-sm mt-1">Últimas incorporaciones</p>
            </div>
            <Link href="/catalog?sort=new" className="text-sm text-punk-400 hover:text-punk-200 flex items-center gap-1">
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

      <section className="border-y border-punk-700 py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Originales", desc: "Productos auténticos con factura y garantía de fabricante." },
            { icon: Truck, title: "Envío", desc: "Despacho en 24h Lima y 48h provincias." },
            { icon: Award, title: "Precio", desc: "Si encuentras más barato, igualamos el precio." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-punk-800 border border-punk-700 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-punk-300" />
              </div>
              <div>
                <h3 className="font-medium text-punk-100 text-sm">{title}</h3>
                <p className="text-sm text-punk-500 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
