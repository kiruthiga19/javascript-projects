//countEL -> camelcase 
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0
// function increment(){
//     count +=1;
//     countEl.innerText=count
   
// }
// function save(){

//     let countstr = count + "-"
//     saveEl.innerText += countstr
//     console.log(count)
//     countEl.innerText=0
//     count=0
// }
// let first =10
//   document.getElementById("first").innerText=first 
//  second=20
// document.getElementById("second").innerText= second  
// let sumEl = document.getElementById("sum-el")
// function add(){
//     let result = first+second
//     sumEl.innerText = "sum:"+result
// }
// function subract(){
//     let result=first-second
//     sumEl.innerText="sum:"+result
// }
// function multiply(){
//     let result=first*second
//     sumEl.innerText="sum:"+result
// }
// function divide(){
//     let result=first/second
//     sumEl.innerText="sum:"+result
// }
//****************third******************************************8 */
let firstCard = getRandomCard()
let secondcard = getRandomCard()
let cards=[firstCard,secondcard]
let sum = firstCard + secondcard
let isAlive = true
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
function startGame(){
    renderGame()
}
function renderGame(){
   
    cardEl.textContent="card: "
    for(let i=0;i< cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="sum: "+sum
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "wohooo! you got it"
    }
    else{
        message = "you're out of the game"
    }
    messageEl.textContent=message
}
function newcard(){
     let card=getRandomCard()
     sum+=card
     cards.push(card)
     console.log(cards)
     renderGame() 

}




