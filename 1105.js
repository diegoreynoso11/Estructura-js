// "Funciones que retornan nuevos objetos personalizados, permitiendo flexibilidad en la creación de instancias."
// "Funciones fabrica"
function crearCalculadora (n1, n2) {
  let contador = 0 // propiedad privada
  const calculadoraBase = {
    n1,
    n2,
    sumar () {
      contador++
      return this.n1 + this.n2
    },
    restar () {
      contador++
      return this.n1 - this.n2
    },
    multiplicar () {
      contador++
      return this.n1 * this.n2
    },
    dividir () {
      contador++
      return this.n1 / this.n2
    },
    cantOps () {
      console.log(`Cantidad de operaciones realizadas : ${contador}`)
    }
  }
  // ejemplo burdo de objeto personalizado; si n1 es menor que n2 devuelvo un restar y dividir inversos para no tener problemas
  if (n1 < n2) {
    return {
      ...calculadoraBase,
      restar () {
        contador++
        return this.n2 - this.n1
      },
      dividir () {
        contador++
        return this.n2 / this.n1
      }
    }
  }
}

const calculadora = crearCalculadora(5, 10)
console.log(calculadora.sumar())
console.log(calculadora.restar())
console.log(calculadora.dividir())
calculadora.cantOps()
// console.log(calculadora.contador) // undefined
