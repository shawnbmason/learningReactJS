const getUserChoice = userInput => 
userInput.toLowerCase() === 'rock' 
|| userInput.toLowerCase() === 'paper' 
|| userInput.toLowerCase() === 'scissors' 
|| userInput.toLowerCase() === 'bomb' ? userInput.toLowerCase() : console.log('Error');

function getComputerChoice() {
  const randomNumber =  Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

function determineWinner(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    return 'Tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'bomb') {
    return 'You win!!!'
  }
};

const playGame = () => {
  userChoice = getUserChoice('scissors');
  computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()