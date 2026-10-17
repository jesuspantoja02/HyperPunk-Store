export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  stock: number;
  sku: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  isNew?: boolean;
  specs: Record<string, string>;
  tags: string[];
  warranty?: string;
};

// ─────────────── TECLADOS ────────────────
export const teclados: Product[] = [
  {
    id: "tec-001", name: "Teclado Mecánico Redragon K552 Kumara RGB", slug: "redragon-k552-kumara-rgb",
    description: "Teclado mecánico TKL con switches Red, retroiluminación RGB, estructura compacta ideal para gaming competitivo.",
    price: 179.90, comparePrice: 220.00, brand: "Redragon", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80"],
    stock: 25, sku: "RED-K552-RGB", rating: 4.6, reviewCount: 312, featured: true,
    specs: { "Switches": "Red (lineal)", "Layout": "TKL (87 teclas)", "Retroiluminación": "RGB", "Conexión": "USB-A", "N-Key Rollover": "Sí" },
    tags: ["gaming", "mecanico", "rgb", "tkl"], warranty: "12 meses"
  },
  {
    id: "tec-002", name: "Teclado Mecánico HyperX Alloy Origins RGB", slug: "hyperx-alloy-origins-rgb",
    description: "Teclado mecánico con switches HyperX Red propios, marco de aluminio, software iCUE para personalización total.",
    price: 389.90, comparePrice: 450.00, brand: "HyperX", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80"],
    stock: 18, sku: "HX-ORIGINS-RGB", rating: 4.8, reviewCount: 527, featured: true, isNew: false,
    specs: { "Switches": "HyperX Red", "Layout": "Full (104 teclas)", "Retroiluminación": "RGB Per-Key", "Conexión": "USB-C detachable", "Marco": "Aluminio" },
    tags: ["gaming", "mecanico", "rgb", "premium"], warranty: "24 meses"
  },
  {
    id: "tec-003", name: "Teclado Logitech G Pro X Mechanical", slug: "logitech-gpro-x-mechanical",
    description: "Teclado mecánico pro con switches intercambiables GX, diseño compacto TKL para torneos, cable detachable.",
    price: 559.90, brand: "Logitech", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80"],
    stock: 12, sku: "LG-GPRO-X", rating: 4.9, reviewCount: 892, featured: true,
    specs: { "Switches": "GX Blue/Red/Brown (intercambiables)", "Layout": "TKL", "Retroiluminación": "RGB", "Conexión": "USB-A detachable", "Certificación": "Pro Gaming" },
    tags: ["pro", "gaming", "mecanico", "tkl"], warranty: "24 meses"
  },
  {
    id: "tec-004", name: "Teclado Mecánico Razer BlackWidow V4 Pro", slug: "razer-blackwidow-v4-pro",
    description: "El teclado flagship de Razer con switches Yellow Optical, rueda de medios multi-función y Chroma RGB.",
    price: 899.90, brand: "Razer", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 8, sku: "RZR-BWV4P", rating: 4.7, reviewCount: 643,
    specs: { "Switches": "Razer Yellow Optical", "Layout": "Full (110 teclas)", "Retroiluminación": "Chroma RGB", "Conexión": "USB-A + Bluetooth + 2.4GHz", "Extras": "Rueda multimedia, passthrough USB" },
    tags: ["premium", "wireless", "gaming", "razer"], warranty: "24 meses"
  },
  {
    id: "tec-005", name: "Teclado Mecánico Corsair K70 RGB MK.2", slug: "corsair-k70-rgb-mk2",
    description: "Teclado mecánico cherry MX con marco de aluminio anodizado, retroiluminación RGB dinámica y reposamuñecas.",
    price: 499.90, brand: "Corsair", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=600&q=80"],
    stock: 20, sku: "CRS-K70-MK2", rating: 4.7, reviewCount: 1240,
    specs: { "Switches": "Cherry MX Red/Blue/Brown", "Layout": "Full (104 teclas)", "Retroiluminación": "RGB", "Marco": "Aluminio anodizado", "Reposamuñecas": "Incluido" },
    tags: ["gaming", "mecanico", "premium", "cherry"], warranty: "24 meses"
  },
  {
    id: "tec-006", name: "Teclado Mecánico ASUS ROG Strix Scope II", slug: "asus-rog-strix-scope-ii",
    description: "Diseñado para FPS con tecla Ctrl de doble ancho para Shift más rápido, switches ROG NX Red, Aura Sync.",
    price: 429.90, brand: "ASUS", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80"],
    stock: 15, sku: "ASUS-ROG-SCOPE2", rating: 4.6, reviewCount: 380,
    specs: { "Switches": "ROG NX Red", "Layout": "Full", "Retroiluminación": "Aura Sync RGB", "Conexión": "USB-C detachable", "Feature": "Ctrl 2x para FPS" },
    tags: ["gaming", "fps", "asus", "rgb"], warranty: "24 meses"
  },
  {
    id: "tec-007", name: "Teclado Mecánico SteelSeries Apex 7 TKL", slug: "steelseries-apex-7-tkl",
    description: "TKL con pantalla OLED Smart Display, switches QX2 Red, rueda de medios, retroiluminación RGB per-key.",
    price: 479.90, brand: "SteelSeries", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1608156639585-b3a776ef0290?w=600&q=80"],
    stock: 10, sku: "SS-APEX7-TKL", rating: 4.5, reviewCount: 415,
    specs: { "Switches": "QX2 Red", "Display": "OLED Smart Display", "Layout": "TKL", "Retroiluminación": "RGB Per-Key", "Rueda medios": "Sí" },
    tags: ["gaming", "oled", "tkl", "steelseries"], warranty: "12 meses"
  },
  {
    id: "tec-008", name: "Teclado Mecánico Antryx GC-K900", slug: "antryx-gc-k900",
    description: "Teclado mecánico gaming con switches Blue, retroiluminación LED azul, diseño ergonómico y compacto.",
    price: 129.90, brand: "Antryx", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoAntryx.png"],
    stock: 30, sku: "ANT-GCK900", rating: 4.2, reviewCount: 89,
    specs: { "Switches": "Blue (táctil/clicky)", "Layout": "Full", "Retroiluminación": "LED Azul", "Conexión": "USB-A", "Anti-ghosting": "Sí" },
    tags: ["gaming", "economico", "mecanico"], warranty: "6 meses"
  },
  {
    id: "tec-009", name: "Teclado Mecánico Logitech G413 SE", slug: "logitech-g413-se",
    description: "Teclado mecánico con switches táctiles propios, marco de aluminio, retroiluminación blanca, anti-ghosting.",
    price: 269.90, brand: "Logitech", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=600&q=80"],
    stock: 22, sku: "LG-G413-SE", rating: 4.4, reviewCount: 276,
    specs: { "Switches": "Logitech GX Blue Clicky", "Marco": "Aluminio", "Retroiluminación": "Blanca", "Layout": "Full", "Cable": "USB-A braided" },
    tags: ["gaming", "aluminio", "logitech"], warranty: "24 meses"
  },
  {
    id: "tec-010", name: "Teclado Mecánico T-Dagger Bermuda RGB", slug: "tdagger-bermuda-rgb",
    description: "Teclado mecánico TKL con retroiluminación RGB, switches Blue, resistente al derrame de líquidos.",
    price: 149.90, brand: "T-Dagger", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoTdagger.jpg"],
    stock: 40, sku: "TDG-BERMUDA", rating: 4.1, reviewCount: 167,
    specs: { "Switches": "Blue", "Layout": "TKL", "Retroiluminación": "RGB", "Resistencia": "IP54 splash-proof", "Anti-ghosting": "26 teclas" },
    tags: ["gaming", "tkl", "economico"], warranty: "6 meses"
  },
  {
    id: "tec-011", name: "Teclado Mecánico Havit KB882L RGB", slug: "havit-kb882l-rgb",
    description: "Teclado mecánico low profile con switches red ultra delgados, retroiluminación RGB y diseño flotante.",
    price: 199.90, brand: "Havit", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoHavit.png"],
    stock: 18, sku: "HAV-KB882L", rating: 4.3, reviewCount: 210,
    specs: { "Switches": "Red Low Profile", "Altura": "Low Profile", "Retroiluminación": "RGB", "Layout": "Full", "Peso": "680g" },
    tags: ["low-profile", "rgb", "mecanico"], warranty: "12 meses"
  },
  {
    id: "tec-012", name: "Teclado Mecánico Aula F87 Pro QMK", slug: "aula-f87-pro-qmk",
    description: "Teclado 75% hot-swap con soporte QMK/VIA, gasket mount, knob encoder y switches intercambiables.",
    price: 349.90, brand: "Aula", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoAula.png"],
    stock: 14, sku: "AULA-F87-QMK", rating: 4.7, reviewCount: 192, isNew: true,
    specs: { "Layout": "75% (87 teclas)", "Mount": "Gasket", "Hot-swap": "Sí", "Firmware": "QMK/VIA", "Knob": "Encoder rotativo" },
    tags: ["qmk", "hot-swap", "75percent", "custom"], warranty: "12 meses"
  },
  {
    id: "tec-013", name: "Teclado Mecánico Halion HA-K71 RGB", slug: "halion-ha-k71-rgb",
    description: "Teclado mecánico gaming con switches Blue, retroiluminación multicolor y anti-ghosting completo.",
    price: 109.90, brand: "Halion", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoHalion.png"],
    stock: 45, sku: "HAL-K71", rating: 4.0, reviewCount: 145,
    specs: { "Switches": "Blue Clicky", "Layout": "Full 104", "Retroiluminación": "RGB 7 colores", "Anti-ghosting": "Completo", "Cable": "1.5m USB" },
    tags: ["economico", "gaming", "rgb"], warranty: "6 meses"
  },
  {
    id: "tec-014", name: "Teclado Mecánico Teros TE-4140B RGB", slug: "teros-te4140b-rgb",
    description: "Teclado mecánico con switches Brown táctiles, retroiluminación RGB, diseño ergonómico para oficina y gaming.",
    price: 159.90, brand: "Teros", category: "teclados", subcategory: "mecanico",
    images: ["/image/image_keyboard/tecladoTeros.png"],
    stock: 28, sku: "TER-4140B", rating: 4.2, reviewCount: 98,
    specs: { "Switches": "Brown táctil", "Layout": "Full", "Retroiluminación": "RGB", "Conexión": "USB-A", "Reposamuñecas": "Magnético" },
    tags: ["oficina", "gaming", "brown"], warranty: "6 meses"
  },
  {
    id: "tec-015", name: "Teclado Logitech MX Keys S Plus", slug: "logitech-mx-keys-s-plus",
    description: "Teclado inalámbrico premium para productividad con retroiluminación adaptativa, multi-dispositivo Bluetooth.",
    price: 459.90, brand: "Logitech", category: "teclados", subcategory: "membrana",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80"],
    stock: 20, sku: "LG-MXKEYS-S", rating: 4.8, reviewCount: 763,
    specs: { "Tipo": "Membrana perfeccionada", "Conexión": "Bluetooth + USB receiver", "Dispositivos": "Hasta 3 simultáneos", "Batería": "10 días con retroiluminación", "OS": "Windows/Mac/iPadOS" },
    tags: ["productividad", "wireless", "premium", "bluetooth"], warranty: "24 meses"
  },
  {
    id: "tec-016", name: "Teclado Mecánico Razer Huntsman Mini", slug: "razer-huntsman-mini-60",
    description: "Teclado 60% con switches ópticos Razer Red, ultra compacto para setup minimalista y gaming competitivo.",
    price: 479.90, brand: "Razer", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"],
    stock: 9, sku: "RZR-HUNTMIN", rating: 4.6, reviewCount: 534, isNew: false,
    specs: { "Layout": "60%", "Switches": "Razer Red Optical", "Retroiluminación": "Chroma RGB", "Peso": "498g", "Cable": "USB-C braided" },
    tags: ["60percent", "compact", "optical", "razer"], warranty: "24 meses"
  },
  {
    id: "tec-017", name: "Teclado Mecánico Corsair K65 RGB Mini", slug: "corsair-k65-rgb-mini-60",
    description: "El 60% de Corsair con Cherry MX Speed, ideal para gaming de alta velocidad y escritorios pequeños.",
    price: 399.90, brand: "Corsair", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1547443620-5a29ef82ee4a?w=600&q=80"],
    stock: 11, sku: "CRS-K65-MINI", rating: 4.5, reviewCount: 298,
    specs: { "Layout": "60%", "Switches": "Cherry MX Speed", "Retroiluminación": "RGB Per-Key", "Cable": "USB-C detachable", "Polling": "8000Hz" },
    tags: ["60percent", "speed", "corsair", "cherry"], warranty: "24 meses"
  },
  {
    id: "tec-018", name: "Teclado Mecánico Ducky One 3 Mini", slug: "ducky-one3-mini-60",
    description: "Teclado 60% de calidad entusiasta con PBT doubleshot, hot-swap PCB y múltiples colores disponibles.",
    price: 529.90, brand: "Ducky", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1620783770629-122b7f187703?w=600&q=80"],
    stock: 7, sku: "DKY-ONE3-MINI", rating: 4.9, reviewCount: 412, isNew: true,
    specs: { "Layout": "60%", "Keycaps": "PBT Doubleshot", "Hot-swap": "3/5 pin", "Retroiluminación": "RGB Per-Key", "PCB": "Type-C" },
    tags: ["enthusiast", "hot-swap", "pbt", "premium"], warranty: "12 meses"
  },
  {
    id: "tec-019", name: "Teclado Mecánico Keychron K8 Pro Wireless", slug: "keychron-k8-pro-wireless",
    description: "TKL wireless con Bluetooth 5.1 multi-dispositivo, hot-swap, compatible con Mac y Windows, QMK/VIA.",
    price: 469.90, brand: "Keychron", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1628149483692-1a99b2b2a327?w=600&q=80"],
    stock: 16, sku: "KCH-K8PRO", rating: 4.8, reviewCount: 689, isNew: false,
    specs: { "Layout": "TKL", "Wireless": "Bluetooth 5.1 + USB-C", "Hot-swap": "Sí, 5-pin", "Firmware": "QMK/VIA", "Batería": "4000mAh" },
    tags: ["wireless", "mac", "hot-swap", "qmk"], warranty: "12 meses"
  },
  {
    id: "tec-020", name: "Teclado Mecánico SteelSeries Apex Pro Mini", slug: "steelseries-apex-pro-mini",
    description: "60% con OmniPoint switches ajustables (0.1–4mm actuation), el más rápido del mercado, pantalla OLED.",
    price: 799.90, comparePrice: 950.00, brand: "SteelSeries", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1585079374502-415f8516dcc3?w=600&q=80"],
    stock: 6, sku: "SS-APEX-PRO-MINI", rating: 4.7, reviewCount: 321, featured: true,
    specs: { "Layout": "60%", "Switches": "OmniPoint Ajustable 0.1-4mm", "Display": "OLED Smart", "Polling": "8000Hz", "Cable": "USB-C detachable" },
    tags: ["premium", "ajustable", "60percent", "oled"], warranty: "24 meses"
  },
  {
    id: "tec-021", name: "Teclado Mecánico Glorious GMMK Pro 75%", slug: "glorious-gmmk-pro-75",
    description: "75% barebones/full de calidad premium con gasket mount, rotary encoder y soporte hot-swap universal.",
    price: 649.90, brand: "Glorious", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"],
    stock: 5, sku: "GLO-GMMK-PRO", rating: 4.8, reviewCount: 445, isNew: true,
    specs: { "Layout": "75%", "Mount": "Gasket (South-facing)", "Hot-swap": "Universal 3/5-pin", "Encoder": "Knob rotativo", "Frame": "CNC Aluminio" },
    tags: ["premium", "gasket", "75percent", "custom"], warranty: "12 meses"
  },
  {
    id: "tec-022", name: "Teclado Mecánico Logitech G915 TKL Wireless", slug: "logitech-g915-tkl-wireless",
    description: "TKL inalámbrico low-profile con Lightspeed 1ms, switches GL Tactile, 40h de batería, Lightsync RGB.",
    price: 849.90, brand: "Logitech", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1563972209609-5e08fc5dc5ea?w=600&q=80"],
    stock: 10, sku: "LG-G915-TKL", rating: 4.7, reviewCount: 892, featured: true,
    specs: { "Layout": "TKL", "Wireless": "Lightspeed 1ms + Bluetooth", "Switches": "GL Tactile Low Profile", "Batería": "40h", "Marco": "Aluminio" },
    tags: ["wireless", "low-profile", "premium", "logitech"], warranty: "24 meses"
  },
  {
    id: "tec-023", name: "Teclado Mecánico Akko 3068B Plus", slug: "akko-3068b-plus",
    description: "65% hot-swap con Bluetooth 5.0 + 2.4GHz + USB-C, switches propios Akko CS, batería 4000mAh.",
    price: 299.90, brand: "Akko", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1600347995811-a9f05abe3b8b?w=600&q=80"],
    stock: 20, sku: "AKKO-3068B", rating: 4.6, reviewCount: 334, isNew: true,
    specs: { "Layout": "65%", "Wireless": "BT5.0 + 2.4G + USB-C", "Switches": "Akko CS Jelly", "Hot-swap": "Sí", "Batería": "4000mAh" },
    tags: ["wireless", "65percent", "economico", "hot-swap"], warranty: "12 meses"
  },
  {
    id: "tec-024", name: "Teclado Mecánico Royal Kludge RK84", slug: "royal-kludge-rk84",
    description: "75% triple modo (BT/2.4G/USB), hot-swap, software RGB, switches Brown táctiles, batería 3000mAh.",
    price: 249.90, brand: "Royal Kludge", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1613750319064-d14c4d5b4b22?w=600&q=80"],
    stock: 25, sku: "RK-84-TRIPLE", rating: 4.5, reviewCount: 567,
    specs: { "Layout": "75%", "Modos": "BT5.0 + 2.4GHz + USB", "Switches": "RK Brown", "Hot-swap": "Sí", "Batería": "3000mAh" },
    tags: ["wireless", "75percent", "hot-swap", "valor"], warranty: "12 meses"
  },
  {
    id: "tec-025", name: "Teclado Mecánico Razer BlackWidow Lite", slug: "razer-blackwidow-lite",
    description: "Teclado mecánico silencioso para oficina y gaming con switches Orange (silencioso), TKL, Chroma single-color.",
    price: 359.90, brand: "Razer", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1626227429498-4bed2f81b97e?w=600&q=80"],
    stock: 13, sku: "RZR-BWL", rating: 4.5, reviewCount: 289,
    specs: { "Switches": "Razer Orange Silent", "Layout": "TKL", "Retroiluminación": "White LED", "Cable": "USB-A detachable", "Nivel ruido": "Silencioso" },
    tags: ["silencioso", "oficina", "tkl", "razer"], warranty: "24 meses"
  },
  {
    id: "tec-026", name: "Teclado Mecánico Cooler Master CK720", slug: "coolermaster-ck720",
    description: "65% hot-swap con knob encoder, RGB, soporte QMK/VIA, gasket mount flexible y diseño premium.",
    price: 329.90, brand: "Cooler Master", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1619537903549-0981d6bca911?w=600&q=80"],
    stock: 17, sku: "CM-CK720", rating: 4.7, reviewCount: 198, isNew: true,
    specs: { "Layout": "65%", "Hot-swap": "Universal 3/5-pin", "Mount": "Gasket", "Knob": "Encoder con click", "Firmware": "QMK/VIA" },
    tags: ["65percent", "gasket", "qmk", "knob"], warranty: "24 meses"
  },
  {
    id: "tec-027", name: "Teclado Mecánico ASUS ROG Falchion Ace", slug: "asus-rog-falchion-ace",
    description: "65% con switch hall effect magnético, polling 8000Hz, panel táctil lateral y RGB.",
    price: 649.90, brand: "ASUS", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1592499782765-17ccc3f3f3c4?w=600&q=80"],
    stock: 8, sku: "ASUS-FALCHION-ACE", rating: 4.8, reviewCount: 167, isNew: true,
    specs: { "Layout": "65%", "Switches": "ROG NX Hall Effect", "Polling": "8000Hz", "Panel táctil": "Lateral Touch Panel", "RGB": "Aura Sync" },
    tags: ["hall-effect", "8000hz", "premium", "65percent"], warranty: "24 meses"
  },
  {
    id: "tec-028", name: "Teclado Mecánico HyperX Alloy Origins 60", slug: "hyperx-alloy-origins-60",
    description: "60% compacto con switches HyperX Aqua táctiles, PBT doubleshoot keycaps y Chroma RGB.",
    price: 339.90, brand: "HyperX", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1564177487498-e9024a22ea52?w=600&q=80"],
    stock: 14, sku: "HX-ORIGINS-60", rating: 4.6, reviewCount: 254,
    specs: { "Layout": "60%", "Switches": "HyperX Aqua Tactile", "Keycaps": "PBT Doubleshot", "Retroiluminación": "RGB Per-Key", "Polling": "1000Hz" },
    tags: ["60percent", "pbt", "hyperx", "compact"], warranty: "24 meses"
  },
  {
    id: "tec-029", name: "Teclado Mecánico Wooting 60HE+", slug: "wooting-60he-plus",
    description: "60% con switches Lekker (hall effect), actuation ajustable 0.1–4mm, rapid trigger y polling 8000Hz.",
    price: 949.90, brand: "Wooting", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1615575800539-cb2d8f91a5a5?w=600&q=80"],
    stock: 4, sku: "WOT-60HE", rating: 4.9, reviewCount: 287, featured: true, isNew: true,
    specs: { "Layout": "60%", "Switches": "Lekker Hall Effect", "Actuation": "0.1-4mm ajustable", "Rapid Trigger": "Sí", "Polling": "8000Hz" },
    tags: ["hall-effect", "rapid-trigger", "competitive", "premium"], warranty: "24 meses"
  },
  {
    id: "tec-030", name: "Teclado Inalámbrico Logitech MX Mechanical Mini", slug: "logitech-mx-mechanical-mini",
    description: "TKL inalámbrico para productividad con switches mecánicos táctiles, hasta 3 dispositivos, recargable USB-C.",
    price: 539.90, brand: "Logitech", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=600&q=80"],
    stock: 19, sku: "LG-MX-MECH-MINI", rating: 4.7, reviewCount: 441,
    specs: { "Layout": "TKL", "Wireless": "Logi Bolt + Bluetooth", "Switches": "Táctiles silenciosos", "Retroiluminación": "Blanca adaptativa", "Batería": "15 días" },
    tags: ["productividad", "wireless", "tkl", "silencioso"], warranty: "24 meses"
  },
  {
    id: "tec-031", name: "Teclado Mecánico Redragon K530 Draconic 60%", slug: "redragon-k530-draconic-60",
    description: "60% inalámbrico BT 5.0, switches brown táctiles, batería 1800mAh, RGB retroiluminación.",
    price: 179.90, brand: "Redragon", category: "teclados", subcategory: "mecanico",
    images: ["https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80"],
    stock: 35, sku: "RED-K530", rating: 4.4, reviewCount: 312,
    specs: { "Layout": "60%", "Wireless": "Bluetooth 5.0", "Switches": "Brown", "Batería": "1800mAh", "RGB": "Retroiluminación RGB" },
    tags: ["economico", "wireless", "60percent", "redragon"], warranty: "6 meses"
  },
];

