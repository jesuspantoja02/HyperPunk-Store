"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Keyboard, Headphones, Mic, Monitor, Mouse, Gamepad2, Laptop, Cable } from "lucide-react";
import { categories } from "@/data/products";

const ICONS: Record<string, React.ElementType> = {
  teclados: Keyboard,
  audifonos: Headphones,
  microfonos: Mic,
  monitores: Monitor,
  mouse: Mouse,
  consolas: Gamepad2,
  laptops: Laptop,
  accesorios: Cable,
};

export function CategorySlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-2xl text-mm-text">Categorías</h2>
          <p className="text-mm-muted text-sm mt-1">Explora por tipo de producto</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-mm-border flex items-center justify-center hover:border-mm-blue hover:text-mm-blue transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Siguiente"
            className="w-9 h-9 rounded-full border border-mm-border flex items-center justify-center hover:border-mm-blue hover:text-mm-blue transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => {
          const Icon = ICONS[cat.id] || Cable;
          return (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className="snap-start shrink-0 w-[160px] sm:w-[180px] card-punk p-5 hover:border-mm-blue group flex flex-col gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-mm-blue-soft flex items-center justify-center group-hover:bg-mm-blue transition-colors">
                <Icon className="w-5 h-5 text-mm-blue group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-medium text-mm-text text-sm group-hover:text-mm-blue transition-colors">
                  {cat.label}
                </p>
                <p className="text-xs text-mm-muted mt-0.5">{cat.count} productos</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
