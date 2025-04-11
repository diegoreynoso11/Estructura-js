// "Principio de no modificar directamente los datos existentes, sino crear nuevas estructuras de datos."

const numeros = [1, 2, 3]

// numeros.push(4); // Modifica directamente el array, rompería el principio de inmutabilidad
// Crea un nuevo array con el nuevo valor añadido
const nuevosNumeros = [...numeros, 4]

console.log(numeros) // [1, 2, 3] (sin cambios)
console.log(nuevosNumeros) // [1, 2, 3, 4]

const usuario = {
  nombre: 'Carlos',
  direccion: {
    ciudad: 'Madrid',
    codigoPostal: 28001
  }
}

function updateUsuario (ciudad) {
  const nuevoUsuario = {
    ...usuario,
    direccion: {
      ...usuario.direccion,
      ciudad
    }
  }
  return nuevoUsuario
}
// usuario.direccion.ciudad = 'Barcelona' // esto mutaría el objeto original
const newUsuario = updateUsuario('Barcelona')
console.log(usuario)
console.log(newUsuario) // realizar una copia del usuario original
