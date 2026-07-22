/**
 * HyperPunk Store — Catálogo de productos e imágenes mediante arreglos
 * Cada producto incluye datos extendidos para la pantalla de detalle.
 * Los productos se recorren con for / while y se insertan en el DOM.
 */

const productosDestacados = [
    {
        id: 'dest-logitech-g923',
        marca: 'Logitech',
        nombre: 'Timón Logitech G923 Driving Force + Palanca De Cambios',
        precio: 1679.00,
        imagen: 'image/timonLogitech.png',
        descripcion: 'Volante de simulación con force feedback TRUEFORCE, pedales de metal y palanca de cambios incluida. Ideal para juegos de carreras en PC y consolas compatibles.',
        especificaciones: ['Force Feedback TRUEFORCE', 'Pedales de metal', 'Palanca de cambios incluida', 'Compatible PC / PlayStation'],
        stock: 8,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'dest-sony-ps5',
        marca: 'Sony',
        nombre: 'Consola PS5 Edición Digital Bundled con Astro Bot (GOTY 2024) + Gran Turismo 7',
        precio: 2099.00,
        imagen: 'image/ConsolaPs5.png',
        descripcion: 'PlayStation 5 Edición Digital con bundle de Astro Bot y Gran Turismo 7. Disfruta de juegos en 4K, tiempos de carga rápidos y el DualSense.',
        especificaciones: ['Edición Digital (sin disco)', 'Incluye Astro Bot y GT7', 'SSD ultrarrápido', 'Salida hasta 4K'],
        stock: 5,
        garantia: '12 meses',
        color: 'Blanco'
    },
    {
        id: 'dest-nintendo-switch2',
        marca: 'Nintendo',
        nombre: 'Consola Nintendo Switch 2 Mario kart World Bundle',
        precio: 2399.00,
        imagen: 'image/ConsolaNintendo.png',
        descripcion: 'Consola Nintendo Switch 2 en bundle con Mario Kart World. Juega en modo portátil o dockeado en tu TV.',
        especificaciones: ['Bundle Mario Kart World', 'Modo portátil y TV', 'Controles Joy-Con', 'Almacenamiento interno ampliable'],
        stock: 6,
        garantia: '12 meses',
        color: 'Multicolor'
    },
    {
        id: 'dest-seisa-soporte',
        marca: 'Seisa',
        nombre: 'Soporte Rack Brazo para Monitor y Laptop Brazo Articulado de Escritorio',
        precio: 119.00,
        imagen: 'image/soporteRack.png',
        descripcion: 'Brazo articulado de escritorio para monitor y laptop. Libera espacio y mejora la ergonomía de tu setup.',
        especificaciones: ['Brazo articulado', 'Soporte monitor + laptop', 'Instalación en escritorio', 'Ajuste de altura e inclinación'],
        stock: 20,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'dest-epson-l3250',
        marca: 'Epson',
        nombre: 'Impresora multifuncional L3250 EPSON',
        precio: 649.00,
        imagen: 'image/impresoraEpson.png',
        descripcion: 'Multifuncional Epson EcoTank L3250 con sistema de tanques de tinta, Wi-Fi e impresión, copia y escaneo.',
        especificaciones: ['Impresión / copia / escaneo', 'Wi-Fi integrado', 'Sistema EcoTank', 'Bajo costo por página'],
        stock: 10,
        garantia: '12 meses',
        color: 'Negro'
    }
];

