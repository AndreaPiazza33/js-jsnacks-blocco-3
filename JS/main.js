//PRIMA TRACCIA:

//const firstNumber = parseInt(prompt ("inserisci un numero"))
//const secondNumber = parseInt(prompt ("inserisci un altro numero"))
//if (firstNumber < secondNumber) { 
    //max = secondNumber
    //min = firstNumber
//}
//else if(secondNumber < firstNumber) {
   //min = secondNumber
   //max = firstNumber
//}
//let randomNumber = Math.floor(Math.random() * (max - min) + min)
//console.log(randomNumber);

//SECONDA TRACCIA:
//let firstWord = prompt("inserisci una parola")
//let secondWord = prompt("inserisci un'altra parola")

//if (firstWord.length == secondWord.length) {
    //console.log(firstWord,secondWord)
//}
//else if (firstWord > secondWord){
    //console.log(firstWord);
//}
//else{
    //console.log(secondWord);
//}

//TERZA TRACCIA:
//const numberList = [];

//let numberSum = 0;
//while (numberSum < 50) {
    //let userNumber = parseInt(prompt("inserisci un numero"));   
    // numberSum += userNumber;

//if (numberSum < 50){
    //numberList.push(userNumber)    
//}    
//}
//console.log(numberList);

//QUARTA TRACCIA:
const numberList = [];

let numberSum = 0;



while (numberSum < 50) {
    let userNumber = parseInt(prompt("inserisci un numero"));   
    numberSum += userNumber;

if (numberSum < 50){
    numberList.push(userNumber)    
}    
}
let averageNumber = (numberSum / numberList.length) 
console.log(numberList.length);
console.log(averageNumber)