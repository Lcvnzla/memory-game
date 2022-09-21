let memory = [];
let cardsChosenId = []
let cardsWon = []
let cardsChosen = [];
let resultDisplay = 0;
let start_Display = 5;
let starts = false;
let second = 5;

document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
            name: 'dog',
            img: 'images/doge.png'
        },
        {
            name: 'sing',
            img: 'images/alert.png'
        },
        {
            name: 'gold',
            img: 'images/crown.png'
        },
        {
            name: 'Toll',
            img: 'images/hammer.png'
        },
        {
            name: 'ball',
            img: 'images/pokeball.png'
        },
        {
            name: 'video',
            img: 'images/youtube.png'
        },
        {
            name: 'dog',
            img: 'images/doge.png'
        },
        {
            name: 'sing',
            img: 'images/alert.png'
        },
        {
            name: 'gold',
            img: 'images/crown.png'
        },
        {
            name: 'Toll',
            img: 'images/hammer.png'
        },
        {
            name: 'ball',
            img: 'images/pokeball.png'
        },
        {
            name: 'video',
            img: 'images/youtube.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    memory = cardArray;

    const grid = document.querySelector('.grid')
    resultDisplay = document.querySelector('#result')
    start_Display = document.querySelector('#start_in')

    cardsChosen = []
    cardsChosenId = []
    cardsWon = []
    start_Display.textContent = 'start in:' + second;
   
    // board 
    function createBoard() {

        for (let i = 0; i < memory.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', memory[i].img)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            card.style = "margin:1px";
            grid.appendChild(card)
        }

    }


    createBoard()
})

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    console.log(cards);

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/backcard.png')
        cards[optionTwoId].setAttribute('src', 'images/backcard.png')
        alert('same cards!!')
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match :)')
        cards[optionOneId].setAttribute('src', 'images/Frontcard.png')
        cards[optionTwoId].setAttribute('src', 'images/Frontcard.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/backcard.png')
        cards[optionTwoId].setAttribute('src', 'images/backcard.png')
        alert('Sorry, you got to do it again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === memory.length / 2) {
        resultDisplay.textContent = 'Congrats you won!!!'
    }
}

//flip your card
function flipCard() {
    if (!starts) { return; }

    let cardId = this.getAttribute('data-id')
    cardsChosen.push(memory[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', memory[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosen);
}

function start() {
    const cards = document.querySelectorAll('img')
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('src', 'images/backcard.png')
    }
    starts = true;
}

var seconds = function() {
    second--;
    start_Display.textContent = 'start in:' + second;
    if (second == 0) {
        clearInterval(timer);
        start_Display.textContent = 'Ready go!';
        start();
    }
}

var timer = setInterval(function() {
    seconds();
}, 1000);