const productosMouse = [
    {
        id: 'mouse-redragon-storm',
        marca: 'Redragon',
        nombre: 'Mouse Redragon STORM ELITE M988W-RGB WHITE',
        precio: 199.90,
        imagen: 'image/image_mouse/mouse.jpg',
        descripcion: 'Mouse gamer inalámbrico Redragon Storm Elite en color blanco, con iluminación RGB y sensor de alto rendimiento para partidas competitivas.',
        especificaciones: ['Sensor óptico de precisión', 'Conexión wireless', 'Iluminación RGB', 'Diseño ergonómico blanco'],
        stock: 15,
        garantia: '12 meses',
        color: 'Blanco'
    },
    {
        id: 'mouse-logitech-g502',
        marca: 'Logitech',
        nombre: 'MOUSE LOGITECH G502 HERO USB / GAMING / 25,000DPI / SENSOR OPTICO / RGB / NEGRO',
        precio: 229.90,
        imagen: 'image/image_mouse/mouseLogitech.jpg',
        descripcion: 'El clásico Logitech G502 HERO con sensor de hasta 25,000 DPI, botones programables y peso ajustable para un control total.',
        especificaciones: ['Hasta 25,000 DPI', '11 botones programables', 'Peso ajustable', 'RGB LIGHTSYNC', 'Conexión USB'],
        stock: 18,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'mouse-havit-ms1033',
        marca: 'Havit',
        nombre: 'MOUSE GAMER HAVIT GAMENOTE MS1033 8000 DPI',
        precio: 55.90,
        imagen: 'image/image_mouse/mouseHavit.png',
        descripcion: 'Mouse gamer Havit económico con hasta 8,000 DPI, ideal para empezar en el gaming sin gastar de más.',
        especificaciones: ['Hasta 8,000 DPI', 'Diseño gamer', 'Conexión USB', 'Iluminación LED'],
        stock: 30,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'mouse-razer-deathadder',
        marca: 'Razer',
        nombre: 'Mouse Razer DeathAdder Essential Gamer 6400DPI Negro',
        precio: 119.00,
        imagen: 'image/image_mouse/mouseRazer.png',
        descripcion: 'DeathAdder Essential de Razer: forma ergonómica clásica, sensor de 6,400 DPI y switches mecánicos confiables.',
        especificaciones: ['6,400 DPI', 'Forma ergonómica', 'Switches mecánicos Razer', 'Cable USB'],
        stock: 22,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mouse-redragon-gainer',
        marca: 'Redragon',
        nombre: 'Mouse Redragon GAINER M656 Wireless RGB 4000 DPI 7 BOTONES',
        precio: 78.90,
        imagen: 'image/image_mouse/mouseRedragon(1).png',
        descripcion: 'Mouse Redragon Gainer inalámbrico con RGB, 4,000 DPI y 7 botones para uso diario y gaming casual.',
        especificaciones: ['4,000 DPI', '7 botones', 'Wireless', 'RGB'],
        stock: 25,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mouse-teros-te1232',
        marca: 'Teros',
        nombre: 'Mouse gamer TEROS TE-1232G DPI hasta 7200 RGB 7 botones óptico negro',
        precio: 37.00,
        imagen: 'image/image_mouse/mouseteros.png',
        descripcion: 'Mouse Teros de entrada con sensor óptico hasta 7,200 DPI, RGB y 7 botones a un precio accesible.',
        especificaciones: ['Hasta 7,200 DPI', '7 botones', 'RGB', 'Sensor óptico'],
        stock: 40,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'mouse-razer-cobra-gengar',
        marca: 'Razer',
        nombre: 'Mouse Gamer Razer Cobra Customizable Gaming Pokemon Gengar Edition',
        precio: 279.00,
        imagen: 'image/image_mouse/mouseRazerGengar.png',
        descripcion: 'Edición especial Pokémon Gengar del Razer Cobra: ligero, personalizable y con la estética del fantasma favorito.',
        especificaciones: ['Edición Pokémon Gengar', 'Diseño ligero', 'RGB Chroma', 'Botones personalizables'],
        stock: 7,
        garantia: '24 meses',
        color: 'Morado / Negro'
    },
    {
        id: 'mouse-aula-f810',
        marca: 'Aula',
        nombre: 'Mouse Aula F810 6,400 DPI RGB',
        precio: 71.30,
        imagen: 'image/image_mouse/mouseAula.png',
        descripcion: 'Mouse Aula F810 con 6,400 DPI e iluminación RGB, cómodo para sesiones largas de juego.',
        especificaciones: ['6,400 DPI', 'RGB', 'Agarre cómodo', 'USB'],
        stock: 28,
        garantia: '6 meses',
        color: 'Negro'
    }
];

const productosTeclado = [
    {
        id: 'tec-redragon-kumara',
        marca: 'Redragon',
        nombre: 'Teclado Redragon Kumara K552RGB-1 Negro Red Switch',
        precio: 159.90,
        imagen: 'image/image_keyboard/teclado.jpg',
        descripcion: 'Teclado mecánico TKL Redragon Kumara con switches rojos e iluminación RGB. Compacto y duradero para gaming.',
        especificaciones: ['Formato TKL', 'Switch Red', 'RGB', 'Construcción metálica'],
        stock: 14,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'tec-logitech-g413',
        marca: 'Logitech',
        nombre: 'Teclado Logitech G413 Se Blacklight Mechanical Gaming Con Cable Negro',
        precio: 250.00,
        imagen: 'image/image_keyboard/tecladoLogitech.png',
        descripcion: 'Teclado mecánico Logitech G413 SE con retroiluminación y construcción sólida para jugadores exigentes.',
        especificaciones: ['Switches mecánicos', 'Retroiluminación', 'Diseño full-size', 'Cable USB'],
        stock: 12,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'tec-havit-kb432',
        marca: 'Havit',
        nombre: 'Teclado Havit KB432L | Mecanico | SW-Blue | RGB | Negro',
        precio: 99.00,
        imagen: 'image/image_keyboard/tecladoHavit.png',
        descripcion: 'Teclado mecánico Havit con switches azules clicky y RGB. Buena relación calidad-precio.',
        especificaciones: ['Switch Blue', 'RGB', 'Mecánico', 'Anti-ghosting'],
        stock: 20,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'tec-aula-f3287',
        marca: 'Aula',
        nombre: 'Teclado Gamer Mecanico Tkl Aula F3287 Switch Blue',
        precio: 135.00,
        imagen: 'image/image_keyboard/tecladoAula.png',
        descripcion: 'Teclado TKL Aula F3287 con switch blue, ideal si buscas feedback táctil y sonido clicky.',
        especificaciones: ['Formato TKL', 'Switch Blue', 'Mecánico', 'Iluminación'],
        stock: 16,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'tec-rk-r65',
        marca: 'Teros',
        nombre: 'Teclado Royal Kludge RK-R65 RGB Negro S/Chartreuse',
        precio: 275.00,
        imagen: 'image/image_keyboard/tecladoTeros.png',
        descripcion: 'Teclado 65% Royal Kludge con RGB y switches Chartreuse. Compacto para setups modernos.',
        especificaciones: ['Formato 65%', 'RGB', 'Switch Chartreuse', 'Hot-swap (según modelo)'],
        stock: 9,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'tec-tdagger-bora',
        marca: 'T-Dagger',
        nombre: 'Teclado T-Dagger Bora T-TGK313BG-SP Rainbow Negro/Gris S/Red',
        precio: 169.00,
        imagen: 'image/image_keyboard/tecladoTdagger.jpg',
        descripcion: 'Teclado T-Dagger Bora con iluminación rainbow y switches rojos suaves para gaming.',
        especificaciones: ['Switch Red', 'Rainbow lighting', 'Layout español', 'Negro/Gris'],
        stock: 11,
        garantia: '12 meses',
        color: 'Negro / Gris'
    },
    {
        id: 'tec-halion-comanche',
        marca: 'Halion',
        nombre: 'Teclado Halion Gaming Mecanico Comanche 88 KM202 Rainbow Negro S/Red',
        precio: 99.00,
        imagen: 'image/image_keyboard/tecladoHalion.png',
        descripcion: 'Teclado mecánico Halion Comanche 88 teclas, rainbow y switch red a precio competitivo.',
        especificaciones: ['88 teclas', 'Switch Red', 'Rainbow', 'Mecánico'],
        stock: 17,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'tec-antryx-mk760',
        marca: 'Antryx',
        nombre: 'Teclado Antryx MK760L Black RGB Rainbow Mecanico Blue Switch Wired USB',
        precio: 120.00,
        imagen: 'image/image_keyboard/tecladoAntryx.png',
        descripcion: 'Teclado Antryx MK760L mecánico con switch blue, RGB rainbow y conexión USB.',
        especificaciones: ['Switch Blue', 'RGB Rainbow', 'USB cableado', 'Full-size'],
        stock: 13,
        garantia: '12 meses',
        color: 'Negro'
    }
];

