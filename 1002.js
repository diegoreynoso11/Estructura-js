// "Uso de instrucciones condicionales y bucles (if, else, switch, for, while)."
import { variables } from './1001.js'

const { var2, var4 } = variables
let newVal = 0
let val = 0

// while
while (val < 10) {
  newVal += var2
  val++
  console.log(newVal) // newVal = 420
}
// for con if, else
for (let i = 0; i < var4.length; i++) {
  const currVal = var4[i]
  if (currVal % 2 === 0) {
    console.log(currVal + ' es numero par') // concatenación con +
  } else {
    console.log(`${currVal} es numero impar`) // concatenación con template string
  }
}
// for con switch
console.log('switch')
for (let i = 0; i < var4.length; i++) {
  const currVal = var4[i] * 7
  switch (currVal % 2) {
    case (0) : {
      console.log(currVal + ' es numero par')
      break
    }
    default : {
      console.log(`${currVal} es numero impar`)
      break
    }
  }
}
