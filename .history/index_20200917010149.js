var randomNumber = null;
var P1Selection = null;
var P2Selection = null;
var compSelection = null;
var compSelectionSVG = null;
var outcome = null;
var score = null;
var total =  null;
var CompChosenSvgVar = null;

var RockSvg = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>;

var PaperSvg = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-seam" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>;

var scissorsSvg = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-scissors" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>;

const Rock = 1;
const Paper = 2;
const Scissors = 3;



function howToPlay(){
 alert("click either rock paper or ... and confirm your selection once this is completed the second user will be able to place their selection then rumble!");   
}



// function compSelectionSvg() {
//     if (compSelection = 1 ) {
//         document.getElementById("mainCard").innerHTML = 
//         <div>
//    <h1>Rocky Bot Chose</h1>
//         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
//   <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
// </svg>
//         <p>you......</p>
//         <h1 id="Win/Lose"></h1>
//         </div>
     
        

//     } 
    
//     if (compSelection = 2 ) {
//         document.getElementById("mainCard").innerHTML = 
//         <div>
//     <h1>Rocky Bot Chose</h1>
//         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-seam" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
// </svg>

//         <p>you......</p>
//         <h1 id="Win/Lose"></h1>
//         </div>
    
//         ;

//     } 
//     if (compSelection = 3 ) {
//         document.getElementById("mainCard").innerHTML = 
//         <div>
//         <h1>Rocky Bot Chose</h1>
//         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-scissors" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
// </svg>
//         <p>you......</p>
//         <h1 id="Win/Lose"></h1>
//         </div>

//         ;

//     }
//     Calculation()
// document.getElementById("Win/Loss").innerText = outcome;

// }

function goToGame() {
    window.location.replace("game.html");
}


function RockP1() {
    P1Selection = Rock
    console.log(P1Selection)
}

function PaperP1(){
    P1Selection = Paper
    console.log(P1Selection)
}

function  ScissorsP1() {
    P1Selection = Scissors
    console.log(P1Selection)
}


function startGame() {
    itemHierarchy();
    // reset game   
    setTimeout(1000)
    console.log("Reseting in 1")
    setTimeout(1000)
    console.log("Reseting in 2")
    setTimeout(1000)
    console.log("Reseting in 3")
    randomNumberGen()

}

function randomNumberGen() {
    randomNumber = Math.ceil(Math.random() * 3);
 compSelection = randomNumber;
 console.log(compSelection + "comp Selection");
 }

function itemHierarchy(){
   
    if (P1Selection == 1 ) {


    if (P1Selection == 1  && ( compSelection == 1 )) {
  console.log("draw")
  outcome = "draw"
  CompChosenSvgVar = RockSvg ;
}

if (P1Selection == 1  && ( compSelection == 2 )) {
    console.log("Lose")
    outcome = "Lose"
    CompChosenSvgVar = PaperSvg;

  }

  if (P1Selection == 1  && ( compSelection == 3 )) {
    console.log("Win")
    outcome = "Win"
    CompChosenSvgVar = scissorsSvg;
  }
  outcomeScreen() 
}

// ROCK DONE ^

if (P1Selection == 2) {

  if (P1Selection == 2  && (compSelection == 1 )) {
    console.log("Win")
    outcome = "Win"
    CompChosenSvgVar = RockSvg ;
  }

  if (P1Selection == 2  && ( compSelection == 2 )) {
    console.log("Draw")
    outcome = "Draw"
    CompChosenSvgVar = PaperSvg;
  }

  if (P1Selection ==  2  && ( compSelection ==  3)) {
    console.log("Lose")
    outcome = "Lose"
    CompChosenSvgVar = scissorsSvg;
  }
  outcomeScreen() 
}
// PAPER DONE ^

if (P1Selection ==  3 ){

  if (P1Selection ==  3  && ( compSelection == 1 )) {
    console.log("Lose")
    outcome = "Lose"
    CompChosenSvgVar = RockSvg ;
  }

  if (P1Selection == 3  && ( compSelection == 2 )) {
    console.log("Win")
    outcome = "Win"
    CompChosenSvgVar = PaperSvg;
  }

  if (P1Selection == 3  && ( compSelection == 3)) {
    console.log("draw")
    outcome = "draw"
    CompChosenSvgVar = scissorsSvg;
  }

  outcomeScreen() 

}


  

function outcomeScreen() {
    document.getElementById("RockyBot").innerHTML = "RockyBot Chose" + compSelection
    document.getElementById("Svg").innerHTML = CompChosenSvgVar



}

}