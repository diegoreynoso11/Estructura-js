// "Cómo funcionan los ámbitos léxicos (scope) y el comportamiento de elevación de variables en JavaScript."

ejemplo1() // "Hola" // elevacion de la variable localVar
function ejemplo1 () {
  const localVar = 'Soy local'
  console.log(localVar) // "Soy local"
}
// localvar esta definida dentro de la función pero no fuera de ella
// console.log(localVar) // Error: localVar is not defined

// console.log(nombre) // undefined (hoisting de var) todavía no existe nombre
// const nombre = 'Juan'

// if (true) {
// //   console.log(edad) // ReferenceError (hoisting de let) todavía no existe edad
// //   const edad = 30
// }
