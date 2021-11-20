const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!')
}};

function getComputerChoice () {
 const randomNumber = Math.floor (Math.random() * 3)
 switch (randomNumber) {
  case 0:
    return 'rock';
  break;
  case 1:
    return 'paper';
  break;
  case 2:
    return 'scissors';
  break;
}};

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'it is a tie!'

  } else if (userChoice === 'rock') { 
      if (computerChoice === 'paper') {
      return 'the computer won!'
    } else if (computerChoice === 'scissors') {
      return 'the user won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'the user won!'
    } else if (computerChoice === 'rock') {
      return 'the computer won!'
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'rock') {
      return 'the user won!'
    } else if (computerChoice === 'scissors') {
      return 'the computer won!'
      }
  } else if (userChoice === 'bomb') {
      if (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors')
      return 'the computer exploded :('
    }
};

function playGame () {
  const userChoice = getUserChoice ('bomb');
  const computerChoice = getComputerChoice ();
console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();

