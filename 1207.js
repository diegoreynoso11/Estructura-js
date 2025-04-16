// "Patrón que permite encadenar operaciones, manejando contextos como la asincronía o el manejo de errores."

// monad
class Maybe {
  constructor (valor) {
    this.valor = valor
  }

  // Método map para transformar el valor envuelto
  map (fn) {
    if (!fn) return new Maybe(null)
    if (this.valor === null || this.valor === undefined) {
      return new Maybe(null) // Propaga null/undefined
    }
    return new Maybe(fn(this.valor))
  }

  // Método flatMap para evitar anidamientos
  flatMap (fn) {
    if (!fn) return new Maybe(null)
    if (this.valor === null || this.valor === undefined) {
      return new Maybe(null)
    }
    const resultado = fn(this.valor)
    return resultado instanceof Maybe ? resultado : new Maybe(resultado)
  }

  // Método para obtener el valor envuelto
  getOrElse (valorPorDefecto = 'Valor invalido') {
    return this.valor !== null && this.valor !== undefined ? this.valor : valorPorDefecto
  }
}

// Ejemplo de uso
const dividir = (x, y) => (y === 0 ? null : x / y)

const resultado = new Maybe(10)
  .map((x) => x + 5) // 10 + 5 = 15
  .flatMap((x) => new Maybe(dividir(x, 3))) // 15 / 3 = 5
  .map((x) => x * 3) // 5 * 3 = 15
  .map((x) => x + 15) // 15 + 15 = 30
  .map((x) => x + 15) // 30 + 15 = 45
  .getOrElse() // si algún valor esta mal tira por defecto "valor invalido" sino el valor correcto

console.log(resultado) // 45

// ----------------------------------------------------- //

// promise como monad
const dividirAsync = (x, y) =>
  new Promise((resolve, reject) => {
    if (y === 0) {
      reject(new Error('Error: División por cero'))
    } else {
      resolve(x / y)
    }
  })

dividirAsync(10, 2)
  .then((resultado) => resultado + 5) // 10 / 2 + 5 = 10
  .then((resultado) => resultado * 2) // 10 * 2 = 20
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error))
