"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { ShoppingCart, Search, Menu, X, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { allProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/catalog?category=teclados",   label: "Teclados",   emoji: "⌨️" },
  { href: "/catalog?category=audifonos",  label: "Audífonos",  emoji: "🎧" },
  { href: "/catalog?category=microfonos", label: "Micrófonos", emoji: "🎤" },
  { href: "/catalog?category=monitores",  label: "Monitores",  emoji: "🖥️" },
  { href: "/catalog?category=mouse",      label: "Mouse",      emoji: "🖱️" },
  { href: "/catalog?category=consolas",   label: "Consolas",   emoji: "🎮" },
  { href: "/catalog?category=laptops",    label: "Laptops",    emoji: "💻" },
  { href: "/catalog?category=accesorios", label: "Accesorios", emoji: "🔌" },
];

export function Navbar() {
  const { itemCount, toggleCart } = useCartStore();
  const count = itemCount();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof allProducts>([]);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      allProducts
        .filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some(t => t.includes(q))
        )
        .slice(0, 6)
    );
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-lg shadow-punk-900/50"
          : "bg-dark-950/90 backdrop-blur-sm"
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-punk-800 border-b border-white/5 text-xs text-center py-1.5 text-punk-200 tracking-wider">
        Envío gratis en compras mayores a S/ 200 · Pago seguro con Stripe · Garantía en todos los productos
      </div>

      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-punk-600 flex items-center justify-center group-hover:bg-punk-500 transition-colors">
            <Zap className="w-5 h-5 text-punk-100" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg hidden sm:block text-punk-100 tracking-wide">
            HYPER<span className="text-punk-300">PUNK</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 mx-4 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-gray-300 hover:text-neon-cyan hover:bg-punk-800/50 rounded-md transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-neon-cyan hover:bg-punk-800/50 transition-all"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-12 w-80 sm:w-96 glass rounded-xl shadow-2xl shadow-black/60 overflow-hidden">
                <div className="p-3">
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar productos, marcas..."
                    className="input-punk w-full text-sm"
                  />
                </div>

                {results.length > 0 && (
                  <ul className="border-t border-punk-700/50 divide-y divide-punk-800/50 max-h-80 overflow-y-auto">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/product/${p.slug}`}
                          onClick={() => { setSearchOpen(false); setQuery(""); }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-punk-800/50 transition-colors"
                        >
                          <div className="relative w-10 h-10 rounded-md overflow-hidden bg-punk-800 shrink-0">
                            <Image src={p.images[0]} alt={p.name} fill className="object-contain p-1" unoptimized />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-gray-200 truncate">{p.name}</p>
                            <p className="text-xs text-neon-cyan font-semibold">{formatPrice(p.price)}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {query.length >= 2 && results.length === 0 && (
                  <p className="text-center text-sm text-gray-500 py-6">No se encontraron productos</p>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-lg text-gray-400 hover:text-neon-cyan hover:bg-punk-800/50 transition-all"
            aria-label="Carrito"
          >
            <ShoppingCart className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-punk-500 text-punk-50 text-xs font-medium rounded-full flex items-center justify-center">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </button>

          {/* Auth */}
          <Link
            href="/auth/login"
            className="hidden sm:block btn-ghost text-sm py-2 px-4"
          >
            Iniciar sesión
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-neon-cyan hover:bg-punk-800/50 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-punk-700/50 py-4 px-4 animate-in">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-neon-cyan hover:bg-punk-800/50 rounded-md transition-all"
              >
                <span>{link.emoji}</span> {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-punk-700/50 flex gap-2">
            <Link href="/auth/login" className="flex-1 btn-ghost text-sm py-2 text-center" onClick={() => setMobileOpen(false)}>
              Iniciar sesión
            </Link>
            <Link href="/auth/register" className="flex-1 btn-neon text-sm py-2 text-center" onClick={() => setMobileOpen(false)}>
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
