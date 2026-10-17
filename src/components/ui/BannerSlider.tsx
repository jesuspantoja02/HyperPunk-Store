"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BANNERS = [
  {
    id: "b1",
    title: "Envío gratis desde S/ 200",
    subtitle: "Despacho rápido en Lima y provincias",
    href: "/catalog",
    cta: "Comprar ahora",
    image: "/image/banner.jpg",
    tone: "bg-[#0d0d0d]",
  },
  {
    id: "b2",
    title: "Monitores gaming en oferta",
    subtitle: "144Hz, 165Hz y 4K con garantía oficial",
    href: "/catalog?category=monitores",
    cta: "Ver monitores",
    image: "/image/banner2.png",
    tone: "bg-[#0f172a]",
  },
  {
    id: "b3",
    title: "Arma tu setup completo",
    subtitle: "Teclado + mouse + audífonos con descuento",
    href: "/catalog",
    cta: "Ver combos",
    image: "/image/banner3.jpg",
    tone: "bg-[#111827]",
  },
];

export function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const banner = BANNERS[index];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-mm-border shadow-sm">
      <div className={`relative min-h-[180px] sm:min-h-[220px] ${banner.tone}`}>
        <div className="absolute inset-0 opacity-40">
          <Image src={banner.image} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-12 max-w-xl text-white">
          <h3 className="font-semibold text-2xl sm:text-3xl mb-2">{banner.title}</h3>
          <p className="text-sm text-white/75 mb-5">{banner.subtitle}</p>
          <Link href={banner.href} className="btn-neon inline-flex text-sm py-2.5 px-5">
            {banner.cta}
          </Link>
        </div>
      </div>

      <button
        onClick={() => setIndex((i) => (i - 1 + BANNERS.length) % BANNERS.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-mm-text flex items-center justify-center hover:bg-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % BANNERS.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-mm-text flex items-center justify-center hover:bg-white"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-mm-blue" : "w-1.5 bg-white/50"}`}
            aria-label={`Banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
