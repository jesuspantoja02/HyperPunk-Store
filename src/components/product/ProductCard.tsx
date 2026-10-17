"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import { type Product } from "@/data/products";
import { useCartStore } from "@/store/cart";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { useState } from "react";

type Props = {
  product: Product;
  view?: "grid" | "list";
};

export function ProductCard({ product, view = "grid" }: Props) {
  const { addItem, openCart } = useCartStore();
  const [imgError, setImgError] = useState(false);
  const discount = product.comparePrice ? formatDiscount(product.price, product.comparePrice) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    openCart();
  };

  if (view === "list") {
    return (
      <div className="card-punk flex gap-4 p-4 group">
        <div className="relative w-28 h-28 rounded-lg overflow-hidden bg-mm-surface shrink-0">
          <Image
            src={imgError ? "https://placehold.co/200x200/f7f8fa/1f85ff?text=HP" : product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-2"
            unoptimized
            onError={() => setImgError(true)}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-mm-muted mb-1">{product.brand}</p>
              <Link href={`/product/${product.slug}`} className="font-medium text-mm-text hover:text-mm-blue transition-colors line-clamp-2 leading-snug">
                {product.name}
              </Link>
            </div>
            <div className="text-right shrink-0">
              {product.comparePrice && (
                <p className="text-xs text-mm-muted line-through">{formatPrice(product.comparePrice)}</p>
              )}
              <p className="price-tag text-lg font-bold">{formatPrice(product.price)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-mm-star text-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? "fill-current" : "fill-none text-mm-border"}`} />
              ))}
            </div>
            <span className="text-xs text-mm-muted">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button onClick={handleAddToCart} className="btn-neon text-sm py-1.5 px-4 flex items-center gap-1.5">
              <ShoppingCart className="w-4 h-4" /> Agregar
            </button>
            <Link href={`/product/${product.slug}`} className="btn-ghost text-sm py-1.5 px-4">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-punk flex flex-col group overflow-hidden relative">
      <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
        {product.isNew && <span className="badge-new">Nuevo</span>}
        {discount > 0 && <span className="badge-sale">-{discount}%</span>}
        {product.featured && !product.isNew && !discount && <span className="badge-featured">Destacado</span>}
      </div>

      <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white border border-mm-border flex items-center justify-center text-mm-muted hover:text-mm-sale transition-all opacity-0 group-hover:opacity-100">
        <Heart className="w-4 h-4" />
      </button>

      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative h-48 bg-mm-surface overflow-hidden">
          <Image
            src={imgError ? "https://placehold.co/400x400/f7f8fa/1f85ff?text=HyperPunk" : product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-300"
            unoptimized
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-xs text-mm-text bg-white/95 px-3 py-1.5 rounded-full border border-mm-border flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> Ver
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-mm-muted mb-1">{product.brand}</p>
        <Link href={`/product/${product.slug}`} className="text-sm font-medium text-mm-text hover:text-mm-blue transition-colors line-clamp-2 leading-snug mb-2 flex-1">
          {product.name}
        </Link>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex text-mm-star text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? "fill-current" : "fill-none text-mm-border"}`} />
            ))}
          </div>
          <span className="text-xs text-mm-muted">({product.reviewCount})</span>
        </div>

        <div className="flex items-end justify-between mb-3">
          <div>
            {product.comparePrice && (
              <p className="text-xs text-mm-muted line-through">{formatPrice(product.comparePrice)}</p>
            )}
            <p className="price-tag text-xl font-bold">{formatPrice(product.price)}</p>
          </div>
          {product.stock === 0 && <p className="text-xs text-mm-sale">Agotado</p>}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="btn-neon w-full text-sm py-2.5 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-4 h-4" />
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