const productosAudifonos = [
    {
        id: 'aud-razer-barracuda',
        marca: 'Razer',
        nombre: 'Razer Barracuda X Chroma',
        precio: 399.90,
        imagen: 'image/image_earphone/audifonos.png',
        descripcion: 'Auriculares Razer Barracuda X Chroma multiplataforma con audio inmersivo y micrófono desmontable.',
        especificaciones: ['Multiplataforma', 'Chroma RGB', 'Micrófono desmontable', 'Batería de larga duración'],
        stock: 10,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'aud-hp-dhe8008',
        marca: 'HP',
        nombre: 'Audífonos Estéreo LED HP con Micrófono DHE-8008 Negro',
        precio: 139.90,
        imagen: 'image/image_earphone/audifonosHp.png',
        descripcion: 'Audífonos HP con LED y micrófono integrados, pensados para gaming y uso diario en PC.',
        especificaciones: ['LED', 'Micrófono incluido', 'Estéreo', 'Jack / USB según modelo'],
        stock: 24,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'aud-redragon-zeus',
        marca: 'Redragon',
        nombre: 'Audífonos Gamer Redragon Zeus X H510-RGB 7.1 Virtual',
        precio: 235.00,
        imagen: 'image/image_earphone/audifonosRedragon.png',
        descripcion: 'Redragon Zeus X con sonido surround 7.1 virtual y RGB para una experiencia inmersiva.',
        especificaciones: ['7.1 virtual', 'RGB', 'Almohadillas cómodas', 'Micrófono retráctil'],
        stock: 15,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'aud-sony-inzone',
        marca: 'Sony',
        nombre: 'Sony Audífonos Gamer MDR-G300 con micrófono INZONE H3 Blanco',
        precio: 199.00,
        imagen: 'image/image_earphone/audifonoSony.png',
        descripcion: 'Sony INZONE H3 en blanco: audio nítido, micrófono claro y diseño ligero para sesiones largas.',
        especificaciones: ['Serie INZONE', 'Micrófono de calidad', 'Diseño ligero', 'Compatible PC / PS'],
        stock: 12,
        garantia: '12 meses',
        color: 'Blanco'
    },
    {
        id: 'aud-hyperx-cloud',
        marca: 'HyperX',
        nombre: 'HyperX Cloud Auriculares 7.1 Gamer PC, PS4 - HHSR1-AH-GM/G',
        precio: 719.00,
        imagen: 'image/image_earphone/audifonosHyperx.png',
        descripcion: 'HyperX Cloud con sonido 7.1, comodidad premium y micrófono desmontable. Referencia en e-sports.',
        especificaciones: ['7.1 surround', 'PC / PS4', 'Micrófono desmontable', 'Almohadillas memory foam'],
        stock: 8,
        garantia: '24 meses',
        color: 'Negro / Rojo'
    },
    {
        id: 'aud-razer-blackshark',
        marca: 'Razer',
        nombre: 'Audifono Gamer Razer Blackshark V2 X Multiplataforma 50MM 7.1 Black',
        precio: 195.00,
        imagen: 'image/image_earphone/audifonoRazer.png',
        descripcion: 'BlackShark V2 X con drivers de 50 mm y sonido 7.1. Ligero y multiplataforma.',
        especificaciones: ['Drivers 50 mm', '7.1', 'Multiplataforma', 'Peso ligero'],
        stock: 19,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'aud-corsair-void',
        marca: 'Corsair',
        nombre: 'Corsair Auriculares Gamer VOID RGB ELITE Wireless 7.1 - CA-9011201-NA',
        precio: 699.00,
        imagen: 'image/image_earphone/audifonoCorsair.png',
        descripcion: 'Corsair VOID RGB Elite Wireless con 7.1 y RGB. Libertad inalámbrica sin perder calidad.',
        especificaciones: ['Wireless', '7.1', 'RGB Elite', 'Micrófono unidireccional'],
        stock: 6,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'aud-jbl-quantum610',
        marca: 'JBL',
        nombre: 'JBL - Audífono Quantum 610 Wireless Surround Multiplataforma',
        precio: 519.90,
        imagen: 'image/image_earphone/audifonoJBL.png',
        descripcion: 'JBL Quantum 610 wireless con surround y el sonido característico de JBL para gaming multiplataforma.',
        especificaciones: ['Wireless', 'Surround', 'Multiplataforma', 'Batería de larga duración'],
        stock: 9,
        garantia: '12 meses',
        color: 'Negro'
    }
];

