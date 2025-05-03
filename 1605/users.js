export function calculateDiscount (price, isPremium) {
  if (isPremium) {
    return price * 0.9
  }
  return price
}
// función no cubierta -- aparecerá en el reporte de cobertura, lineas 9-10
export function getUserInfo (user) {
  return `Nombre: ${user.name}, Edad: ${user.age}`
}
export function getUserAge (user, isPremium) {
  if (!isPremium) {
    // linea no cubierta -- aparecerá en el reporte de cobertura, lineas 13-15
    return 'No se puede mostrar la edad de los miembros premium'
  }
  return user.age
}
// función no cubierta -- aparecerá en el reporte de cobertura, lineas 20-21
export function getUserName (user) {
  return user.name
}
