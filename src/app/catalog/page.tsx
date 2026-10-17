"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { allProducts, categories, getProductsByCategory, type Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SlidersHorizontal, Grid3X3, List, X, ChevronDown } from "lucide-react";
import { Suspense } from "react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category") ?? "all";
  const sortParam = searchParams?.get("sort") ?? "default";

  const [view, setView] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState(sortParam);

  // Get base products
  const baseProducts: Product[] = selectedCategory === "all"
    ? allProducts
    : getProductsByCategory(selectedCategory);

  // Available brands for current category
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(baseProducts.map(p => p.brand))).sort();
    return brands;
  }, [baseProducts]);

  // Price bounds
  const maxPrice = useMemo(() => Math.max(...baseProducts.map(p => p.price)), [baseProducts]);

  // Filter & sort
  const filtered = useMemo(() => {
    let result = baseProducts.filter(p => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (p.rating < minRating) return false;
      if (inStockOnly && p.stock === 0) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":  result = [...result].sort((a, b) => a.price - b.price); break;
      case "price-desc": result = [...result].sort((a, b) => b.price - a.price); break;
      case "rating":     result = [...result].sort((a, b) => b.rating - a.rating); break;
      case "new":        result = [...result].filter(p => p.isNew).concat(result.filter(p => !p.isNew)); break;
      case "featured":   result = [...result].filter(p => p.featured).concat(result.filter(p => !p.featured)); break;
      default: break;
    }

    return result;
  }, [baseProducts, selectedBrands, priceRange, minRating, inStockOnly, sort]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
    setMinRating(0);
    setInStockOnly(false);
  };

  const activeFiltersCount = selectedBrands.length + (minRating > 0 ? 1 : 0) + (inStockOnly ? 1 : 0);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Inicio</span> <span>/</span>
          <span className="text-neon-cyan">{currentCategory?.label || "Todo el catálogo"}</span>
        </div>
        <h1 className="font-display font-bold text-3xl">
          {currentCategory ? (
            <><span className="mr-2">{currentCategory.icon}</span>{currentCategory.label.toUpperCase()}</>
          ) : "CATÁLOGO COMPLETO"}
        </h1>
        <p className="text-gray-500 text-sm mt-1">{filtered.length} productos encontrados</p>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm border transition-all ${
            selectedCategory === "all"
              ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10"
              : "border-punk-700/50 text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan"
          }`}
        >
          Todo ({allProducts.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setSelectedCategory(cat.id); setSelectedBrands([]); }}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm border transition-all flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? "border-neon-purple text-neon-purple bg-neon-purple/10"
                : "border-punk-700/50 text-gray-400 hover:border-neon-purple/50 hover:text-neon-purple"
            }`}
          >
            <span>{cat.icon}</span> {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <aside className={`w-64 shrink-0 space-y-6 ${filtersOpen ? "block" : "hidden lg:block"}`}>
          <div className="glass rounded-xl p-5 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-100 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-neon-purple" />
                Filtros
                {activeFiltersCount > 0 && (
                  <span className="text-xs bg-neon-purple text-white px-1.5 py-0.5 rounded-full">{activeFiltersCount}</span>
                )}
              </h2>
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-gray-500 hover:text-neon-pink transition-colors flex items-center gap-1">
                  <X className="w-3 h-3" /> Limpiar
                </button>
              )}
            </div>

            {/* Price range */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">Precio</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="input-punk w-24 text-xs py-1 px-2"
                    placeholder="Mín"
                  />
                  <span>—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="input-punk w-24 text-xs py-1 px-2"
                    placeholder="Máx"
                  />
                </div>
              </div>
            </div>

            {/* Brands */}
            {availableBrands.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-3">Marcas</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {availableBrands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-punk-600 bg-punk-800 text-neon-purple focus:ring-neon-purple"
                      />
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Rating */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">Calificación mínima</h3>
              <div className="space-y-1.5">
                {[4.5, 4, 3.5, 0].map(r => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r === minRating ? 0 : r)}
                    className={`w-full flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg transition-all ${
                      minRating === r && r > 0
                        ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/40"
                        : "text-gray-400 hover:bg-punk-800/50"
                    }`}
                  >
                    <span className="text-yellow-400">{"★".repeat(Math.floor(r))}{"☆".repeat(5 - Math.floor(r))}</span>
                    <span>{r === 0 ? "Todas" : `${r}+`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={e => setInStockOnly(e.target.checked)}
                className="rounded border-punk-600 bg-punk-800 text-neon-purple"
              />
              <span className="text-sm text-gray-400">Solo disponibles</span>
            </label>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-5 gap-4 flex-wrap">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden btn-ghost text-sm py-2 px-4 flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {activeFiltersCount > 0 && <span className="text-xs bg-neon-purple text-white px-1.5 py-0.5 rounded-full">{activeFiltersCount}</span>}
            </button>

            <div className="flex items-center gap-3 ml-auto">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="input-punk text-sm py-2 px-3 pr-8 appearance-none cursor-pointer"
                >
                  <option value="default">Relevancia</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="rating">Mejor valorados</option>
                  <option value="new">Nuevos primero</option>
                  <option value="featured">Destacados</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 glass rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-1.5 rounded transition-all ${view === "grid" ? "bg-neon-purple text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-1.5 rounded transition-all ${view === "list" ? "bg-neon-purple text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active filter chips */}
          {(selectedBrands.length > 0 || minRating > 0 || inStockOnly) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedBrands.map(b => (
                <button
                  key={b}
                  onClick={() => toggleBrand(b)}
                  className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/40 hover:bg-neon-purple/30 transition-colors"
                >
                  {b} <X className="w-3 h-3" />
                </button>
              ))}
              {minRating > 0 && (
                <button
                  onClick={() => setMinRating(0)}
                  className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                >
                  ★ {minRating}+ <X className="w-3 h-3" />
                </button>
              )}
              {inStockOnly && (
                <button
                  onClick={() => setInStockOnly(false)}
                  className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/40"
                >
                  En stock <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}

          {/* Products grid/list */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-gray-400 font-medium">No se encontraron productos</p>
              <p className="text-sm text-gray-600 mt-1">Prueba con otros filtros</p>
              <button onClick={clearFilters} className="btn-ghost mt-4 text-sm py-2 px-6">
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            }>
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} view={view} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="skeleton rounded-xl h-72" />
        ))}
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
