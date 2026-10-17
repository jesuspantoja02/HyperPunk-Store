"use client";

import { useCartStore } from "@/store/cart";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, total } = useCartStore();
  const sub = subtotal();
  const tot = total();
  const shipping = sub >= 200 ? 0 : 15;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={closeCart} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 flex flex-col transition-transform duration-300 ease-out bg-white border-l border-mm-border ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-mm-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-mm-blue" />
            <h2 className="font-semibold text-mm-text">
              Carrito
              {items.length > 0 && (
                <span className="ml-2 text-xs text-mm-muted">({items.length})</span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-lg text-mm-muted hover:text-mm-text hover:bg-mm-surface transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 pb-16">
              <div className="w-16 h-16 rounded-full bg-mm-surface flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-mm-muted" />
              </div>
              <div>
                <p className="text-mm-text font-medium">Tu carrito está vacío</p>
                <p className="text-sm text-mm-muted mt-1">Agrega productos para comenzar</p>
              </div>
              <Link href="/catalog" onClick={closeCart} className="btn-neon text-sm py-2.5 px-6">
                Ver catálogo
              </Link>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="border border-mm-border rounded-lg p-3 flex gap-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-mm-surface shrink-0">
                  <Image src={product.images[0]} alt={product.name} fill className="object-contain p-1" unoptimized />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-mm-text leading-tight line-clamp-2">{product.name}</p>
                  <p className="text-xs text-mm-muted mt-0.5">{product.brand}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-semibold text-mm-text">{formatPrice(product.price * quantity)}</p>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 rounded flex items-center justify-center bg-mm-surface text-mm-muted hover:text-mm-text"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-sm">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        disabled={quantity >= product.stock}
                        className="w-6 h-6 rounded flex items-center justify-center bg-mm-surface text-mm-muted hover:text-mm-text disabled:opacity-30"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="w-6 h-6 rounded flex items-center justify-center ml-1 text-mm-muted hover:text-mm-sale"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-mm-border px-6 py-5 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-mm-muted">
                <span>Subtotal</span>
                <span className="text-mm-text">{formatPrice(sub)}</span>
              </div>
              <div className="flex justify-between text-mm-muted">
                <span>Envío</span>
                <span className={shipping === 0 ? "text-mm-success font-medium" : "text-mm-text"}>
                  {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                </span>
              </div>
              {sub < 200 && (
                <p className="text-xs text-mm-muted">Faltan {formatPrice(200 - sub)} para envío gratis</p>
              )}
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-mm-border">
                <span className="text-mm-text">Total</span>
                <span className="text-mm-text">{formatPrice(tot)}</span>
              </div>
            </div>

            <Link href="/checkout" onClick={closeCart} className="btn-neon w-full flex items-center justify-center gap-2 py-3">
              Ir al checkout <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/cart" onClick={closeCart} className="btn-ghost w-full text-center text-sm py-2 block">
              Ver carrito completo
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
