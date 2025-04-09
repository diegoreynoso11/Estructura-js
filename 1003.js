// "Declaración y uso de funciones en JavaScript, incluyendo funciones anónimas y de flecha."

import { variables } from './1001.js'

const { var5 } = variables
// funciones
function sum (n1, n2) {
  const result = n1 + n2
  const newVal = `${n1} + ${n2} es igual a ${result}`
  return newVal
}
// funciones flecha () =>
const rest = (n1, n2) => {
  const result = n1 - n2
  const newVal = `${n1} - ${n2} es igual a ${result}`
  return newVal
}
console.log(sum(10, 1))
console.log(rest(10, 1));
// funciones anónimas sin parámetros
(function () {
  console.log('Func anónima sin parámetros')
})();
// funciones anónimas flecha sin parámetros
(() => {
  console.log('Func anónima flecha sin parámetros')
})();
// funciones anónimas con parámetros:
((nombre) => {
  console.log(`Hola, ${nombre}`)
})(var5.name) // "Hola, John"
