// L: Liskov Substitution Principle (LSP) Principio de Sustitución de Liskov
// Los objetos de una clase derivada deben poder sustituirse por objetos de la clase base sin alterar el comportamiento del programa.
const TITLE = 'Liskov Substitution Principle (LSP)'
export function RunLsp () {
  console.log(`\n----------------- ${TITLE} -----------------\n`)

  console.log('\nsin LSP -----------------\n')

  class Bird {
    fly () {
      console.log('Volando...')
    }
  }

  class Penguin extends Bird {
    fly () {
      console.error('Los pingüinos no pueden volar')
    }
  }

  function makeBirdFly (bird) {
    bird.fly()
  }

  const penguin = new Penguin()
  makeBirdFly(penguin) // Error: Los pingüinos no pueden volar

  console.log('\ncon LSP -----------------\n')

  class BirdLsp {
    eat () {
      console.log('Comiendo...')
    }
  }

  class FlyingBird extends BirdLsp {
    fly () {
      console.log('Volando...')
    }
  }

  class NoFlyingBird extends BirdLsp {
    swim () {
      console.log('Nadando...')
    }
  }

  function makeBirdEat (bird) {
    bird.eat()
  }

  const eagle = new FlyingBird()
  const penguinLsp = new NoFlyingBird()
  makeBirdEat(eagle) // Comiendo...
  makeBirdEat(penguinLsp) // Comiendo...

  console.log(`\n----------------- ${TITLE} -----------------\n`)
}