// ─────────────── AUDIFONOS ────────────────
export const audifonos: Product[] = [
  {
    id: "aud-001", name: "Audífono HyperX Cloud Alpha Wireless", slug: "hyperx-cloud-alpha-wireless",
    description: "Audífono gaming inalámbrico con hasta 300h de batería, drivers duales de cámara y sonido 7.1 virtual.",
    price: 599.90, comparePrice: 699.90, brand: "HyperX", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonosHyperx.png"],
    stock: 15, sku: "HX-CLOUD-ALPHA-W", rating: 4.9, reviewCount: 1204, featured: true,
    specs: { "Wireless": "2.4GHz", "Batería": "300 horas", "Drivers": "Duales de cámara 50mm", "Sonido": "7.1 Virtual Surround", "Micrófono": "Removible con LED mute" },
    tags: ["gaming", "wireless", "300h", "premium"], warranty: "24 meses"
  },
  {
    id: "aud-002", name: "Audífono Sony WH-1000XM5 Noise Cancelling", slug: "sony-wh1000xm5",
    description: "Los mejores auriculares ANC del mercado con 30h de batería, LDAC Hi-Res, y llamadas de calidad premium.",
    price: 1299.90, brand: "Sony", category: "audifonos", subcategory: "premium",
    images: ["/image/image_earphone/audifonoSony.png"],
    stock: 10, sku: "SONY-XM5", rating: 4.9, reviewCount: 3241, featured: true,
    specs: { "ANC": "Noise Cancelling de 8 micrófonos", "Batería": "30h + 3h en 3 min carga", "Codec": "LDAC / AAC / SBC", "Driver": "30mm", "Conexión": "BT 5.2 + USB-C + jack 3.5mm" },
    tags: ["anc", "premium", "wireless", "sony"], warranty: "12 meses"
  },
  {
    id: "aud-003", name: "Audífono Razer Kraken V3 HyperSense", slug: "razer-kraken-v3-hypersense",
    description: "Gaming con retroalimentación háptica HyperSense, drivers de titanio de 50mm, THX Spatial Audio 7.1.",
    price: 549.90, brand: "Razer", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonoRazer.png"],
    stock: 12, sku: "RZR-KRK-V3HS", rating: 4.7, reviewCount: 867,
    specs: { "Háptico": "HyperSense vibration", "Drivers": "50mm titanio", "Sonido": "THX Spatial 7.1", "Micrófono": "Cardiode con mute", "Conexión": "USB-A" },
    tags: ["haptico", "7.1", "gaming", "razer"], warranty: "24 meses"
  },
  {
    id: "aud-004", name: "Audífono JBL Quantum 810 Wireless ANC", slug: "jbl-quantum-810-wireless",
    description: "Gaming wireless con ANC activo, JBL QuantumSPATIAL 360°, batería 34h, compatible PC/PlayStation/Xbox.",
    price: 649.90, brand: "JBL", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonoJBL.png"],
    stock: 9, sku: "JBL-Q810W", rating: 4.6, reviewCount: 412,
    specs: { "ANC": "Activo con modo transparencia", "Batería": "34h (ANC on) / 56h (ANC off)", "Sonido": "Quantum SPATIAL 360°", "Wireless": "2.4GHz + BT 5.0", "Plataformas": "PC/PS/Xbox/Mobile" },
    tags: ["gaming", "anc", "wireless", "multiplatform"], warranty: "12 meses"
  },
  {
    id: "aud-005", name: "Audífono Corsair HS80 RGB Wireless", slug: "corsair-hs80-rgb-wireless",
    description: "Gaming wireless con Dolby Atmos para PC, drivers de 50mm, almohadillas de memoria foam premium.",
    price: 449.90, brand: "Corsair", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonos.png"],
    stock: 20, sku: "CRS-HS80-RGB", rating: 4.6, reviewCount: 678,
    specs: { "Wireless": "USB 2.4GHz", "Drivers": "50mm neodimio", "Dolby": "Atmos para PC", "Almohadillas": "Foam de memoria", "Batería": "20h" },
    tags: ["gaming", "wireless", "dolby", "corsair"], warranty: "24 meses"
  },
  {
    id: "aud-006", name: "Audífono HP H360G Gaming Stereo", slug: "hp-h360g-gaming",
    description: "Audífono gamer estéreo con micrófono omnidireccional, drivers de 40mm, diseño plegable.",
    price: 129.90, brand: "HP", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonosHp.png"],
    stock: 35, sku: "HP-H360G", rating: 4.0, reviewCount: 223,
    specs: { "Drivers": "40mm", "Micrófono": "Omnidireccional con mute", "Conexión": "3.5mm + USB", "Plegable": "Sí", "Frecuencia": "20Hz-20KHz" },
    tags: ["economico", "gaming", "hp"], warranty: "6 meses"
  },
  {
    id: "aud-007", name: "Audífono Redragon H510 Zeus-X RGB 7.1", slug: "redragon-h510-zeus-x",
    description: "Gaming con sonido surround 7.1, iluminación RGB, drivers de 53mm, micrófono cardioide retráctil.",
    price: 179.90, brand: "Redragon", category: "audifonos", subcategory: "gaming",
    images: ["/image/image_earphone/audifonosRedragon.png"],
    stock: 28, sku: "RED-H510", rating: 4.3, reviewCount: 445,
    specs: { "Sonido": "7.1 Virtual Surround", "Drivers": "53mm", "RGB": "Retroiluminación RGB", "Micrófono": "Cardioide retráctil", "Conexión": "USB-A" },
    tags: ["gaming", "7.1", "rgb", "economico"], warranty: "6 meses"
  },
  {
    id: "aud-008", name: "Audífono Corsair Virtuoso RGB Wireless XT", slug: "corsair-virtuoso-rgb-xt",
    description: "El audífono premium de Corsair con drivers de 50mm de alta fidelidad, conectividad multi-punto BT + USB.",
    price: 799.90, brand: "Corsair", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
    stock: 8, sku: "CRS-VIRT-XT", rating: 4.8, reviewCount: 567, featured: true,
    specs: { "Wireless": "USB 2.4GHz + BT 5.0", "Drivers": "50mm Hi-Fi", "Batería": "24h", "Micrófono": "Omnidireccional broadcast", "Audio": "Broadcast quality" },
    tags: ["premium", "wireless", "hifi", "corsair"], warranty: "24 meses"
  },
  {
    id: "aud-009", name: "Audífono Logitech G733 Lightspeed Wireless", slug: "logitech-g733-wireless",
    description: "Wireless colorido con Lightspeed, Lightsync RGB en drivers, suspensión elástica, batería 29h.",
    price: 449.90, brand: "Logitech", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80"],
    stock: 18, sku: "LG-G733", rating: 4.6, reviewCount: 789,
    specs: { "Wireless": "Lightspeed", "RGB": "Lightsync en earcups", "Batería": "29h", "Suspensión": "Elástica ajustable", "Micrófono": "Flip-to-mute cardioide" },
    tags: ["wireless", "rgb", "gaming", "logitech"], warranty: "24 meses"
  },
  {
    id: "aud-010", name: "Audífono SteelSeries Arctis Nova Pro Wireless", slug: "steelseries-arctis-nova-pro-wireless",
    description: "El tope de gama: ANC activo, batería dual hotswap, 22h, sonar DTS, compatible PC/PlayStation/Xbox/Mobile.",
    price: 1499.90, comparePrice: 1699.90, brand: "SteelSeries", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"],
    stock: 5, sku: "SS-NOVA-PRO-W", rating: 4.9, reviewCount: 934, featured: true,
    specs: { "ANC": "Activo + transparencia adaptativa", "Batería": "Dual hotswap 22h por batería", "Wireless": "2.4GHz + BT 5.0", "Sonar": "DTS Headphone:X", "Plataformas": "PC/PS5/Xbox/Mobile" },
    tags: ["premium", "anc", "multiplatform", "hotswap"], warranty: "24 meses"
  },
  {
    id: "aud-011", name: "Audífono ASUS ROG Delta S Wireless", slug: "asus-rog-delta-s-wireless",
    description: "Wireless con AI beamforming, Aura RGB, compatibilidad multi-plataforma, bajo latencia 2.4GHz.",
    price: 699.90, brand: "ASUS", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80"],
    stock: 10, sku: "ASUS-DELTA-S-W", rating: 4.7, reviewCount: 312,
    specs: { "Wireless": "2.4GHz + BT", "Micrófono": "AI Beamforming 4-micrófonos", "RGB": "Aura Sync en earcups", "Driver": "50mm ESS Sabre DAC", "Plataformas": "PC/Mac/PlayStation/Mobile" },
    tags: ["ai-mic", "wireless", "gaming", "asus"], warranty: "24 meses"
  },
  {
    id: "aud-012", name: "Audífono HyperX Cloud III Wireless", slug: "hyperx-cloud-iii-wireless",
    description: "Generación 3 con audio DTS:X Spatial 2.0, drivers de 53mm de ancho frecuencial, 120h de batería.",
    price: 549.90, brand: "HyperX", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80"],
    stock: 17, sku: "HX-CLOUD3-W", rating: 4.8, reviewCount: 621,
    specs: { "Batería": "120 horas", "Drivers": "53mm", "Sonido": "DTS:X Spatial 2.0", "Wireless": "2.4GHz USB-A/C", "Micrófono": "Detachable cardioide" },
    tags: ["gaming", "wireless", "120h", "hyperx"], warranty: "24 meses"
  },
  {
    id: "aud-013", name: "Audífono Audio-Technica ATH-M50xBT2", slug: "ath-m50xbt2",
    description: "El clásico estudio M50x en versión wireless BT 5.0, ANC, 60h batería, audio de calidad de estudio.",
    price: 749.90, brand: "Audio-Technica", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&q=80"],
    stock: 8, sku: "AT-M50XBT2", rating: 4.8, reviewCount: 1023,
    specs: { "Wireless": "Bluetooth 5.0", "ANC": "Activo", "Batería": "60h", "Driver": "45mm", "Uso": "Estudio + Gaming" },
    tags: ["studio", "anc", "hifi", "wireless"], warranty: "12 meses"
  },
  {
    id: "aud-014", name: "Audífono Razer Barracuda Pro", slug: "razer-barracuda-pro",
    description: "Wireless dual-mode para gaming y lifestyle con SmartSwitch (2.4GHz + BT), ANC THX Certified.",
    price: 799.90, brand: "Razer", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&q=80"],
    stock: 9, sku: "RZR-BARRA-PRO", rating: 4.7, reviewCount: 389,
    specs: { "ANC": "THX Certified Active", "Wireless": "SmartSwitch 2.4GHz + BT 5.2", "Batería": "40h (ANC off)", "THX": "Spatial Audio Certified", "Modo": "Gaming + Lifestyle" },
    tags: ["anc", "thx", "wireless", "lifestyle"], warranty: "24 meses"
  },
  {
    id: "aud-015", name: "Audífono Sony Inzone H9 Gaming ANC", slug: "sony-inzone-h9",
    description: "Gaming-first de Sony con ANC de nivel premium, 360 Spatial Sound, 32h de batería optimizado para PS5.",
    price: 999.90, brand: "Sony", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80"],
    stock: 7, sku: "SONY-IZ-H9", rating: 4.8, reviewCount: 567,
    specs: { "ANC": "Noise Cancelling activo", "Sonido": "360 Spatial Sound para PS5", "Batería": "32h (ANC on)", "Wireless": "2.4GHz + BT 5.0", "Optimizado": "PS5 + PC" },
    tags: ["ps5", "gaming", "anc", "sony"], warranty: "12 meses"
  },
  {
    id: "aud-016", name: "Audífono Logitech G Pro X 2 Lightspeed", slug: "logitech-gpro-x2-lightspeed",
    description: "El audífono pro de Logitech con Lightspeed, drivers Blue VO!CE mejorados, batería 50h, ultraligero.",
    price: 999.90, brand: "Logitech", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"],
    stock: 6, sku: "LG-GPRO-X2", rating: 4.9, reviewCount: 478, featured: true,
    specs: { "Wireless": "Lightspeed", "Batería": "50h", "Micrófono": "Blue VO!CE technology", "Peso": "345g", "Driver": "50mm neodimio" },
    tags: ["pro", "gaming", "wireless", "50h"], warranty: "24 meses"
  },
  {
    id: "aud-017", name: "Audífono Jabra Evolve2 85 ANC", slug: "jabra-evolve2-85-anc",
    description: "Para trabajo remoto profesional con ANC de 6 micrófonos, 37h batería, certificado para Teams/Zoom.",
    price: 1199.90, brand: "Jabra", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"],
    stock: 6, sku: "JABRA-E2-85", rating: 4.7, reviewCount: 892,
    specs: { "ANC": "6-mic ANC avanzado", "Batería": "37h", "Certificación": "Teams + Zoom + Google Meet", "Wireless": "BT 5.2 + cable", "Uso": "Trabajo profesional" },
    tags: ["trabajo", "anc", "certificado", "premium"], warranty: "24 meses"
  },
  {
    id: "aud-018", name: "Audífono Bose QuietComfort 45", slug: "bose-quietcomfort-45",
    description: "Noise cancelling icónico de Bose, 24h batería, modo Aware, audio natural y cómodo para viajes.",
    price: 1099.90, brand: "Bose", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
    stock: 10, sku: "BOSE-QC45", rating: 4.8, reviewCount: 2341,
    specs: { "ANC": "QuietComfort Noise Cancelling", "Batería": "24h", "Modo": "Aware (transparencia)", "BT": "5.1", "Funda": "Incluida" },
    tags: ["anc", "viaje", "bose", "comodidad"], warranty: "12 meses"
  },
  {
    id: "aud-019", name: "Audífono Turtle Beach Stealth 700 Gen 2", slug: "turtle-beach-stealth-700-gen2",
    description: "Gaming wireless compatible con Xbox/PC con Superhuman Hearing, 20h batería, micrófono retráctil.",
    price: 499.90, brand: "Turtle Beach", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80"],
    stock: 14, sku: "TB-S700G2", rating: 4.5, reviewCount: 567,
    specs: { "Wireless": "2.4GHz", "Superhuman Hearing": "Tecnología exclusiva", "Batería": "20h", "Plataformas": "Xbox + PC", "Micrófono": "Retráctil omnidireccional" },
    tags: ["xbox", "gaming", "wireless", "superhuman"], warranty: "12 meses"
  },
  {
    id: "aud-020", name: "Audífono Beyerdynamic MMX 300 Pro Gen 2", slug: "beyerdynamic-mmx300-pro",
    description: "Referencia de calidad de estudio para gaming, drivers Tesla de 45mm, micrófono condensador cardioide.",
    price: 1299.90, brand: "Beyerdynamic", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80"],
    stock: 4, sku: "BYD-MMX300", rating: 4.9, reviewCount: 234, isNew: true,
    specs: { "Driver": "Tesla 45mm", "Micrófono": "Condensador cardioide", "Impedancia": "32 Ohm", "Respuesta": "5Hz - 35kHz", "Tipo": "Dinámico cerrado" },
    tags: ["studio", "referencia", "gaming", "premium"], warranty: "24 meses"
  },
  {
    id: "aud-021", name: "Audífono Nari Essential Razer Wireless", slug: "razer-nari-essential-wireless",
    description: "Gaming wireless con THX Spatial Audio, retro-iluminación Chroma RGB, micrófono retráctil.",
    price: 379.90, brand: "Razer", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&q=80"],
    stock: 16, sku: "RZR-NARI-ESS", rating: 4.4, reviewCount: 389,
    specs: { "Wireless": "2.4GHz HyperSpeed", "THX": "Spatial Audio", "Batería": "16h", "Micrófono": "Retráctil cardioide", "RGB": "Chroma" },
    tags: ["gaming", "wireless", "thx", "razer"], warranty: "24 meses"
  },
  {
    id: "aud-022", name: "Audífono Sennheiser Momentum 4 Wireless", slug: "sennheiser-momentum-4",
    description: "60h de batería, ANC adaptativo, audio Hi-Fi ACREC, confort excepcional para largas jornadas.",
    price: 1099.90, brand: "Sennheiser", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
    stock: 7, sku: "SEN-M4W", rating: 4.8, reviewCount: 678,
    specs: { "Batería": "60h", "ANC": "Adaptativo", "Codec": "aptX Adaptive + AAC + SBC", "Driver": "42mm", "App": "Smart Control" },
    tags: ["premium", "60h", "anc", "hifi"], warranty: "24 meses"
  },
  {
    id: "aud-023", name: "Audífono Creative SXFI Carrier Wireless", slug: "creative-sxfi-carrier",
    description: "Wireless con Super X-Fi holographic audio, ANC híbrido, Bluetooth 5.2 y soporte Dolby/DTS.",
    price: 499.90, brand: "Creative", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&q=80"],
    stock: 11, sku: "CRE-SXFI-CAR", rating: 4.5, reviewCount: 198,
    specs: { "Audio": "Super X-Fi Holographic", "ANC": "Híbrido activo/pasivo", "BT": "5.2", "Soporte": "Dolby + DTS:X Ultra", "Batería": "55h" },
    tags: ["holographic", "anc", "gaming", "creative"], warranty: "12 meses"
  },
  {
    id: "aud-024", name: "Audífono Anker Soundcore Q45 ANC", slug: "anker-soundcore-q45",
    description: "ANC multi-modo, drivers de 40mm, 50h batería, app personalizable, relación calidad/precio imbatible.",
    price: 199.90, brand: "Anker", category: "audifonos", subcategory: "valor",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80"],
    stock: 40, sku: "ANK-Q45", rating: 4.5, reviewCount: 1234,
    specs: { "ANC": "Multi-modo (Transport/Indoor/Outdoor)", "Batería": "50h (ANC off)", "Driver": "40mm", "BT": "5.3", "App": "Soundcore personalizable" },
    tags: ["valor", "anc", "50h", "economico"], warranty: "18 meses"
  },
  {
    id: "aud-025", name: "Audífono Edifier WH950NB ANC", slug: "edifier-wh950nb",
    description: "ANC con 50h batería, LDAC Hi-Res Wireless, doble conectividad, sonido excepcional precio-calidad.",
    price: 299.90, brand: "Edifier", category: "audifonos", subcategory: "valor",
    images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80"],
    stock: 22, sku: "EDI-WH950NB", rating: 4.7, reviewCount: 456, isNew: true,
    specs: { "ANC": "Activo Hi-Res", "Codec": "LDAC / aptX HD / AAC", "Batería": "50h", "Driver": "40mm", "BT": "5.2" },
    tags: ["ldac", "hires", "anc", "valor"], warranty: "12 meses"
  },
  {
    id: "aud-026", name: "Audífono Corsair Virtuoso Pro Open-Back", slug: "corsair-virtuoso-pro",
    description: "Open-back para streaming y estudio con drivers neodimio de 50mm, soporte broadcast, cable detachable.",
    price: 649.90, brand: "Corsair", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
    stock: 8, sku: "CRS-VIRT-PRO", rating: 4.8, reviewCount: 234,
    specs: { "Tipo": "Open-back (abierto)", "Driver": "50mm neodimio", "Frecuencia": "10Hz-40kHz", "Impedancia": "32 Ohm", "Uso": "Streaming / Estudio" },
    tags: ["open-back", "streaming", "studio", "corsair"], warranty: "24 meses"
  },
  {
    id: "aud-027", name: "Audífono ASUS ROG Strix Go 2.4 Wireless", slug: "asus-rog-strix-go-24",
    description: "Gaming wireless 2.4GHz con modo AI Noise Cancelling, compatible móvil/PC/PS4/Switch en cable 3.5mm.",
    price: 399.90, brand: "ASUS", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
    stock: 13, sku: "ASUS-ROG-GO-24", rating: 4.5, reviewCount: 278,
    specs: { "Wireless": "2.4GHz + 3.5mm cable", "Micrófono": "AI Noise Cancelling", "Batería": "25h", "Plataformas": "PC/PS4/Switch/Mobile", "Plegable": "Sí" },
    tags: ["gaming", "wireless", "ai-mic", "multiplatform"], warranty: "24 meses"
  },
  {
    id: "aud-028", name: "Audífono HyperX Cloud Mix 2 Wireless", slug: "hyperx-cloud-mix2-wireless",
    description: "Wireless gaming con Bluetooth dual para mobile, DTS Headphone:X 2.0, 65h batería extendida.",
    price: 549.90, brand: "HyperX", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80"],
    stock: 14, sku: "HX-CLOUDMIX2", rating: 4.7, reviewCount: 345,
    specs: { "Wireless": "2.4GHz + BT para mobile", "Batería": "65h", "DTS": "Headphone:X 2.0", "Micrófono": "Detachable cardioide", "Plataformas": "PC/PS/Xbox/Mobile" },
    tags: ["gaming", "wireless", "65h", "multiplatform"], warranty: "24 meses"
  },
  {
    id: "aud-029", name: "Audífono Marshall Monitor II A.N.C.", slug: "marshall-monitor-ii-anc",
    description: "Icónico diseño Marshall con 30h ANC, sonido rock signature, Bluetooth 5.0, control físico intuitivo.",
    price: 899.90, brand: "Marshall", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"],
    stock: 6, sku: "MRS-M2ANC", rating: 4.6, reviewCount: 412,
    specs: { "ANC": "Activo híbrido", "Batería": "30h con ANC", "BT": "5.0 aptX HD", "Control": "Knob físico", "Diseño": "Iconic Marshall" },
    tags: ["premium", "anc", "icónico", "marshall"], warranty: "12 meses"
  },
  {
    id: "aud-030", name: "Audífono Bang & Olufsen Beoplay HX", slug: "bo-beoplay-hx",
    description: "Máximo lujo en audio con ANC adaptativo, 35h, materiales premium aluminio y cuero, sonido signature B&O.",
    price: 1799.90, brand: "Bang & Olufsen", category: "audifonos", subcategory: "premium",
    images: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"],
    stock: 3, sku: "BO-HX", rating: 4.9, reviewCount: 178, featured: true,
    specs: { "ANC": "Adaptativo con transparencia", "Batería": "35h ANC / 40h sin ANC", "Materiales": "Aluminio + cuero genuino", "BT": "5.2 multipoint", "Audio": "Bang & Olufsen Signature" },
    tags: ["lujo", "premium", "anc", "aluminio"], warranty: "24 meses"
  },
  {
    id: "aud-031", name: "Audífono Turtle Beach Recon 70 Cableado", slug: "turtle-beach-recon-70",
    description: "Ligero gaming con jack 3.5mm universal, sobre-ear, micrófono flip-to-mute, sonido estéreo 40mm.",
    price: 89.90, brand: "Turtle Beach", category: "audifonos", subcategory: "gaming",
    images: ["https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&q=80"],
    stock: 50, sku: "TB-RECON70", rating: 4.1, reviewCount: 678,
    specs: { "Conexión": "3.5mm universal", "Driver": "40mm", "Micrófono": "Flip-to-mute omnidireccional", "Compatibilidad": "PS5/Xbox/Switch/PC/Mobile", "Peso": "200g" },
    tags: ["economico", "universal", "gaming", "cable"], warranty: "6 meses"
  },
];

