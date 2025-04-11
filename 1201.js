//  "Funciones que, dado un mismo conjunto de entradas, siempre devuelven la misma salida sin producir efectos secundarios."

const array = [1, 2, 3]
// Impura
function agregarElemento (arr, elemento) {
  // Modifica el array original
  arr.push(elemento)
  return arr
}

// Pura
function agregarElementoPuro (arr, elemento) {
  // Devuelve una copia modificada
  return [...arr, elemento]
}
// agregarElemento(array, 3) // esta función modificaría el array lo cual puede traer problemas
const nuevoArray = agregarElementoPuro(array, 4) // esta solo lo copia y crea uno nuevo en la variable nuevoArray
console.log(nuevoArray) // [1, 2, 3, 4]
console.log(array) // [1, 2, 3] (sin cambios)
// ------------------ //
let contador = 2

function incrementar () {
  // Modifica una variable externa
  contador++
  return contador
}

console.log(incrementar()) // 1
console.log(incrementar()) // 2 (depende del estado anterior)
// pura
function crearContador () {
  let contador = 0 // Estado encapsulado

  return function incrementar () {
    contador++ // Modifica el estado encapsulado
    return contador
  }
}

const nuevoContador = crearContador()

console.log(nuevoContador()) // 1
console.log(nuevoContador()) // 2
