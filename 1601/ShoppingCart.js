// "Escritura de pruebas automatizadas para verificar funcionalidades específicas de manera aislada."

export class ShoppingCart {
  constructor () {
    this.items = []
  }

  addItem (item) {
    if (!item.id && !item.name && !item.price) {
      throw new Error('El producto debe tener id, name y price')
    }
    this.items.push(item)
  }

  deleteItem (itemId) {
    this.items = this.items.filter((item) => item.id !== itemId)
  }

  calculateTotal () {
    return this.items.reduce((total, item) => total + item.price, 0)
  }
}
