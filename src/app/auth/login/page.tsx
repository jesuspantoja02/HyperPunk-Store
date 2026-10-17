"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-punk-600 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-punk-100" fill="currentColor" />
          </div>
          <h1 className="font-display font-bold text-2xl text-punk-100">
            HYPER<span className="text-punk-300">PUNK</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Bienvenido de vuelta</p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Iniciar sesión</h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input-punk w-full"
                placeholder="tu@email.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="input-punk w-full pr-10"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-right mt-1">
                <Link href="#" className="text-xs text-neon-cyan hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
            </div>

            <button
              type="submit"
              className="btn-neon w-full py-3.5 flex items-center justify-center gap-2 mt-2"
            >
              Iniciar sesión <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-punk-700/50" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-punk-800 px-3 text-xs text-gray-500">o continúa con</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="btn-ghost py-2.5 text-sm flex items-center justify-center gap-2">
              <span className="text-lg">🔵</span> Google
            </button>
            <button className="btn-ghost py-2.5 text-sm flex items-center justify-center gap-2">
              <span className="text-lg">⬛</span> GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/register" className="text-neon-cyan hover:underline font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          Al iniciar sesión aceptas nuestros{" "}
          <Link href="#" className="hover:text-gray-400">Términos de servicio</Link>
          {" "}y{" "}
          <Link href="#" className="hover:text-gray-400">Política de privacidad</Link>
        </p>
      </div>
    </div>
  );
}
