"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { ShoppingCart, Search, Menu, X, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { allProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/catalog?category=teclados",   label: "Teclados" },
  { href: "/catalog?category=audifonos",  label: "Audífonos" },
  { href: "/catalog?category=microfonos", label: "Micrófonos" },
  { href: "/catalog?category=monitores",  label: "Monitores" },
  { href: "/catalog?category=mouse",      label: "Mouse" },
  { href: "/catalog?category=consolas",   label: "Consolas" },
  { href: "/catalog?category=laptops",    label: "Laptops" },
  { href: "/catalog?category=accesorios", label: "Accesorios" },
];

export function Navbar() {
  const { itemCount, toggleCart } = useCartStore();
  const count = itemCount();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof allProducts>([]);
  const searchRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50">
      {/* Promo bar — azul MM */}
      <div className="bg-mm-blue text-white text-xs text-center py-2 tracking-wide">
        Envío gratis en compras mayores a S/ 200 · Pago seguro con Stripe · Garantía en todos los productos
      </div>

      {/* Header negro */}
      <div className="bg-mm-black text-white">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-md bg-mm-blue flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block">
              HYPERPUNK
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-4" ref={searchRef}>
            <div className="relative w-full">
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Buscar..."
                className="w-full rounded-lg bg-[#262626] border border-transparent text-sm text-white placeholder:text-gray-500 px-4 py-2.5 pr-10 outline-none focus:border-mm-blue"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

              {searchOpen && results.length > 0 && (
                <ul className="absolute left-0 right-0 top-12 bg-white text-mm-text rounded-lg shadow-lg border border-mm-border overflow-hidden z-50">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={() => { setSearchOpen(false); setQuery(""); }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-mm-surface transition-colors"
                      >
                        <div className="relative w-10 h-10 rounded bg-mm-surface shrink-0 overflow-hidden">
                          <Image src={p.images[0]} alt={p.name} fill className="object-contain p-1" unoptimized />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm truncate">{p.name}</p>
                          <p className="text-xs text-mm-blue font-semibold">{formatPrice(p.price)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 ml-auto">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/auth/login"
              className="hidden sm:block text-sm text-gray-300 hover:text-white px-3 py-2"
            >
              Iniciar sesión
            </Link>

            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-mm-blue text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menú blanco como MM Store */}
      <div className="bg-white border-b border-mm-border hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 h-11">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-mm-text hover:text-mm-blue transition-colors uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-mm-border py-3 px-4">
          <div className="grid grid-cols-2 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-mm-text hover:bg-mm-surface rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-mm-border flex gap-2">
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
