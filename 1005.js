// "Funciones que capturan el estado de su entorno de creación, permitiendo acceso a variables externas incluso después de finalizar su contexto original."

// un ejemplo básico de closure es el setTimeout
function esperarYMostrar (mensaje) {
  setTimeout(() => {
    console.log(mensaje)
  }, 1000)
}

esperarYMostrar('¡Hola después de 1 segundo!')

function contador () {
  const count = 5

  return {
    incrementar: (n) => count + n,
    obtenerValor: () => count
  }
}
// miContador es ahora dos funciones incrementar y obtenerValor que se utilizan para acceder al count
const miContador = contador()
console.log(miContador.incrementar(32)) // 37 : 32 + 5
console.log(miContador.obtenerValor()) // 5
// console.log(count) // 'count' no es accesible directamente desde fuera
