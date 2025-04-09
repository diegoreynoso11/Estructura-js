// "Cómo funciona la herencia basada en prototipos en JavaScript."

// Objeto padre
const vehiculo = {
  tipo: 'Vehículo',
  info () {
    return `Este es un ${this.tipo}`
  },
  infoMod () {
    return `El modelo es ${this.marca}`
  }
}

// Objeto hijo (hereda de vehiculo)
const coche = Object.create(vehiculo)
coche.tipo = 'Coche'
coche.marca = 'Toyota'

console.log(coche.info()) // "Este es un Coche"
console.log(coche.marca) // "Toyota"
console.log(coche.infoMod())