const productosMicrofonos = [
    {
        id: 'mic-hyperx-solocast',
        marca: 'Hyperx',
        nombre: 'Micrófono para Streaming HyperX SoloCast USB Plug & Play Negro',
        precio: 419.00,
        imagen: 'image/image_microphone/micrófonoHyperX.jpg',
        descripcion: 'HyperX SoloCast USB plug & play. Ideal para streamers que buscan calidad sin configuración compleja.',
        especificaciones: ['USB Plug & Play', 'Patrón cardioide', 'Soporte con pivote', 'Mute táctil'],
        stock: 11,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'mic-razer-seiren-negro',
        marca: 'Razer',
        nombre: 'Micrófono Razer Seiren Mini USB Streaming Negro FHD',
        precio: 239.00,
        imagen: 'image/image_microphone/micrófonoRazerNegro.jpg',
        descripcion: 'Razer Seiren Mini compacto en negro: supercardioide para reducir ruido ambiente en streams.',
        especificaciones: ['USB', 'Supercardioide', 'Diseño compacto', 'Soporte incluido'],
        stock: 14,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mic-razer-seiren-blanco',
        marca: 'Razer',
        nombre: 'Razer Seiren Mini USB Streaming Microphone Streaming Blanco y Estuche',
        precio: 239.00,
        imagen: 'image/image_microphone/microfonoraizerBlanco.jpg',
        descripcion: 'Seiren Mini en blanco con estuche. Mismo rendimiento compacto con estética clara para tu setup.',
        especificaciones: ['USB', 'Incluye estuche', 'Supercardioide', 'Color blanco'],
        stock: 10,
        garantia: '12 meses',
        color: 'Blanco'
    },
    {
        id: 'mic-fifine-a6t',
        marca: 'Fifine',
        nombre: 'Micrófono Gamer Fifine A6T BLACK Soporte de brazo',
        precio: 199.00,
        imagen: 'image/image_microphone/micrófonoFifine.jpg',
        descripcion: 'Kit Fifine A6T con micrófono y brazo articulado. Listo para podcast o streaming desde el primer día.',
        especificaciones: ['Incluye brazo', 'USB', 'Control de volumen', 'Filtro pop'],
        stock: 16,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mic-ugreen-cm564',
        marca: 'Ugreen',
        nombre: 'Microfono Ugreen USB CM564 Negro (90416)',
        precio: 79.00,
        imagen: 'image/image_microphone/microfonoUgreenNegro.png',
        descripcion: 'Micrófono USB Ugreen CM564 compacto para reuniones, clases y contenido casual.',
        especificaciones: ['USB', 'Diseño compacto', 'Plug & Play', 'Color negro'],
        stock: 26,
        garantia: '6 meses',
        color: 'Negro'
    },
    {
        id: 'mic-condensador-35mm',
        marca: 'Genérico',
        nombre: 'Microfono Condensador 35mm mini Tripode PC negro',
        precio: 69.90,
        imagen: 'image/image_microphone/microfononegro.png',
        descripcion: 'Micrófono condensador con mini trípode para PC. Opción económica para empezar a grabar.',
        especificaciones: ['Condensador', 'Mini trípode', 'Para PC', 'Conexión 3.5 mm'],
        stock: 35,
        garantia: '3 meses',
        color: 'Negro'
    },
    {
        id: 'mic-logitech-yeti',
        marca: 'Logitech',
        nombre: 'Microfono Gamer Logitech Yeti Org Cardioid Usb P/Streaming Rgb Lightsync Black',
        precio: 275.00,
        imagen: 'image/image_microphone/microfonologitech.png',
        descripcion: 'Logitech Yeti orientado a streaming con patrón cardioide y RGB LIGHTSYNC.',
        especificaciones: ['USB', 'Cardioide', 'RGB LIGHTSYNC', 'Para streaming'],
        stock: 8,
        garantia: '24 meses',
        color: 'Negro'
    },
    {
        id: 'mic-yanmai-sf666',
        marca: 'Genérico',
        nombre: 'Microfono Yanmai Sf-666r Usb Rgb Streaming Gamer Color Negro',
        precio: 44.90,
        imagen: 'image/image_microphone/microfonoYanmain.jpg',
        descripcion: 'Micrófono Yanmai SF-666R USB con RGB para streaming gamer a bajo costo.',
        especificaciones: ['USB', 'RGB', 'Streaming', 'Incluye soporte'],
        stock: 32,
        garantia: '3 meses',
        color: 'Negro'
    }
];

