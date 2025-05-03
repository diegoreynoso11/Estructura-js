export class OrderService {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  //  validar un pedido
  validateOrder (order) {
    if (!order || typeof order !== 'object') {
      throw new Error('El pedido no es válido')
    }
    if (!order.items || order.items.length === 0) {
      throw new Error('El pedido debe contener al menos un artículo')
    }
    if (!order.customerEmail || !this.isValidEmail(order.customerEmail)) {
      throw new Error('El correo electrónico del cliente no es válido')
    }
    return true
  }

  // validar correos electrónicos
  isValidEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // enviar un pedido a la API
  async submitOrder (order) {
    try {
      this.validateOrder(order) // Validar el pedido antes de enviarlo
      const response = await this.apiClient.post('/orders', order) // hacemos la "llamada a la API"
      return response.data
    } catch (error) {
      throw new Error(`Error al enviar el pedido: ${error.message}`)
    }
  }
}
