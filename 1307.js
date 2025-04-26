// "Algoritmos de búsqueda como búsqueda lineal y búsqueda binaria para encontrar elementos en estructuras de datos."

const sortedNumbers = [1, 3, 5, 7, 9, 12, 11, 7, 7, 13, 25, 32, 45, 24, 1234, 231, 123, 23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33]
// búsqueda lineal
function linearSearch (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i // Devuelve el índice del primer elemento encontrado (para tener todos los indices habría que tratarlo de otra manera)
    }
  }
  return -1 // No encontrado
}

// solo funciona con arrays ordenados, lo cual es una limitación, pero al mismo tiempo es mejor para arrays grandes, si el array no esta ordenado la búsqueda binaria puede generar resultados incorrectos
function binarySearchRecursive (array, target, left = 0, right = array.length - 1) {
  if (left > right) return -1 // Caso base: no encontrado

  const mid = Math.floor((left + right) / 2)

  if (array[mid] === target) {
    return mid // Elemento encontrado
  } else if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, right) // Buscar en la mitad derecha
  } else {
    return binarySearchRecursive(array, target, left, mid - 1) // Buscar en la mitad izquierda
  }
}

console.time('Linear Search')
console.log(linearSearch(sortedNumbers, 7)) // 3
console.log(linearSearch(sortedNumbers, 23)) // 17
console.log(linearSearch(sortedNumbers, 111)) // -1
console.timeEnd('Linear Search')

console.time('Binary Search')
console.log(binarySearchRecursive(sortedNumbers, 7)) // 3
console.log(binarySearchRecursive(sortedNumbers, 23)) // 17 // resultado incorrecto porque el array no está ordenado
console.log(linearSearch(sortedNumbers, 111)) // -1
console.timeEnd('Binary Search')
