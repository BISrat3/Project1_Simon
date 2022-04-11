// ------- declaring valriable ---------//
let player = [];
let simonChoice = [];
const arrayColors = ['green','red','yellow','blue'];
let winner;
let level =0;
let startGame = false;

// ------- query selection elements ---------//
const green = document.querySelector('.greenBtn')
// console.log(green)
const red = document.querySelector('.redBtn')
// console.log(red)
const start = document.querySelector('.startBtn')
// console.log(start)
const yellow = document.querySelector('.yellowBtn')
// console.log(yellow)
const blue = document.querySelector('.blueBtn')
// console.log(blue)
const reset = document.querySelector('.resetBtn')
// console.log(reset)
const displayScreen= document.querySelector("#screenInput")

const counter= document.querySelector("#inputCounter")

//--- adding eventListener for each button ---------//
green.addEventListener('click', ()=> {
    // console.log("green clicked")
    startGame = true;
    green.classList.add('green')
    player.push('green')
    console.log(player)
    // playerSelection()
})
red.addEventListener('click', ()=> {
    // console.log("red clicked")
    startGame = true;
    red.classList.add('red')
    player.push('red')
    console.log(player)
    // playerSelection()
})
blue.addEventListener('click', ()=> {
    // console.log("blue clicked")
    startGame = true;
    blue.classList.add('blue')
    player.push('blue')
    console.log(player)
    // playerSelection()
   
})
yellow.addEventListener('click', ()=> {
    // console.log("yellow clicked")
    startGame = true;
    yellow.classList.add('yellow')
    player.push('yellow')
    console.log(player)
    // playerSelection()
})

//--- Reset button functionality    ---------//
reset.addEventListener('click', ()=> {
    // console.log("reset clicked")
    startGame = false;
    displayScreen.innerHTML =""
    counter.innerHTML = "";
    player = [];
    simonChoice = [];
  
})

//--- Start button functionality  ---------//
start.addEventListener('click', ()=> {
    // console.log("start clicked")
    if( startGame = true){
        displayScreen.innerHTML ="Start the Game"
        // counter.innerHTML = "level 0";
        start.style.background ="green"
        start.style.color ="white"
        player = [];
        getSelectedColor();
        levelDisplay();
    }
        
        // playerSelection()
        
})

 // --------------- Level of the game --------------------//
 
function levelDisplay(){
    // level = Math.min(level +=1);
    if (startGame === true){
        level ++;
       if(level < 15){
            counter.innerHTML = "Level - " + level; 
        }
       else if (level <= 16){ 
            counter.innerHTML= "Final level"
        }       
       else if (level === 17){
            start.setAttribute("disabled", true);
            counter.innerHTML ="You win the Game"
            displayScreen.innerHTML = 'Game is over'
        }  
    }   
}


// --------------- Game Over Function --------------------//
function gameOver(){
    counter.innerHTML =""
    displayScreen.innerHTML ="Game Over"
    startGame = false;
    

}
// --------------- Function for selecting random color--------------------//
function getSelectedColor(){
    let colorSelected =  arrayColors[Math.floor(Math.random() * arrayColors.length)]
    // console.log(colorSelected)
    simonChoice.push(colorSelected)
    console.log(simonChoice)
    simonSelections()
    // playerSelection()
}
// getSelectedColor()

// --------------- function of simon selection--------------------//
function simonSelections(){    
    
    simonChoice.forEach((colorSelected, i) => {
    setTimeout(()=>{
        if (startGame === true){
            if(simonChoice[i] === arrayColors[0]){
                green.style.backgroundColor = "green";
                //  console.log(simonChoice[i])
                setTimeout(()=>
                {
                green.style.backgroundColor = "springgreen"
                } ,200)
            }
            else if(simonChoice[i] === arrayColors[1]){
                red.style.backgroundColor = "red";
                //  console.log(simonChoice[i])
                setTimeout(()=>
                {
                    red.style.backgroundColor = "tomato"
                } ,200)
            }
            else if (simonChoice[i] === arrayColors[2]){
                yellow.style.backgroundColor = "yellow";
                //  console.log(simonChoice[i])
                setTimeout(()=>
                {
                    yellow.style.backgroundColor  = "lightyellow"
                } ,200)
            }
            else if (simonChoice[i] === arrayColors[3]){
                blue.style.backgroundColor = "blue";
                //  console.log(simonChoice[i])
                setTimeout(()=>
                {
                    blue.style.backgroundColor = "lightskyblue"
                } ,200)
            }
        }  
    }, 500 * i)
    })
}

// // // --------- player vs simon function comparsion-------------------//

function playerSelection(){
    if(startGame === true){
        if(player.length === simonChoice.length && player.every((arrayColors) => arrayColors === simonChoice[i]))
        {
            displayScreen.innerHTML ="Proceed to the next level"
            getSelectedColor()
            console.log("Correct")
        }
        else{
            console.log("Wrong click")
        }
    }
   
    // simonSelections()
}
// playerSelection()