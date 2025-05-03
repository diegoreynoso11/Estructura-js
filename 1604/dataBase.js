export class Database {
  async save (key, value) {
    throw new Error('Método post debe ser implementado')
  }
}
export class FakeDatabase extends Database {
  save (key, value) {
    if (key === '1') {
      return true
    }
    return false
  }

  get (key) {
    if (key === '1') {
      return {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    }
    return 'Other User'
  }
}
export class RealDatabase extends Database {
  constructor () {
    super()
    this.data = {}
  }

  async save (key, value) {
    const val = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (key === '1') {
          resolve(true)
        } else {
          reject(new Error('Error al guardar los datos'))
        }
      }, 1000)
    })
    return val
  }

  async get (key) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${key}`)

    if (!response.ok) {
      throw new Error('Error al obtener los datos')
    }
    const { id, name, username, email } = await response.json()
    return { id, name, username, email }
  }
}
