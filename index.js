const cards = document.querySelectorAll(".card")

let matched = 0;
let cardOne, cardTwo;
let disabledDeck = false;

const flipCard = ({target: clickedCard}) => {
    clickedCard.classList.add('flip')
}



cards.forEach(card => {
    card.addEventListener("click", flipCard);
});