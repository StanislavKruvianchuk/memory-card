const cards = document.querySelectorAll(".card")

let matched = 0;
let cardOne, cardTwo;
let disabledDeck = false;

function flipCard({ target: clickedCard }) {

    if (disabledDeck || clickedCard === cardOne) return;

    clickedCard.classList.add('flip');

    if (!cardOne) {
        // First card clicked
        cardOne = clickedCard;
    } else {
        // Second card clicked
        cardTwo = clickedCard;
        disabledDeck = true;

        console.log(cardOne)
        // Check if the cards match
        let cardOneImg = cardOne.querySelector(".card__back").querySelector('img').src;
        let cardTwoImg = cardTwo.querySelector(".card__back").querySelector('img').src;

        matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++
        if (matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disabledDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disabledDeck = false;
        }, 400);
    }
}

function shuffleCard() {
    matched = 0;
    disabledDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    console.log(arr)
    cards.forEach((card, i) => {
        console.log(i)
        card.classList.remove("flip");
        let imgTag = card.querySelector(".card__back img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard()

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});