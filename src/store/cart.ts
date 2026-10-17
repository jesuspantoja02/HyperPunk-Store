import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/data/products";
import toast from "react-hot-toast";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  total: () => number;
  subtotal: () => number;
  itemCount: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.product.id === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) }
                : i
            ),
          });
        } else {
          set({ items: [...items, { product, quantity }] });
        }
        toast.success(`${product.name.split(" ").slice(0, 3).join(" ")} agregado al carrito`, {
          style: { background: "#0d0d0d", color: "#ffffff", border: "1px solid #333" },
          iconTheme: { primary: "#1f85ff", secondary: "#0d0d0d" },
        });
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.product.id !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      subtotal: () =>
        get().items.reduce((acc, i) => acc + i.product.price * i.quantity, 0),

      total: () => {
        const sub = get().subtotal();
        const shipping = sub >= 200 ? 0 : 15;
        return sub + shipping;
      },

      itemCount: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
    }),
    { name: "hyperpunk-cart" }
  )
);
