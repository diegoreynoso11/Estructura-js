// Principio que recomienda evitar la duplicación de código para mejorar la mantenibilidad.
// La idea del principio DRY es que se reutilice el código en lugar de duplicarlo, lo que facilita la lectura y el mantenimiento del mismo.
// DRY es fundamental para escribir código limpio, mantenible y escalable. Al evitar la duplicación de lógica.
// Aunque no siempre es bueno aplicar el principio DRY.
// sin DRY
function calcularAreaCuadrado (lado) {
  return lado ** 2
}

function calcularAreaRectangulo (base, altura) {
  return base * altura
}

function calcularAreaTriangulo (base, altura) {
  return (base * altura) / 2
}
console.log(calcularAreaCuadrado(10)) // 25
console.log(calcularAreaRectangulo(4, 6)) // 24
console.log(calcularAreaTriangulo(4, 6)) // 12
// con DRY
function calcularArea (forma, ...args) {
  const x = args[0]
  const y = args[1]
  switch (forma) {
    case 'cuadrado':
      return x ** 2 // lado al cuadrado
    case 'rectangulo':
      return x * y // base * altura
    case 'triangulo':
      return (x * y) / 2 // (base * altura) / 2
    default:
      throw new Error('Forma no soportada')
  }
}

// Uso
console.log(calcularArea('cuadrado', 10)) // 25
console.log(calcularArea('rectangulo', 4, 6)) // 24
console.log(calcularArea('triangulo', 4, 6)) // 12
