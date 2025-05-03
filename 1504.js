// Principio que sugiere mantener el código simple y directo, evitando la complejidad innecesaria.
class Shape {
  constructor (type) {
    this.type = type
  }

  calculateArea () {
    throw new Error('Este método debe ser implementado por las subclases')
  }
}

class Rectangle extends Shape {
  constructor (width, height) {
    super('rectangle')
    this.width = width
    this.height = height
  }

  calculateArea () {
    return this.width * this.height
  }
}
// una opción mucho mas simple y directa es no usar clases, sino funciones puras

class RectagleKiss {
  calclulateArea (width, height) {
    return width * height
  }
}

function calculateArea (width, height) {
  return width * height
}

console.log(calculateArea(5, 10)) // 50
const rectangle = new Rectangle(5, 10)
console.log(rectangle.calculateArea()) // 50
