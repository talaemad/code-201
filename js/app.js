'use strict';

var uName = prompt('Whats your name?');
alert('Hello ' + uName + '! Welcome to My Webpage, I hope you enjoy with it :) Now Lets start');

var correctAnswer = 0;

var fcolor = validation('Do you think my favourite color is Blue !? Answer with y(yes) or n(no)');
if (fcolor === 'y' || fcolor === 'yes') {
  // console.log('Correct! Blue always will be my favorite');
  alert('Correct! Blue always will be my favorite');
  correctAnswer++;
}
else if (fcolor === 'n' || fcolor === 'no') {
  //console.log('Why! Blue always will be my favorite');
  alert('Why! Blue always will be my favorite');
}

var luckNum = validation('Do you think my luck number is 10 !? Answer with y(yes) or n(no) ');
if (luckNum === 'y' || luckNum === 'yes') {
  //console.log('No no no ! Its 3');
  alert('No no no ! Its 3');
}
else if (luckNum === 'n' || luckNum === 'no') {
  //console.log('Correct! Its 3');
  alert('Correct! Its 3');
  correctAnswer++;
}

var fCountry = validation('Do you think USA my favourite country !? Answer with y(yes) or n(no) ');
if (fCountry === 'y' || fCountry === 'yes') {
  //console.log('No! Its Japan!');
  alert('No! Its Japan!');
}
else if (fCountry === 'n' || fCountry === 'no') {
  //console.log('Perfect! Its Japan');
  alert('Perfect! Its Japan');
  correctAnswer++;
}

var anime = validation('Do you think I watch anime !? Answer with y(yes) or n(no) ');
if (anime === 'y' || anime === 'yes') {
  //console.log('Good Job!!');
  alert('Good Job!!');
  correctAnswer++;
}
else if (anime === 'n' || anime === 'no') {
  //console.log('Oh no! of course, I do');
  alert('Oh no! of course, I do ');
}

var fBird = validation('Do you think Owl my favorite bird?!? Answer with y(yes) or n(no) ');
if (fBird === 'y' || fBird === 'yes') {
  //console.log('Good Job!!');
  alert('Good Job!!');
  correctAnswer++;
}
else if (fBird === 'n' || fBird === 'no') {
  //console.log('Soryy! It is');
  alert('Soryy! It is');
}

function validation(msg1) {
  var value1 = prompt(msg1);
  while (value1 === undefined || value1 === null || value1 === '') {
    value1 = prompt(msg1);
  }
  var value = value1.toLowerCase();
  if (value === 'y' || value === 'yes' || value === 'n' || value === 'no') {
    return value;
  }
  else {
    validation(msg1);
  }
}

var num = 21;
var guessNumber = prompt('guess a number you have 4 trailes');
/*
function numValidation(msg){
  var value1=prompt(msg);
  while (value1 === undefined || value1 === null || value1 === '') {
    value1 = prompt('guess a number');
  }
  if (Number.isInteger(value1)) {
    return Number(value1);
  }
  else{
    numValidation(msg);
  }
}
*/
var i;
for (i = 1; i < 5; i++) {
  guessNumber = Number(guessNumber);
  if (guessNumber === num) {
    alert('Coreect!! its ' + num);
    // console.log('Correct it is!');
    correctAnswer++;
    break;
  }
  else if (guessNumber < num) {
    alert('No! Its too low, thats your ' + i + ' time');
  }
  else if (guessNumber > num) {
    alert('No! Its too heigh, thats your ' + i + ' time');
  }
  if (i != 4) {
    guessNumber = prompt('guess a number');
    // console.log('Not Correct!');
  }
}

if (i == 5) {
  alert('The Number is ' + num);
}


var arr = ['italy', 'japan', 'korea', 'bali', 'spain', 'palestine'];
var favCountry = prompt('Give me a name of country you think i want to visit');

for (var i = 0; i < 6; i++) {

  favCountry = favCountry.toLowerCase();
  var j;
  for (j = 0; j < 6; j++) {
    if (favCountry == arr[j]) {
      alert('Correct it is!');
     // console.log('Correct it is!');
      correctAnswer++;
      break;
    }
  }
  if (j != 6) {
    break;
  }
  else {
    if (i != 5){
      favCountry = prompt('Give me a name, This is your' + (i + 1) + 'try');
      // console.log('Not Correct!');
    }
  }
}

if (i == 6) {
  alert('They are ' + arr);
}
alert('you answered ' + correctAnswer + 'questions correctly');