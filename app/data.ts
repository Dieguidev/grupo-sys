// app/data.ts

export const ordenesDemo = [
  // ORDEN 1: La que ya tenías (Casi terminada - CON LEVANTE)
  {
    id: "ORD-2026-5701",
    cliente: "GRUPO S&S - CLIENTE VIP",
    fechaRegistro: "14 Ene 2026",
    estadoActualOrden: "Con Levante",
    colorEstado: "text-green-400",
    pasosOrden: [
      { id: 1, nombre: "Aperturada", completado: true },
      { id: 2, nombre: "En Producción", completado: true },
      { id: 3, nombre: "Numerada", completado: true },
      { id: 4, nombre: "Con Canal", completado: true, info: "Verde" },
      { id: 5, nombre: "Con Levante", completado: true, actual: true },
      { id: 6, nombre: "Merc. Entregada", completado: false },
    ],
    contenedores: [
      {
        id: "TGHU-88210",
        tipo: "40HC",
        placa: "A1B-990",
        ubicacion: "Av. Argentina - En ruta",
        estadoTransporte: "En Progreso",
        colorBadge: "bg-blue-600",
        timeline: [
          { paso: "Solicita", hecho: true },
          { paso: "Asignado", hecho: true },
          { paso: "Stand By", hecho: true },
          { paso: "En Progreso", hecho: true, actual: true },
          { paso: "Culminado", hecho: false },
        ],
      },
      {
        id: "MSCU-99123",
        tipo: "20ST",
        placa: "F4C-112",
        ubicacion: "Patio Puerto",
        estadoTransporte: "Stand By",
        colorBadge: "bg-yellow-500 text-black",
        timeline: [
          { paso: "Solicita", hecho: true },
          { paso: "Asignado", hecho: true },
          { paso: "Stand By", hecho: true, actual: true },
          { paso: "En Progreso", hecho: false },
          { paso: "Culminado", hecho: false },
        ],
      },
    ],
  },

  // ORDEN 2: Una nueva, recién empezando (EN PRODUCCIÓN)
  {
    id: "ORD-2026-5705",
    cliente: "GRUPO S&S - PROYECTO MINERO", // Diferente proyecto
    fechaRegistro: "15 Ene 2026",
    estadoActualOrden: "En Producción",
    colorEstado: "text-blue-400",
    pasosOrden: [
      { id: 1, nombre: "Aperturada", completado: true },
      { id: 2, nombre: "En Producción", completado: true, actual: true }, // Aquí está esta orden
      { id: 3, nombre: "Numerada", completado: false },
      { id: 4, nombre: "Con Canal", completado: false },
      { id: 5, nombre: "Con Levante", completado: false },
      { id: 6, nombre: "Merc. Entregada", completado: false },
    ],
    contenedores: [
      {
        id: "HAPAG-11002",
        tipo: "40REF", // Refrigerado
        placa: "Pendiente",
        ubicacion: "Nave en Alta Mar",
        estadoTransporte: "Solicita Transporte",
        colorBadge: "bg-gray-600",
        timeline: [
          { paso: "Solicita", hecho: true, actual: true },
          { paso: "Asignado", hecho: false },
          { paso: "Stand By", hecho: false },
          { paso: "En Progreso", hecho: false },
          { paso: "Culminado", hecho: false },
        ],
      },
      {
        id: "HAPAG-55991",
        tipo: "40REF",
        placa: "Pendiente",
        ubicacion: "Nave en Alta Mar",
        estadoTransporte: "Solicita Transporte",
        colorBadge: "bg-gray-600",
        timeline: [
          { paso: "Solicita", hecho: true, actual: true },
          { paso: "Asignado", hecho: false },
          { paso: "Stand By", hecho: false },
          { paso: "En Progreso", hecho: false },
          { paso: "Culminado", hecho: false },
        ],
      },
    ],
  },
];
