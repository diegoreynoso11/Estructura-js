// "Manejo de errores en operaciones asíncronas utilizando bloques try, catch y finally."
const url = 'https://jsonplaceholder.typicode.com/posts/1'
async function obtenerDatos () {
  console.log('Iniciando la obtención de datos...')
  try { // Bloque try, se ejecuta el código que puede fallar
    const response = await fetch(url)
    if (!response.ok) { // Caso en el que la api esté caída, no exista o no se pueda acceder a ella
      throw new Error(`Error HTTP: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) { // Si la petición falla, se ejecuta el bloque catch
    console.error(error)
  } finally { // Se ejecuta siempre, haya error o no
    console.log('Operación finalizada...')
  }
}
obtenerDatos()