// ─────────────── MICROFONOS ────────────────
export const microfonos: Product[] = [
  {
    id: "mic-001", name: "Micrófono HyperX QuadCast S RGB", slug: "hyperx-quadcast-s-rgb",
    description: "Micrófono USB con 4 patrones polares intercambiables, filtro anti-pop integrado, soporte antivibración y RGB.",
    price: 549.90, comparePrice: 649.90, brand: "HyperX", category: "microfonos",
    images: ["/image/image_microphone/micrófonoHyperX.jpg"],
    stock: 18, sku: "HX-QUADCAST-S", rating: 4.8, reviewCount: 1089, featured: true,
    specs: { "Patrones": "4 polares (cardioide, bidireccional, omnidireccional, estéreo)", "Muestreo": "48kHz / 16-bit", "RGB": "Retroiluminación RGB", "Filtro": "Anti-pop integrado", "Conexión": "USB-C" },
    tags: ["streaming", "usb", "rgb", "4-patron"], warranty: "24 meses"
  },
  {
    id: "mic-002", name: "Micrófono Razer Seiren V3 Chroma", slug: "razer-seiren-v3-chroma",
    description: "Cardioide USB con Chroma RGB, gain control físico, mute capacitivo, anti-clipping y calidad streaming.",
    price: 449.90, brand: "Razer", category: "microfonos",
    images: ["/image/image_microphone/microfonorazerrosado.jpg"],
    stock: 14, sku: "RZR-SEIREN-V3C", rating: 4.7, reviewCount: 567, isNew: true,
    specs: { "Patrón": "Supercardioide", "Muestreo": "48kHz / 16-bit", "RGB": "Chroma 16.8M colores", "Control": "Mute capacitivo + Gain físico", "Anti-clipping": "Dual-layer" },
    tags: ["streaming", "rgb", "chroma", "razer"], warranty: "24 meses"
  },
  {
    id: "mic-003", name: "Micrófono Logitech Blue Yeti X", slug: "logitech-blue-yeti-x",
    description: "El estándar del streaming con 4 patrones polares, indicador LED multi-color de nivel de audio, Blue VO!CE.",
    price: 649.90, brand: "Logitech", category: "microfonos",
    images: ["/image/image_microphone/microfonologitech.png"],
    stock: 20, sku: "LG-YETI-X", rating: 4.8, reviewCount: 2341, featured: true,
    specs: { "Patrones": "4 polares", "Muestreo": "48kHz / 16-bit", "Blue VO!CE": "Procesamiento avanzado", "LED": "Indicador nivel en tiempo real", "Conexión": "USB-A" },
    tags: ["streaming", "podcasting", "usb", "premium"], warranty: "24 meses"
  },
  {
    id: "mic-004", name: "Micrófono Elgato Wave 3 Plus", slug: "elgato-wave-3-plus",
    description: "USB cardioide con Clipguard anti-distorsión, Wave Link mixer software, pop filter integrado, calidad de estudio.",
    price: 499.90, brand: "Elgato", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80"],
    stock: 16, sku: "ELG-WAVE3P", rating: 4.8, reviewCount: 892,
    specs: { "Patrón": "Cardioide", "Clipguard": "Previene distorsión", "Muestreo": "96kHz / 24-bit", "Software": "Wave Link mixer", "USB": "USB-C" },
    tags: ["streaming", "elgato", "clipguard", "24bit"], warranty: "24 meses"
  },
  {
    id: "mic-005", name: "Micrófono SteelSeries Alias Pro XLR", slug: "steelseries-alias-pro-xlr",
    description: "Cardioide XLR con switch modos (broadcasting/gaming), brazo articulado incluido, calidad de estudio profesional.",
    price: 899.90, brand: "SteelSeries", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80"],
    stock: 8, sku: "SS-ALIAS-PRO", rating: 4.8, reviewCount: 234, isNew: true, featured: true,
    specs: { "Tipo": "Condensador XLR + USB", "Patrón": "Cardioide + Multi-patrón", "Muestreo": "192kHz / 24-bit", "Brazo": "Incluido articulado", "Extras": "Shockmount integrado" },
    tags: ["xlr", "studio", "streaming", "premium"], warranty: "24 meses"
  },
  {
    id: "mic-006", name: "Micrófono Ugreen CM409 USB Condensador", slug: "ugreen-cm409-usb",
    description: "Condensador USB cardioide con soporte de escritorio integrado, anti-pop incorporado y sonido limpio.",
    price: 149.90, brand: "Ugreen", category: "microfonos",
    images: ["/image/image_microphone/microfonoUgreenNegro.png"],
    stock: 35, sku: "UGR-CM409", rating: 4.3, reviewCount: 312,
    specs: { "Patrón": "Cardioide", "Muestreo": "16kHz / 16-bit", "Soporte": "De escritorio incluido", "Anti-pop": "Integrado", "Conexión": "USB-A" },
    tags: ["economico", "usb", "basico", "ugreen"], warranty: "12 meses"
  },
  {
    id: "mic-007", name: "Micrófono Cybertel CME-200 USB", slug: "cybertel-cme200-usb",
    description: "Micrófono USB plug & play para videollamadas y streaming básico, brazo ajustable incluido.",
    price: 99.90, brand: "Cybertel", category: "microfonos",
    images: ["/image/image_microphone/microfonocybertel.jpg"],
    stock: 50, sku: "CYB-CME200", rating: 4.0, reviewCount: 167,
    specs: { "Patrón": "Omnidireccional", "Conexión": "USB-A plug & play", "Soporte": "Brazo ajustable", "Frecuencia": "50Hz-16KHz", "Uso": "Videollamadas / básico" },
    tags: ["economico", "plug-play", "basico"], warranty: "6 meses"
  },
  {
    id: "mic-008", name: "Micrófono Yanmai SF-920 Condensador USB", slug: "yanmai-sf920-usb",
    description: "Condensador USB de escritorio con patrón cardioide, soporte metálico, diseño retro profesional.",
    price: 129.90, brand: "Yanmai", category: "microfonos",
    images: ["/image/image_microphone/microfonoYanmain.jpg"],
    stock: 30, sku: "YAN-SF920", rating: 4.1, reviewCount: 145,
    specs: { "Patrón": "Cardioide", "Tipo": "Condensador", "Soporte": "Metálico de escritorio", "Conexión": "USB", "Frecuencia": "30Hz-16KHz" },
    tags: ["economico", "condensador", "usb"], warranty: "6 meses"
  },
  {
    id: "mic-009", name: "Micrófono Rode NT-USB Mini", slug: "rode-nt-usb-mini",
    description: "Cardioide USB compacto de calidad profesional con ShieldGrade y zero-latency headphone monitoring.",
    price: 599.90, brand: "Rode", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 10, sku: "RODE-NTUSB-MINI", rating: 4.9, reviewCount: 678,
    specs: { "Patrón": "Cardioide (fijo)", "Muestreo": "48kHz / 16-bit", "Monitoreo": "Zero-latency headphone jack", "Construcción": "Metal premium", "Soporte": "Magnético integrado" },
    tags: ["premium", "usb", "zero-latency", "rode"], warranty: "10 años"
  },
  {
    id: "mic-010", name: "Micrófono Fifine K669B USB", slug: "fifine-k669b-usb",
    description: "Condensador USB económico con patrón cardioide, control de volumen directo y soporte de escritorio.",
    price: 89.90, brand: "Fifine", category: "microfonos",
    images: ["/image/image_microphone/micrófonoFifine.jpg"],
    stock: 60, sku: "FIF-K669B", rating: 4.3, reviewCount: 892,
    specs: { "Patrón": "Cardioide", "Control": "Volumen en cuerpo", "Muestreo": "16kHz", "Soporte": "Escritorio incluido", "Conexión": "USB-A" },
    tags: ["economico", "condensador", "basico", "fifine"], warranty: "12 meses"
  },
  {
    id: "mic-011", name: "Micrófono Blue Snowball iCE USB", slug: "blue-snowball-ice",
    description: "El micrófono de entrada más popular, cardioide USB plug & play, ideal para videollamadas y podcasting inicial.",
    price: 219.90, brand: "Blue", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80"],
    stock: 28, sku: "BLUE-SNOWICE", rating: 4.4, reviewCount: 2341,
    specs: { "Patrón": "Cardioide", "Muestreo": "44.1kHz / 16-bit", "Plug & Play": "Sin drivers", "Soporte": "Tripié incluido", "Conexión": "USB" },
    tags: ["principiante", "plug-play", "streaming", "blue"], warranty: "24 meses"
  },
  {
    id: "mic-012", name: "Micrófono Razer Seiren Mini Ultra-Compact", slug: "razer-seiren-mini",
    description: "Supercardioide ultra compacto de alta precisión para escritorios pequeños y portable streaming.",
    price: 279.90, brand: "Razer", category: "microfonos",
    images: ["/image/image_microphone/microfononegro.png"],
    stock: 22, sku: "RZR-SEIREN-MINI", rating: 4.5, reviewCount: 567,
    specs: { "Patrón": "Supercardioide", "Muestreo": "48kHz / 16-bit", "Tamaño": "Ultra compacto", "Soporte": "Escritorio con inclinación", "Diseño": "Minimalista" },
    tags: ["compacto", "streaming", "minimalista", "razer"], warranty: "24 meses"
  },
  {
    id: "mic-013", name: "Micrófono Shure MV7 USB/XLR Podcast", slug: "shure-mv7-podcast",
    description: "El podcast pro de Shure con doble salida USB/XLR, pantalla táctil LED, ecualizador integrado y montaje antiruido.",
    price: 799.90, brand: "Shure", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80"],
    stock: 9, sku: "SHR-MV7", rating: 4.9, reviewCount: 1234, featured: true,
    specs: { "Tipo": "Dinámico cardioide", "Conexión": "USB + XLR", "Patrón": "Cardioide (dinámico)", "Control táctil": "LED touch", "EQ": "Integrado suave/brillante" },
    tags: ["podcast", "xlr", "usb", "profesional"], warranty: "24 meses"
  },
  {
    id: "mic-014", name: "Micrófono Audio-Technica AT2020USB+", slug: "audio-technica-at2020-usb",
    description: "El condensador de referencia de AT en versión USB, monitoreo de auriculares zero-latency, muestreo 24-bit/96kHz.",
    price: 449.90, brand: "Audio-Technica", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 12, sku: "AT-AT2020USB", rating: 4.7, reviewCount: 892,
    specs: { "Patrón": "Cardioide", "Muestreo": "24-bit / 96kHz", "Monitoreo": "Zero-latency jack 3.5mm", "Tipo": "Condensador", "Soporte": "Pivote ajustable" },
    tags: ["estudio", "condensador", "profesional", "at"], warranty: "12 meses"
  },
  {
    id: "mic-015", name: "Micrófono Elgato Wave Neo USB", slug: "elgato-wave-neo",
    description: "USB cardioide de entrada con Clipguard anti-distorsión, software Wave Link mixer, integración perfecta Elgato.",
    price: 229.90, brand: "Elgato", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80"],
    stock: 25, sku: "ELG-WAVE-NEO", rating: 4.6, reviewCount: 456, isNew: true,
    specs: { "Patrón": "Cardioide", "Clipguard": "Anti-distorsión", "Muestreo": "48kHz / 24-bit", "Software": "Wave Link", "Conexión": "USB-C" },
    tags: ["streaming", "elgato", "basico", "clipguard"], warranty: "24 meses"
  },
  {
    id: "mic-016", name: "Micrófono Rode PodMic USB+XLR", slug: "rode-podmic-usb-xlr",
    description: "PodMic legendario ahora con USB-C directo además de XLR, perfect para podcasting avanzado sin interfaz.",
    price: 599.90, brand: "Rode", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80"],
    stock: 10, sku: "RODE-PODMIC-U", rating: 4.9, reviewCount: 567, isNew: true,
    specs: { "Tipo": "Dinámico cardioide", "Conexión": "USB-C + XLR", "Shockmount": "Interno", "Pop filter": "Integrado", "Uso": "Podcast broadcast" },
    tags: ["podcast", "xlr", "usb", "rode"], warranty: "10 años"
  },
  {
    id: "mic-017", name: "Micrófono Ugreen CM559 RGB Estéreo", slug: "ugreen-cm559-rgb",
    description: "Condensador RGB estéreo USB con soporte articulado, 4 patrones polares y sonido envolvente.",
    price: 199.90, brand: "Ugreen", category: "microfonos",
    images: ["/image/image_microphone/microfonougreennegro .png"],
    stock: 28, sku: "UGR-CM559", rating: 4.4, reviewCount: 189, isNew: true,
    specs: { "Patrones": "4 polares", "RGB": "Retroiluminación multicolor", "Muestreo": "48kHz / 16-bit", "Soporte": "Articulado de escritorio", "Conexión": "USB-C" },
    tags: ["rgb", "economico", "4-patron", "ugreen"], warranty: "12 meses"
  },
  {
    id: "mic-018", name: "Micrófono Razer Seiren V3 X HyperSpeed Wireless", slug: "razer-seiren-v3x-wireless",
    description: "El primer micrófono gaming inalámbrico de Razer con HyperSpeed 2.4GHz, cardioide, mute LED.",
    price: 649.90, brand: "Razer", category: "microfonos",
    images: ["/image/image_microphone/micrófonoRazerNegro.jpg"],
    stock: 7, sku: "RZR-SEIREN-V3X-W", rating: 4.7, reviewCount: 213, isNew: true, featured: true,
    specs: { "Wireless": "HyperSpeed 2.4GHz", "Patrón": "Cardioide superdirectivo", "Batería": "12h", "Mute": "LED capacitivo", "Muestreo": "48kHz / 16-bit" },
    tags: ["wireless", "razer", "streaming", "nuevo"], warranty: "24 meses"
  },
  {
    id: "mic-019", name: "Micrófono Logitech Yeti GX Dynamic", slug: "logitech-yeti-gx-dynamic",
    description: "Dinámico USB con LIGHTSYNK RGB, 8000Hz polling, ideal para entornos ruidosos, captura solo voz.",
    price: 399.90, brand: "Logitech", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 15, sku: "LG-YETI-GX", rating: 4.7, reviewCount: 312,
    specs: { "Tipo": "Dinámico (para entornos ruidosos)", "RGB": "Lightsync", "Polling": "8000Hz", "Patrón": "Supercardioide", "Muestreo": "48kHz / 24-bit" },
    tags: ["dinamico", "rgb", "streaming", "logitech"], warranty: "24 meses"
  },
  {
    id: "mic-020", name: "Micrófono HyperX SoloCast USB", slug: "hyperx-solocast-usb",
    description: "USB cardioide compacto con mute capacitivo, soporte de escritorio integrado, calidad streaming accesible.",
    price: 189.90, brand: "HyperX", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80"],
    stock: 32, sku: "HX-SOLOCAST", rating: 4.5, reviewCount: 678,
    specs: { "Patrón": "Cardioide", "Mute": "Capacitivo táctil", "Muestreo": "48kHz / 16-bit", "Soporte": "Escritorio ajustable", "Conexión": "USB-C" },
    tags: ["economico", "streaming", "compacto", "hyperx"], warranty: "24 meses"
  },
  {
    id: "mic-021", name: "Micrófono Beyerdynamic FOX USB Studio", slug: "beyerdynamic-fox-usb",
    description: "Condensador de gran diafragma con salida de auriculares, calidad de grabación profesional en formato USB.",
    price: 649.90, brand: "Beyerdynamic", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80"],
    stock: 6, sku: "BYD-FOX-USB", rating: 4.8, reviewCount: 189,
    specs: { "Diafragma": "Gran diafragma (34mm)", "Tipo": "Condensador", "Muestreo": "96kHz / 24-bit", "Monitoreo": "Headphone amp integrado", "Patrón": "Cardioide" },
    tags: ["gran-diafragma", "estudio", "profesional", "beyerdynamic"], warranty: "24 meses"
  },
  {
    id: "mic-022", name: "Micrófono Corsair HS-MC001 USB Sonar", slug: "corsair-hs-mc001-sonar",
    description: "Condensador con iCUE Sonar AI noise cancelling, muestreo 24-bit/96kHz, shockmount incluido.",
    price: 349.90, brand: "Corsair", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80"],
    stock: 12, sku: "CRS-MC001", rating: 4.6, reviewCount: 234, isNew: true,
    specs: { "AI": "Sonar noise cancelling", "Muestreo": "24-bit / 96kHz", "Patrón": "Cardioide", "Shockmount": "Incluido", "Software": "iCUE Sonar" },
    tags: ["ai", "noise-cancelling", "premium", "corsair"], warranty: "24 meses"
  },
  {
    id: "mic-023", name: "Micrófono ASUS ROG Carnyx Condensador", slug: "asus-rog-carnyx",
    description: "Condensador de estudio para gaming/streaming con shockmount, pop filter y Aura Sync RGB.",
    price: 479.90, brand: "ASUS", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 9, sku: "ASUS-CARNYX", rating: 4.7, reviewCount: 178,
    specs: { "Tipo": "Condensador gran diafragma", "RGB": "Aura Sync", "Patrón": "Cardioide", "Muestreo": "48kHz / 16-bit", "Kit": "Shockmount + Pop filter" },
    tags: ["gaming", "studio", "rgb", "asus"], warranty: "24 meses"
  },
  {
    id: "mic-024", name: "Micrófono Samson G-Track Pro XLR/USB", slug: "samson-gtrack-pro",
    description: "Interfaz de audio integrada en el micrófono con entrada de instrumento, 2 patrones polares, phantom 48V.",
    price: 549.90, brand: "Samson", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80"],
    stock: 8, sku: "SAM-GTRACK-PRO", rating: 4.6, reviewCount: 289,
    specs: { "Conexión": "USB + XLR + instrumento 1/4", "Patrones": "Cardioide + Omni", "Phantom": "48V para condensadores", "Muestreo": "96kHz / 24-bit", "Interfaz": "2 canales integrada" },
    tags: ["interfaz", "xlr", "usb", "instrumento"], warranty: "12 meses"
  },
  {
    id: "mic-025", name: "Micrófono Blue Snowflake USB Portátil", slug: "blue-snowflake-usb",
    description: "Mini USB cardioide ultra portátil para laptop, videollamadas y grabación on-the-go, clip incluido.",
    price: 149.90, brand: "Blue", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80"],
    stock: 40, sku: "BLUE-SNOWFLAKE", rating: 4.2, reviewCount: 567,
    specs: { "Patrón": "Cardioide", "Tamaño": "Ultra portátil", "Clip": "Para pantalla de laptop", "Muestreo": "44.1kHz / 16-bit", "Conexión": "USB directo" },
    tags: ["portátil", "laptop", "economico", "compacto"], warranty: "24 meses"
  },
  {
    id: "mic-026", name: "Micrófono SteelSeries Alias USB", slug: "steelseries-alias-usb",
    description: "USB cardioide premium para gaming y streaming con ClearCast Gen 2 AI, RGB Prism, sonar software.",
    price: 449.90, brand: "SteelSeries", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 13, sku: "SS-ALIAS-USB", rating: 4.7, reviewCount: 312, isNew: true,
    specs: { "AI": "ClearCast Gen 2", "RGB": "Prism", "Patrón": "Cardioide", "Muestreo": "48kHz / 24-bit", "Software": "Sonar" },
    tags: ["ai", "gaming", "streaming", "premium"], warranty: "24 meses"
  },
  {
    id: "mic-027", name: "Micrófono Ugreen Revodok 4-en-1 USB-C Hub Mic", slug: "ugreen-revodok-mic",
    description: "Micrófono portátil USB-C con hub de puertos integrado, cardioide y soporte plegable.",
    price: 159.90, brand: "Ugreen", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80"],
    stock: 20, sku: "UGR-REVMICRO", rating: 4.2, reviewCount: 98, isNew: true,
    specs: { "Hub": "USB-C 4 puertos", "Patrón": "Cardioide", "Plegable": "Sí", "Conexión": "USB-C", "Uso": "Mobile + Laptop" },
    tags: ["portátil", "hub", "usb-c", "ugreen"], warranty: "12 meses"
  },
  {
    id: "mic-028", name: "Micrófono Shure SM7B Dinámico XLR Broadcast", slug: "shure-sm7b-broadcast",
    description: "La leyenda del podcast y broadcast. Dinámico cardioide XLR, filtro EQ integrado, soporte de vibración.",
    price: 1099.90, brand: "Shure", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80"],
    stock: 6, sku: "SHR-SM7B", rating: 5.0, reviewCount: 3467, featured: true,
    specs: { "Tipo": "Dinámico cardioide", "Conexión": "XLR (requiere interfaz/previo)", "EQ": "Interruptores bass-roll + presencia", "Soporte vibración": "Integrado", "Legado": "Usado por MJ, podcasters globales" },
    tags: ["leyenda", "podcast", "broadcast", "xlr"], warranty: "24 meses"
  },
  {
    id: "mic-029", name: "Micrófono AT2035 Audio-Technica Condensador", slug: "audio-technica-at2035",
    description: "Condensador de gran diafragma XLR para grabación profesional, 2 filtros rolloff y pad -10dB integrado.",
    price: 399.90, brand: "Audio-Technica", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80"],
    stock: 10, sku: "AT-AT2035", rating: 4.7, reviewCount: 678,
    specs: { "Tipo": "Condensador gran diafragma", "Conexión": "XLR", "Filtro": "HPF + -10dB pad", "SPL": "Hasta 148dB", "Uso": "Voz, instrumentos, estudio" },
    tags: ["condensador", "xlr", "gran-diafragma", "estudio"], warranty: "12 meses"
  },
  {
    id: "mic-030", name: "Micrófono Rode NT1 5th Gen USB/XLR", slug: "rode-nt1-5th-gen",
    description: "5ta generación del NT1 con conexión dual USB-C y XLR, ruido de fondo -4dBa, calidad de referencia.",
    price: 849.90, brand: "Rode", category: "microfonos",
    images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"],
    stock: 7, sku: "RODE-NT1-5G", rating: 4.9, reviewCount: 489, isNew: true, featured: true,
    specs: { "Ruido equiv.": "-4dBa (el más silencioso)", "Conexión": "USB-C + XLR simultáneo", "Tipo": "Condensador gran diafragma", "Patrón": "Cardioide", "SPL": "Hasta 132dB" },
    tags: ["referencia", "ultra-silencioso", "xlr-usb", "rode"], warranty: "10 años"
  },
  {
    id: "mic-031", name: "Micrófono Razer Seiren BT Bluetooth Podcast", slug: "razer-seiren-bt-bluetooth",
    description: "Micrófono Bluetooth para podcast móvil, cardioide con mute LED, batería recargable, compacto.",
    price: 329.90, brand: "Razer", category: "microfonos",
    images: ["/image/image_microphone/microfonoraizerBlanco.jpg"],
    stock: 16, sku: "RZR-SEIREN-BT", rating: 4.4, reviewCount: 198,
    specs: { "Wireless": "Bluetooth 5.0", "Batería": "8h", "Patrón": "Cardioide", "Mute": "LED visual", "Uso": "Podcast móvil" },
    tags: ["bluetooth", "móvil", "podcast", "razer"], warranty: "24 meses"
  },
];

