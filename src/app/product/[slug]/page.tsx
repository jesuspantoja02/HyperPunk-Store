"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Shield, Truck, RotateCcw, ChevronRight, Minus, Plus } from "lucide-react";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const { addItem, openCart } = useCartStore();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "reviews" | "shipping">("specs");
  const [imgError, setImgError] = useState(false);

  const related = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, qty);
    openCart();
  };

  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  // Mock reviews
  const mockReviews = [
    { user: "Carlos M.", rating: 5, title: "Excelente producto", body: "Superó todas mis expectativas. Calidad premium, llegó muy bien embalado.", date: "hace 2 días" },
    { user: "María G.", rating: 4, title: "Muy buena compra", body: "Funciona perfecto, la diferencia respecto al anterior es notable. Recomendado.", date: "hace 1 semana" },
    { user: "José R.", rating: 5, title: "¡Top!", body: "Pedido llegó en 24h. El producto es exactamente como lo describe la tienda.", date: "hace 2 semanas" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-mm-muted mb-8">
        <Link href="/" className="hover:text-neon-cyan transition-colors">Inicio</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/catalog" className="hover:text-neon-cyan transition-colors">Catálogo</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/catalog?category=${product.category}`} className="hover:text-neon-cyan transition-colors capitalize">{product.category}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-mm-text truncate max-w-xs">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-mm-surface border border-mm-border">
            <Image
              src={imgError ? "https://placehold.co/600x600/1a0030/bf00ff?text=HyperPunk" : product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-8"
              priority
              unoptimized
              onError={() => setImgError(true)}
            />
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && <span className="badge-new text-sm py-1 px-3">Nuevo</span>}
              {discount > 0 && <span className="badge-sale text-sm py-1 px-3">-{discount}%</span>}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Brand & Name */}
          <div>
            <p className="text-sm text-mm-muted mb-1">{product.brand}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-mm-text leading-tight">{product.name}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? "fill-punk-400 text-punk-400" : "text-gray-700"}`} />
              ))}
            </div>
            <span className="text-sm text-mm-muted">{product.rating} ({product.reviewCount} reseñas)</span>
            {product.stock < 5 && product.stock > 0 && (
              <span className="text-sm text-orange-400">• Solo {product.stock} disponibles</span>
            )}
          </div>

          {/* Price */}
          <div className="card-punk p-5">
            <div className="flex items-end gap-3 mb-2">
              <p className="price-tag text-4xl font-black">{formatPrice(product.price)}</p>
              {product.comparePrice && (
                <p className="text-xl text-mm-muted line-through pb-0.5">{formatPrice(product.comparePrice)}</p>
              )}
            </div>
            {discount > 0 && (
              <p className="text-sm text-punk-400">
                Ahorras {formatPrice(product.comparePrice! - product.price)} ({discount}% OFF)
              </p>
            )}
            <p className="text-xs text-mm-muted mt-2">Precio incluye IGV · Hasta 12 cuotas sin intereses</p>
          </div>

          {/* Description */}
          <p className="text-mm-muted leading-relaxed">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-mm-muted">Cantidad:</span>
            <div className="flex items-center glass rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-mm-muted hover:text-white hover:bg-punk-700 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty(q => Math.min(product.stock, q + 1))}
                disabled={qty >= product.stock}
                className="w-10 h-10 flex items-center justify-center text-mm-muted hover:text-white hover:bg-punk-700 transition-colors disabled:opacity-30"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs text-mm-muted">{product.stock} disponibles</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="btn-neon flex-1 py-4 text-base flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
            </button>
            <button className="btn-ghost w-14 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <Link
            href="/checkout"
            onClick={() => { addItem(product, qty); }}
            className="btn-cyan w-full py-4 text-base text-center font-bold flex items-center justify-center gap-2 block"
          >
            Comprar ahora
          </Link>

          {/* Trust icons */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: Shield, label: "Garantía", sub: product.warranty || "12 meses" },
              { icon: Truck, label: "Envío Rápido", sub: "24-48h Lima" },
              { icon: RotateCcw, label: "Devoluciones", sub: "30 días" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center glass rounded-lg p-3">
                <Icon className="w-5 h-5 mx-auto mb-1 text-neon-cyan" />
                <p className="text-xs font-medium text-mm-text">{label}</p>
                <p className="text-xs text-mm-muted">{sub}</p>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div className="text-xs text-mm-muted space-y-1 pt-2">
            <p>SKU: <span className="text-mm-muted">{product.sku}</span></p>
            <p>Categoría: <Link href={`/catalog?category=${product.category}`} className="text-neon-cyan hover:underline capitalize">{product.category}</Link></p>
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-mm-surface text-mm-muted border border-mm-border text-xs">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-16">
        <div className="flex gap-1 border-b border-mm-border mb-6">
          {(["specs", "reviews", "shipping"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-neon-cyan text-neon-cyan"
                  : "border-transparent text-mm-muted hover:text-mm-text"
              }`}
            >
              {tab === "specs" ? "Especificaciones" : tab === "reviews" ? `Reseñas (${product.reviewCount})` : "Envío"}
            </button>
          ))}
        </div>

        {activeTab === "specs" && (
          <div className="glass rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start gap-4 py-3 border-b border-mm-border last:border-0">
                  <span className="text-sm text-mm-muted font-medium shrink-0">{key}</span>
                  <span className="text-sm text-mm-text text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {/* Rating summary */}
            <div className="glass rounded-xl p-6 flex items-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-5xl font-display font-bold text-neon-cyan">{product.rating}</p>
                <div className="flex justify-center my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-punk-400 text-punk-400" : "text-gray-700"}`} />
                  ))}
                </div>
                <p className="text-xs text-mm-muted">{product.reviewCount} reseñas</p>
              </div>
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map(n => (
                  <div key={n} className="flex items-center gap-2 text-xs mb-1">
                    <span className="text-mm-muted w-4">{n}</span>
                    <Star className="w-3 h-3 fill-punk-400 text-punk-400 shrink-0" />
                    <div className="flex-1 bg-punk-800 rounded-full h-1.5">
                      <div
                        className="bg-punk-400 h-1.5 rounded-full"
                        style={{ width: `${n === 5 ? 65 : n === 4 ? 25 : n === 3 ? 7 : n === 2 ? 2 : 1}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {mockReviews.map((review, i) => (
              <div key={i} className="card-punk p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-mm-text">{review.user}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3 h-3 ${j < review.rating ? "fill-punk-400 text-punk-400" : "text-gray-700"}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-mm-muted">{review.date}</span>
                </div>
                <p className="text-sm font-semibold text-mm-text mb-1">{review.title}</p>
                <p className="text-sm text-mm-muted">{review.body}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-neon-green">✓ Compra verificada</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="glass rounded-xl p-6 space-y-4">
            {[
              { title: "Lima Metropolitana", detail: "1-2 días hábiles", price: product.price >= 200 ? "GRATIS" : "S/ 15", highlight: product.price >= 200 },
              { title: "Lima Provincias", detail: "2-3 días hábiles", price: product.price >= 200 ? "GRATIS" : "S/ 20", highlight: false },
              { title: "Provincias (resto del país)", detail: "3-5 días hábiles", price: "S/ 25-35", highlight: false },
              { title: "Recojo en tienda (Lima)", detail: "Disponible mismo día", price: "GRATIS", highlight: true },
            ].map(({ title, detail, price, highlight }) => (
              <div key={title} className={`flex items-center justify-between p-4 rounded-lg border ${highlight ? "border-neon-green/30 bg-neon-green/5" : "border-mm-border bg-mm-surface/30"}`}>
                <div>
                  <p className="text-sm font-medium text-mm-text">{title}</p>
                  <p className="text-xs text-mm-muted">{detail}</p>
                </div>
                <span className={`text-sm font-bold ${highlight ? "text-neon-green" : "text-mm-text"}`}>{price}</span>
              </div>
            ))}
            <p className="text-xs text-mm-muted mt-4">* Envíos procesados en días hábiles. Tiempos estimados desde confirmación de pago.</p>
          </div>
        )}
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl">PRODUCTOS RELACIONADOS</h2>
            <Link href={`/catalog?category=${product.category}`} className="text-sm text-neon-cyan hover:underline">
              Ver más <ChevronRight className="w-4 h-4 inline" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
