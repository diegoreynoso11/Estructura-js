import { FakeDatabase, RealDatabase } from './dataBase'
import { describe, expect, test, vi } from 'vitest'

describe('Base de datos', () => {
  const mockFetch = vi.fn()
  global.fetch = mockFetch
  // Utilizamos datos fake para simular la respuesta de la API
  test('fakeDb: debería guardar y recuperar datos', () => {
    const fakeDb = new FakeDatabase()
    fakeDb.save('1', 'Leanne Graham')
    expect(fakeDb.get('1')).toEqual({
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    })
  })
  // mokeamos la función fetch para que devuelva un objeto simulado
  test('mokDb: debería guardar y recuperar datos', async () => {
    // Simulamos la respuesta de la API
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValue({
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      })
    })

    const db = new RealDatabase()
    const saveResult = await db.save('1', 'Leanne Graham')
    expect(saveResult).toBe(true)

    const result = await db.get('1')
    expect(result).toEqual({
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    })
  })
})
