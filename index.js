const cards = document.querySelectorAll(".card")

let matched = 0;
let cardOne, cardTwo;
let disabledDeck = false;

const flipCard = ({target: clickedCard}) => {

    if (disabledDeck || clickedCard === cardOne) return;

    clickedCard.classList.add('flip');
    
    if (!cardOne) {
        // First card clicked
        cardOne = clickedCard;
    } else {
        // Second card clicked
        cardTwo = clickedCard;
        disabledDeck = true;

        // Check if the cards match
        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;

        if (cardOneImg === cardTwoImg) {
            // Cards match
            matched++;
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            resetDeck();
        } else {
            // Cards do not match
            setTimeout(() => {
                cardOne.classList.remove("flip");
                cardTwo.classList.remove("flip");
                resetDeck();
            }, 1000);
        }
    }
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});