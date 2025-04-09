// "Creación y manipulación de objetos, así como el acceso a sus propiedades."
import { variables } from './1001.js'

const { var5, var2 } = variables
console.log(var5)
// dejamos todo el objeto igual, solo cambiamos age
console.log({ ...var5, age: var2 })

// accedemos a las propiedades y los valores del objeto
const valuesMap = Object.entries(var5).map((el) => {
  return el
})
console.log(valuesMap)
// bloquear un valor para que no pueda ser modificado
const config = { ...var5 }
// Object.freeze(config) // si activamos el freeze el objeto no se puede modificar
config.age = 50
console.log(config)

// Congelar solo 'name'
Object.defineProperty(config, 'name', {
  writable: false,
  configurable: false
})

config.age = 51
config.city = 'LA'
console.log(config)
