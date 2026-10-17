"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    eyebrow: "Setup gaming",
    title: "Periféricos para elevar tu juego",
    subtitle: "Teclados, mouse y audífonos originales con envío rápido a todo el Perú.",
    cta: "Ver catálogo",
    href: "/catalog",
    image: "/image/ConsolaPs5.png",
    bg: "from-[#0d0d0d] via-[#111827] to-[#0d0d0d]",
  },
  {
    id: 2,
    eyebrow: "Ofertas",
    title: "Hasta 30% en teclados mecánicos",
    subtitle: "Redragon, HyperX, Logitech y más. Stock limitado.",
    cta: "Ver teclados",
    href: "/catalog?category=teclados",
    image: "/image/image_keyboard/tecladoLogitech.png",
    bg: "from-[#0a1628] via-[#0d0d0d] to-[#0a1628]",
  },
  {
    id: 3,
    eyebrow: "Nuevo",
    title: "Consolas y accesorios listos",
    subtitle: "PS5, Nintendo y complementos para tu setup.",
    cta: "Ver consolas",
    href: "/catalog?category=consolas",
    image: "/image/ConsolaNintendo.png",
    bg: "from-[#0d0d0d] via-[#1a1020] to-[#0d0d0d]",
  },
  {
    id: 4,
    eyebrow: "Audio",
    title: "Audífonos y micrófonos pro",
    subtitle: "Para gaming, streaming y trabajo remoto.",
    cta: "Ver audio",
    href: "/catalog?category=audifonos",
    image: "/image/image_earphone/audifonosHyperx.png",
    bg: "from-[#0d0d0d] via-[#0f172a] to-[#0d0d0d]",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [paused, go]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative overflow-hidden bg-mm-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`} />
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, #1f85ff 0%, transparent 40%), radial-gradient(circle at 80% 80%, #1f85ff 0%, transparent 35%)",
      }} />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[420px] lg:min-h-[480px] py-12 lg:py-0">
          <div className="space-y-5 z-10 order-2 lg:order-1">
            <p className="inline-flex text-xs sm:text-sm font-semibold text-mm-blue tracking-wider uppercase bg-mm-blue/10 border border-mm-blue/25 rounded-full px-3 py-1">
              {slide.eyebrow}
            </p>
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-xl">
              {slide.title}
            </h1>
            <p className="text-[#b8b8b8] text-sm sm:text-base max-w-md leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={slide.href} className="btn-neon px-7 py-3 text-sm inline-flex items-center gap-2">
                {slide.cta} <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/catalog?sort=new"
                className="px-7 py-3 text-sm rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Novedades
              </Link>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 pt-4">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-mm-blue" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-[240px] sm:h-[300px] lg:h-[420px]">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain p-6 sm:p-10"
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-black/40 border border-white/15 items-center justify-center text-white hover:bg-mm-blue hover:border-mm-blue transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-black/40 border border-white/15 items-center justify-center text-white hover:bg-mm-blue hover:border-mm-blue transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
