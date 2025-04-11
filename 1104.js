// "Principios fundamentales de la programación orientada a objetos aplicados en JavaScript."

class CuentaBancaria {
  #saldo = 0 // Propiedad privada

  constructor (titular, dni, retiro) {
    this.titular = titular
    this.dni = dni
    this.retiro = retiro
  }

  info () {
    console.log(`Info: Cuenta de: ${this.titular}, DNI: ${this.dni}, No puedes retirar de esta cuenta`)
  }

  depositar (cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad
    }
  }

  // método publico para setear el método privado #saldo
  setSaldo (nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo
    } else {
      console.error('El saldo no puede ser negativo.')
    }
  }

  getSaldo () {
    return this.#saldo
  }
}

class CuentaRetiro extends CuentaBancaria {
  info () {
    console.log(`Info: Cuenta de: ${this.titular}, DNI: ${this.dni}, Puedes retirar de esta cuenta`)
  }

  retirar (cantidad) {
    let saldoActual = this.getSaldo()
    if (cantidad > 0 && cantidad <= saldoActual) {
      this.setSaldo(saldoActual -= cantidad) // Actualiza el campo privado directamente desde el padre
    } else {
      console.log(`No puedes retirar $${cantidad}. Saldo disponible: $${saldoActual}`)
    }
  }
}
const cuentaRetiro = new CuentaRetiro('Juana', 38383838)
const cuenta = new CuentaBancaria('Ana', 38815454)
cuentaRetiro.depositar(100)
cuentaRetiro.retirar(150)
console.log(cuentaRetiro.getSaldo())
// console.log(cuenta.#saldo); // Error: Private field '#saldo' must be declared in an enclosing class.

function infoDeCuenta (cuenta) {
  cuenta.info() // Polimorfismo
}
infoDeCuenta(cuenta)
infoDeCuenta(cuentaRetiro)
