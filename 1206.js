// "Estructuras que permiten mapear funciones sobre valores envueltos o estructurados."

class Maybe {
  constructor (valor) {
    this.valor = valor
  }

  map (fn) {
    if (this.valor === null || this.valor === undefined) {
      return new Maybe(null) // Propaga null/undefined
    }
    return new Maybe(fn(this.valor))
  }
}

// Ejemplo con un valor válido
const maybeValido = new Maybe(5)
const resultadoValido = maybeValido.map((x) => x * 2).map((x) => x + 1).map((x) => x * 3)
console.log(resultadoValido.valor) // 33

// Ejemplo con un valor nulo
const maybeNulo = new Maybe(null)
const resultadoNulo = maybeNulo.map((x) => x * 2).map((x) => x + 1)
console.log(resultadoNulo.valor) // null
