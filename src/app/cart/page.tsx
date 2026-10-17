"use client";

import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, total, clearCart } = useCartStore();
  const sub = subtotal();
  const tot = total();
  const shipping = sub >= 200 ? 0 : 15;

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 rounded-full bg-punk-800/60 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-punk-500" />
        </div>
        <h2 className="font-display font-bold text-2xl mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-8">Explora nuestro catálogo y agrega productos</p>
        <Link href="/catalog" className="btn-neon px-8 py-3.5">Ver Catálogo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display font-bold text-2xl">
          <ShoppingBag className="w-6 h-6 inline mr-2 text-neon-purple" />
          MI CARRITO
          <span className="text-base font-normal text-gray-500 ml-2">({items.length} productos)</span>
        </h1>
        <button onClick={clearCart} className="text-sm text-gray-600 hover:text-neon-pink transition-colors flex items-center gap-1">
          <Trash2 className="w-4 h-4" /> Vaciar carrito
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="card-punk p-5 flex gap-4">
              <Link href={`/product/${product.slug}`}>
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-punk-900 shrink-0 hover:opacity-80 transition-opacity">
                  <Image src={product.images[0]} alt={product.name} fill className="object-contain p-2" unoptimized />
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <Link href={`/product/${product.slug}`} className="font-medium text-gray-100 hover:text-neon-cyan transition-colors line-clamp-2 leading-snug text-sm">
                      {product.name}
                    </Link>
                    {product.warranty && (
                      <p className="text-xs text-gray-600 mt-1">Garantía: {product.warranty}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="shrink-0 p-1.5 rounded-lg text-gray-600 hover:text-neon-pink hover:bg-punk-800 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center glass rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-punk-700 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      disabled={quantity >= product.stock}
                      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-punk-700 transition-colors disabled:opacity-30"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="price-tag text-xl font-bold">{formatPrice(product.price * quantity)}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Coupon */}
          <div className="glass rounded-xl p-4 flex gap-3">
            <Tag className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
            <div className="flex-1 flex gap-2">
              <input className="input-punk flex-1 text-sm py-2" placeholder="Código de descuento" />
              <button className="btn-ghost py-2 px-4 text-sm">Aplicar</button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="glass rounded-2xl p-6 sticky top-24">
            <h3 className="font-semibold text-gray-100 mb-5">Resumen</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} items)</span>
                <span>{formatPrice(sub)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Envío</span>
                <span className={shipping === 0 ? "text-neon-green font-semibold" : ""}>{shipping === 0 ? "¡GRATIS!" : formatPrice(shipping)}</span>
              </div>
              {sub < 200 && (
                <div className="bg-punk-800/50 rounded-lg p-3 text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-500">Falta para envío gratis</span>
                    <span className="text-neon-cyan">{formatPrice(200 - sub)}</span>
                  </div>
                  <div className="w-full bg-punk-700 rounded-full h-1.5">
                    <div className="bg-neon-cyan h-1.5 rounded-full transition-all" style={{ width: `${Math.min(100, (sub / 200) * 100)}%` }} />
                  </div>
                </div>
              )}
              <div className="border-t border-punk-800/50 pt-3 flex justify-between font-bold text-base">
                <span className="text-gray-100">Total</span>
                <span className="text-neon-cyan font-display text-xl">{formatPrice(tot)}</span>
              </div>
            </div>

            <Link href="/checkout" className="btn-neon w-full py-4 flex items-center justify-center gap-2 mt-5 text-base font-bold">
              Ir al Checkout <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/catalog" className="btn-ghost w-full text-center text-sm py-2.5 mt-3">
              Seguir comprando
            </Link>

            <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-punk-800/30">
              {["Visa", "MC", "Amex", "Stripe"].map(m => (
                <span key={m} className="text-xs text-gray-600 px-2 py-1 rounded bg-punk-900">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
