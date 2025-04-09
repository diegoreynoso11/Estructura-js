// Captura y manejo de errores usando try, catch y finally.
async function getUser () {
  try {
    const res = await fetch('https://randomuser.me/api/')
    if (!res.ok) throw new Error('Error en la petición')
    const user = await res.json()
    return user
  } catch (err) {
    console.error('Error:', err.message)
    throw err
  } finally {
    console.log('Petición finalizada')
  }
}

let user = null;
// capturamos el usuario con una función anónima y asíncrona
(async () => {
  user = await getUser()
  console.log(user) // Objeto con datos del usuario
})()
