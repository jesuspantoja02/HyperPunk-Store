import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "HyperPunk Store — Periféricos y tecnología gaming",
    template: "%s | HyperPunk Store",
  },
  description:
    "Tienda de tecnología gaming: teclados, audífonos, micrófonos, monitores, consolas, laptops y accesorios. Envío rápido y garantía.",
  keywords: ["gaming", "teclado mecánico", "audífonos gaming", "monitor", "consola", "laptop gaming", "Peru"],
  openGraph: {
    title: "HyperPunk Store — Periféricos y tecnología gaming",
    description: "Catálogo de periféricos y tecnología gaming",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-mm-text min-h-screen flex flex-col">
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
              background: "#0d0d0d",
              color: "#ffffff",
              border: "1px solid #333",
            },
          }}
        />
      </body>
    </html>
  );
}
