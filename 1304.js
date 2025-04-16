// 'Técnica donde una función se llama a sí misma para resolver problemas complejos.'

// caso mas simple - factorial de n
function factorial (n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5)) // 120

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [{ value: 6, children: [] }]
    }
  ]
}
function traverseTree (node) {
  console.log(node.value)

  for (const child of node.children) {
    traverseTree(child)
  }
}

traverseTree(tree)
// Salida:
// 1
// 2
// 4
// 5
// 3
// 6
