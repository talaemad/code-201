'use strict';

var uName = prompt('Whats your name?');
alert('Hello '+ uName+'! Welcome to My Webpage, I hope you enjoy with it :) Now Lets start');

var fcolor = validation('Do you think my favourite color is Blue !? Answer with y(yes) or n(no)');
if(fcolor === 'y'||fcolor === 'yes'){
  console.log('Correct! Blue always will be my favorite');
  alert('Correct! Blue always will be my favorite');
}
else if (fcolor === 'n'||fcolor === 'no'){
  console.log('Why! Blue always will be my favorite');
  alert('Why! Blue always will be my favorite');
}

var luckNum = validation('Do you think my luck number is 10 !? Answer with y(yes) or n(no) ');
if(luckNum === 'y'||luckNum === 'yes'){
  console.log('No no no ! Its 3');
  alert('No no no ! Its 3');
}
else if (luckNum === 'n'||luckNum === 'no'){
  console.log('Correct! Its 3');
  alert('Correct! Its 3');
}

var fCountry = validation('Do you think USA my favourite country !? Answer with y(yes) or n(no) ');
if(fCountry === 'y'||fCountry === 'yes'){
  console.log('No! Its Japan!');
  alert('No! Its Japan!');
}
else if (fCountry === 'n'||fCountry === 'no'){
  console.log('Perfect! Its Japan');
  alert('Perfect! Its Japan');
}

var anime = validation('Do you think I watch anime !? Answer with y(yes) or n(no) ');
if(anime === 'y'||anime === 'yes'){
  console.log('Good Job!!');
  alert('Good Job!!');
}
else if (anime === 'n'||anime === 'no'){
  console.log('Oh no! of course, I do');
  alert('Oh no! of course, I do ');
}

var fBird = validation('Do you think Owl my favorite bird?!? Answer with y(yes) or n(no) ');
if(fBird === 'y'||fBird === 'yes'){
  console.log('Good Job!!');
  alert('Good Job!!');
}
else if (fBird === 'n'||fBird === 'no'){
  console.log('Soryy! It is');
  alert('Soryy! It is');
}

function validation(msg1) {
  var value1 = prompt(msg1);
  while(value1 === undefined || value1 === null || value1 === ''){
    value1 = prompt(msg1);
  }
  value1=value1.toLowerCase();
  if (value1 === 'y'|| value1 === 'yes'|| value1 === 'n'|| value1 === 'no'){
    return value1;
  }
  else{
    validation(msg1);
  }

}
