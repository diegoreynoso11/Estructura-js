// "Implementación de algoritmos de ordenamiento como bubble sort, quicksort y merge sort."
const numbersBubbleSort = [64, 34, 25, 12, 22, 11, 90, 145, 24, 23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33]
const numbersQuickSort = [64, 34, 25, 12, 22, 11, 90, 145, 24, 23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33]
const numbersMergeSort = [64, 34, 25, 12, 22, 11, 90, 145, 24, 23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33]
const JSSort = [64, 34, 25, 12, 22, 11, 90, 145, 24, 23, 45, 67, 89, 12, 34, 56, 78, 90, 11, 22, 33]

// Bubble Sort
function bubbleSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar los elementos
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

// quickSort
function quickSort (array) {
  // Clausula de seguridad para que no de error, Si el array tiene 0 o 1 elementos, ya está ordenado
  if (array.length <= 1) return array

  const pivot = array[array.length - 1]
  const left = []
  const right = []
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// mergeSort
function mergeSort (array) {
  if (array.length <= 1) return array

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Sort común
console.time('Sort común')
console.log(JSSort.sort((a, b) => a - b))
console.timeEnd('Sort común')

console.time('Bubble Sort')
console.log(bubbleSort(numbersBubbleSort))
console.timeEnd('Bubble Sort')

console.time('Quick Sort')
console.log(quickSort(numbersQuickSort))
console.timeEnd('Quick Sort')

console.time('Merge Sort')
console.log(mergeSort(numbersMergeSort))
console.timeEnd('Merge Sort')
