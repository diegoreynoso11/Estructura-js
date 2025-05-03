import { describe, it, expect, vi, beforeEach } from 'vitest'
import { OrderService } from './OrderService.js'
import { ApiClient } from './ApiClient.js'

describe('Pruebas de integración de OrderService', () => {
  let orderService
  let mockApiClient
  // Esperamos a que se resuelvan las promesas para continuar con el test, y no necesitar crearlo en cada test
  beforeEach(() => {
    // Mock de la API externa
    mockApiClient = new ApiClient()
    orderService = new OrderService(mockApiClient)
  })

  it('debería enviar un pedido válido a la API y recibir una respuesta exitosa', async () => {
    const validOrder = {
      items: [{ name: 'Camiseta', price: 20 }, { name: 'Remera', price: 15 }],
      customerEmail: 'cliente@example.com'
    }

    const result = await orderService.submitOrder(validOrder) // Aca es donde obtenemos la respuesta de la API

    // Verificar que el pedido se haya enviado correctamente
    expect(result).toEqual(validOrder)
  })

  it('debería manejar errores si la API falla', async () => {
    const invalidOrder = {
      items: [{ name: 'Camiseta', price: 20 }, { name: 'Remera', price: 15 }],
      customerEmail: 'cliente@example.com'
    }

    // Simular un error en la API
    vi.spyOn(mockApiClient, 'post').mockRejectedValue(new Error('Error en la API'))

    await expect(orderService.submitOrder(invalidOrder)).rejects.toThrow(
      'Error al enviar el pedido: Error en la API'
    )
  })
})
