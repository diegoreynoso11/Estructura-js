// "Cómo funciona el contexto de ejecución y cómo cambiarlo en JavaScript."
import { variables } from './1001.js'
const { name } = variables.var5
const persona = {
  nombre: name ?? 'Ana',
  // aca no puede ser una función flecha porque apuntaría a global o window
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}
persona.saludar() // "Hola, soy Ana" (this = persona)

function saludar2 () {
  console.log(`Hola, soy ${this.nombre}`)
}

// pasar argumentos individualmente
saludar2.call({ nombre: name ?? 'Juan' }) // "Hola, soy John"
