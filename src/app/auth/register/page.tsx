"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const passwordStrength = (p: string) => {
    if (p.length === 0) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };
  const strength = passwordStrength(form.password);
  const strengthLabel = ["", "Débil", "Regular", "Buena", "Fuerte"][strength];
  const strengthColor = ["", "bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-neon-green"][strength];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-punk-600 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-punk-100" fill="currentColor" />
          </div>
          <h1 className="font-display font-bold text-2xl text-punk-100">
            HYPER<span className="text-punk-300">PUNK</span>
          </h1>
          <p className="text-mm-muted text-sm mt-1">Crea tu cuenta gaming</p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-mm-text mb-6">Registrarse</h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-mm-muted mb-1 block">Nombre completo</label>
              <input className="input-punk w-full" placeholder="Tu nombre" value={form.name} onChange={e => update("name", e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-mm-muted mb-1 block">Email</label>
              <input type="email" className="input-punk w-full" placeholder="tu@email.com" value={form.email} onChange={e => update("email", e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-mm-muted mb-1 block">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input-punk w-full pr-10"
                  placeholder="Mínimo 8 caracteres"
                  value={form.password}
                  onChange={e => update("password", e.target.value)}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-mm-muted hover:text-mm-text">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {form.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4].map(n => (
                      <div key={n} className={`h-1 flex-1 rounded-full transition-all ${n <= strength ? strengthColor : "bg-punk-700"}`} />
                    ))}
                  </div>
                  <p className="text-xs text-mm-muted">Seguridad: <span className="text-mm-text">{strengthLabel}</span></p>
                </div>
              )}
            </div>
            <div>
              <label className="text-xs text-mm-muted mb-1 block">Confirmar contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input-punk w-full pr-10"
                  placeholder="Repite tu contraseña"
                  value={form.confirm}
                  onChange={e => update("confirm", e.target.value)}
                />
                {form.confirm && form.password === form.confirm && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neon-green" />
                )}
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer mt-2">
              <input type="checkbox" className="rounded border-punk-600 bg-punk-800 text-neon-purple mt-0.5" />
              <span className="text-xs text-mm-muted">
                Acepto los{" "}
                <Link href="#" className="text-neon-cyan hover:underline">Términos de servicio</Link>
                {" "}y la{" "}
                <Link href="#" className="text-neon-cyan hover:underline">Política de privacidad</Link>
              </span>
            </label>

            <button type="submit" className="btn-neon w-full py-3.5 mt-2">
              Crear mi cuenta
            </button>
          </form>

          <p className="text-center text-sm text-mm-muted mt-6">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-neon-cyan hover:underline font-medium">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