// ─────────────── MONITORES ────────────────
export const monitores: Product[] = [
  {
    id: "mon-001", name: "Monitor LG 27GP850-B UltraGear IPS 165Hz", slug: "lg-27gp850-ultragear-165hz",
    description: "Panel IPS de 27\" con 165Hz, 1ms GtG, NVIDIA G-Sync, AMD FreeSync Premium, resolución 1440p QHD.",
    price: 1299.90, comparePrice: 1499.90, brand: "LG", category: "monitores",
    images: ["/image/image_screens/LG.png"],
    stock: 12, sku: "LG-27GP850", rating: 4.8, reviewCount: 1234, featured: true,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "IPS Nano", "Refresco": "165Hz (OC 180Hz)", "Tiempo respuesta": "1ms GtG", "Sync": "G-Sync + FreeSync" },
    tags: ["qhd", "ips", "165hz", "gaming"], warranty: "24 meses"
  },
  {
    id: "mon-002", name: "Monitor LG 24GN650 UltraGear IPS 144Hz FHD", slug: "lg-24gn650-144hz",
    description: "IPS 24\" Full HD 144Hz AMD FreeSync Premium, 1ms MBR, HDR10, diseño ergonómico gaming.",
    price: 799.90, brand: "LG", category: "monitores",
    images: ["/image/image_screens/lg24.png"],
    stock: 20, sku: "LG-24GN650", rating: 4.6, reviewCount: 789,
    specs: { "Tamaño": "24\"", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "144Hz", "Tiempo respuesta": "1ms MBR", "HDR": "HDR10" },
    tags: ["fhd", "ips", "144hz", "gaming"], warranty: "24 meses"
  },
  {
    id: "mon-003", name: "Monitor HP X24ih IPS 144Hz Gaming", slug: "hp-x24ih-144hz",
    description: "IPS 23.8\" FHD 144Hz para gaming, AMD FreeSync Premium, 1ms, HDMI + DisplayPort, ajuste de altura.",
    price: 849.90, brand: "HP", category: "monitores",
    images: ["/image/image_screens/hp23.png"],
    stock: 18, sku: "HP-X24IH", rating: 4.5, reviewCount: 456,
    specs: { "Tamaño": "23.8\"", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "144Hz", "Tiempo respuesta": "1ms", "Ergonomía": "Ajuste altura + inclinación" },
    tags: ["fhd", "ips", "144hz", "hp"], warranty: "12 meses"
  },
  {
    id: "mon-004", name: "Monitor ASUS TUF Gaming VG279QM 280Hz", slug: "asus-tuf-vg279qm-280hz",
    description: "El panel IPS más rápido: 280Hz, 1ms (GtG), G-Sync Compatible, HDR400, resolución FHD, ELMB Sync.",
    price: 1399.90, brand: "ASUS", category: "monitores",
    images: ["/image/image_screens/ASUS.png"],
    stock: 9, sku: "ASUS-VG279QM", rating: 4.8, reviewCount: 567, featured: true,
    specs: { "Tamaño": "27\"", "Resolución": "1920x1080 FHD", "Panel": "IPS Fast", "Refresco": "280Hz", "Tiempo respuesta": "1ms GtG", "HDR": "DisplayHDR 400" },
    tags: ["280hz", "ips", "competitive", "asus"], warranty: "36 meses"
  },
  {
    id: "mon-005", name: "Monitor Xiaomi Redmi 22\" FHD IPS 75Hz", slug: "xiaomi-redmi-22-75hz",
    description: "Monitor económico para oficina y gaming casual, IPS 22\", FHD, 75Hz, marcos ultra delgados.",
    price: 449.90, brand: "Xiaomi", category: "monitores",
    images: ["/image/image_screens/xiaomi22.png"],
    stock: 35, sku: "XMI-22-75", rating: 4.3, reviewCount: 312,
    specs: { "Tamaño": "22\"", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "75Hz", "Marcos": "Ultra delgados 3 lados", "HDMI": "1.4" },
    tags: ["economico", "fhd", "75hz", "xiaomi"], warranty: "12 meses"
  },
  {
    id: "mon-006", name: "Monitor Teros 24\" FHD VA 75Hz", slug: "teros-te-2428-24-75hz",
    description: "VA 24\" FHD 75Hz con excelente contraste nativo, colores profundos para gaming y multimedia.",
    price: 499.90, brand: "Teros", category: "monitores",
    images: ["/image/image_screens/teros.png"],
    stock: 25, sku: "TER-2428-24", rating: 4.2, reviewCount: 189,
    specs: { "Tamaño": "24\"", "Resolución": "1920x1080 FHD", "Panel": "VA", "Refresco": "75Hz", "Contraste": "3000:1 nativo", "HDMI": "1.4" },
    tags: ["va", "economico", "multimedia", "teros"], warranty: "12 meses"
  },
  {
    id: "mon-007", name: "Monitor Teros 27\" QHD IPS 75Hz", slug: "teros-te-2727-27-qhd",
    description: "IPS 27\" QHD resolución 2K de Teros para productividad y gaming, buenos colores sRGB 99%.",
    price: 749.90, brand: "Teros", category: "monitores",
    images: ["/image/image_screens/teros1.png"],
    stock: 15, sku: "TER-2727-27", rating: 4.4, reviewCount: 134,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "IPS", "Refresco": "75Hz", "sRGB": "99%", "HDMI": "1.4 + DP 1.2" },
    tags: ["qhd", "ips", "productividad", "teros"], warranty: "12 meses"
  },
  {
    id: "mon-008", name: "Monitor Caixun 27\" FHD IPS 75Hz Curvo", slug: "caixun-27-curved-75hz",
    description: "Curvo 27\" FHD IPS 1800R con AMD FreeSync, marcos ultra delgados y colores vibrantes.",
    price: 649.90, brand: "Caixun", category: "monitores",
    images: ["/image/image_screens/CAIXUN.png"],
    stock: 20, sku: "CAI-27-CURVE", rating: 4.3, reviewCount: 167,
    specs: { "Tamaño": "27\"", "Curvatura": "1800R", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "75Hz", "FreeSync": "AMD FreeSync" },
    tags: ["curvo", "fhd", "ips", "economico"], warranty: "12 meses"
  },
  {
    id: "mon-009", name: "Monitor Samsung Odyssey G5 32\" QHD 165Hz VA", slug: "samsung-odyssey-g5-32-165hz",
    description: "Curvo 32\" QHD 165Hz VA, curvatura 1000R, HDR400, AMD FreeSync Premium, contraste extremo.",
    price: 1449.90, brand: "Samsung", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 10, sku: "SAM-G5-32", rating: 4.7, reviewCount: 892, featured: true,
    specs: { "Tamaño": "32\"", "Curvatura": "1000R", "Resolución": "2560x1440 QHD", "Panel": "VA", "Refresco": "165Hz", "HDR": "HDR400" },
    tags: ["curvo", "qhd", "165hz", "samsung"], warranty: "12 meses"
  },
  {
    id: "mon-010", name: "Monitor ASUS ROG Swift PG279QM 240Hz IPS QHD", slug: "asus-rog-swift-pg279qm-240hz",
    description: "IPS 27\" QHD 240Hz con Fast IPS, G-Sync Ultimate, HDR600, ideal para top gamers de FPS.",
    price: 2499.90, comparePrice: 2799.90, brand: "ASUS", category: "monitores",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"],
    stock: 5, sku: "ASUS-PG279QM", rating: 4.9, reviewCount: 445, featured: true,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "Fast IPS", "Refresco": "240Hz", "HDR": "VESA HDR600", "G-Sync": "Ultimate" },
    tags: ["240hz", "qhd", "premium", "gsync"], warranty: "36 meses"
  },
  {
    id: "mon-011", name: "Monitor AOC Q27G3XMN Mini LED QHD 180Hz", slug: "aoc-q27g3xmn-miniled-180hz",
    description: "Mini LED local dimming 576 zonas, QHD 27\" 180Hz, contraste 1M:1, HDR1000, precio competitivo.",
    price: 1699.90, brand: "AOC", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 7, sku: "AOC-Q27G3XMN", rating: 4.8, reviewCount: 312, isNew: true, featured: true,
    specs: { "Tamaño": "27\"", "Tecnología": "Mini LED 576 zonas", "Resolución": "2560x1440 QHD", "Refresco": "180Hz", "Contraste": "1,000,000:1", "HDR": "1000" },
    tags: ["mini-led", "qhd", "180hz", "hdr1000"], warranty: "36 meses"
  },
  {
    id: "mon-012", name: "Monitor LG OLED Flex 42\" 4K 138Hz", slug: "lg-oled-flex-42-4k",
    description: "OLED 42\" con curvatura ajustable 0°-900R, 4K 138Hz, 0.1ms, anti-reflective, perfecto para gaming/TV.",
    price: 5999.90, brand: "LG", category: "monitores",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 3, sku: "LG-OLED-FLEX-42", rating: 4.9, reviewCount: 167, featured: true, isNew: true,
    specs: { "Tamaño": "42\"", "Panel": "OLED Flex", "Resolución": "3840x2160 4K UHD", "Refresco": "138Hz", "Tiempo respuesta": "0.1ms", "Curvatura": "0° a 900R ajustable" },
    tags: ["oled", "4k", "premium", "flexible"], warranty: "24 meses"
  },
  {
    id: "mon-013", name: "Monitor MSI MAG 32\" QHD IPS 240Hz", slug: "msi-mag-32-qhd-240hz",
    description: "IPS 32\" QHD 240Hz Rapid, AMD FreeSync Premium Pro, HDR400, G-Sync Compatible, ideal para AAA.",
    price: 1999.90, brand: "MSI", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 6, sku: "MSI-MAG-32-240", rating: 4.8, reviewCount: 234,
    specs: { "Tamaño": "32\"", "Resolución": "2560x1440 QHD", "Panel": "IPS Rapid", "Refresco": "240Hz", "HDR": "400", "Sync": "FreeSync Premium Pro + G-Sync" },
    tags: ["qhd", "240hz", "ips", "premium"], warranty: "36 meses"
  },
  {
    id: "mon-014", name: "Monitor Philips 28\" 4K UHD IPS 60Hz", slug: "philips-28-4k-60hz",
    description: "4K UHD 28\" IPS para productividad profesional, USB-C 65W Power Delivery, Ambiglow LED trasero.",
    price: 1199.90, brand: "Philips", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 11, sku: "PHI-28-4K", rating: 4.6, reviewCount: 345,
    specs: { "Tamaño": "28\"", "Resolución": "3840x2160 4K", "Panel": "IPS", "USB-C": "65W Power Delivery", "Ambiglow": "LED trasero sincronizado", "Refresco": "60Hz" },
    tags: ["4k", "productividad", "usb-c", "philips"], warranty: "24 meses"
  },
  {
    id: "mon-015", name: "Monitor BenQ MOBIUZ EX2710Q 27\" QHD 165Hz", slug: "benq-mobiuz-ex2710q",
    description: "IPS 27\" QHD 165Hz con altavoces 2.1 HDRi integrados, FreeSync Premium, HDR400 gaming monitor.",
    price: 1349.90, brand: "BenQ", category: "monitores",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"],
    stock: 9, sku: "BENQ-EX2710Q", rating: 4.7, reviewCount: 412,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "IPS", "Refresco": "165Hz", "Audio": "2.1 speakers HDRi", "HDR": "400" },
    tags: ["qhd", "165hz", "altavoces", "benq"], warranty: "36 meses"
  },
  {
    id: "mon-016", name: "Monitor Dell Alienware AW2524HF 360Hz IPS FHD", slug: "alienware-aw2524hf-360hz",
    description: "360Hz IPS FHD para el juego competitivo de alto nivel, 0.5ms GtG, G-Sync + FreeSync Premium.",
    price: 2799.90, brand: "Alienware", category: "monitores",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 4, sku: "AW-AW2524HF", rating: 4.8, reviewCount: 189, isNew: true, featured: true,
    specs: { "Tamaño": "24.5\"", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "360Hz", "Tiempo respuesta": "0.5ms GtG", "Sync": "G-Sync + FreeSync" },
    tags: ["360hz", "competitive", "ips", "premium"], warranty: "36 meses"
  },
  {
    id: "mon-017", name: "Monitor Gigabyte M27U 27\" 4K 160Hz IPS", slug: "gigabyte-m27u-4k-160hz",
    description: "4K 160Hz IPS con KVM integrado, USB-C 94W, HDR400, ideal para trabajo + gaming simultáneo.",
    price: 1799.90, brand: "Gigabyte", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 8, sku: "GIG-M27U", rating: 4.8, reviewCount: 356,
    specs: { "Tamaño": "27\"", "Resolución": "3840x2160 4K", "Panel": "IPS", "Refresco": "160Hz", "USB-C": "94W PD", "KVM": "Integrado" },
    tags: ["4k", "160hz", "kvm", "usb-c"], warranty: "36 meses"
  },
  {
    id: "mon-018", name: "Monitor ViewSonic XG2431 24\" FHD 240Hz IPS", slug: "viewsonic-xg2431-240hz",
    description: "Fast IPS 24\" FHD 240Hz con Backlight Strobing 1ms, AMD FreeSync Premium, ideal esports.",
    price: 1099.90, brand: "ViewSonic", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 12, sku: "VSN-XG2431", rating: 4.6, reviewCount: 267,
    specs: { "Tamaño": "24\"", "Resolución": "1920x1080 FHD", "Panel": "Fast IPS", "Refresco": "240Hz", "Backlight Strobing": "1ms MPRT", "FreeSync": "Premium" },
    tags: ["240hz", "fhd", "esports", "viewsonic"], warranty: "36 meses"
  },
  {
    id: "mon-019", name: "Monitor Samsung 32\" 4K UHD Smart Monitor M8", slug: "samsung-m8-32-4k-smart",
    description: "Smart Monitor 32\" 4K con Amazon Alexa, Netflix, Spotify integrado, USB-C 65W, y webcam magnética.",
    price: 2299.90, brand: "Samsung", category: "monitores",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"],
    stock: 6, sku: "SAM-M8-32", rating: 4.7, reviewCount: 567, isNew: true,
    specs: { "Tamaño": "32\"", "Resolución": "3840x2160 4K", "Smart": "Tizen OS + Alexa/Netflix/Spotify", "USB-C": "65W PD", "Webcam": "Magnética incluida", "Refresco": "60Hz" },
    tags: ["smart", "4k", "alexa", "productividad"], warranty: "12 meses"
  },
  {
    id: "mon-020", name: "Monitor Acer Predator XB273U GX 27\" QHD 270Hz", slug: "acer-predator-xb273u-270hz",
    description: "IPS QHD 270Hz con G-Sync Ultimate, HDR600, DCI-P3 95%, para gaming de alta fidelidad visual.",
    price: 2999.90, brand: "Acer", category: "monitores",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 4, sku: "ACR-XB273U", rating: 4.9, reviewCount: 198, featured: true,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "IPS", "Refresco": "270Hz", "G-Sync": "Ultimate + HDR600", "DCI-P3": "95%" },
    tags: ["270hz", "qhd", "premium", "gsync-ultimate"], warranty: "36 meses"
  },
  {
    id: "mon-021", name: "Monitor LG UltraWide 34\" WQHD 160Hz IPS", slug: "lg-ultrawide-34-wqhd-160hz",
    description: "Ultrawide 34\" 21:9 WQHD 160Hz IPS, curvatura 1000R, FreeSync Premium, ideal productividad y gaming.",
    price: 1899.90, brand: "LG", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 7, sku: "LG-34-UWQHD", rating: 4.8, reviewCount: 456,
    specs: { "Tamaño": "34\"", "Aspecto": "21:9 Ultrawide", "Resolución": "3440x1440 WQHD", "Panel": "IPS", "Refresco": "160Hz", "Curvatura": "1000R" },
    tags: ["ultrawide", "21:9", "wqhd", "160hz"], warranty: "24 meses"
  },
  {
    id: "mon-022", name: "Monitor Corsair Xeneon Flex 45\" OLED Doblable", slug: "corsair-xeneon-flex-45-oled",
    description: "OLED 45\" con curvatura ajustable de plano a 800R, 240Hz, 0.03ms, 4K, revolucionario para gaming.",
    price: 6999.90, brand: "Corsair", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 2, sku: "CRS-XENEON-FLEX", rating: 4.9, reviewCount: 89, isNew: true, featured: true,
    specs: { "Tamaño": "45\"", "Panel": "WOLED flexible", "Resolución": "3440x1440 WQHD", "Refresco": "240Hz", "Tiempo respuesta": "0.03ms", "Curvatura": "Plano hasta 800R ajustable" },
    tags: ["oled", "flexible", "premium", "lujo"], warranty: "36 meses"
  },
  {
    id: "mon-023", name: "Monitor MSI Optix G241 24\" IPS 144Hz", slug: "msi-optix-g241-144hz",
    description: "IPS 24\" FHD 144Hz AMD FreeSync, 1ms MBR, bezel ultra-fino, precio-rendimiento excelente.",
    price: 749.90, brand: "MSI", category: "monitores",
    images: ["/image/image_screens/monitor.jpg"],
    stock: 22, sku: "MSI-G241", rating: 4.5, reviewCount: 567,
    specs: { "Tamaño": "24\"", "Resolución": "1920x1080 FHD", "Panel": "IPS", "Refresco": "144Hz", "Tiempo respuesta": "1ms MBR", "FreeSync": "Sí" },
    tags: ["fhd", "144hz", "ips", "valor"], warranty: "36 meses"
  },
  {
    id: "mon-024", name: "Monitor AOC C24G2AE 24\" VA 165Hz Curvo", slug: "aoc-c24g2ae-165hz-curvo",
    description: "VA curvo 24\" FHD 165Hz AMD FreeSync Premium, 1ms MPRT, precio accesible, alto contraste VA.",
    price: 699.90, brand: "AOC", category: "monitores",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"],
    stock: 28, sku: "AOC-C24G2AE", rating: 4.6, reviewCount: 789,
    specs: { "Tamaño": "24\"", "Panel": "VA 1500R", "Resolución": "1920x1080 FHD", "Refresco": "165Hz", "Contraste": "3000:1", "MPRT": "1ms" },
    tags: ["va", "curvo", "165hz", "valor"], warranty: "36 meses"
  },
  {
    id: "mon-025", name: "Monitor Gigabyte M34WQ 34\" WQHD IPS 144Hz", slug: "gigabyte-m34wq-ultrawide-144hz",
    description: "Ultrawide 34\" WQHD IPS 144Hz con KVM switch, USB-C 18W, FreeSync Premium, diseño ergonómico.",
    price: 1499.90, brand: "Gigabyte", category: "monitores",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 9, sku: "GIG-M34WQ", rating: 4.7, reviewCount: 312,
    specs: { "Tamaño": "34\"", "Aspecto": "21:9 Ultrawide", "Resolución": "3440x1440 WQHD", "Panel": "IPS", "Refresco": "144Hz", "KVM": "Integrado" },
    tags: ["ultrawide", "144hz", "kvm", "ips"], warranty: "36 meses"
  },
  {
    id: "mon-026", name: "Monitor Dell S2722DGM 27\" QHD VA 165Hz Curvo", slug: "dell-s2722dgm-165hz",
    description: "VA curvo 27\" QHD 165Hz AMD FreeSync Premium, 1ms MPRT, excelente contraste para gaming.",
    price: 999.90, brand: "Dell", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 14, sku: "DELL-S2722DGM", rating: 4.6, reviewCount: 456,
    specs: { "Tamaño": "27\"", "Curvatura": "1500R VA", "Resolución": "2560x1440 QHD", "Refresco": "165Hz", "Contraste": "3000:1", "FreeSync": "Premium" },
    tags: ["va", "curvo", "qhd", "165hz"], warranty: "36 meses"
  },
  {
    id: "mon-027", name: "Monitor Acer Nitro XV282K KV 28\" 4K 144Hz", slug: "acer-nitro-xv282k-4k-144hz",
    description: "4K 28\" IPS 144Hz con HDMI 2.1 para PS5/Xbox, FreeSync Premium Pro, HDR400, USB-C 90W.",
    price: 1699.90, brand: "Acer", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 8, sku: "ACR-XV282K", rating: 4.7, reviewCount: 234,
    specs: { "Tamaño": "28\"", "Resolución": "3840x2160 4K", "Panel": "IPS", "Refresco": "144Hz", "HDMI": "2.1 para consolas", "USB-C": "90W PD" },
    tags: ["4k", "144hz", "hdmi21", "consolas"], warranty: "36 meses"
  },
  {
    id: "mon-028", name: "Monitor BenQ PD3225U 32\" 4K IPS Diseñadores", slug: "benq-pd3225u-32-4k-design",
    description: "4K IPS 32\" Thunderbolt 4, DCI-P3 98%, hardware calibración, daisy-chain, para profesionales creativos.",
    price: 3499.90, brand: "BenQ", category: "monitores",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"],
    stock: 4, sku: "BENQ-PD3225U", rating: 4.9, reviewCount: 134, isNew: true,
    specs: { "Tamaño": "32\"", "Resolución": "3840x2160 4K", "Panel": "IPS", "Thunderbolt": "4 (daisy-chain)", "DCI-P3": "98%", "Calibración": "Hardware integrada" },
    tags: ["diseño", "profesional", "4k", "thunderbolt"], warranty: "36 meses"
  },
  {
    id: "mon-029", name: "Monitor Pixio PX277 Prime 27\" QHD IPS 165Hz", slug: "pixio-px277-prime-165hz",
    description: "IPS QHD 27\" 165Hz relación calidad-precio líder, sRGB 108%, FreeSync Premium, 1ms MPRT.",
    price: 899.90, brand: "Pixio", category: "monitores",
    images: ["https://images.unsplash.com/photo-1593640408182-31c228f0c41b?w=600&q=80"],
    stock: 16, sku: "PIX-PX277P", rating: 4.7, reviewCount: 378,
    specs: { "Tamaño": "27\"", "Resolución": "2560x1440 QHD", "Panel": "IPS", "Refresco": "165Hz", "sRGB": "108%", "FreeSync": "Premium" },
    tags: ["qhd", "165hz", "valor", "ips"], warranty: "24 meses"
  },
  {
    id: "mon-030", name: "Monitor INNOCN 27Q1U 27\" 4K IPS 60Hz USB-C", slug: "innocn-27q1u-4k-usbc",
    description: "4K IPS 27\" USB-C 65W Power Delivery, 3 puertos USB-A hub, ideal para laptop one-cable setup.",
    price: 999.90, brand: "INNOCN", category: "monitores",
    images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"],
    stock: 13, sku: "INN-27Q1U", rating: 4.6, reviewCount: 234,
    specs: { "Tamaño": "27\"", "Resolución": "3840x2160 4K", "Panel": "IPS", "USB-C": "65W PD one-cable", "Hub": "3x USB-A", "Refresco": "60Hz" },
    tags: ["4k", "usb-c", "hub", "one-cable"], warranty: "24 meses"
  },
  {
    id: "mon-031", name: "Monitor ASUS ProArt PA329CV 32\" 4K IPS Calibrado", slug: "asus-proart-pa329cv-4k",
    description: "Profesional 4K IPS 32\" con calibración de fábrica, 98% DCI-P3, USB-C 96W, Pantone validado.",
    price: 2699.90, brand: "ASUS", category: "monitores",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80"],
    stock: 5, sku: "ASUS-PA329CV", rating: 4.9, reviewCount: 167,
    specs: { "Tamaño": "32\"", "Resolución": "3840x2160 4K", "DCI-P3": "98%", "Calibración": "De fábrica ΔE<2", "USB-C": "96W PD", "Pantone": "Validado" },
    tags: ["profesional", "4k", "calibrado", "proart"], warranty: "36 meses"
  },
];

