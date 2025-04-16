// Estructuras de datos lineales que permiten operaciones de inserción y eliminación en un orden específico (LIFO y FIFO).

// LIFO (last in, first out)
class Stack {
  constructor () {
    this.items = []
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    if (this.isEmpty()) throw new Error('La pila está vacía')
    return this.items.pop()
  }

  peek () {
    if (this.isEmpty()) throw new Error('La pila está vacía')
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  info () {
    return this.items
  }
}

const stack = new Stack()
stack.push('A')
stack.push('B')
stack.push('X')
stack.push('D')
console.log(stack.pop()) // elimina el ultimo valor -> "D"
console.log(stack.pop()) // elimina el ultimo valor -> "X"
console.log(stack.peek()) // verifica el primer valor -> "A"
console.log(stack.info()) // ["A", "B"]

// FIFO (First in, First out)
class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    if (this.isEmpty()) throw new Error('La cola está vacía')
    return this.items.shift()
  }

  front () {
    if (this.isEmpty()) throw new Error('La cola está vacía')
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }

  info () {
    return this.items
  }
}

const queue = new Queue()
queue.enqueue('A')
queue.enqueue('B')
queue.enqueue('X')
queue.enqueue('D')
console.log(queue.dequeue()) // elimina el primer elemento -> "A"
console.log(queue.front()) // verifica el primer valor -> "B"
console.log(queue.info()) // [ 'B', 'X', 'D' ]
