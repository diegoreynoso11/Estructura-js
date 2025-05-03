// "Métrica que indica qué porcentaje del código ha sido ejecutado por las pruebas automatizadas."
// code coverage

import { test, expect, describe } from 'vitest'
import { calculateDiscount, getUserAge } from './users'
import { Product } from './products'
describe('calculateDiscount', () => {
  test('Debería aplicar descuento a los miembros premium', () => {
    const result = calculateDiscount(100, true)
    expect(result).toBe(90)
  })
  test('No Debería aplicar descuento a los miembros comunes', () => {
    const result = calculateDiscount(100, false)
    expect(result).toBe(100)
  })
  test('Debería devolver la edad de los miembros premium', () => {
    const result = getUserAge({ age: 32 }, true)
    expect(result).toBe(32)
  })
  test('Debería devolver los datos del productos', () => {
    const product = new Product('Camiseta', 20, 10)
    expect(product.getPrice()).toBe(20)
  })
})
