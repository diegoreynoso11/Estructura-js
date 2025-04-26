// "Etapas de una promesa en JavaScript: pendiente, cumplida o rechazada."

const miPromesa = new Promise((resolve, reject) => {
  console.log('Promesa iniciada (pending)')

  const exito = Math.random() > 0.5 // Simulamos una operación aleatoria
  setTimeout(() => {
    if (exito) {
      resolve('Operación completada con éxito')
    } else {
      reject('Ocurrió un error')
    }
  }, 2000)
})

miPromesa
  .then((resultado) => {
    console.log('Promesa cumplida (fulfilled):', resultado)
  })
  .catch((error) => {
    console.error('Promesa rechazada (rejected):', error)
  })
  .finally(() => {
    console.log('Promesa finalizada (settled)')
  })

// Las etapas de una promesa tiene cuatro estados, pending, fulfilled, rejected y settled.
// pending: la promesa está en proceso de resolución.
// fulfilled: la promesa se ha resuelto con éxito.
// rejected: la promesa ha fallado.
// settled: la promesa ha sido resuelta o rechazada, es decir, ha llegado a su fin.
