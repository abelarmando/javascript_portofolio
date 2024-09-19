'use strict';

const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const btnall = document.querySelectorAll('.btn');
const doch1 = document.querySelector('h1');

let userChosenColour;
let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let playing = true;
let level = 0;

// function to fade in and fade out button
let animatePress = function(colour){
    document.getElementById(colour).classList.add('pressed');
    setTimeout(() => {
        document.getElementById(colour).classList.remove('pressed');
    }, 50);
}

// function to play a sound
let playSound = function(name){
    let a = new Audio(`sounds/${name}.mp3`);
    a.play();   
}

// for which button will click after start the game
const nextSequence = function(){
    // after nextsequent is triggered it will reset userclickedpattern
    userClickedPattern = [];

    // make random number 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);

    // to know where button will click and play a sound
    animatePress(randomChosenColour)

    playSound(randomChosenColour);

    // change h1 to level
    doch1.textContent = `Level ${level}`

    // increase the level
    level++;

    
}

// to Check answer
const checkAnswer = function(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){ 

        // if array same it wil output youre right
        
        // and then will sto the nextsequence
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
        
    } else{ 
        // reset the game
        document.querySelector('body').classList.add('game-over');
        setTimeout(() => {
            document.querySelector('body').classList.remove('game-over')
        }, 200);
        playSound('wrong');
        userChosenColour = 0;
        userClickedPattern = [];
        gamePattern = [];
        level = 0;
        doch1.textContent = 'Press A Key to Start';
        playing=true;
    }
}



// for to know which button was clicked
for(let i = 0; i < btnall.length; i++){
btnall[i].addEventListener('click', function(){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour)

    // play sound using a function or you can add it directly into this loop not using a function
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    
})
}

// to start the game 
document.addEventListener('keypress',function(e){
    // start the function with conditional
    if(playing && e.key == 'a') {
        document.querySelector('body').classList.remove('game-over')
        nextSequence()
        playing = false;
        
        
    }
})



// green.addEventListener('click', function(){
//     green.classList.add('pressed');
//     setTimeout(() => {
//         green.classList.remove('pressed');
//     }, 50);

//     const soundgreen = new Audio('sounds/green.mp3');
//     soundgreen.play();
// })

// red.addEventListener('click', function(){
//     red.classList.add('pressed');
//     setTimeout(() => {
//         red.classList.remove('pressed');
//     }, 50);
    
//     const soundred = new Audio('sounds/red.mp3');
//     soundred.play();
// })

// yellow.addEventListener('click', function(){
//     yellow.classList.add('pressed');
//     setTimeout(() => {
//         yellow.classList.remove('pressed');
//     }, 50);
    
//     const soundyellow = new Audio('sounds/yellow.mp3');
//     soundyellow.play();
// })

// blue.addEventListener('click', function(){
//     blue.classList.add('pressed');
//     setTimeout(() => {
//         blue.classList.remove('pressed');
//     }, 50);
    
//     const soundblue = new Audio('sounds/blue.mp3');
//     soundblue.play();
// })