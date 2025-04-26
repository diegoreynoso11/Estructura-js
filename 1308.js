// "Tipos de datos abstractos como pilas, colas y listas que definen operaciones sin especificar su implementación concreta."

// Definición de una lista como ADT
class List {
  constructor () {
    this.items = []
  }

  add (element) {
    this.items.push(element)
  }

  remove (index) {
    if (index < 0 || index >= this.items.length) throw new Error('Índice inválido')
    this.items.splice(index, 1)
  }

  get (index) {
    if (index < 0 || index >= this.items.length) throw new Error('Índice inválido')
    return this.items[index]
  }

  size () {
    return this.items.length
  }

  show () {
    return this.items
  }

  info () {
    return {
      size: this.size(),
      isEmpty: this.isEmpty(),
      items: this.show()
    }
  }

  isEmpty () {
    return this.items.length === 0
  }
}

// lo importante de un ADT es que define las operaciones que se pueden realizar sobre los datos, sin importar cómo se implementan internamente. Por ejemplo, en una lista podemos agregar, eliminar y acceder a elementos, pero no nos importa cómo se almacenan esos elementos en memoria. Esto permite que diferentes implementaciones de listas (como listas enlazadas o arreglos) puedan ser utilizadas de manera intercambiable, siempre y cuando cumplan con las mismas operaciones definidas por el ADT.

// Ejemplo de uso de la lista como ADT
const list = new List()
list.add('A')
list.add('B')
list.add('C')
console.log(list.get(1)) // "B"
list.remove(1) // remueve "B"
console.log(list.size()) // 2
console.log(list.show()) // muestra toda la lista ["A", "C"]
console.log(list.info()) // muestra información de la lista