const productosPantallas = [
    {
        id: 'mon-teros-2714',
        marca: 'Teros',
        nombre: 'Monitor Gamer Teros TE-2714S 27” IPS FHD 144Hz 1ms HDMI DP',
        precio: 389.00,
        imagen: 'image/image_screens/teros.png',
        descripcion: 'Monitor gamer Teros 27" IPS Full HD a 144 Hz y 1 ms. Fluidez y colores vivos para competitivos.',
        especificaciones: ['27" IPS', 'Full HD', '144 Hz', '1 ms', 'HDMI + DisplayPort'],
        stock: 12,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mon-lg-ultragear-24',
        marca: 'LG',
        nombre: 'Monitor LG UltraGear 24G411A-B 24P FHD IPS 144HZ 1MS G-Sync FreeSync',
        precio: 499.00,
        imagen: 'image/image_screens/lg24.png',
        descripcion: 'LG UltraGear 24" IPS 144 Hz compatible con G-Sync y FreeSync para partidas sin tearing.',
        especificaciones: ['24" IPS', '144 Hz', '1 ms', 'G-Sync Compatible', 'FreeSync'],
        stock: 10,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mon-xiaomi-a22i',
        marca: 'Xiaomi',
        nombre: 'Monitor Xiaomi A22i 22′ Full HD 75Hz HDMI VGA',
        precio: 350.00,
        imagen: 'image/image_screens/xiaomi22.png',
        descripcion: 'Monitor Xiaomi A22i 22" Full HD 75 Hz con HDMI y VGA. Ideal para estudio u oficina.',
        especificaciones: ['22" Full HD', '75 Hz', 'HDMI', 'VGA'],
        stock: 15,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mon-hp-524sw',
        marca: 'HP',
        nombre: 'Monitor HP 524SW de 238 Blanco Panel IPS 100Hz 5ms 94C21AA',
        precio: 669.00,
        imagen: 'image/image_screens/hp23.png',
        descripcion: 'Monitor HP en blanco con panel IPS 100 Hz. Estética limpia y buen rendimiento para trabajo.',
        especificaciones: ['Panel IPS', '100 Hz', '5 ms', 'Color blanco'],
        stock: 7,
        garantia: '12 meses',
        color: 'Blanco'
    },
    {
        id: 'mon-caixun-27',
        marca: 'CAIXUN',
        nombre: 'Monitor Oficina Caixun 27 FHD VA 100Hz sRGB110% Negro C27F2F',
        precio: 309.00,
        imagen: 'image/image_screens/CAIXUN.png',
        descripcion: 'Monitor Caixun 27" VA Full HD 100 Hz con amplia cobertura sRGB para oficina y multimedia.',
        especificaciones: ['27" VA', 'Full HD', '100 Hz', 'sRGB 110%'],
        stock: 18,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mon-lg-4k-27',
        marca: 'LG',
        nombre: 'Monitor LG Ips Uhd 4k resoluciÓn 3840 X 2160 LG 27us500-w',
        precio: 789.00,
        imagen: 'image/image_screens/LG.png',
        descripcion: 'Monitor LG IPS UHD 4K de 27". Ideal para edición, diseño y contenido en alta resolución.',
        especificaciones: ['27" IPS', '4K UHD 3840×2160', 'Alta nitidez', 'Para productividad'],
        stock: 5,
        garantia: '12 meses',
        color: 'Blanco / Plata'
    },
    {
        id: 'mon-teros-2403',
        marca: 'TEROS',
        nombre: 'Monitor Teros 24" Curvo FHD (1920x1080) 144Hz 1ms (TE-2403S)',
        precio: 389.00,
        imagen: 'image/image_screens/teros1.png',
        descripcion: 'Monitor curvo Teros 24" Full HD 144 Hz. Inmersión extra gracias a la curvatura de pantalla.',
        especificaciones: ['24" curvo', 'Full HD', '144 Hz', '1 ms'],
        stock: 13,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'mon-asus-vy249',
        marca: 'ASUS',
        nombre: 'Monitor Asus Eye Care 24" IPS FHD (1920x1080) 120Hz 1ms (VY249HGR)',
        precio: 369.00,
        imagen: 'image/image_screens/ASUS.png',
        descripcion: 'ASUS Eye Care 24" IPS 120 Hz con tecnologías para cuidar la vista en jornadas largas.',
        especificaciones: ['24" IPS', '120 Hz', '1 ms', 'Eye Care', 'Full HD'],
        stock: 11,
        garantia: '36 meses',
        color: 'Negro'
    }
];

