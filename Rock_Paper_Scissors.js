const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Your selection is invalid')
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock'
  } else if (randomNumber === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'This game is a tie.'
  } 
  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      return 'The Computer wins.'
    } else {
      return 'The User wins'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice = 'scissors') {
      return 'The Computer wins.'
    } else {
      return 'The User wins.'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer Wins'
    } else {
      return 'The User wins.'
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  console.log('The user choice is ' + userChoice)
  const computerChoice = getComputerChoice();
  console.log('The computer choice is ' + getComputerChoice())
  console.log(determineWinner(userChoice, computerChoice))
}

console.log(playGame())
