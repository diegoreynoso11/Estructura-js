// "Estructura de datos donde cada elemento apunta al siguiente, permitiendo inserciones y eliminaciones eficientes."
class Node {
  constructor (value) {
    this.value = value // Valor del nodo
    this.next = null // Referencia al siguiente nodo
  }
}
class LinkedList {
  constructor () {
    this.head = null // Primer nodo de la lista
    this.size = 0 // Tamaño de la lista
  }

  // Agregar un nodo al final de la lista
  add (value) {
    const newNode = new Node(value)

    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo es el head
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next // Avanzar hasta el último nodo
      }
      current.next = newNode // Conectar el último nodo con el nuevo
    }

    this.size++
  }

  // Eliminar un nodo por valor
  remove (value) {
    if (!this.head) return // La lista está vacía

    if (this.head.value === value) {
      this.head = this.head.next // Eliminar el primer nodo
      this.size--
      return
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next // Buscar el nodo a eliminar
    }

    if (current.next) {
      current.next = current.next.next // Desconectar el nodo
      this.size--
    }
  }

  // Eliminar por un valor en especifico
  removeByUuid (value) {
    if (!this.head) return // La lista está vacía

    // Si el nodo a eliminar es el head
    if (this.head.value.uuid === value) {
      this.head = this.head.next // Eliminar el primer nodo
      this.size--
      return
    }

    let current = this.head
    while (current.next && current.next.value.uuid !== value) {
      current = current.next // Buscar el nodo a eliminar
    }

    // Si se encontró el nodo
    if (current.next) {
      current.next = current.next.next // Desconectar el nodo
      this.size--
    }
  }

  // Recorrer la lista e imprimir los valores
  print () {
    let current = this.head
    const result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    console.log(result)
  }

  // Verificar si la lista está vacía
  isEmpty () {
    return this.size === 0
  }

  // Obtener el tamaño de la lista
  getSize () {
    return this.size
  }
}
const persona1 = { uuid: 'UF2dw-', name: 'Fernando', age: 35, address: { city: 'California', street: '1058' } }
const persona2 = { uuid: 'L=x32z', name: 'Fernando', age: 65, address: { city: 'London', street: '996' } }
const persona3 = { uuid: '0=ezEt', name: 'Juan', age: 35, address: { city: 'California', street: '5478' } }
// Uso
const list = new LinkedList()
list.add(persona1)
list.add(persona2)
list.add(persona3)
list.print()

// Pasar todo el elemento para eliminarlo
// list.remove(persona3)

// Eliminar por uuid
// Eliminar por otro campo seria peligroso debido a la repetición de los elementos
list.removeByUuid(persona2.uuid)
list.print()

console.log(list.getSize()) // 2
console.log(list.isEmpty()) // false
