// "Construcción de objetos complejos a partir de otros más simples, en lugar de usar herencia."

const puedeAtacar = (arma) => ({
  atacar () {
    if (arma) {
      console.log(this.nombre + ` Esta atacando con ${arma}.`)
    } else {
      console.log(this.nombre + ' No tiene arma')
    }
  }
})

const puedeDefender = (escudo) => ({
  defender () {
    if (escudo) {
      console.log(this.nombre + ` Se esta defendiendo con ${escudo} `)
    } else {
      console.log(this.nombre + this.tipo + ' No tiene escudo')
    }
  }
})
const puedeEsquivar = () => ({
  esquivar () {
    console.log(this.nombre + ' Esta esquivando')
  }
})

function crearPersonaje (nombre, tipo, arma, escudo) {
  const personajeBase = {
    nombre,
    tipo
  }

  return {
    ...personajeBase,
    ...puedeAtacar(arma),
    ...puedeDefender(escudo),
    ...puedeEsquivar()
  }
}

const arquero = crearPersonaje('Robin', 'arco')
arquero.atacar()
arquero.defender()
arquero.esquivar()
const escudero = crearPersonaje('Pepe', '', 'Escudo de Ébano')
escudero.atacar()
escudero.defender()
// mixins
const tipoArquero = (objeto) => {
  const tipo = 'Arquero'
  objeto.disparo = function () {
    if (this.arma) {
      console.log(this.nombre + ' Dispara su ' + this.arma)
    } else {
      console.log(this.nombre + ' No tiene un arma!')
    }
  }
  objeto.atacar = function () {
    console.log(this.nombre + ' Solo puede disparar, tipo: ' + tipo)
  }
  return objeto
}
const tipoGuerrero = (objeto) => {
  const tipo = 'Guerrero'
  objeto.disparo = function () {
    console.log(this.nombre + ' No Dispara porque es ' + tipo)
  }
  objeto.atacar = function () {
    if (this.arma) {
      console.log(this.nombre + ' Ataca con ' + this.arma)
    } else {
      console.log(this.nombre + ' No tiene arma!')
    }
  }
  return objeto
}
console.log(' \n Composición mas simple con mixins \n')
const aquaman = { nombre: 'Aquaman', arma: 'Tridente' }
const reyArturo = { nombre: 'Rey Arturo' }
tipoGuerrero(reyArturo)
tipoArquero(aquaman)

reyArturo.atacar()
reyArturo.disparo()
aquaman.disparo()
aquaman.atacar()
