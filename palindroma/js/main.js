// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Inserisci una parola");

function checkPalindrome(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}

console.log(checkPalindrome(word));

if (word === checkPalindrome(word)) {
    alert(`"${word}" è una parola palindroma!`);
} else {
    alert(`"${word}" non è una parola palindroma`);
}