const productosLaptop = [
    {
        id: 'lap-hp-probook',
        marca: 'HP',
        nombre: 'Laptop HP ProBook 640 G8 i5 11va 16GB RAM 256GB SSD Reacondicionada FHD',
        precio: 1500.00,
        imagen: 'image/image_laptop/laptop1.jpg',
        descripcion: 'HP ProBook 640 G8 reacondicionada: Intel i5 11va, 16 GB RAM y SSD 256 GB. Equipo confiable para trabajo.',
        especificaciones: ['Intel i5 11va', '16 GB RAM', '256 GB SSD', 'Pantalla FHD', 'Reacondicionada'],
        stock: 4,
        garantia: '6 meses',
        color: 'Plata'
    },
    {
        id: 'lap-asus-v16',
        marca: 'ASUS',
        nombre: 'LAPTOP GAMER ASUS V16 V3607VU-RP038W INTEL CORE 5 16GB RAM 512GB SSD RTX 4050 16',
        precio: 3200.90,
        imagen: 'image/image_laptop/laptop2.png',
        descripcion: 'ASUS V16 gamer con RTX 4050, 16 GB RAM y 512 GB SSD. Potencia para juegos y creación de contenido.',
        especificaciones: ['Intel Core 5', '16 GB RAM', '512 GB SSD', 'RTX 4050', 'Pantalla 16"'],
        stock: 6,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'lap-lenovo-loq',
        marca: 'LENOVO',
        nombre: 'LAPTOP GAMER LOQ INTEL CORE I5 16GB RAM 1TB SSD RTX 3050 6GB 15.6" FHD 144HZ',
        precio: 2899.90,
        imagen: 'image/image_laptop/laptop3.png',
        descripcion: 'Lenovo LOQ con RTX 3050 6 GB, 1 TB SSD y pantalla 144 Hz. Gran equilibrio precio-rendimiento.',
        especificaciones: ['Intel Core i5', '16 GB RAM', '1 TB SSD', 'RTX 3050 6 GB', '15.6" FHD 144 Hz'],
        stock: 7,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'lap-acer-nitro',
        marca: 'ACER',
        nombre: 'LAPTOP GAMER ACER NITRO V INTEL CORE I5 16GB RAM 512GB SSD RTX 5050 15.6',
        precio: 3000.00,
        imagen: 'image/image_laptop/laptop4.png',
        descripcion: 'Acer Nitro V con gráficos RTX 5050, lista para gaming exigente y multitarea.',
        especificaciones: ['Intel Core i5', '16 GB RAM', '512 GB SSD', 'RTX 5050', '15.6"'],
        stock: 5,
        garantia: '12 meses',
        color: 'Negro'
    },
    {
        id: 'lap-asus-2en1',
        marca: 'ASUS',
        nombre: 'Laptop ASUS 16 2K Táctil 2 en 1 Intel Core Ultra 7 256V 16GB 1TB Win11',
        precio: 3800.00,
        imagen: 'image/image_laptop/laptop5.png',
        descripcion: 'Convertible ASUS 2 en 1 táctil 2K con Intel Core Ultra 7, 16 GB y 1 TB. Productividad y movilidad.',
        especificaciones: ['2 en 1 táctil', 'Pantalla 2K 16"', 'Core Ultra 7', '16 GB RAM', '1 TB', 'Windows 11'],
        stock: 4,
        garantia: '12 meses',
        color: 'Gris'
    },
    {
        id: 'lap-asus-vivobook',
        marca: 'ASUS',
        nombre: 'LAPTOP ASUS VIVOBOOK 15 X1504VA-BQ4587W INTEL CORE 7 150U 16GB 512SSD 15.6" FHD',
        precio: 4500.90,
        imagen: 'image/image_laptop/laptop6.png',
        descripcion: 'ASUS Vivobook 15 con Intel Core 7 150U, 16 GB y SSD 512 GB. Ultraportátil para estudio y oficina.',
        especificaciones: ['Intel Core 7 150U', '16 GB RAM', '512 GB SSD', '15.6" FHD'],
        stock: 6,
        garantia: '12 meses',
        color: 'Plata'
    },
    {
        id: 'lap-hp-ai',
        marca: 'HP',
        nombre: 'LAPTOP HP AI 15-FD2381LA INTEL CORE ULTRA 7 24GB RAM 1TB SSD 15.6',
        precio: 3990.99,
        imagen: 'image/image_laptop/laptop8.png',
        descripcion: 'HP con Intel Core Ultra 7 y 24 GB RAM, orientada a cargas con IA y multitarea intensa.',
        especificaciones: ['Core Ultra 7', '24 GB RAM', '1 TB SSD', '15.6"', 'Funciones AI'],
        stock: 5,
        garantia: '12 meses',
        color: 'Plata'
    },
    {
        id: 'lap-asus-tuf-a16',
        marca: 'ASUS',
        nombre: 'LAPTOP ASUS TUF GAMING A16 R9 16GB 1TB RTX 5070 8GB 16\'',
        precio: 5190.90,
        imagen: 'image/image_laptop/laptop7.png',
        descripcion: 'ASUS TUF Gaming A16 con Ryzen 9 y RTX 5070 8 GB. Máximo rendimiento para gaming AAA.',
        especificaciones: ['AMD Ryzen 9', '16 GB RAM', '1 TB SSD', 'RTX 5070 8 GB', 'Pantalla 16"'],
        stock: 3,
        garantia: '24 meses',
        color: 'Negro'
    }
];

/** Catálogo completo indexado por categoría */
const catalogoProductos = {
    destacados: productosDestacados,
    mouse: productosMouse,
    teclado: productosTeclado,
    audifonos: productosAudifonos,
    microfonos: productosMicrofonos,
    pantallas: productosPantallas,
    laptop: productosLaptop
};

/** Categorías de la página productos.html */
const categoriasTienda = [
    { nombre: 'Laptops', href: 'laptop.html', imagen: 'image/image_laptop/laptop.png', alt: 'Categoría Laptops gaming' },
    { nombre: 'Monitores', href: 'pantallas.html', imagen: 'image/image_screens/monitor.jpg', alt: 'Categoría Monitores' },
    { nombre: 'Mouse', href: 'mouse.html', imagen: 'image/image_mouse/mouse.jpg', alt: 'Categoría Mouse gaming' },
    { nombre: 'Teclados', href: 'teclado.html', imagen: 'image/image_keyboard/teclado.jpg', alt: 'Categoría Teclados' },
    { nombre: 'Audífonos', href: 'audifonos.html', imagen: 'image/image_earphone/audifonos.png', alt: 'Categoría Audífonos' },
    { nombre: 'Micrófonos', href: 'microfonos.html', imagen: 'image/image_microphone/microfono.jpg', alt: 'Categoría Micrófonos' }
];

