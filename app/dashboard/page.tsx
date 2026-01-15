"use client";

import { ordenesDemo } from "../data";
import { useState } from "react";
import {
  CheckCircle,
  Container,
  User,
  MapPin,
  Calendar,
  Building2,
  ChevronDown,
  ChevronUp,
  Truck,
} from "lucide-react";

export default function Dashboard() {
  const [expandedOrders, setExpandedOrders] = useState<Set<string>>(new Set());

  const toggleOrder = (orderId: string) => {
    setExpandedOrders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) {
        newSet.delete(orderId);
      } else {
        newSet.add(orderId);
      }
      return newSet;
    });
  };

  const isExpanded = (orderId: string) => expandedOrders.has(orderId);

  // Calcular progreso general basado en pasos completados
  const calcularProgreso = (pasos: any[]) => {
    const completados = pasos.filter((p) => p.completado).length;
    return Math.round((completados / pasos.length) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header / Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-white">S&S PORTAL</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-300 font-medium hidden sm:inline">
              Grupo S&S
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Órdenes Activas
        </h2>

        {/* Lista de Órdenes con Accordion */}
        <div className="space-y-4">
          {ordenesDemo.map((orden) => {
            const expanded = isExpanded(orden.id);
            const progreso = calcularProgreso(orden.pasosOrden);

            return (
              <div
                key={orden.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden transition-all duration-300 hover:border-slate-700"
              >
                {/* Cabecera de la Orden (Siempre Visible) */}
                <button
                  onClick={() => toggleOrder(orden.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    {/* ID de Orden */}
                    <div className="flex flex-col">
                      <span className="font-mono text-lg font-bold text-white">
                        {orden.id}
                      </span>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-slate-400">{orden.cliente}</span>
                        <span className="text-xs text-slate-500">•</span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span>{orden.fechaRegistro}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Badge de Estado */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${orden.colorEstado} bg-opacity-20 border border-current`}
                    >
                      {orden.estadoActualOrden}
                    </span>

                    {/* Ícono Chevron */}
                    {expanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {/* Cuerpo Expandible (Timeline y Contenedores) */}
                {expanded && (
                  <div className="px-6 py-6 bg-slate-950/50 border-t border-slate-800">
                    {/* Timeline Horizontal */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Progreso de Aduana
                      </h3>
                      <div className="overflow-x-auto pb-4 -mx-4 sm:mx-0 px-4 sm:px-0 scroll-smooth">
                        <div className="relative flex items-start gap-4 sm:gap-6 min-w-max">
                          {orden.pasosOrden.map((paso, index) => {
                            const isLast = index === orden.pasosOrden.length - 1;
                            const isCurrent = paso.actual;
                            const isCompleted = paso.completado;

                            return (
                              <div
                                key={paso.id}
                                className="flex items-start flex-shrink-0"
                              >
                                <div className="flex flex-col items-center min-w-[140px] sm:min-w-[160px] relative">
                                  {/* Ícono y Círculo */}
                                  <div
                                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                      isCurrent
                                        ? "bg-blue-500 ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/50"
                                        : isCompleted
                                        ? "bg-blue-600"
                                        : "bg-slate-700"
                                    }`}
                                  >
                                    {isCompleted ? (
                                      <CheckCircle className="w-6 h-6 text-white" />
                                    ) : (
                                      <div className="w-3 h-3 bg-white rounded-full" />
                                    )}
                                  </div>

                                  {/* Línea horizontal conectora */}
                                  {!isLast && (
                                    <div
                                      className={`absolute top-6 left-full w-4 sm:w-6 h-0.5 ${
                                        isCompleted ? "bg-blue-600" : "bg-slate-700"
                                      }`}
                                    />
                                  )}

                                  {/* Información del Paso */}
                                  <div className="mt-4 text-center px-1">
                                    <p
                                      className={`text-sm font-semibold mb-1 ${
                                        isCurrent
                                          ? "text-blue-400"
                                          : isCompleted
                                          ? "text-white"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {paso.nombre}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Barra de Progreso General */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Progreso General</span>
                          <span className="text-sm font-semibold text-blue-400">
                            {progreso}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progreso}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contenedores */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Desglose por Contenedor
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orden.contenedores.map((contenedor) => (
                          <div
                            key={contenedor.id}
                            className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
                          >
                            {/* Header de la Card */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <Container className="w-5 h-5 text-blue-500" />
                                <span className="font-mono text-sm font-semibold text-white">
                                  {contenedor.id}
                                </span>
                              </div>
                              <span className="text-xs text-slate-400">
                                {contenedor.tipo}
                              </span>
                            </div>

                            {/* Badge de Estado */}
                            <div className="mb-4">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${contenedor.colorBadge}`}
                              >
                                {contenedor.estadoTransporte}
                              </span>
                            </div>

                            {/* Datos Clave */}
                            <div className="space-y-2 mb-6">
                              {contenedor.placa && contenedor.placa !== "Pendiente" && (
                                <div className="flex items-center gap-2 text-sm">
                                  <Truck className="w-4 h-4 text-slate-500" />
                                  <span className="text-slate-300">
                                    <span className="text-slate-500">Placa:</span>{" "}
                                    {contenedor.placa}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{contenedor.ubicacion}</span>
                              </div>
                            </div>

                            {/* Timeline Interna Vertical */}
                            <div className="border-t border-slate-800 pt-4">
                              <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                                Progreso de Transporte
                              </p>
                              <div className="space-y-2">
                                {contenedor.timeline.map((item, idx) => {
                                  const isLast = idx === contenedor.timeline.length - 1;
                                  const isCurrent = item.actual;

                                  return (
                                    <div key={idx} className="flex items-start gap-3">
                                      {/* Línea Vertical */}
                                      <div className="flex flex-col items-center">
                                        <div
                                          className={`w-2 h-2 rounded-full ${
                                            item.hecho
                                              ? "bg-blue-500"
                                              : isCurrent
                                              ? "bg-blue-500 ring-2 ring-blue-500/50"
                                              : "bg-slate-700"
                                          }`}
                                        />
                                        {!isLast && (
                                          <div
                                            className={`w-0.5 h-6 mt-1 ${
                                              item.hecho ? "bg-blue-500" : "bg-slate-700"
                                            }`}
                                          />
                                        )}
                                      </div>

                                      {/* Texto del Paso */}
                                      <div className="flex-1 pb-2">
                                        <p
                                          className={`text-xs ${
                                            isCurrent
                                              ? "text-blue-400 font-semibold"
                                              : item.hecho
                                              ? "text-slate-300"
                                              : "text-slate-500"
                                          }`}
                                        >
                                          {item.paso}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
