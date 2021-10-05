window.addEventListener('load',init) ;

// Globals

// levels 
const levels = {
  easy : 5,
  medium : 3,
  hard : 1
}

const currentLevel =  levels.medium;

let time = currentLevel ;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');  

var myArray = [
"nut",
"faith",
"agile",
"vessel",
"install",
"modest",
"mist",
"banish",
"panel",
"king",
"organize",
"harmful",
"use",
"irony",
"laboratory",
"swipe",
"observer",
"depression"
  ];

function init(){

    seconds.innerHTML = currentLevel;
    showWords(myArray);
    // start matching 
    wordInput.addEventListener('input',startMatch);

    // call countDown

    setInterval(countDown,1000);
    setInterval(checkStatus,50);
    
}

function startMatch(){

  if (matchWords()){
    
    isPlaying = true;
    time  = currentLevel + 1; 
    showWords(myArray);
    wordInput.value = '';
    score++;
  }
  else if(score > 2){
    currentLevel = currentLevel.hard;
  }
  
  if (score == -1){
    scoreDisplay.innerHTML = 0 ;
  }
  else{
    scoreDisplay.innerHTML = score; 
  }
  
    
}

function matchWords(){
  if(wordInput.value == currentWord.innerHTML){
    message.innerHTML = "Correct !!";
    return true;
  }
  else{
     message.innerHTML = '';
     return false;
     
  }  

}



function showWords(myArray){
    const Randword  = myArray[Math.floor(Math.random()*myArray.length)];
    currentWord.innerHTML = Randword;
}



function countDown(){

    if(time > 0){
      time--;
    }
    else if(time==0){
      isPlaying = false;
    }

    timeDisplay.innerHTML = time;
    console.log(time);
}


function checkStatus(){
  if (!isPlaying && time == 0){
    message.innerHTML = "Game Over !!!";
    score = -1;
  }

}