// ─────────────── MOUSE ────────────────
export const mouse: Product[] = [
  {
    id: "mse-001", name: "Mouse Razer DeathAdder V3 HyperSpeed", slug: "razer-deathadder-v3-hyperspeed",
    description: "Mouse ergonómico inalámbrico con sensor Focus Pro 30K, HyperSpeed 2.4GHz, ultraligero 81g.",
    price: 399.90, comparePrice: 469.90, brand: "Razer", category: "mouse",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"],
    stock: 20, sku: "RZR-DAV3-HS", rating: 4.9, reviewCount: 892, featured: true,
    specs: { "Sensor": "Focus Pro 30K Optical", "DPI": "100-30,000", "Wireless": "HyperSpeed 2.4GHz", "Peso": "81g", "Batería": "300h" },
    tags: ["gaming", "wireless", "ergonómico", "razer"], warranty: "24 meses"
  },
  {
    id: "mse-002", name: "Mouse Logitech G Pro X Superlight 2", slug: "logitech-gpro-x-superlight2",
    description: "Ultra-ligero 60g, sensor HERO 2 25K, polling 2000Hz, LIGHTSPEED, la elección pro mundial.",
    price: 749.90, brand: "Logitech", category: "mouse",
    images: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80"],
    stock: 15, sku: "LG-GPRO-X-SL2", rating: 4.9, reviewCount: 1345, featured: true,
    specs: { "Peso": "60g", "Sensor": "HERO 2 25K", "Polling": "2000Hz", "Wireless": "Lightspeed", "Batería": "95h" },
    tags: ["ultraligero", "pro", "wireless", "logitech"], warranty: "24 meses"
  },
  {
    id: "mse-003", name: "Mouse SteelSeries Aerox 9 Wireless", slug: "steelseries-aerox9-wireless",
    description: "18 botones programables para MMO/MOBA, wireless, estructura honeycomb, sensor TrueMove Air 18K.",
    price: 649.90, brand: "SteelSeries", category: "mouse",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 10, sku: "SS-AEROX9-W", rating: 4.7, reviewCount: 456,
    specs: { "Botones": "18 programables", "Sensor": "TrueMove Air 18K", "Wireless": "2.4GHz + BT", "Estructura": "Honeycomb", "Batería": "180h" },
    tags: ["mmo", "moba", "wireless", "18-botones"], warranty: "24 meses"
  },
  {
    id: "mse-004", name: "Mouse Redragon M988W Storm Elite Wireless", slug: "redragon-m988w-storm-elite",
    description: "Wireless gaming con PMW3335 18K sensor, polling 1000Hz, RGB, recargable USB-C, 7 botones.",
    price: 199.90, brand: "Redragon", category: "mouse",
    images: ["/image/image_mouse/mouse.jpg"],
    stock: 30, sku: "RED-M988W", rating: 4.5, reviewCount: 312,
    specs: { "Sensor": "PMW3335 18K", "Wireless": "2.4GHz", "Polling": "1000Hz", "Botones": "7", "Batería": "60h" },
    tags: ["gaming", "wireless", "economico", "redragon"], warranty: "12 meses"
  },
  {
    id: "mse-005", name: "Mouse Corsair M75 Air Wireless Ultralight", slug: "corsair-m75-air-wireless",
    description: "Ultraligero 60g, sensor Marksman 26K, wireless Slipstream 2000Hz polling, 100h batería.",
    price: 699.90, brand: "Corsair", category: "mouse",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"],
    stock: 12, sku: "CRS-M75-AIR", rating: 4.8, reviewCount: 289, isNew: true,
    specs: { "Peso": "60g", "Sensor": "Marksman 26K", "Polling": "2000Hz", "Wireless": "Slipstream + BT", "Batería": "100h" },
    tags: ["ultraligero", "wireless", "2000hz", "corsair"], warranty: "24 meses"
  },
  {
    id: "mse-006", name: "Mouse Asus ROG Harpe Ace Aim Lab Edition", slug: "asus-rog-harpe-ace-aimlab",
    description: "Mouse diseñado con Aim Lab, sensor ROG AimPoint 36K, polling 8000Hz, ultraligero 54g.",
    price: 799.90, brand: "ASUS", category: "mouse",
    images: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80"],
    stock: 8, sku: "ASUS-HARPE-ACE", rating: 4.8, reviewCount: 234, isNew: true, featured: true,
    specs: { "Peso": "54g", "Sensor": "AimPoint 36K", "Polling": "8000Hz", "Wireless": "SpeedNova + BT", "Collab": "Aim Lab" },
    tags: ["8000hz", "aimlab", "competitive", "ultraligero"], warranty: "24 meses"
  },
  {
    id: "mse-007", name: "Mouse HyperX Pulsefire Haste 2 Wireless", slug: "hyperx-pulsefire-haste2-wireless",
    description: "Honeycomb ultra-ligero 53g, sensor TrueSpeed 26K, wireless 2.4GHz, batería 100h, polling 2000Hz.",
    price: 449.90, brand: "HyperX", category: "mouse",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 17, sku: "HX-PFHASTE2-W", rating: 4.7, reviewCount: 445,
    specs: { "Peso": "53g", "Sensor": "TrueSpeed 26K", "Polling": "2000Hz", "Wireless": "2.4GHz", "Batería": "100h" },
    tags: ["honeycomb", "ultraligero", "wireless", "hyperx"], warranty: "24 meses"
  },
  {
    id: "mse-008", name: "Mouse Finalmouse Starlight-12 Pegasus", slug: "finalmouse-starlight12-pegasus",
    description: "El mouse más ligero: 41g magnesium shell, sensor FinaSensor 3395, edición limitada ultra-premium.",
    price: 1599.90, brand: "Finalmouse", category: "mouse",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"],
    stock: 3, sku: "FM-STAR12-PEG", rating: 4.9, reviewCount: 145, featured: true,
    specs: { "Peso": "41g", "Material": "Magnesium", "Sensor": "FinaSensor (3395 base)", "Wireless": "Ultrafinix receptor", "Edición": "Limitada premium" },
    tags: ["ultraligero", "limitado", "premium", "magnesio"], warranty: "12 meses"
  },
  {
    id: "mse-009", name: "Mouse Logitech G502 X Plus Wireless", slug: "logitech-g502x-plus-wireless",
    description: "Evolución del clásico G502 con sensor HERO 25K, peso ajustable, LIGHTFORCE switches ópticos.",
    price: 649.90, brand: "Logitech", category: "mouse",
    images: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80"],
    stock: 14, sku: "LG-G502XP", rating: 4.7, reviewCount: 678,
    specs: { "Sensor": "HERO 25K", "Switches": "LIGHTFORCE óptico-mecánico", "Wireless": "Lightspeed", "Peso": "89-106g ajustable", "Batería": "130h" },
    tags: ["gaming", "wireless", "ajustable", "lightforce"], warranty: "24 meses"
  },
  {
    id: "mse-010", name: "Mouse Zowie EC2-CW Wireless", slug: "zowie-ec2-cw-wireless",
    description: "Mouse competitivo BenQ-Zowie inalámbrico, bajo lag, sensor 3360, plug & play, ergonómico derecho.",
    price: 499.90, brand: "Zowie", category: "mouse",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 9, sku: "ZWI-EC2-CW", rating: 4.8, reviewCount: 356,
    specs: { "Sensor": "3360 (basado PMW)", "Wireless": "2.4GHz ultra bajo lag", "Diseño": "Ergonómico mano derecha", "Plug&Play": "Sin software necesario", "Polling": "1000Hz" },
    tags: ["competitive", "wireless", "plug-play", "ergonomico"], warranty: "24 meses"
  },
  {
    id: "mse-011", name: "Mouse Razer Viper V3 Pro Wireless", slug: "razer-viper-v3-pro",
    description: "Mouse esimétrico inalámbrico 59g, sensor Focus Pro 35K, polling 8000Hz con DongleBoost, ultra-premium.",
    price: 999.90, brand: "Razer", category: "mouse",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"],
    stock: 7, sku: "RZR-VIPER-V3P", rating: 4.9, reviewCount: 567, featured: true, isNew: true,
    specs: { "Peso": "59g", "Sensor": "Focus Pro 35K", "Polling": "8000Hz", "Wireless": "HyperSpeed 2.4GHz", "Batería": "95h" },
    tags: ["pro", "8000hz", "35k-sensor", "premium"], warranty: "24 meses"
  },
  {
    id: "mse-012", name: "Mouse Pulsar X2V2 Wireless Ultra-Compact", slug: "pulsar-x2v2-wireless",
    description: "Ultra-compacto simétrico 52g, sensor PAW3395, polling 4000Hz, honeycomb flexible.",
    price: 549.90, brand: "Pulsar", category: "mouse",
    images: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80"],
    stock: 11, sku: "PUL-X2V2", rating: 4.8, reviewCount: 234, isNew: true,
    specs: { "Peso": "52g", "Sensor": "PAW3395", "Polling": "4000Hz", "Wireless": "2.4GHz", "Forma": "Simétrica ultra-compacta" },
    tags: ["ultraligero", "simetrico", "wireless", "compact"], warranty: "24 meses"
  },
  {
    id: "mse-013", name: "Mouse Logitech MX Master 3S Inalámbrico Trabajo", slug: "logitech-mx-master3s",
    description: "El mouse perfecto para productividad: rueda MagSpeed, sensor 8000 DPI láser, multi-dispositivo.",
    price: 499.90, brand: "Logitech", category: "mouse",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 25, sku: "LG-MXMASTER3S", rating: 4.9, reviewCount: 2341,
    specs: { "Sensor": "8000 DPI láser", "Rueda": "MagSpeed electromagnética", "Wireless": "Logi Bolt + BT", "Dispositivos": "Hasta 3", "Batería": "70 días" },
    tags: ["productividad", "wireless", "magspeed", "premium"], warranty: "24 meses"
  },
  {
    id: "mse-014", name: "Mouse Endgame Gear XM2WE Wireless", slug: "endgame-gear-xm2we",
    description: "Wireless con sensor PixArt 3370, polling 4000Hz, 63g, forma ambidextra amada por pros.",
    price: 499.90, brand: "Endgame Gear", category: "mouse",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"],
    stock: 9, sku: "EG-XM2WE", rating: 4.8, reviewCount: 312,
    specs: { "Sensor": "PixArt 3370", "Polling": "4000Hz", "Peso": "63g", "Wireless": "2.4GHz", "Forma": "Ambidextra" },
    tags: ["competitive", "ambidextro", "4000hz", "pro"], warranty: "24 meses"
  },
  {
    id: "mse-015", name: "Mouse Ninjutso Origin One X Wireless", slug: "ninjutso-origin-one-x",
    description: "Diseño claw/fingertip simétrico 55g, PAW3395, polling 8000Hz, wireless sub-2ms.",
    price: 599.90, brand: "Ninjutso", category: "mouse",
    images: ["https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80"],
    stock: 7, sku: "NJU-O1X", rating: 4.8, reviewCount: 178, isNew: true,
    specs: { "Peso": "55g", "Sensor": "PAW3395", "Polling": "8000Hz", "Forma": "Simétrica claw/fingertip", "Wireless": "<2ms latencia" },
    tags: ["8000hz", "fingertip", "competitive", "wireless"], warranty: "12 meses"
  },
];

