// "Funciones que transforman otras funciones de transformación, permitiendo operaciones eficientes sobre estructuras de datos."
const numbers = Array.from({ length: 1000000 }, (_, i) => i + 1)
console.log('Array de 1 millón de elementos')
console.time('asignando variables')
// Filtrar números pares
const filtered = numbers.filter((n) => n % 2 === 0)

// Multiplicar por 2
const mapped = filtered.map((n) => n * 2)

// Sumar todos los resultados
const result = mapped.reduce((acc, n) => acc + n, 0)

console.log(result)
console.timeEnd('asignando variables')

// En una linea de código pero transformado los arrays
// Lo que hacen estos es primero filtrar todos los valores, después multiplicar los valores que quedaron * 2, y por ultimo sumar todos los valores multiplicados.
console.time('filter + map + reduce')
console.log(numbers.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((acc, n) => acc + n, 0))
console.timeEnd('filter + map + reduce')

// transducers
// lo que hacen los transducers es primero verificar en el filter si los valores son correctos por ejemplo: 2 % 2 === 0 es true porque es par entonces de ahi pasa al mapeo donde multiplica ese 2 * 2 = 4 y de ahi pasa al acumulador 0 + 4 = 4 haciendo que sea el doble de rápido o aún mas porque el acumulador que es el resultado final que necesitamos va cambiando en cada iteración del código, no tiene que esperar a que termine el filter, el map y recién ahi sumar los valores.
// cabe aclarar que esto tiene sentido cuando por ejemplo, en este caso es un array de 1 millón de elementos, para otros proyectos seria demasiado tedioso, ya que el código no es muy entendible ni fácil de leer.
console.time('transducer')
const filter = (predicate) => (reducer) => (acc, value) =>
  predicate(value) ? reducer(acc, value) : acc

const remap = (transform) => (reducer) => (acc, value) =>
  reducer(acc, transform(value))

const reduce = (reducer, initialValue, array) =>
  array.reduce(reducer, initialValue)

// Composición
const isEven = (n) => n % 2 === 0
const double = (n) => n * 2
const transducer = (reducer) =>
  filter(isEven)(remap(double)(reducer))

// Aplicar el transducer
const sumReducer = (acc, n) => acc + n
const resultTransducer = reduce(transducer(sumReducer), 0, numbers)

console.log(resultTransducer)
console.timeEnd('transducer')
