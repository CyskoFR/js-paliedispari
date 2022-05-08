// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice = 0;
let userNumber = 0;

do {
    userChoice = prompt("Scegli pari o dispari").toLowerCase();
} while (userChoice !== "pari" && userChoice !== "dispari");

do {
    userNumber = Number(prompt("Inserisci un numero tra 1 e 5"));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
    return num % 2 === 0;
}

function userChoseEven(userChoice) {
    return userChoice.toLowerCase() === "pari";
}

const cpuNumber = getRandomNumber(1, 5);
const sum = userNumber + cpuNumber;

if ((isEven(sum) && userChoseEven(userChoice)) || (!isEven(sum) && !userChoseEven(userChoice))) {
    alert("Hai vinto!");
} else {
    alert("CPU ha vinto!");
}

console.log(`UserChoice: ${userChoice}`);
console.log(`UserNumber: ${userNumber}`);
console.log(`CpuNumber: ${cpuNumber}`);
console.log(`SUM: ${sum}`);