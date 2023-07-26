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
let firstWord = prompt("inserisci una parola")
let secondWord = prompt("inserisci un'altra parola")

if (firstWord.length == secondWord.length) {
    console.log(firstWord,secondWord)
}
else if (firstWord > secondWord){
    console.log(firstWord);
}
else{
    console.log(secondWord);
}