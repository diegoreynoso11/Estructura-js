import { RealDatabase } from './dataBase'
import { expect, test } from 'vitest'

test('db: debería recuperar datos desde la API real', async () => {
  const db = new RealDatabase()
  const result = await db.get('1')
  expect(result).toEqual({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  })
})
