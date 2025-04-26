// "Conjunto de convenciones y estilos recomendados para escribir código JavaScript limpio y legible."

// 1. Convenciones generales

// Nombramiento: camelCase para variables y funciones
const userName = 'JohnDoe'

// Constantes globales en mayúsculas con guiones bajos
const MAX_RETRIES = 5

// Clases en PascalCase
class ShoppingCart {
  constructor () {
    this.items = []
  }

  addItem (item) {
    this.items.push(item)
  }
}

// Espaciado y formato consistentes
function calculateTotalPrice (items) {
  return items.reduce((total, item) => total + item.price, 0)
}

// Comentarios claros y útiles

// Esta función calcula el impuesto sobre el subtotal
function calculateTax (subtotal, taxRate) {
  return subtotal * taxRate
}

// 2. Estructura del código

// Modularidad: Funciones pequeñas y reutilizables
function applyDiscount (price, discountRate) {
  return price - price * discountRate
}

function formatCurrency (amount) {
  return `$${amount.toFixed(2)}`
}

// Evitar funciones anónimas largas

// Uso de bloques con llaves, EVITAR TAMBIEN EL USO DE MAGICSTRINGS
if (userName === 'JohnDoe') {
  console.log('Bienvenido, John!')
}
if (userName === 'JohnDoe') console.log('Bienvenido, John!')

// 3. Manejo de variables

// Preferencia por const y let
const PI = 3.1416
// let counter = 0

// Minimiza el uso de variables globales
// function incrementCounter () {
//   const localCounter = counter + 1 // Variable local
//   return localCounter
// }

// Inicialización inmediata
const greeting = 'Hola, mundo!'

// 4. Manejo de funciones

// Evitar parámetros por defecto
function greet (name = 'Invitado') {
  console.log(`Hola, ${name}`)
}

// Retorno temprano
function isEligible (age, income) {
  if (age < 18) return false
  if (income < 1000) return false
  return true
}

// Evitar funciones demasiado largas
function processOrder (order) {
  validateOrder(order)
  calculateOrderTotal(order)
  saveOrderToDatabase(order)
}

function validateOrder (order) {
  if (!order.items || order.items.length === 0) {
    throw new Error('El pedido no contiene artículos')
  }
}

function calculateOrderTotal (order) {
  order.total = calculateTotalPrice(order.items)
}

function saveOrderToDatabase (order) {
  console.log('Pedido guardado:', order)
}

// 5. Estilo en estructuras de control

// Condicionales con comparaciones estrictas
if (userName === 'JohnDoe') {
  console.log('Usuario verificado')
}

// Métodos funcionales en lugar de bucles for
const numbers = [1, 2, 3, 4]
const doubled = numbers.map(num => num * 2)

// Switch para múltiples condiciones
function handleAction (action) {
  switch (action) {
    case 'add':
      console.log('Añadiendo elemento...')
      break
    case 'remove':
      console.log('Eliminando elemento...')
      break
    default:
      console.log('Acción desconocida')
  }
}

// 6. Manejo de errores

// Usa try...catch para manejar errores críticos
async function fetchData (url) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error HTTP')
    const data = await response.json()
    console.log('Datos recibidos:', data)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

// Lanza errores significativos
function validateInput (input) {
  if (!input) {
    throw new Error('La entrada no puede estar vacía')
  }
}

// 7. Optimización y rendimiento

// Evitar cálculos repetidos
function calculateFinalPrice (subtotal, taxRate, discountRate) {
  const tax = calculateTax(subtotal, taxRate)
  const discount = applyDiscount(subtotal, discountRate)
  return subtotal + tax - discount
}

function main () {
  try {
    const items = [
      { name: 'Camiseta', price: 20 },
      { name: 'Pantalón', price: 50 }
    ]

    const subtotal = calculateTotalPrice(items)
    const tax = calculateTax(subtotal, 0.1)
    const total = subtotal + tax

    console.log(`Subtotal: ${formatCurrency(subtotal)}`)
    console.log(`Impuesto: ${formatCurrency(tax)}`)
    console.log(`Total: ${formatCurrency(total)}`)

    greet(userName)
    handleAction('add')

    const cart = new ShoppingCart()
    cart.addItem({ name: 'Zapatos', price: 30 })
    console.log('Carrito:', cart.items)
  } catch (error) {
    console.error('Ocurrió un error:', error.message)
  }
}

main()
// "Conjunto de convenciones y estilos recomendados para escribir código JavaScript limpio y legible."
// * ESLint
// Usa herramientas como ESLint para aplicar reglas de estilo automáticamente.
// Configura un archivo .eslintrc para definir las reglas de tu equipo.
// * Prettier
// Usa Prettier para formatear el código automáticamente y mantener un estilo consistente.
// en github podemos encontrar plugins para eslint para facilitar todo lo anterior.
// https://github.com/dustinspecker/awesome-eslint
