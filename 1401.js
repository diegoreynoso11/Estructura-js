// "Funciones que se ejecutan después de completar una operación asíncrona, permitiendo la continuación de un flujo de ejecución."

// Callback mas utilizado
// document.getElementById('boton').addEventListener('click', () => {
//   console.log('Botón clickeado')
// })

new Promise((resolve, reject) => {
  setTimeout(() => resolve('Operación completada / Promise, 2.5s'), 2500)
}).then((result) => {
  console.log(result)
})
// Async/Await
async function ejemplo () {
  console.log('Inicio')
  const resultado = await new Promise((resolve) => {
    setTimeout(() => resolve('Operación completada / async-await 2s'), 2000)
  })
  console.log(resultado)
  console.log('Fin de función asíncrona')
}

ejemplo()
