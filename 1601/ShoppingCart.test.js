import { ShoppingCart } from './ShoppingCart.js'
import { describe, test, expect } from 'vitest'
describe('ShoppingCart', () => {
  test('Los elementos del carrito deben tener id, name, price', () => {
    const cart = new ShoppingCart()
    cart.addItem({ id: 'ewew33', name: 'Camiseta', price: 20 })
    expect(cart.items).toEqual([
      { name: expect.any(String), price: expect.any(Number), id: expect.any(String) }
    ])
  })

  test('Añadir un producto al carrito', () => {
    const cart = new ShoppingCart()
    cart.addItem({ id: 'AfMn21', name: 'Camiseta', price: 20 })
    expect(cart.items.length).toBe(1)
    expect(cart.items[0].name).toBe('Camiseta')
  })

  test('Calcular el total correctamente', () => {
    const cart = new ShoppingCart()
    cart.addItem({ id: 'AfMn21', name: 'Camiseta', price: 20 })
    cart.addItem({ id: '32DcX1', name: 'Pantalón', price: 50 })
    cart.addItem({ id: '_W24dA', name: 'Remera', price: 25 })
    expect(cart.calculateTotal()).toBe(95)
  })
  test('Eliminar un producto', () => {
    const cart = new ShoppingCart()
    cart.addItem({ id: 'AfMn21', name: 'Camiseta', price: 20 })
    cart.addItem({ id: '32DcX1', name: 'Pantalón', price: 50 })
    cart.addItem({ id: '_W24dA', name: 'Remera', price: 25 })
    cart.deleteItem('AfMn21')
    cart.deleteItem('32DcX1')
    expect(cart.items.length).toBe(1)
  })
  test('Manejar carrito vacío', () => {
    const cart = new ShoppingCart()
    expect(cart.calculateTotal()).toBe(0)
  })
})
