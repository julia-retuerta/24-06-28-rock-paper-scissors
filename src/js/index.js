// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// const chooseOption = event => {
//   const choice = event.target.dataset.choice;
//   if (event.target.dataset.choice === 'paper') {
//     console.log(`Has escogido papel`);
//   } else if (event.target.dataset.choice === 'scissors') {
//     console.log(`Has escogido tijeras`);
//   } /* else {
//     console.log(`Has escogido piedra`);
//   } */
// };

// gameChoices.addEventListener('click', chooseOption);

//////////////

const gameChoices = document.getElementById('game-choices');

const winTieLoseElement = document.getElementById('win-tie-lose');

const yourPickedElement = document.getElementById('your-picked');
const yourPickedImgElement = document.getElementById('your-picked-img');

const pcPickedElement = document.getElementById('pc-picked');
const pcPickedImgElement = document.getElementById('pc-picked-img');

const youPointsElement = document.getElementById('you-points');
const pcPointsElement = document.getElementById('pc-points');

const buttonPlayAgainElement = document.getElementById('button-play-again');

const gameRules = {
  rock: {
    scissors: true,
    lizard: true,
    paper: false,
    spock: false
  },
  scissors: {
    paper: true,
    lizard: true,
    rock: false,
    spock: false
  },
  paper: {
    rock: true,
    spock: true,
    lizard: false,
    scissors: false
  },
  lizard: {
    paper: true,
    spock: true,
    scissors: false,
    rock: false
  },
  spock: {
    rock: true,
    scissors: true,
    paper: false,
    lizard: false
  }
};

const gameOptions = ['rock', 'paper', 'scissors'];

//let userSelection = null; esto puede quedarse así también: let userSelection;
let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;

const checkWinner = () => {
  if (userSelection === pcSelection) {
    winTieLoseElement.textContent = 'TIE';
    return;
  }
  if (gameRules[userSelection][pcSelection]) {
    winTieLoseElement.textContent = 'YOU WIN';
  } else {
    winTieLoseElement.textContent = 'YOU LOSE';
  }
  checkWinner();
};

const generateRandomPlay = () => {
  const randomNumber = Math.floor(Math.random() * gameOptions.length);
  pcSelection = gameOptions[randomNumber];
};

const setUserSelection = selection => {
  userSelection = selection;
  generateRandomPlay();
};

// Si se pulsa fuera del game-item
gameChoicesElement.addEventListener('click', event => {
  if (!event.target.classlist.contains('game-item')) return;
  setUserSelection(event.target.dataset.item);
});

// const winner = {
//   userWinner:
//     (userSelection === 'paper' && pcSelection === 'rock') ||
//     (userSelection === 'scissors' && pcSelection === 'paper') ||
//     (userSelection === 'rock' && pcSelection === 'scissors'),

//   pcWinner:
//     (pcSelection === 'paper' && userSelection === 'rock') ||
//     (pcSelection === 'scissors' && userSelection === 'paper') ||
//     (pcSelection === 'rock' && userSelection === 'scissors')
// };


