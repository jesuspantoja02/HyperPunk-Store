import Link from "next/link";
import { ChevronRight, Shield, Truck, Award, Headphones, RotateCcw } from "lucide-react";
import { HeroSlider } from "@/components/ui/HeroSlider";
import { ProductSlider } from "@/components/ui/ProductSlider";
import { CategorySlider } from "@/components/ui/CategorySlider";
import { BannerSlider } from "@/components/ui/BannerSlider";
import { getFeaturedProducts, getNewProducts } from "@/data/products";


export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 12);
  const newProducts = getNewProducts().slice(0, 10);

  return (
    <div>
      <HeroSlider />

      {/* Trust strip */}
      <section className="border-b border-mm-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Truck, title: "Envío rápido", desc: "24-48h Lima" },
            { icon: Shield, title: "Pago seguro", desc: "Stripe SSL" },
            { icon: RotateCcw, title: "Devoluciones", desc: "30 días" },
            { icon: Headphones, title: "Soporte", desc: "Te ayudamos" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-mm-blue-soft flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-mm-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-mm-text">{title}</p>
                <p className="text-xs text-mm-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías slider */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <CategorySlider />
      </section>

      {/* Destacados slider */}
      <section className="bg-mm-surface border-y border-mm-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-2xl text-mm-text">Destacados</h2>
              <p className="text-mm-muted text-sm mt-1">Lo más pedido de la tienda</p>
            </div>
            <Link href="/catalog?sort=featured" className="text-sm text-mm-blue hover:underline flex items-center gap-1 font-medium">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={featured} />
        </div>
      </section>

      {/* Banner slider */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <BannerSlider />
      </section>

      {/* Nuevos slider */}
      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-2xl text-mm-text">Nuevos ingresos</h2>
              <p className="text-mm-muted text-sm mt-1">Últimas incorporaciones al catálogo</p>
            </div>
            <Link href="/catalog?sort=new" className="text-sm text-mm-blue hover:underline flex items-center gap-1 font-medium">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={newProducts} />
        </section>
      )}

      {/* Promo dual */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/catalog?category=teclados"
            className="rounded-2xl bg-mm-black text-white p-8 hover:opacity-95 transition-opacity min-h-[160px] flex flex-col justify-end"
          >
            <p className="text-mm-blue text-xs font-semibold uppercase tracking-wider mb-2">Categoría</p>
            <h3 className="font-semibold text-xl mb-1">Teclados mecánicos</h3>
            <p className="text-sm text-white/60">Desde TKL hasta 60% wireless</p>
          </Link>
          <Link
            href="/catalog?category=audifonos"
            className="rounded-2xl bg-mm-blue text-white p-8 hover:bg-mm-blue-hover transition-colors min-h-[160px] flex flex-col justify-end"
          >
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Audio</p>
            <h3 className="font-semibold text-xl mb-1">Audífonos gaming</h3>
            <p className="text-sm text-white/80">Wireless, ANC y surround 7.1</p>
          </Link>
        </div>
      </section>

      <section className="border-t border-mm-border py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "100% originales", desc: "Factura y garantía de fabricante en cada pedido." },
            { icon: Truck, title: "Envío a todo el Perú", desc: "Despacho en 24h Lima y 48h provincias." },
            { icon: Award, title: "Mejor precio", desc: "Si encuentras más barato, igualamos." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-mm-blue-soft flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-mm-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-mm-text text-sm">{title}</h3>
                <p className="text-sm text-mm-muted mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
