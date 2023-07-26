const firstNumber = prompt ("inserisci un numero")
const secondNumber = prompt ("inserisci un altro numero")

let randomNumber = Math.floor(Math.random() * secondNumber + firstNumber)
console.log(randomNumber)
