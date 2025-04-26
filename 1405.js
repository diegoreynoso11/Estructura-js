// "Mecanismo que permite que JavaScript maneje múltiples operaciones simultáneamente a través de un ciclo de eventos."

console.log('Inicio')

setTimeout(() => {
  console.log('Timeout 1')
}, 0)

Promise.resolve().then(() => {
  console.log('Promesa 1')
  return Promise.resolve()
}).then(() => {
  console.log('Promesa 2')
})

setTimeout(() => {
  console.log('Timeout 2')
}, 0)

console.log('Fin')

// Web APIs (APIs del navegador o Node.js) : no bloquean el "Call Stack" porque se manejan fuera del hilo principal, permiten ejecutar código en segundo plano y notificar al hilo principal cuando han terminado. Ej: setTimeout, fetch, etc..

// Microtask queue: Promesas, mutaciones del DOM, etc.. por eso se ejecutan primero, son prioritarios

// Callback queue: setTimeout, setInterval, etc.. por eso se ejecutan después, son menos prioritarios

// El event loop se encarga de verificar si el "Call Stack" está vacío, si lo está ejecuta primero las tareas de la microtask queue y luego las de la callback queue
