// Principio que recomienda no implementar características innecesarias hasta que sean realmente necesarias.
class ShoppingCart {
  constructor () {
    this.items = []
    this.discountCode = null
  }

  addItem (item) {
    this.items.push(item)
    console.log('Producto añadido:', item.name)
  }

  removeItem (itemId) {
    this.items = this.items.filter((item) => item.id !== itemId)
    console.log('Producto eliminado:', itemId)
  }

  applyDiscount (code) {
    // Aplicar un descuento anticipado solo por si es necesario rompería con el principio (YAGNI)
    if (code === '10OFF') {
      this.discountCode = code
      console.log('Descuento aplicado:', code)
    } else {
      console.log('Código de descuento inválido')
    }
  }

  checkout () {
    const total = this.items.reduce((sum, item) => sum + item.price, 0)
    console.log('Total:', total)
    if (this.discountCode === '10OFF') {
      const discountedTotal = total * 0.9
      console.log('Total con descuento:', discountedTotal)
    }
  }
}
// YAGNI es importante porque, Al no implementar características innecesarias, reducimos la complejidad, mejoramos la mantenibilidad y optimizamos el uso de recursos. también hay que tener en cuenta los otros dos principios para que el código no sea simple y a la vez robusto
const cart = new ShoppingCart()
cart.addItem({ id: 'af42e_', name: 'Camiseta', price: 20 })
cart.addItem({ id: 'xbz.02', name: 'Pantalón', price: 50 })
cart.applyDiscount('10OFF')
cart.checkout()
