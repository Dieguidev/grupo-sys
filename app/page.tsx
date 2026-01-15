"use client";

import Link from "next/link";
import {
  TrendingUp,
  Package,
  Phone,
  Eye,
  Bell,
  FileText,
  Moon,
  Database,
  Mail,
  HardDrive,
  Server,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* SECCIÓN HERO (Slide 1) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-sm font-medium text-blue-400">
              Propuesta Técnica Enero 2026 - Nexedge
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Transformación Digital S&S
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Eficiencia Logística y Control Masivo. Gestión de 5,700+ Órdenes.
          </h2>
          <Link
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
          >
            VER DEMOSTRACIÓN EN VIVO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SECCIÓN EL DESAFÍO (Slide 2) */}
      <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white">
            El Reto de la Escala
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Tarjeta 1: Volumen Masivo */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Volumen Masivo</h3>
              <p className="text-xl text-blue-400 font-semibold mb-2">
                5,700 Órdenes/Año
              </p>
              <p className="text-slate-400">+ 25 Viajes Diarios</p>
            </div>

            {/* Tarjeta 2: Complejidad Real */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Complejidad Real</h3>
              <p className="text-xl text-blue-400 font-semibold mb-2">
                1 Orden = 10 Contenedores
              </p>
              <p className="text-slate-400">independientes</p>
            </div>

            {/* Tarjeta 3: El Dolor Actual */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">El Dolor Actual</h3>
              <p className="text-slate-400 leading-relaxed">
                Cuellos de botella en atención telefónica/email
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl sm:text-3xl font-semibold text-blue-400">
              Objetivo: Reducir consultas manuales en un{" "}
              <span className="text-white">90%</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOLUCIÓN Y UX (Slide 3) */}
      <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white">
            Visibilidad Total & UX Adaptativo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Tracking Granular */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Tracking Granular</h3>
              <p className="text-slate-400 leading-relaxed">
                Semáforos de estado por contenedor individual
              </p>
            </div>

            {/* Card 2: Notificaciones PWA */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Notificaciones PWA</h3>
              <p className="text-slate-400 leading-relaxed">
                Alertas directas al celular ("Contenedor Liberado") sin descargas
              </p>
            </div>

            {/* Card 3: Reportes Ejecutivos */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Reportes Ejecutivos</h3>
              <p className="text-slate-400 leading-relaxed">
                Envío automático de PDF semanal a Gerencia
              </p>
            </div>

            {/* Card 4: Diseño Fatiga Zero */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Moon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Diseño Fatiga Zero</h3>
              <p className="text-slate-400 leading-relaxed">
                Modo Oscuro nativo para turnos nocturnos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ARQUITECTURA TÉCNICA (Slide 4) */}
      <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white">
            Arquitectura Blindada & Costos Cero
          </h2>

          {/* Sub-sección 1: Estrategia Mantra */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-slate-300">
              Estrategia Mantra
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Plan A: API Oficial */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Plan A: API Oficial</h4>
                <p className="text-slate-400 text-sm">Conexión directa</p>
              </div>

              {/* Plan B: Email Parsing */}
              <div className="bg-slate-800 rounded-xl p-6 border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                  RECOMENDADO
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Plan B: Email Parsing</h4>
                <p className="text-slate-400 text-sm mb-2">Google Workspace</p>
                <p className="text-green-400 font-semibold text-sm">
                  Costo Licencia: $0
                </p>
              </div>

              {/* Plan C: Respaldo Batch */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <HardDrive className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Plan C: Respaldo Batch</h4>
                <p className="text-slate-400 text-sm">Seguridad ante caídas</p>
              </div>
            </div>
          </div>

          {/* Sub-sección 2: Infraestructura Comparativa */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-slate-300">
              Infraestructura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competencia */}
              <div className="bg-red-950/30 rounded-xl p-8 border-2 border-red-500/50">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-red-400" />
                  <h4 className="text-xl font-bold text-white">
                    Nube Variable Competencia
                  </h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Costos Ocultos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Facturación variable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Sin garantía de estabilidad</span>
                  </li>
                </ul>
              </div>

              {/* Nexedge */}
              <div className="bg-green-950/30 rounded-xl p-8 border-2 border-green-500/50">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-green-400" />
                  <h4 className="text-xl font-bold text-white">
                    Servidores VDS Dedicados Nexedge
                  </h4>
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Estabilidad Garantizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Costos fijos predecibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Control total de infraestructura</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INVERSIÓN Y ROADMAP (Slide 5) */}
      <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white">
            Propuesta Económica All-In
          </h2>

          {/* Precio */}
          <div className="text-center mb-12">
            <div className="inline-block bg-slate-900 rounded-2xl p-12 border-2 border-blue-500">
              <p className="text-sm text-slate-400 mb-2">INVERSIÓN TOTAL</p>
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-400 mb-4">
                $17,900
              </p>
              <p className="text-xl text-slate-300 mb-2">USD</p>
              <p className="text-sm text-slate-400">PRECIO FINAL - INCLUYE IGV</p>
            </div>
          </div>

          {/* Nota de Ahorro */}
          <div className="text-center mb-12">
            <p className="text-xl text-green-400 font-semibold">
              Ahorro directo del <span className="text-white text-2xl">18%</span> frente al mercado
            </p>
          </div>

          {/* Lista de Incluye */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">
              Incluye Todo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">Diseño UX/UI</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">Desarrollo Completo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">VDS Dedicado (1 año)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">Licencias $0</span>
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Línea de Tiempo
            </h3>
            <div className="space-y-6">
              {/* Semana 1 */}
              <div className="flex items-start gap-4 bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Semana 1</h4>
                  <p className="text-slate-400">Auditoría Técnica</p>
                </div>
              </div>

              {/* Semana 8 */}
              <div className="flex items-start gap-4 bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Semana 8</h4>
                  <p className="text-slate-400">Go-Live (Portal Web MVP)</p>
                </div>
              </div>

              {/* Semana 10 */}
              <div className="flex items-start gap-4 bg-slate-900 rounded-xl p-6 border-2 border-blue-500">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Semana 10</h4>
                  <p className="text-slate-400">Entrega Final (App PWA + Reportes)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Presentado por <span className="text-blue-500 font-semibold">Nexedge</span> | Enero 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