function productosEnPaginas() {
    return window.location.pathname.includes('/pages/');
}

function rutaImagenProducto(ruta) {
    if (!ruta) return '';
    if (ruta.indexOf('http') === 0 || ruta.indexOf('data:') === 0) return ruta;
    if (productosEnPaginas()) {
        return '../' + ruta;
    }
    return ruta;
}

function formatearPrecioProducto(precio) {
    return 'S/ ' + Number(precio).toFixed(2);
}

function urlDetalleProducto(id) {
    if (productosEnPaginas()) {
        return 'detalle.html?id=' + encodeURIComponent(id);
    }
    return 'pages/detalle.html?id=' + encodeURIComponent(id);
}

/**
 * Busca un producto por id recorriendo todos los arreglos del catálogo.
 */
function buscarProductoPorId(id) {
    if (!id) return null;

    const claves = Object.keys(catalogoProductos);
    for (let i = 0; i < claves.length; i++) {
        const lista = catalogoProductos[claves[i]];
        for (let j = 0; j < lista.length; j++) {
            if (lista[j].id === id) {
                return {
                    marca: lista[j].marca,
                    nombre: lista[j].nombre,
                    precio: lista[j].precio,
                    imagen: lista[j].imagen,
                    id: lista[j].id,
                    descripcion: lista[j].descripcion,
                    especificaciones: lista[j].especificaciones,
                    stock: lista[j].stock,
                    garantia: lista[j].garantia,
                    color: lista[j].color,
                    categoria: claves[i]
                };
            }
        }
    }

    return null;
}

/**
 * Inserta productos desde un arreglo. Cada tarjeta enlaza al detalle.
 */
function renderizarProductosDesdeArreglo(arreglo, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody || !arreglo || arreglo.length === 0) return;

    let html = '';
    let i = 0;

    while (i < arreglo.length) {
        html += '<tr>';
        let columna = 0;

        while (columna < 4 && i < arreglo.length) {
            const p = arreglo[i];
            const src = rutaImagenProducto(p.imagen);
            const href = urlDetalleProducto(p.id);
            html += `
                <td data-producto-id="${p.id}">
                    <a href="${href}" class="producto-enlace">
                        <img src="${src}" alt="${p.nombre}" class="imagen" width="180" height="180" loading="lazy">
                        <h3>${p.marca}</h3>
                        <h4>${p.nombre}</h4>
                        <p>${formatearPrecioProducto(p.precio)}</p>
                    </a>
                </td>
            `;
            i++;
            columna++;
        }

        html += '</tr>';
    }

    tbody.innerHTML = html;
}

function renderizarCategoriasDesdeArreglo(tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    let html = '';
    let i = 0;

    while (i < categoriasTienda.length) {
        html += '<tr>';
        let columna = 0;

        while (columna < 3 && i < categoriasTienda.length) {
            const c = categoriasTienda[i];
            const src = rutaImagenProducto(c.imagen);
            html += `
                <td>
                    <a href="${c.href}">
                        <img src="${src}" alt="${c.alt}" class="imagen" width="150" height="150" loading="lazy">
                        <h4>${c.nombre}</h4>
                    </a>
                </td>
            `;
            i++;
            columna++;
        }

        html += '</tr>';
    }

    tbody.innerHTML = html;
}

function inicializarCatalogoPagina() {
    const contenedor = document.querySelector('[data-categoria]');
    if (!contenedor) return;

    const categoria = contenedor.getAttribute('data-categoria');

    if (categoria === 'categorias') {
        renderizarCategoriasDesdeArreglo('lista-productos');
        return;
    }

    const arreglo = catalogoProductos[categoria];
    if (!arreglo) return;

    renderizarProductosDesdeArreglo(arreglo, 'lista-productos');
}

function obtenerTodosLosProductos() {
    const todos = [];
    const claves = Object.keys(catalogoProductos);

    for (let i = 0; i < claves.length; i++) {
        const categoria = claves[i];
        const lista = catalogoProductos[categoria];

        for (let j = 0; j < lista.length; j++) {
            todos.push({
                id: lista[j].id,
                marca: lista[j].marca,
                nombre: lista[j].nombre,
                precio: lista[j].precio,
                imagen: lista[j].imagen,
                descripcion: lista[j].descripcion,
                especificaciones: lista[j].especificaciones,
                stock: lista[j].stock,
                garantia: lista[j].garantia,
                color: lista[j].color,
                categoria: categoria
            });
        }
    }

    return todos;
}

function buscarProductosEnArreglo(texto) {
    const consulta = texto.trim().toLowerCase();
    const resultados = [];

    if (consulta.length === 0) {
        return resultados;
    }

    const todos = obtenerTodosLosProductos();

    for (let i = 0; i < todos.length; i++) {
        const p = todos[i];
        const marca = p.marca.toLowerCase();
        const nombre = p.nombre.toLowerCase();
        const categoria = p.categoria.toLowerCase();
        const descripcion = (p.descripcion || '').toLowerCase();

        if (
            marca.indexOf(consulta) !== -1 ||
            nombre.indexOf(consulta) !== -1 ||
            categoria.indexOf(consulta) !== -1 ||
            descripcion.indexOf(consulta) !== -1
        ) {
            resultados.push(p);
        }
    }

    return resultados;
}

