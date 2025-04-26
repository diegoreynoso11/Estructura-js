// "Sintaxis que simplifica el manejo de operaciones asíncronas, haciendo que el código sea más legible y fácil de entender."

// Async/await es una forma mas entendible de manejar promesas, en vez de usar .then() y .catch()
async function ejecutarTareasParalelas () {
  try {
    const [resultado1, resultado2] = await Promise.all([
      tareaAsincrona1(),
      tareaAsincrona2()
    ]) // se espera que se resuelvan ambas tareas antes de continuar
    console.log('Resultado 1:', resultado1)
    console.log('Resultado 2:', resultado2)
  } catch (error) {
    console.error('Error:', error.message)
  }
}

function tareaAsincrona1 () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Tarea 1 completada'), 2000)
  })
}

function tareaAsincrona2 () {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Tarea 2 completada'), 3000)
  })
}

ejecutarTareasParalelas()

// Con .then() y .catch()
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error('Error al obtener los datos:', error)
  })
// Con async/await con esto también se puede utilizar try, catch y finally, lo que permite manejar errores de una manera mas sencilla y entendible
async function obtenerDatos () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error al obtener los datos:', error)
  }
}
obtenerDatos()
