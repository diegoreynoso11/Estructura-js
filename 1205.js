// "Técnica que permite encadenar funciones pequeñas en una sola función compleja."

const compose = (...functions) => (x) =>
  functions.reduce((acc, fn) => fn(acc), x)

function fnArgs () {
  return {
    multiplicarPor2: (x) => {
      return x * 2
    },
    sumar3: (x) => {
      return x + 3
    },
    sumar4: (x) => {
      return x + 4
    },
    restar5: (x) => {
      return x - 5
    }
  }
}

const operacionCompleja = compose(...Object.values(fnArgs()))

console.log(operacionCompleja(5)) // (((5 * 2) + 3) + 4) - 5 = 12
console.log(operacionCompleja(12)) // (((12 * 2) + 3) + 4) - 5 = 26
