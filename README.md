# HyperPunk Store

Tienda online de tecnología gaming construida con Next.js 14.

## Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Estado:** Zustand (carrito persistente)
- **Base de datos:** SQLite + Prisma
- **Pagos:** Stripe Checkout

## Funcionalidades

- Catálogo con 170+ productos en 8 categorías
- Filtros por precio, marca, calificación y stock
- Búsqueda en tiempo real
- Carrito lateral y página de carrito
- Checkout en 3 pasos + Stripe
- Páginas de login y registro
- Detalle de producto (specs, reseñas, envío)

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
cp .env.example .env
npx prisma db push
```

Edita `.env` y coloca tus claves de Stripe si quieres pagos reales.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/           # Rutas (home, catálogo, producto, cart, checkout, auth)
  components/    # UI (Navbar, Footer, ProductCard, CartDrawer)
  data/          # Catálogo de productos
  store/         # Zustand (carrito)
  lib/           # Utilidades
prisma/          # Schema SQLite
```

## Variables de entorno

Ver `.env.example`:

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | Ruta SQLite |
| `NEXTAUTH_SECRET` | Secreto de sesión |
| `STRIPE_SECRET_KEY` | Clave secreta Stripe |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Clave pública Stripe |
| `NEXT_PUBLIC_APP_URL` | URL de la app |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm start` | Servidor de producción |
| `npm run db:push` | Sincronizar schema Prisma |
| `npm run db:studio` | Abrir Prisma Studio |

## Licencia

Privado — HyperPunk Store.
