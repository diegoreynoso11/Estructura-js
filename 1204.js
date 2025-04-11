// "Transformación de una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento."
function sumaCurried (a) {
  console.log(a)
  return function (b) {
    console.log(a + b)
    return function (c) {
      return a + b + c
    }
  }
}

console.log((sumaCurried(1)(2)(3))) // 6
