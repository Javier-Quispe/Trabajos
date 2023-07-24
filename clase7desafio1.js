// Paso 1: Crear un array con las operaciones bancarias
const operacionesBancarias = [1000, -200, 500, -1000, 300];

// Paso 2: Crear una función para calcular los saldos
function calcularSaldos(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;
  let saldoActual = 0;

  for (let i = 0; i < operaciones.length; i++) {
    const operacion = operaciones[i];
    if (operacion > 0) {
      saldoDepositos += operacion;
      saldoActual += operacion;
    } else {
      saldoRetiros += Math.abs(operacion);
      saldoActual += operacion;
    }
  }

  return {
    saldoDepositos,
    saldoRetiros,
    saldoActual
  };
}

// Paso 3: Crear una función para obtener el nombre, apellido y saldos
function obtenerInformacionCliente(nombre, apellido, operaciones) {
  const saldos = calcularSaldos(operaciones);

  return {
    nombre,
    apellido,
    ...saldos
  };
}

// Ejemplo de uso
const cliente = obtenerInformacionCliente("John", "Doe", operacionesBancarias);
console.log(cliente);
