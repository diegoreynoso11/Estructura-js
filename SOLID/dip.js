// D: Dependency Inversion Principle (DIP) Principio de Inversión de Dependencias
// El principio de inversión de dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones (interfaces).
const TITLE = 'Dependency Inversion Principle (DIP)'
export function RunDip () {
  console.log(`\n----------------- ${TITLE} -----------------\n`)
  console.log('\nsin DIP\n')
  class LightBulb {
    turnOn () {
      console.log('Encendiendo luz...')
    }

    turnOff () {
      console.log('Apagando luz...')
    }
  }

  class Switch {
    constructor () {
      this.bulb = new LightBulb()
    }

    operate () {
      this.bulb.turnOn()
    }
  }

  const switchControl = new Switch()
  switchControl.operate()

  console.log('\ncon DIP\n')

  class SwitchableDevice {
    turnOn () {}
    turnOff () {}
  }

  class LightBulbDip extends SwitchableDevice {
    turnOn () {
      console.log('Encendiendo luz...')
    }

    turnOff () {
      console.log('Apagando luz...')
    }
  }

  class Fan extends SwitchableDevice {
    turnOn () {
      console.log('Encendiendo ventilador...')
    }

    turnOff () {
      console.log('Apagando ventilador...')
    }
  }

  class SwitchDip {
    constructor (device) {
      this.device = device
    }

    operate () {
      this.device.turnOn()
    }
  }

  const bulb = new LightBulbDip()
  const fan = new Fan()

  const lightSwitch = new SwitchDip(bulb)
  lightSwitch.operate() // Encendiendo luz...

  const fanSwitch = new SwitchDip(fan)
  fanSwitch.operate() // Encendiendo ventilador...
  console.log(`\n----------------- ${TITLE} -----------------\n`)
}
