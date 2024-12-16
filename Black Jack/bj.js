let cards = []
let sum = 0
let message = ''
let hasBlackjack = false
let isAlive = false

const introEl = document.getElementById("intro")
const cardsEl = document.getElementById("cards")
const sumEl = document.getElementById("sum")
const drawButton = document.getElementById("draw")

function startGame() {
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    hasBlackjack = false
    isAlive = true
    drawButton.disabled = false

    updateGame()
}

function drawCard() {
    if (isAlive && !hasBlackjack) {
        const card = getRandomCard()
        cards.push(card)
        sum += card
        updateGame()
    }
}

function updateGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Would you like to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🎉"
        hasBlackjack = true
        drawButton.disabled = true
    } else {
        message = "You're out of the game! 😥"
        isAlive = false
        drawButton.disabled = true
    }

    introEl.textContent = message
}

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    return card > 10 ? 10 : card === 1 ? 11 : card
}