// ─────────────── CONSOLAS ────────────────
export const consolas: Product[] = [
  {
    id: "con-001", name: "Consola PS5 Slim Disc Edition", slug: "ps5-slim-disc-edition",
    description: "PlayStation 5 Slim con lector Blu-ray 4K, SSD ultrarrápido 1TB, DualSense incluido, hasta 8K.",
    price: 1999.90, comparePrice: 2199.90, brand: "Sony", category: "consolas",
    images: ["/image/ConsolaPs5.png"],
    stock: 8, sku: "SONY-PS5-SLIM-DISC", rating: 4.9, reviewCount: 2341, featured: true,
    specs: { "CPU": "AMD Zen 2 8-core 3.5GHz", "GPU": "AMD RDNA2 10.28 TFLOPS", "RAM": "16GB GDDR6", "SSD": "825GB NVMe", "Resolución": "Hasta 8K", "Lector": "Blu-ray 4K" },
    tags: ["ps5", "consola", "sony", "4k"], warranty: "12 meses"
  },
  {
    id: "con-002", name: "Consola Nintendo Switch 2 + Mario Kart World", slug: "nintendo-switch-2-mario-kart",
    description: "Nintendo Switch 2 con Joy-Con mejorados, pantalla LCD 8\", modo TV 1080p, bundle Mario Kart World.",
    price: 2399.90, brand: "Nintendo", category: "consolas",
    images: ["/image/ConsolaNintendo.png"],
    stock: 6, sku: "NIN-SWITCH2-MKW", rating: 4.9, reviewCount: 1234, featured: true, isNew: true,
    specs: { "Pantalla": "8\" LCD multitouch", "Modo TV": "1080p / 4K via dock", "Modo portátil": "1080p", "Controles": "Joy-Con 2.0 mejorados", "Juego": "Mario Kart World incluido" },
    tags: ["nintendo", "portatil", "switch2", "nuevo"], warranty: "12 meses"
  },
  {
    id: "con-003", name: "Xbox Series X 2TB Forza Bundle", slug: "xbox-series-x-2tb-forza",
    description: "Xbox Series X 2TB con Quick Resume, ray tracing nativo, hasta 120fps, bundle Forza Motorsport.",
    price: 2499.90, brand: "Microsoft", category: "consolas",
    images: ["https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80"],
    stock: 7, sku: "XBOX-SX-2TB-FRZ", rating: 4.8, reviewCount: 892,
    specs: { "CPU": "AMD Zen 2 8-core 3.8GHz", "GPU": "AMD RDNA2 12 TFLOPS", "RAM": "16GB GDDR6", "SSD": "2TB NVMe", "Juegos": "Forza Motorsport incluido", "Resolución": "4K 120fps" },
    tags: ["xbox", "4k", "gamepass", "microsoft"], warranty: "12 meses"
  },
  {
    id: "con-004", name: "Xbox Series S 512GB + 3 Meses Game Pass", slug: "xbox-series-s-gamepass",
    description: "El Xbox más pequeño: 1440p 120fps, Game Pass Ultimate 3 meses incluido, all-digital premium.",
    price: 1099.90, brand: "Microsoft", category: "consolas",
    images: ["https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80"],
    stock: 15, sku: "XBOX-SS-512-GP", rating: 4.6, reviewCount: 678,
    specs: { "Resolución": "1440p 120fps", "SSD": "512GB NVMe", "Game Pass": "3 meses Ultimate incluido", "Diseño": "All-digital compacto", "QuickResume": "Múltiples juegos" },
    tags: ["xbox", "digital", "gamepass", "compacto"], warranty: "12 meses"
  },
  {
    id: "con-005", name: "Nintendo Switch OLED Edición Especial Zelda", slug: "nintendo-switch-oled-zelda",
    description: "Switch OLED edición Zelda: Tears of the Kingdom con pantalla OLED 7\", colores exclusivos y dock.",
    price: 1599.90, brand: "Nintendo", category: "consolas",
    images: ["https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=600&q=80"],
    stock: 10, sku: "NIN-OLED-ZELDA", rating: 4.9, reviewCount: 1567,
    specs: { "Pantalla": "7\" OLED", "Modo TV": "1080p", "Portátil": "720p OLED", "Almacenamiento": "64GB + microSD", "Edición": "Zelda Tears of Kingdom" },
    tags: ["nintendo", "oled", "zelda", "edicion-especial"], warranty: "12 meses"
  },
  {
    id: "con-006", name: "PS5 Pro 4K Ultra + DualSense Edge", slug: "ps5-pro-4k-ultra",
    description: "PlayStation 5 Pro con GPU mejorada 45% más rápida, PS Upscale 4K, ray tracing mejorado, 1TB SSD.",
    price: 3199.90, brand: "Sony", category: "consolas",
    images: ["https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80"],
    stock: 4, sku: "SONY-PS5-PRO", rating: 4.9, reviewCount: 456, isNew: true, featured: true,
    specs: { "GPU": "AMD RDNA 4 mejorada +45%", "PSS Upscale": "PS Spectral Super Resolution", "Ray Tracing": "x3 más rápido", "SSD": "2TB NVMe", "Wireless": "Wi-Fi 7" },
    tags: ["ps5pro", "premium", "4k", "nuevo"], warranty: "12 meses"
  },
  {
    id: "con-007", name: "Steam Deck OLED 1TB Limited Edition", slug: "steam-deck-oled-1tb",
    description: "PC portátil gaming Valve con pantalla HDR OLED, AMD APU mejorado, 1TB NVMe, SteamOS 3, acceso biblioteca Steam.",
    price: 1999.90, brand: "Valve", category: "consolas",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 6, sku: "VALVE-SD-OLED-1T", rating: 4.9, reviewCount: 892, isNew: true, featured: true,
    specs: { "Pantalla": "7.4\" OLED HDR 90Hz", "APU": "AMD Zen2+RDNA3 customizado", "RAM": "16GB LPDDR5", "SSD": "1TB NVMe", "OS": "SteamOS 3 / Windows compatible", "Batería": "50Whr 3-12h" },
    tags: ["pc-gaming", "portatil", "steam", "oled"], warranty: "12 meses"
  },
  {
    id: "con-008", name: "Nintendo Switch Lite Coral Rosa", slug: "nintendo-switch-lite-coral",
    description: "Switch Lite compacto para juego portátil, pantalla 5.5\" LCD, controles integrados, 5.5h batería.",
    price: 799.90, brand: "Nintendo", category: "consolas",
    images: ["https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80"],
    stock: 18, sku: "NIN-SL-CORAL", rating: 4.7, reviewCount: 567,
    specs: { "Pantalla": "5.5\" LCD touchscreen", "Batería": "5.5h (3h para juegos intensos)", "Peso": "275g", "Almacenamiento": "32GB + microSD", "Colores": "Coral, Azul, Amarillo, Gris" },
    tags: ["nintendo", "portatil", "compacto", "switch"], warranty: "12 meses"
  },
  {
    id: "con-009", name: "Xbox Series X Edición Especial Halo", slug: "xbox-series-x-halo-edition",
    description: "Xbox Series X edición Halo Infinite con diseño exclusivo, 1TB SSD, mando Spartan Edition incluido.",
    price: 2299.90, brand: "Microsoft", category: "consolas",
    images: ["https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&q=80"],
    stock: 5, sku: "XBOX-SX-HALO", rating: 4.8, reviewCount: 345,
    specs: { "Diseño": "Exclusivo Halo Infinite", "SSD": "1TB NVMe", "Mando": "Spartan Edition incluido", "Resolución": "4K 120fps", "QuickResume": "Sí" },
    tags: ["xbox", "halo", "edicion-especial", "4k"], warranty: "12 meses"
  },
  {
    id: "con-010", name: "Asus ROG Ally Z1 Extreme Gaming Handheld", slug: "asus-rog-ally-z1-extreme",
    description: "Handheld Windows 11 con AMD Z1 Extreme, pantalla 7\" IPS 120Hz, 16GB RAM, 512GB SSD.",
    price: 1999.90, brand: "ASUS", category: "consolas",
    images: ["https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80"],
    stock: 8, sku: "ASUS-ROG-ALLY-Z1E", rating: 4.7, reviewCount: 423, isNew: false,
    specs: { "CPU": "AMD Ryzen Z1 Extreme", "Pantalla": "7\" IPS 120Hz", "RAM": "16GB LPDDR5", "SSD": "512GB PCIe 4.0", "OS": "Windows 11 Home", "Batería": "40Whr" },
    tags: ["windows", "portatil", "asus", "amd"], warranty: "24 meses"
  },
];

