'use strict';
let youserScore = 0;
// Get username via propmpt and alert greeting to user

let youserName = prompt('Hello I am Destinee, What is your Name?');

alert('Welcome to the About Destinee Guessing Game... Let the games begin ' + youserName);


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

let rando = 5;

for (let n=0; n<=3; n++)
{
  let sixthAnswer = Number(prompt('Guess a numer between 0-10. You have four times to guess.'));

  if (sixthAnswer === rando)
  {
    youserScore++;
    alert('Correct!');
    break;
  }
  else if (sixthAnswer > rando)
  {
    alert('Too high!');
  }
  else if(sixthAnswer < rando)
  {
    alert('Too Low!');
  }
  else{
    alert('Numbers only!');
  }
}

alert('It was Five!');

function bookGuess()
{
  let j = 7;
  const seventhAnswer = ['The Hobbit',
    'Talking with Strangers',
    'Effective Speaking',
    'The Four Agreements',
    'Mans Search for Meaning',
    'What Happened to you?'];

  while (j > 0)
  {
    const userAnswer = prompt('Can you guess five of my ten favorite books? You have 7 attempts. Please enter your guess:').toUpperCase();
    let found = false;
    for (let i = 0; i < seventhAnswer.length; i++)
    {
      if (seventhAnswer[i].toUpperCase() === userAnswer)
      {
        alert('Correct!');
        found = true;
        break;
      }
    }
    if (found)
    {
      youserScore += 1;
    }
    else
    {
      alert('Try again');
    }
    j -= 1;
  }
  alert('My top five favorite books are ' + seventhAnswer.slice(0, 4).join(', '));
}
//give final message include username in alert
bookGuess();
alert('This has been so much fun! Until next time, Thanks for playing ' + youserName + 'Your final score:' + youserScore);
