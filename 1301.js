// "Uso de estructuras de datos como arrays, objetos, sets y maps para almacenar y manipular información."

// Sets
const uniqueNumbers = new Set()

// Agregar elementos
uniqueNumbers.add(1)
uniqueNumbers.add(2)

uniqueNumbers.add(2) // No permite valores repetidos

// Recorrer los valores con: for of o forEach
uniqueNumbers.forEach(v => console.log(v))

console.log(uniqueNumbers) // Set { 1, 2 }

// Verificar si un valor existe
console.log(uniqueNumbers.has(1)) // true

// Eliminar un valor
uniqueNumbers.delete(1)

// Borrar todo el set
uniqueNumbers.clear()

// Maps
const map = new Map()

// Agregar pares clave-valor
map.set('name', 'Juan')
map.set(42, 'La respuesta')
map.set(true, 'Es verdad')

// Acceder a un valor
console.log(map.get('name')) // "Juan"
console.log(map.get(42)) // "La respuesta"

// Verificar si una clave existe
console.log(map.has('name')) // true

// Recorrer los valores con: forEach, entries, keys o values
map.forEach((value, key) => {
  console.log(`Clave: ${key}, Valor: ${value}`)
})
// si se necesitan los indices
Array.from(map).forEach(([key, value], index) => {
  console.log(`Índice: ${index}, Clave: ${key}, Valor: ${value}`)
})
// Eliminar un par clave-valor
map.delete(42)

// Limpiar el map
map.clear()
