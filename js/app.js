'use strict';

// Get username via propmpt and alert greeting to user

let youserName = prompt('Hello I am Destinee, What is your Name?');

alert('Welcome to the About Destinee Guessing Game... Let the games begin ' + youserName);


// Prompt user with 5 yes/no questions and alert incorrect or correct

let firstAnswer = prompt('Was I born in Seattle? (Y or N)').toUpperCase();

if(firstAnswer === 'N' )
{
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let secondAnswer = prompt('Did I work as a Flight attendant? (Y or N)').toUpperCase();

if(secondAnswer === 'Y' )
{
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let thirdAnswer = prompt('Do I have a real estate license? (Y or N)').toUpperCase();

if(thirdAnswer === 'Y' )
{
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let fourthAnswer = prompt('Do I own property? (Y or N)').toUpperCase();

if(fourthAnswer === 'N' )
{
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[');

let fifthAnswer = prompt('Did I study in Arizona? (Y or N)').toUpperCase();

if(fifthAnswer === 'Y' )
{
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

//give final message include username in alert

alert('This has been so much fun! Until next time, Thanks for playing ' + youserName);
