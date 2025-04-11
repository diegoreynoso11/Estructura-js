// Uso de las clases en JavaScript moderno con las palabras clave class, extends y super

class Mago {
  constructor (nombre) {
    this.nombre = nombre
    this.poderMagico = 'E' // Poder mágico básico
  }

  info () {
    console.log(`${this.nombre} es Mago de nivel: ${this.poderMagico}`)
  }

  usarMagia () {
    console.log(`${this.nombre} usa magia básica.`)
  }
}

class PersonajeConPoderes extends Mago {
  constructor (nombre, poderEspecial, poderMagico) {
    super(nombre, poderMagico) // Llamamos al constructor de Mago
    this.poderEspecial = poderEspecial // Añadimos un poder especial
    this.poderMagico = 'D' // modificamos el poder de E a D
  }

  usarPoderEspecial () {
    console.log(`${this.nombre} usa el poder especial: ${this.poderEspecial}.`)
  }
}

class PersonajeExtendido extends PersonajeConPoderes {
  constructor (nombre, poderEspecial, habilidadExtra, poderMagico = 'C') {
    super(nombre, poderEspecial, poderMagico)
    this.habilidadExtra = habilidadExtra
    this.poderMagico = 'C'
  }

  usarHabilidadExtra () {
    console.log(`${this.nombre} usa su habilidad extra: ${this.habilidadExtra}.`)
  }
}
class MagoSupremo extends PersonajeExtendido {
  constructor (nombre, poderEspecial, habilidadExtra, poderMagico = 'B', superHabilidad) {
    super(nombre, poderEspecial, poderMagico, habilidadExtra)
    this.superHabilidad = superHabilidad
    this.poderMagico = 'A'
  }

  usarSuperHabilidad () {
    console.log(`${this.nombre} usa su Super Habilidad: ${this.habilidadExtra}.`)
  }
}
const magoNivelInicial = new Mago('Tusk', 'Velocidad', 'Oscuridad')
const magoNivelBajo = new PersonajeConPoderes('Juan', 'Saltar', 'Imaginar')
const mago = new PersonajeExtendido('Lord', 'Volar', 'Invisibilidad')
const magoSupremo = new MagoSupremo('Levi', 'Invisibilidad', 'Ocuridad', 'Oscuridad ABSOLUTA')
magoNivelBajo.usarMagia()
magoNivelBajo.usarPoderEspecial()
// magoNivelBajo.usarHabilidadExtra()
mago.usarMagia()
mago.usarPoderEspecial()
mago.usarHabilidadExtra()
magoNivelInicial.info()
magoNivelBajo.info()
mago.info()
magoSupremo.info()
magoSupremo.usarSuperHabilidad() // único que puede utilizar la super habilidad
