// "Funciones que aceptan otras funciones como argumentos o las retornan como resultados."

function aplicarOperacion (a, b, operacion) {
  return operacion(a, b)
}

const suma = (x, y) => x + y
const resta = (x, y) => x - y
const multiplicar = (x, y) => x * y

console.log(aplicarOperacion(5, 3, suma)) // 8
console.log(aplicarOperacion(5, 3, resta)) // 2
console.log(aplicarOperacion(5, 3, multiplicar)) // 15

//  Funciones de orden superior incorporadas en JavaScript
// .map
const numeros = [1, 2, 3]
const cuadrados = numeros.map((x) => x * x)

console.log(cuadrados) // [1, 4, 9]
// .filter
const n = [1, 2, 3, 4, 5]
const pares = n.filter((x) => x % 2 === 0)

console.log(pares) // [2, 4]
// .reduce
const sumaReduce = n.reduce((acc, currV) => acc + currV, 0)
console.log(sumaReduce)
// otro ejemplo
function validarDatos (datos, next, enviar) {
  if (!datos || Object.keys(datos).length === 0) {
    console.log('Error: Datos inválidos.')
    return
  }
  if (datos.nombre.length > 10) {
    console.log('Error: Nombre incorrecto')
    return
  }
  console.log('Datos válidos.')
  next()
  enviar()
}

function procesarDatos () {
  console.log('Procesando datos...')
}
const enviarSolicitud = () => {
  console.log('Enviando solicitud...')
}
const datos = { nombre: 'abc1547849', edad: 30 }

validarDatos(datos, procesarDatos, enviarSolicitud)
