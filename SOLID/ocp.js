// O: Open/Closed Principle (OCP)
// Las entidades de software deben estar abiertas para extensión pero cerradas para modificación.
// Poder agregar nuevas funcionalidades sin modificar el código existente
const TITLE = 'Open/Closed Principle (OCP)'
export function RunOcp () {
  console.log(`\n----------------- ${TITLE} -----------------\n`)
  console.log('\nsin OCP -----------------\n')
  // ❌ sin OCP -- si queremos agregar un nuevo método de pago, tenemos que modificar la clase PaymentProcessor
  class PaymentProcessor {
    processPayment (method, details) {
      if (method === 'creditCard') {
        console.log('Procesando pago con tarjeta de crédito:', details)
      } else if (method === 'PayPal') {
        console.log('Procesando pago con PayPal:', details)
      } else {
        console.error(`${method}, Método de pago inexistente`)
      }
    }
  }

  const processor = new PaymentProcessor()
  processor.processPayment('creditCard', { cardNumber: '1234-5678' })
  processor.processPayment('PayPal', { email: 'user@example.com' })
  processor.processPayment('Binance', { wallet: 'Ur2pe23410xse7pxe' })

  console.log('\ncon OCP -----------------\n')

  // ✅ con OCP -- si queremos agregar un nuevo método de pago, solo tenemos que crear una nueva clase que implemente ese método
  class PaymentProcessorOCP {
    processPayment (method, details) {
      method.process(details)
    }
  }
  class CreditCardPayment {
    process (details) {
      console.log('Procesando pago con tarjeta de crédito:', details)
    }
  }

  class PayPalPayment {
    process (details) {
      console.log('Procesando pago con PayPal:', details)
    }
  }
  class BinancePayment {
    process (details) {
      console.log('Procesando pago con Binance:', details)
    }
  }
  const creditCard = new CreditCardPayment()
  const payPal = new PayPalPayment()
  const binance = new BinancePayment()
  const payment = new PaymentProcessorOCP()
  payment.processPayment(creditCard, { cardNumber: '1234-5678' })
  payment.processPayment(payPal, { email: 'user@example.com' })
  payment.processPayment(binance, { wallet: 'Ur2pe23410xse7pxe' })
  console.log(`\n----------------- ${TITLE} -----------------\n`)
}