function urlPaginaBusqueda(consulta) {
    const q = encodeURIComponent(consulta.trim());
    if (productosEnPaginas()) {
        return 'buscar.html?q=' + q;
    }
    return 'pages/buscar.html?q=' + q;
}

function enlazarBuscador() {
    const formularios = document.querySelectorAll('form[role="search"]');

    for (let i = 0; i < formularios.length; i++) {
        const form = formularios[i];
        const input = form.querySelector('input[type="search"], input[name="q"]');
        if (!input) continue;

        if (!form.querySelector('.btn-buscar')) {
            const boton = document.createElement('button');
            boton.type = 'submit';
            boton.className = 'btn-buscar';
            boton.textContent = 'Buscar';
            boton.setAttribute('aria-label', 'Buscar productos');
            form.classList.add('form-buscar');
            form.appendChild(boton);
        }

        form.addEventListener('submit', (evento) => {
            evento.preventDefault();
            const texto = input.value.trim();

            if (texto.length === 0) {
                input.focus();
                return;
            }

            window.location.href = urlPaginaBusqueda(texto);
        });
    }
}

function mostrarResultadosBusqueda() {
    const tbody = document.getElementById('lista-resultados');
    const titulo = document.getElementById('titulo-busqueda');
    const mensaje = document.getElementById('mensaje-busqueda');
    if (!tbody) return;

    const params = new URLSearchParams(window.location.search);
    const consulta = params.get('q') || '';

    const inputHeader = document.querySelector('form[role="search"] input[name="q"]');
    if (inputHeader) {
        inputHeader.value = consulta;
    }

    if (titulo) {
        titulo.textContent = consulta
            ? 'Resultados para: "' + consulta + '"'
            : 'Búsqueda de productos';
    }

    const resultados = buscarProductosEnArreglo(consulta);

    if (consulta.length === 0) {
        tbody.innerHTML = '';
        if (mensaje) {
            mensaje.textContent = 'Escriba un término en el buscador y pulse Buscar.';
            mensaje.classList.remove('oculto');
        }
        return;
    }

    if (resultados.length === 0) {
        tbody.innerHTML = '';
        if (mensaje) {
            mensaje.textContent = 'No se encontraron productos para "' + consulta + '".';
            mensaje.classList.remove('oculto');
        }
        return;
    }

    if (mensaje) {
        mensaje.textContent = resultados.length + ' producto(s) encontrado(s).';
        mensaje.classList.remove('oculto');
    }

    renderizarProductosDesdeArreglo(resultados, 'lista-resultados');
}

/**
 * Pinta la ficha de detalle leyendo ?id= del URL.
 */
function mostrarDetalleProducto() {
    const contenedor = document.getElementById('detalle-producto');
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const producto = buscarProductoPorId(id);

    if (!producto) {
        contenedor.innerHTML = `
            <h1 class="page-title">Producto no encontrado</h1>
            <p class="detalle-aviso">No existe un producto con ese identificador.</p>
            <p><a href="productos.html" class="btn-detalle-secundario">Volver a productos</a></p>
        `;
        return;
    }

    document.title = producto.nombre + ' | HyperPunk Store';

    let specsHtml = '';
    const specs = producto.especificaciones || [];
    for (let i = 0; i < specs.length; i++) {
        specsHtml += `<li>${specs[i]}</li>`;
    }

    const src = rutaImagenProducto(producto.imagen);

    contenedor.innerHTML = `
        <article class="detalle-layout">
            <div class="detalle-imagen">
                <img src="${src}" alt="${producto.nombre}" width="420" height="420">
            </div>
            <div class="detalle-datos">
                <p class="detalle-marca">${producto.marca}</p>
                <h1 class="detalle-nombre">${producto.nombre}</h1>
                <p class="detalle-precio">${formatearPrecioProducto(producto.precio)}</p>
                <p class="detalle-descripcion">${producto.descripcion}</p>
                <ul class="detalle-meta">
                    <li><strong>Color:</strong> ${producto.color}</li>
                    <li><strong>Stock:</strong> ${producto.stock} unidades</li>
                    <li><strong>Garantía:</strong> ${producto.garantia}</li>
                    <li><strong>Categoría:</strong> ${producto.categoria}</li>
                </ul>
                <h2>Especificaciones</h2>
                <ul class="detalle-specs">${specsHtml}</ul>
                <div class="detalle-acciones">
                    <button type="button" class="btn-agregar-carrito btn-detalle-carrito" id="btn-detalle-agregar">Agregar al carrito</button>
                    <a href="javascript:history.back()" class="btn-detalle-secundario">Volver</a>
                </div>
            </div>
        </article>
    `;

    const btn = document.getElementById('btn-detalle-agregar');
    if (btn) {
        btn.addEventListener('click', () => {
            if (typeof agregarAlCarrito !== 'function') {
                alert('El carrito no está disponible en esta página.');
                return;
            }

            agregarAlCarrito({
                id: producto.id,
                nombre: producto.nombre,
                marca: producto.marca,
                precio: producto.precio,
                imagen: producto.imagen
            });

            if (typeof mostrarToastCarrito === 'function') {
                mostrarToastCarrito('Agregado: ' + producto.nombre);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarCatalogoPagina();
    enlazarBuscador();
    mostrarResultadosBusqueda();
    mostrarDetalleProducto();
});
