window.addEventListener('load',init)

// Globals

let time = 5 ;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('time');
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
    showWords(myArray);
    
}

function showWords(myArray){
    const Randword  = myArray[Math.floor(Math.random()*myArray.length)];
    currentWord.innerHTML = Randword;

}