// ─────────────── LAPTOPS ────────────────
export const laptops: Product[] = [
  {
    id: "lap-001", name: "ASUS ROG Zephyrus G14 2024 RTX 4060", slug: "asus-rog-zephyrus-g14-2024-rtx4060",
    description: "14\" OLED 165Hz AMD Ryzen 9 8945HS + RTX 4060, 32GB RAM, 1TB SSD, el ultraportátil gaming definitivo.",
    price: 5999.90, comparePrice: 6999.90, brand: "ASUS", category: "laptops",
    images: ["/image/image_laptop/asusRog.png"],
    stock: 6, sku: "ASUS-G14-2024-4060", rating: 4.9, reviewCount: 456, featured: true, isNew: true,
    specs: { "CPU": "AMD Ryzen 9 8945HS", "GPU": "NVIDIA RTX 4060 8GB", "RAM": "32GB LPDDR5X", "SSD": "1TB PCIe 4.0", "Pantalla": "14\" OLED 165Hz 2880x1800", "Batería": "73Whr" },
    tags: ["gaming", "oled", "amd", "rtx4060"], warranty: "24 meses"
  },
  {
    id: "lap-002", name: "MacBook Pro 14\" M3 Pro 18GB", slug: "macbook-pro-14-m3-pro-18gb",
    description: "Apple M3 Pro 11-core CPU / 14-core GPU, 18GB RAM unificada, pantalla Liquid Retina XDR ProMotion 120Hz.",
    price: 7999.90, brand: "Apple", category: "laptops",
    images: ["/image/image_laptop/macBook.png"],
    stock: 8, sku: "APL-MBP14-M3PRO", rating: 4.9, reviewCount: 892, featured: true,
    specs: { "Chip": "Apple M3 Pro", "CPU": "11-core", "GPU": "14-core", "RAM": "18GB unificada", "SSD": "512GB", "Pantalla": "14.2\" Liquid Retina XDR 120Hz" },
    tags: ["apple", "m3", "profesional", "osx"], warranty: "12 meses"
  },
  {
    id: "lap-003", name: "Lenovo Legion Pro 5i Gen 9 RTX 4070", slug: "lenovo-legion-pro5i-gen9-rtx4070",
    description: "Intel Core Ultra 9 185HX + RTX 4070 8GB, 32GB DDR5, 1TB SSD, display 2560x1600 240Hz.",
    price: 7499.90, brand: "Lenovo", category: "laptops",
    images: ["/image/image_laptop/lenovoLegion.png"],
    stock: 5, sku: "LEN-LP5I-4070", rating: 4.8, reviewCount: 312,
    specs: { "CPU": "Intel Core Ultra 9 185HX", "GPU": "RTX 4070 8GB 140W", "RAM": "32GB DDR5 5600MHz", "SSD": "1TB PCIe 4.0", "Pantalla": "16\" 2560x1600 240Hz", "TDP GPU": "140W" },
    tags: ["gaming", "intel", "rtx4070", "lenovo"], warranty: "24 meses"
  },
  {
    id: "lap-004", name: "HP OMEN 16 RTX 4060 Intel Core i7", slug: "hp-omen-16-rtx4060-i7",
    description: "Intel i7-14700HX + RTX 4060, 16GB DDR5, 512GB SSD, QHD 165Hz, diseño premium dark.",
    price: 5499.90, brand: "HP", category: "laptops",
    images: ["/image/image_laptop/hp.png"],
    stock: 7, sku: "HP-OMEN16-4060", rating: 4.7, reviewCount: 234,
    specs: { "CPU": "Intel Core i7-14700HX", "GPU": "RTX 4060 8GB", "RAM": "16GB DDR5", "SSD": "512GB NVMe", "Pantalla": "16\" QHD 165Hz", "Color": "Shadow Black" },
    tags: ["gaming", "intel", "rtx4060", "hp"], warranty: "12 meses"
  },
  {
    id: "lap-005", name: "Razer Blade 15 RTX 4080 240Hz", slug: "razer-blade-15-rtx4080-240hz",
    description: "Intel Core i9-14900HX + RTX 4080, QHD 240Hz, 32GB DDR5, 1TB SSD, CNC aluminium chassis.",
    price: 10999.90, brand: "Razer", category: "laptops",
    images: ["/image/image_laptop/razerBlade.png"],
    stock: 4, sku: "RZR-BLADE15-4080", rating: 4.9, reviewCount: 189, featured: true,
    specs: { "CPU": "Intel Core i9-14900HX", "GPU": "RTX 4080 12GB 175W", "RAM": "32GB DDR5", "SSD": "1TB PCIe 5.0", "Pantalla": "15.6\" QHD 240Hz IPS", "Chasis": "CNC Aluminio" },
    tags: ["premium", "rtx4080", "240hz", "aluminio"], warranty: "24 meses"
  },
  {
    id: "lap-006", name: "MSI Titan GT77 RTX 4090 4K", slug: "msi-titan-gt77-rtx4090-4k",
    description: "El laptop gaming más poderoso: RTX 4090 175W, i9-14900HX, 4K Mini LED 144Hz, 64GB DDR5.",
    price: 14999.90, brand: "MSI", category: "laptops",
    images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80"],
    stock: 2, sku: "MSI-GT77-4090", rating: 4.9, reviewCount: 89, featured: true,
    specs: { "CPU": "Intel Core i9-14900HX", "GPU": "RTX 4090 16GB 175W", "RAM": "64GB DDR5", "SSD": "2TB PCIe 5.0 RAID", "Pantalla": "17.3\" 4K Mini LED 144Hz", "TDP": "250W total" },
    tags: ["extremo", "rtx4090", "4k", "potencia"], warranty: "24 meses"
  },
  {
    id: "lap-007", name: "ASUS TUF Gaming A15 2024 RTX 4060 AMD", slug: "asus-tuf-a15-2024-rtx4060",
    description: "AMD Ryzen 9 7945HX + RTX 4060, IPS 144Hz FHD, 16GB DDR5, militar MIL-STD-810H, precio razonable.",
    price: 4499.90, brand: "ASUS", category: "laptops",
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80"],
    stock: 10, sku: "ASUS-TUFA15-4060", rating: 4.6, reviewCount: 345,
    specs: { "CPU": "AMD Ryzen 9 7945HX", "GPU": "RTX 4060 8GB", "RAM": "16GB DDR5", "SSD": "512GB", "Pantalla": "15.6\" FHD 144Hz IPS", "Certificación": "MIL-STD-810H" },
    tags: ["gaming", "amd", "rtx4060", "resistente"], warranty: "24 meses"
  },
  {
    id: "lap-008", name: "Dell XPS 15 OLED RTX 4070 4K+", slug: "dell-xps15-oled-rtx4070",
    description: "Intel Core i9-14900H + RTX 4070, pantalla OLED 3.5K Touch 120Hz, 32GB RAM, 1TB SSD, workstation slim.",
    price: 9499.90, brand: "Dell", category: "laptops",
    images: ["https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?w=600&q=80"],
    stock: 5, sku: "DELL-XPS15-OLED", rating: 4.8, reviewCount: 234,
    specs: { "CPU": "Intel Core i9-14900H", "GPU": "RTX 4070 8GB", "RAM": "32GB LPDDR5", "SSD": "1TB PCIe 4.0", "Pantalla": "15.6\" OLED 3.5K 120Hz Touch", "Peso": "1.86kg" },
    tags: ["oled", "premium", "workstation", "touch"], warranty: "12 meses"
  },
  {
    id: "lap-009", name: "Lenovo ThinkPad X1 Carbon G11 i7 2K", slug: "lenovo-thinkpad-x1-carbon-g11",
    description: "El ultrabook corporativo definitivo: Intel Evo i7-1365U, 16GB, 1TB, IPS 2K 60Hz, 1.12kg ultraligero.",
    price: 5999.90, brand: "Lenovo", category: "laptops",
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80"],
    stock: 8, sku: "LEN-X1CG11-I7", rating: 4.8, reviewCount: 456,
    specs: { "CPU": "Intel Core i7-1365U (Evo)", "RAM": "16GB LPDDR5", "SSD": "1TB PCIe 4.0", "Pantalla": "14\" 2K 60Hz IPS", "Peso": "1.12kg", "Batería": "57Whr 15h" },
    tags: ["empresarial", "ultraligero", "evo", "thinkpad"], warranty: "36 meses"
  },
  {
    id: "lap-010", name: "Apple MacBook Air 15\" M3 16GB", slug: "macbook-air-15-m3-16gb",
    description: "MacBook Air 15\" con chip M3, 16GB RAM, 512GB SSD, pantalla Liquid Retina, sin ventiladores.",
    price: 6499.90, brand: "Apple", category: "laptops",
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80"],
    stock: 10, sku: "APL-MBA15-M3", rating: 4.9, reviewCount: 678,
    specs: { "Chip": "Apple M3", "CPU": "8-core", "GPU": "10-core", "RAM": "16GB", "SSD": "512GB", "Pantalla": "15.3\" Liquid Retina" },
    tags: ["apple", "m3", "ultraportátil", "silencioso"], warranty: "12 meses"
  },
];

