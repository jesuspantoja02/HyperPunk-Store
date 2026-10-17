import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "HyperPunk Store — Tecnología Gaming de Élite",
    template: "%s | HyperPunk Store",
  },
  description:
    "La tienda online más completa de tecnología gaming: teclados mecánicos, audífonos, micrófonos, monitores, consolas, laptops y accesorios. Envío rápido, garantía y los mejores precios.",
  keywords: ["gaming", "teclado mecánico", "audífonos gaming", "monitor", "consola", "laptop gaming", "Peru"],
  openGraph: {
    title: "HyperPunk Store — Tecnología Gaming de Élite",
    description: "La tienda online más completa de tecnología gaming",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-dark-950 text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <CartDrawer />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1c2129",
              color: "#d0d7e0",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
