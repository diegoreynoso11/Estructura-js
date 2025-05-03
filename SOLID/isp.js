// I: Interface Segregation Principle (ISP) Principio de Segregación de Interfaces
// Los clientes no deben depender de interfaces que no usan.
const TITLE = 'Interface Segregation Principle (ISP)'
export function RunIsp () {
  console.log(`\n----------------- ${TITLE} -----------------\n`)
  console.log('\nsin ISP------------\n')
  class Worker {
    work () {
      console.log('Trabajando...')
    }

    eat () {
      console.log('Comiendo...')
    }
  }

  class Robot extends Worker {
    eat () {
      console.error('Los robots no comen')
    //   throw new Error('Los robots no comen')
    }
  }
  const newRobot = new Robot()
  newRobot.work()
  newRobot.eat() // Error: Los robots no comen
  console.log('\ncon ISP------------\n')
  class Workable {
    work () {
      console.log('Trabajando...')
    }
  }

  class Eatable {
    eat () {
      console.log('Comiendo...')
    }
  }

  class HumanWorker extends Workable {
    eat () {
      console.log('Comiendo...')
    }
  }

  class RobotWorker extends Workable {}

  const human = new HumanWorker()
  human.work()
  human.eat()

  const robot = new RobotWorker()
  robot.work()
  console.log(`\n----------------- ${TITLE} -----------------\n`)
}