// ─────────────── ACCESORIOS ────────────────
export const accesorios: Product[] = [
  {
    id: "acc-001", name: "Timón Logitech G923 TrueForce + Palanca de Cambios", slug: "logitech-g923-trueforce-shifter",
    description: "Volante force feedback TrueForce, pedales metal, palanca de cambios H-pattern incluida, PC/PlayStation.",
    price: 1679.90, brand: "Logitech", category: "accesorios",
    images: ["/image/timonLogitech.png"],
    stock: 8, sku: "LG-G923-SHIFTER", rating: 4.8, reviewCount: 567, featured: true,
    specs: { "Force Feedback": "TrueForce (Dual motor)", "Pedales": "Metal con freno progresivo", "Shifter": "H-Pattern incluido", "Plataformas": "PC / PlayStation", "Rango": "900° ajustable" },
    tags: ["racing", "simulacion", "logitech", "gaming"], warranty: "12 meses"
  },
  {
    id: "acc-002", name: "Soporte Rack Brazo Monitor + Laptop Articulado", slug: "seisa-brazo-monitor-laptop",
    description: "Brazo articulado de doble soporte para monitor y laptop, ajuste de altura, libera espacio en escritorio.",
    price: 119.90, brand: "Seisa", category: "accesorios",
    images: ["/image/soporteRack.png"],
    stock: 30, sku: "SEI-BRAZO-ML", rating: 4.4, reviewCount: 234,
    specs: { "Carga máx. monitor": "8kg", "Carga máx. laptop": "5kg", "VESA": "75x75 / 100x100", "Rango": "Altura + inclinación + rotación", "Instalación": "Abrazadera escritorio" },
    tags: ["ergonomía", "soporte", "setup"], warranty: "6 meses"
  },
  {
    id: "acc-003", name: "Impresora Multifuncional Epson EcoTank L3250", slug: "epson-ecotank-l3250",
    description: "Sistema tanques EcoTank: imprime, copia y escanea con Wi-Fi, bajo costo por página, alta capacidad.",
    price: 649.90, brand: "Epson", category: "accesorios",
    images: ["/image/impresoraEpson.png"],
    stock: 12, sku: "EPS-L3250", rating: 4.5, reviewCount: 345,
    specs: { "Funciones": "Impresión / Copia / Escaneo", "Wi-Fi": "Integrado + USB", "Resolución": "5760x1440 dpi", "Velocidad": "10ppm B&N / 5ppm color", "Sistema": "EcoTank (tanques)" },
    tags: ["impresora", "wifi", "ecotank", "oficina"], warranty: "12 meses"
  },
  {
    id: "acc-004", name: "Mousepad Steelseries QcK Heavy XXL Gaming", slug: "steelseries-qck-heavy-xxl",
    description: "Mousepad XXL 900x300mm extra grueso 6mm, base antideslizante, textura micro-texturada, bordes cosidos.",
    price: 179.90, brand: "SteelSeries", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80"],
    stock: 40, sku: "SS-QCK-HEAVY-XXL", rating: 4.7, reviewCount: 892,
    specs: { "Tamaño": "900x300x6mm", "Base": "Goma antideslizante", "Textura": "Micro-texturada gaming", "Bordes": "Cosidos antidesgaste", "Lavable": "Sí" },
    tags: ["mousepad", "xxl", "gaming", "grueso"], warranty: "12 meses"
  },
  {
    id: "acc-005", name: "Mousepad Razer Goliathus Chroma Extended RGB", slug: "razer-goliathus-chroma-extended",
    description: "Extended con iluminación Chroma RGB en bordes, micro-textura para sensor óptico/láser, 920x294mm.",
    price: 349.90, brand: "Razer", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1615750184870-ac3fc11fb45a?w=600&q=80"],
    stock: 22, sku: "RZR-GOL-CHROMA-EXT", rating: 4.6, reviewCount: 567,
    specs: { "Tamaño": "920x294x3mm", "RGB": "Chroma en bordes (USB-A)", "Textura": "Gaming-optimized", "Base": "Anti-slip rubber", "Compatible": "Todos los sensores" },
    tags: ["mousepad", "rgb", "extended", "razer"], warranty: "12 meses"
  },
  {
    id: "acc-006", name: "Silla Gaming DXRacer Formula F11 Negro/Rojo", slug: "dxracer-formula-f11-negro-rojo",
    description: "Silla gaming ergonómica DXRacer con reclinación 135°, soporte lumbar, reposa-cabeza, estructura acero.",
    price: 1299.90, brand: "DXRacer", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"],
    stock: 10, sku: "DXR-F11-NR", rating: 4.5, reviewCount: 678,
    specs: { "Reclinación": "135°", "Carga máx.": "120kg", "Altura asiento": "Ajustable", "Material": "PU Leather + acero", "Extras": "Lumbar + reposa-cabeza incluidos" },
    tags: ["silla", "ergonomia", "gaming", "dxracer"], warranty: "24 meses"
  },
  {
    id: "acc-007", name: "Silla Gaming Secretlab Titan EVO 2022 Noire", slug: "secretlab-titan-evo-2022",
    description: "La silla premium más vendida: espuma magnética premium, reclinación 165°, reposabrazos 4D, magnética.",
    price: 2499.90, brand: "Secretlab", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80"],
    stock: 5, sku: "SL-TITAN-EVO-22", rating: 4.8, reviewCount: 1234, featured: true,
    specs: { "Espuma": "Cold-cure premium", "Reclinación": "165°", "Reposabrazos": "4D (arriba/abajo/rotación/profundidad)", "Lumbar": "Magnético ajustable", "Telas": "SoftWeave/NEO Hybrid/NAPA" },
    tags: ["silla", "premium", "4d", "secretlab"], warranty: "36 meses"
  },
  {
    id: "acc-008", name: "Hub USB-C 12-en-1 Ugreen 4K HDMI", slug: "ugreen-hub-usbc-12en1",
    description: "Hub 12-en-1 con 4K HDMI, USB-A 3.0x4, SD/microSD, RJ45 Ethernet, USB-C PD 100W, audio 3.5mm.",
    price: 199.90, brand: "Ugreen", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&q=80"],
    stock: 35, sku: "UGR-HUB12IN1", rating: 4.6, reviewCount: 892,
    specs: { "Puertos": "12 en 1", "HDMI": "4K@60Hz", "USB-A": "4x USB 3.0", "PD": "100W passthrough", "Ethernet": "Gigabit RJ45", "SD": "SD + microSD simultáneo" },
    tags: ["hub", "usb-c", "4k", "trabajo"], warranty: "18 meses"
  },
  {
    id: "acc-009", name: "Capturadora Elgato 4K Pro PCIe Gaming", slug: "elgato-4k-pro-pcie",
    description: "Capturadora PCIe 4K60 HDR para streaming/grabación sin lag, compatible PS5/Xbox Series X, HDMI 2.1.",
    price: 1499.90, brand: "Elgato", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80"],
    stock: 7, sku: "ELG-4K-PRO-PCIE", rating: 4.8, reviewCount: 234,
    specs: { "Resolución": "4K@60fps HDR", "HDMI": "2.1 in/out", "Interfaz": "PCIe x4 interna", "Sin lag": "Ultra-Low Latency", "Compatible": "PS5/Xbox Series X/PC" },
    tags: ["capturadora", "streaming", "4k", "pcie"], warranty: "24 meses"
  },
  {
    id: "acc-010", name: "Iluminación Elgato Light Strip Pro Extendible", slug: "elgato-light-strip-pro",
    description: "LED strip extendible hasta 5m, 2500 lúmenes, 2700K-6500K, app Stream Deck / Elgato Control.",
    price: 249.90, brand: "Elgato", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"],
    stock: 25, sku: "ELG-LIGHT-STRIP-PRO", rating: 4.7, reviewCount: 456, isNew: true,
    specs: { "Luminosidad": "2500 lúmenes", "Temperatura": "2700K - 6500K", "Longitud": "2m + extensión hasta 5m", "Control": "App + Stream Deck + HomeKit", "Wi-Fi": "2.4GHz" },
    tags: ["iluminacion", "setup", "rgb", "streaming"], warranty: "24 meses"
  },
  {
    id: "acc-011", name: "Alfombrilla RGB Corsair MM700 Extended XXL", slug: "corsair-mm700-rgb-xxl",
    description: "XXL con iluminación Capellix RGB de alta densidad en bordes, base antideslizante, USB-A passthrough.",
    price: 399.90, brand: "Corsair", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80"],
    stock: 15, sku: "CRS-MM700-XXL", rating: 4.7, reviewCount: 345,
    specs: { "Tamaño": "930x400x4mm", "RGB": "Capellix 344 LEDs alta densidad", "USB": "Passthrough USB-A integrado", "Superficie": "Micro-weave cloth", "Base": "Anti-slip rubber" },
    tags: ["mousepad", "rgb", "xxl", "corsair"], warranty: "24 meses"
  },
  {
    id: "acc-012", name: "Mesa Gaming RGB Rise Mode Cave Glass", slug: "rise-mode-cave-glass-rgb",
    description: "Escritorio gaming 1500x600mm con patas RGB, superficie de vidrio templado 8mm, gestión cables integrada.",
    price: 1499.90, brand: "Rise Mode", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80"],
    stock: 6, sku: "RM-CAVE-GLASS-RGB", rating: 4.6, reviewCount: 189,
    specs: { "Tamaño": "1500x600mm", "Superficie": "Vidrio templado 8mm", "Patas": "RGB con control remoto", "Cables": "Gestión integrada", "Carga máx.": "50kg" },
    tags: ["escritorio", "gaming", "rgb", "vidrio"], warranty: "12 meses"
  },
  {
    id: "acc-013", name: "Webcam Logitech Brio 4K Ultra HD Pro", slug: "logitech-brio-4k-ultra",
    description: "4K 30fps / 1080p 60fps, HDR, RightLight 4, Windows Hello, FOV ajustable 65/78/90°, 5x zoom digital.",
    price: 799.90, brand: "Logitech", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"],
    stock: 14, sku: "LG-BRIO-4K", rating: 4.8, reviewCount: 892,
    specs: { "Resolución": "4K 30fps / 1080p 60fps", "HDR": "Sí", "FOV": "65°/78°/90° ajustable", "Hello": "Windows Hello IR", "Zoom": "5x digital" },
    tags: ["webcam", "4k", "streaming", "trabajo"], warranty: "24 meses"
  },
  {
    id: "acc-014", name: "Controlador Xbox Elite Series 2 Core", slug: "xbox-elite-series2-core",
    description: "Mando premium con palancas intercambiables, grips texturizados, gatillos ajustables, Bluetooth 5.0.",
    price: 899.90, brand: "Microsoft", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80"],
    stock: 10, sku: "XBOX-ELITE-S2C", rating: 4.8, reviewCount: 1234,
    specs: { "Palancas": "Intercambiables (3 tipos)", "Gatillos": "Ajustables 4 niveles recorrido", "Grip": "Texturizado premium", "BT": "Bluetooth 5.0", "Batería": "40h recargable" },
    tags: ["xbox", "controller", "premium", "pro"], warranty: "12 meses"
  },
  {
    id: "acc-015", name: "Controlador PS5 DualSense Edge Pro", slug: "ps5-dualsense-edge",
    description: "El mando pro oficial PlayStation 5 con gatillos ajustables, palancas intercambiables y perfil guardados.",
    price: 899.90, brand: "Sony", category: "accesorios",
    images: ["https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=600&q=80"],
    stock: 9, sku: "SONY-DS-EDGE", rating: 4.7, reviewCount: 678,
    specs: { "Gatillos": "Ajustables 3 posiciones", "Palancas": "Intercambiables (bajo/alto domo/normal)", "Perfiles": "Hasta 4 guardados en mando", "Cable": "USB-C braided 2.8m", "Compatibilidad": "PS5 + PC" },
    tags: ["ps5", "controller", "pro", "sony"], warranty: "12 meses"
  },
];

// ─────────────── CATALOG COMPLETO ────────────────
export const allProducts: Product[] = [
  ...teclados,
  ...audifonos,
  ...microfonos,
  ...monitores,
  ...mouse,
  ...consolas,
  ...laptops,
  ...accesorios,
];

export const categories = [
  { id: "teclados",   label: "Teclados",   icon: "⌨️",  count: teclados.length },
  { id: "audifonos",  label: "Audífonos",  icon: "🎧",  count: audifonos.length },
  { id: "microfonos", label: "Micrófonos", icon: "🎤",  count: microfonos.length },
  { id: "monitores",  label: "Monitores",  icon: "🖥️",  count: monitores.length },
  { id: "mouse",      label: "Mouse",      icon: "🖱️",  count: mouse.length },
  { id: "consolas",   label: "Consolas",   icon: "🎮",  count: consolas.length },
  { id: "laptops",    label: "Laptops",    icon: "💻",  count: laptops.length },
  { id: "accesorios", label: "Accesorios", icon: "🔌",  count: accesorios.length },
];

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(p => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter(p => p.featured);
}

export function getNewProducts(): Product[] {
  return allProducts.filter(p => p.isNew);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return allProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  );
}
