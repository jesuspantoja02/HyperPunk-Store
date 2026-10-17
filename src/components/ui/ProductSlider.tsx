"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
};

export function ProductSlider({ products }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 360);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/slider">
      <button
        onClick={() => scroll(-1)}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-mm-border shadow-sm flex items-center justify-center text-mm-text hover:border-mm-blue hover:text-mm-blue transition-colors -translate-x-1/2 opacity-0 group-hover/slider:opacity-100 sm:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-mm-border shadow-sm flex items-center justify-center text-mm-text hover:border-mm-blue hover:text-mm-blue transition-colors translate-x-1/2 opacity-0 group-hover/slider:opacity-100 sm:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[240px] sm:min-w-[260px] max-w-[280px] snap-start shrink-0">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
