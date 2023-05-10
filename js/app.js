'use strict';

// Get username via propmpt and alert greeting to user

let youserName = prompt('Hello I am Destinee, What is your Name?');

alert('Welcome to the About Destinee Guessing Game... Let the games begin ' + youserName);

let youserScore = 0;
// Prompt user with 5 yes/no questions and alert incorrect or correct

let firstAnswer = prompt('Was I born in Seattle? (Y or N)').toUpperCase();

if(firstAnswer === 'N' )
{
  youserScore++;
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let secondAnswer = prompt('Did I work as a Flight attendant? (Y or N)').toUpperCase();

if(secondAnswer === 'Y' )
{
  youserScore++;
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let thirdAnswer = prompt('Do I have a real estate license? (Y or N)').toUpperCase();

if(thirdAnswer === 'Y' )
{
  youserScore++;
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let fourthAnswer = prompt('Do I own property? (Y or N)').toUpperCase();

if(fourthAnswer === 'N' )
{
  youserScore++;
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[');

let fifthAnswer = prompt('Did I study in Arizona? (Y or N)').toUpperCase();

if(fifthAnswer === 'Y' )
{
  youserScore++;
  alert('Correct! Great Job ' + youserName);
}
else
  alert('Incorrect =[ ');

let sixthAnswer = 0;
sixthAnswer = prompt('Guess a numer between 1-10. You have four times to guess.');

for (let i = 0; i <=3; i++)
{
  if (sixthAnswer === 5)
  {
    alert('Correct!');
    youserScore++;
  }
  else if (sixthAnswer > 5)
  {
    alert('Too high!');
    sixthAnswer = prompt('Guess a numer between 1-10.');
  }
  else if(sixthAnswer < 5)
  {
    alert('Too Low!');
    sixthAnswer = prompt('Guess a numer between 1-10.');
  }
}
alert('It was Five!');


let youserAnswer =[''];
let seventhAnswer = [''];
seventhAnswer.push('The Hobbit','Talking with Strangers','Effective Speaking','The Four Agreements','Mans Search for Meaning','What Happened to you?','The Alchemist','The Good Earth','Narrative of the Life of Frederick Douglass','All Gods Children Need Traveling Shoes');

for(let j = 0; j<=6; j++)
{
  youserAnswer [j] = prompt('This is the hardest to guess. Can you guess my top five books? Enter your choice from the following:'+ seventhAnswer);
  let found = false;

  for (let n = 0; n <= seventhAnswer.length; n++)
  {
    if(seventhAnswer[n] === youserAnswer[j])
    {
      found =true;
    }
  }
  if(found)
  {
    youserScore + 1;
    alert('Correct!');
  }
  else
  {
    alert('Try again!');
  }
}
alert('My top five favorite books are' + seventhAnswer.slice(0,5));

//give final message include username in alert

alert('This has been so much fun! Until next time, Thanks for playing ' + youserName + 'Your final score:' + youserScore + ' out of 7');
