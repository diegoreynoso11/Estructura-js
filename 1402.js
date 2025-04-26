// "Objeto que representa la terminación o el fracaso eventual de una operación asíncrona."

function obtenerDatos (url) {
  return new Promise((resolve, reject) => {
    const random = Math.random() // simulamos aleatoriedad para que no siempre sea exitosa la promesa
    setTimeout(() => {
      if (random < 0.5) {
        resolve({
          data: '[{"id": "sha_3ea","value": false,"timestamp": 15679843}]',
          url
        })
      } else {
        reject(new Error('Error al obtener los datos'))
      }
    }, 1000)
  })
}

function procesarDatos (datos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Datos procesados: ${datos.data} de ${datos.url}`)
    }, 1000)
  })
}

obtenerDatos('https://api.cualquiera.com')
  .then((datos) => {
    console.log('Datos recibidos:', datos)
    const resultado = procesarDatos(datos)
    console.log(JSON.parse(datos.data)) // parsear el JSON que por lo general viene como string desde cualquier API
    return resultado
  })
  .then((resultadoRetornado) => {
    console.log('Resultado final:', resultadoRetornado)
  })
  .catch((resultadoRetornadoConError) => {
    console.error('Error:', resultadoRetornadoConError)
  })

const promesa1 = Promise.resolve('Éxito')
const promesa2 = Promise.reject('Fallo')
const promesa3 = new Promise((resolve, reject) => {
  const random = Math.random()
  if (random < 0.5) {
    resolve('Éxito random')
  } else {
    reject('Fallo random')
  }
})
// Con Promise.all : en donde una promesa falla, todas las demás se rechazan
Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados)
  })
  .catch((error) => {
    // siempre va a resultar en un fallo porque promesa2 es un reject y si no lo fuera la tercera podría serlo
    console.error('Con Promise.all', error)
  })
// Con Promise.race() tan pronto se resuelva una promesa cancela el resto
// con Promise.allSettled: se espera a que todas las promesas terminen se resuelvan o no
Promise.allSettled([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados)
  })
  .catch((error) => {
    console.error(error)
  })
