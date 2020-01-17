const cards =[
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

const cardsInPlay =[];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	} else {
  		alert("Sorry, try again.");
	}
}

function flipCard () {
	let cardID = this.getAttribute('data-id');
	
	cardsInPlay.push(cards[cardID].rank);
	
	console.log("User flipped "+ cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	
	this.setAttribute('src', cards[cardID].cardImage); 
	
	if (cardsInPlay.length > 1) {
		checkForMatch();
	}
}

function createBoard() {
	for (let i=0; i< cards.length; i++) {
		let cardElement = document.createElement('img');
		
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();





/*
	console.log("User flipped" + " " +cardsInPlay);

	console.log(cardsInPlay.length); */