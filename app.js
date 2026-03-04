
let playerScore = 0
let aiScore = 0
function updateScore(){

document.getElementById("playerScore").textContent = playerScore
document.getElementById("aiScore").textContent = aiScore

}
function checkGameEnd(){

let totalBoxes = (size-1)*(size-1)

if(playerScore + aiScore === totalBoxes){

currentPlayer = "none"

let text = ""

if(playerScore > aiScore){
text = "🏆 Player Wins!"
}
else if(aiScore > playerScore){
text = "🤖 AI Wins!"
}
else{
text = "🤝 Draw!"
}

document.getElementById("resultText").textContent = text
document.getElementById("gameResult").classList.add("show")

}

}
function newGame(){

playerScore = 0
aiScore = 0

updateScore()

currentPlayer = "player"

createBoard()

updateTurn()

document.getElementById("gameResult").classList.remove("show")

}
const board = document.getElementById("board")

const size = 5

let currentPlayer = "player"

function createBoard(){

board.innerHTML=""

board.style.gridTemplateColumns = "16px 70px 16px 70px 16px 70px 16px 70px 16px"
board.style.gridTemplateRows = "16px 70px 16px 70px 16px 70px 16px 70px 16px"
for(let r=0;r<size*2-1;r++){

for(let c=0;c<size*2-1;c++){

let cell=document.createElement("div")
cell.dataset.row = r
cell.dataset.col = c

// dots
if(r%2===0 && c%2===0){
cell.classList.add("dot")
}

// horizontal lines
else if(r%2===0 && c%2===1){
cell.classList.add("h-line")
cell.addEventListener("click",()=>drawLine(cell))
}

// vertical lines
else if(r%2===1 && c%2===0){
cell.classList.add("v-line")
cell.addEventListener("click",()=>drawLine(cell))
}

// boxes
else{
cell.classList.add("box")
}

board.appendChild(cell)

}

}

}

function drawLine(cell){

if(currentPlayer !== "player") return

if(cell.classList.contains("player-line") || cell.classList.contains("ai-line")) return

cell.classList.add("player-line")

let closed = checkBoxes()

if(!closed){
currentPlayer="ai"
updateTurn()
setTimeout(aiMove,400)
}

}
function checkBoxes(){

let boxClosed = false

let boxes = document.querySelectorAll(".box")

boxes.forEach(box=>{

let r = parseInt(box.dataset.row)
let c = parseInt(box.dataset.col)

let top = document.querySelector(`[data-row="${r-1}"][data-col="${c}"]`)
let bottom = document.querySelector(`[data-row="${r+1}"][data-col="${c}"]`)
let left = document.querySelector(`[data-row="${r}"][data-col="${c-1}"]`)
let right = document.querySelector(`[data-row="${r}"][data-col="${c+1}"]`)

if(
top?.classList.contains("player-line") || top?.classList.contains("ai-line")
){

if(
bottom?.classList.contains("player-line") || bottom?.classList.contains("ai-line")
){

if(
left?.classList.contains("player-line") || left?.classList.contains("ai-line")
){

if(
right?.classList.contains("player-line") || right?.classList.contains("ai-line")
){

if(!box.classList.contains("player-box") && !box.classList.contains("ai-box")){
boxClosed = true
if(currentPlayer==="player"){
box.classList.add("player-box")
playerScore++
}else{
box.classList.add("ai-box")
aiScore++
}

updateScore()
checkGameEnd()

}

}

}

}

}

})
return boxClosed
}

function aiMove(){

let lines = document.querySelectorAll(".h-line, .v-line")

let available = []

lines.forEach(line=>{
if(!line.classList.contains("player-line") && !line.classList.contains("ai-line")){
available.push(line)
}
})

if(available.length===0) return

// محاولة إغلاق مربع
for(let line of available){

line.classList.add("ai-line")

let closed = checkBoxes()

if(closed){
setTimeout(aiMove,400)
return
}

line.classList.remove("ai-line")

}

// لو مفيش مربع يتقفل
let randomLine = available[Math.floor(Math.random()*available.length)]

randomLine.classList.add("ai-line")

let closed = checkBoxes()

if(!closed){
currentPlayer="player"
updateTurn()
}
else{
setTimeout(aiMove,400)
}

}

function updateTurn(){

let text = currentPlayer === "player" ? "Player Turn" : "AI Turn"

document.getElementById("turnIndicator").textContent = text

}

if ("serviceWorker" in navigator) {

navigator.serviceWorker.register("service-worker.js")
.then(() => console.log("Service Worker Registered"))

}
createBoard()
updateTurn()

