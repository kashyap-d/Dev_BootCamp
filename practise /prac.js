let firstCard=11
let secondCard=10
let sum=firstCard+secondCard
let message=''
let hasBj=false
let isAlive=true

function startGame(){

    if(sum<21){
        message='would you like to pick a new card?'
    }
    else if(sum===21){
        message="you've got black jack!"
        hasBj=true
    }
    else{
        message="you're out of the game 😭"
        isAlive=false
    }
    let intro=document.getElementById("intro")
    let sum=document.getElementById("sum")

    intro.textContent=message
}