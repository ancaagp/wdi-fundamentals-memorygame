const cards =["queen", "queen", "king", "king"];
const cardsInPlay =[];
const cardOne = cards[0];
console.log(cardOne);


cardsInPlay.push(cardOne);

console.log(cardsInPlay);

const cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " +cardsInPlay);

console.log(cardsInPlay.length);

if (cardsInPlay[0] === cardsInPlay[1]) {
     alert("You found a match!");
} else alert("Sorry, try again");