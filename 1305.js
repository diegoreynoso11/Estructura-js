// "Funciones de orden superior para transformar, filtrar y reducir arrays en JavaScript."
// Vistos en el script --> 1209.js

// Array de objetos
const products = [
  { name: 'Manzana', price: 5, discount: true },
  { name: 'NaraNja', price: 15, discount: true },
  { name: 'Plátano', price: 8, discount: false },
  { name: 'Uva', price: 20, discount: true }
]

const totalCost = products
  .filter((product) => product.price > 10) // Filtrar productos caros // naranja, uva
  .map((product) => product.price) // Extraer los precios // 15,20
  .reduce((sum, price) => sum + price, 0) // Sumar los precios // 15 + 20 = 35

const totalWithDiscount = products
  .filter(prod => prod.discount) // deja solo los productos que tengan descuento
  .map(prod => prod.price)
  .reduce((prod, acc) => prod + acc, 0)

const FilterWithName = products.filter(product => product.name.toLowerCase().includes('n')) // hacemos que name este en minúscula porque sino Naranja no entraría en el filtro, ya que se busca una "n" minúscula

console.log(FilterWithName)
console.log(totalCost)
console.log(totalWithDiscount)
