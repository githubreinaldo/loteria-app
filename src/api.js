// Simulación de API para gestionar jugadas, historial, saldo y resultados

const jugadas = [];
let saldo = 100;

// Función para realizar una jugada
export const realizarJugada = (numero) => {
  const resultado = Math.random() > 0.5 ? 'Ganador' : 'Perdedor';
  const jugada = { fecha: new Date().toLocaleDateString(), numero, resultado };
  jugadas.push(jugada);
  return jugada;
};

// Función para obtener el historial de jugadas
export const obtenerHistorial = () => jugadas;

// Función para obtener los resultados ganadores simulados
export const obtenerResultadosGanadores = () => {
  // Simular resultados ganadores de los últimos 10 días
  return [
    { fecha: '2024-08-20', numero: 5 },
    { fecha: '2024-08-19', numero: 2 },
    { fecha: '2024-08-18', numero: 7 },
  ];
};

// Función para obtener el saldo actual del usuario
export const obtenerSaldo = () => saldo;

// Función para modificar el saldo del usuario
export const modificarSaldo = (monto) => {
  saldo += monto;
  return saldo;
};
