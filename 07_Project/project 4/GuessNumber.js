let randomNum = parseInt(Math.random()*100+1);
console.log(randomNum)

// const guess = document.querySelector('#guess')
const userInput = document.querySelector('#guessField')
const subtmit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// array, to show user of their previous gueses
let PreviousGues = []
let numGuess = 1

let PlayGame = true

if(PlayGame)
{
  subtmit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

// to validate that no. is between 1-100 or not
function validateGuess(guess)
{
  if(isNaN(guess))
  {
    alert("Please enter a valid number")
  }
  else if(guess < 1 )
  {
    alert("Please enter a number more than 1")
  }
  else if(guess > 100 )
  {
    alert("Please enter a number less than 100")
  }
  else
  {
    PreviousGues.push(guess)
    if(numGuess == 11)
    {
      displayMessage(`Game Over, Random number was ${randomNum}`);
      endGame();
    }
    else
    {
      displayGuess(guess);
      checkGuess(guess)
    }
  }

}

// to check weather the no. is equal to random number or not
function checkGuess(guess)
{
  if(guess == randomNum)
  {
    displayMessage("weldone!,You Guesses it right")
    endGame()
  }
  else if(guess < randomNum)
  {
    displayMessage("Number is TOOOO low!")
  }
  else if(guess > randomNum)
  {
    displayMessage("Number is TOOOO High!")
  }

}

// to clean Value and and to upadte guess array
function displayGuess(guess)
{
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`

}

// to display messege
function displayMessage(message)
{
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}


function endGame()
{
  userInput = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start a new game</h2>`;
  startOver.appendChild(p);
  PlayGame = false
  newGame();
}

function newGame()
{
  const newGameButton  = document.querySelector("#newGame")
  newGame.addEventListener('click',function(e){
    randomNum = parseInt(Math.random()*100+1);
    PreviousGues = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);

    PlayGame = true


  })

}
