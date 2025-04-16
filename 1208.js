// "Herramientas para acceder y modificar estructuras de datos inmutables de forma segura."

const usuario = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Madrid',
    ubicacion: {
      calle: '25 de mayo',
      altura: '2531',
      dpto: null
    },
    codigoPostal: 28001
  }
}
// Crear un lente para una propiedad específica
function lens (getter, setter) {
  return { getter, setter }
}

// Obtener el valor usando el lente
function view (lente, data) {
  return lente.getter(data)
}

// Actualizar el valor usando el lente
function set (lente, valor, data) {
  return lente.setter(valor, data)
}

// Transformar el valor usando el lente
function over (lente, fn, data) {
  const valorActual = view(lente, data)
  const nuevoValor = fn(valorActual)
  return set(lente, nuevoValor, data)
}
// lente para la ubicación
const ubicacionLens = lens(
  // Getter
  (data) => data.direccion.ubicacion,
  // Setter
  (nuevaCiudad, data) => ({
    ...data,
    direccion: {
      ...data.direccion,
      ubicacion: nuevaCiudad // Solo actualizamos la ciudad
    }
  })
)
// lente para la ciudad
const ciudadLens = lens(
  // Getter
  (data) => data.direccion.ciudad,
  // Setter
  (nuevaCiudad, data) => ({
    ...data,
    direccion: {
      ...data.direccion,
      ciudad: nuevaCiudad
    }
  })
)
// Obtener la ubicación
console.log(view(ubicacionLens, usuario)) // { calle: '25 de mayo', altura: '2531', dpto: null }
// Obtener la ciudad
console.log(view(ciudadLens, usuario)) // Madrid

const nuevaDireccion = { calle: 'Juan peters burgo', altura: '2342', dpto: '2B' }

// Actualizar la dirección
const nuevoUsuario = set(ubicacionLens, nuevaDireccion, usuario)
console.log(nuevoUsuario)
console.log(usuario) // (sin cambios)

// Transformar un valor, ciudad
const usuarioTransformado = over(ciudadLens, (ciudad) => ciudad.toUpperCase(), usuario)
console.log(usuarioTransformado) // ciudad : "MADRID"
