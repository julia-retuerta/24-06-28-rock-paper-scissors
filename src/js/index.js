// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// PASOS

// Localizar los elementos implicados del DOM
// Crear los datos necesarios del programa

// FLUJO DEL PROGRAMA
// Detectar dónde hemos hecho click
// Guardar nuestra jugada
// Generar una jugada aleatoria para el ordenador y guardarla
// Comparar jugadas
// Mostrar resultado
// Asignar puntos

const gameChoicesElement = document.getElementById('game-choices');

const winTieLoseElement = document.getElementById('win-tie-lose');

const yourPickedElement = document.getElementById('your-picked');
const pcPickedElement = document.getElementById('pc-picked');

const yourPickedImgElement = document.getElementById('your-picked-img');
const pcPickedImgElement = document.getElementById('pc-picked-img');

const youPointsElement = document.getElementById('you-points');
const pcPointsElement = document.getElementById('pc-points');

const resultElement = document.getElementById('result');

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

const gameImages = {
  rock: './assets/images/icon-rock.svg',
  paper: './assets/images/icon-paper.svg',
  scissors: './assets/images/icon-scissors.svg',
  lizard: './assets/images/icon-lizard.svg',
  spock: './assets/images/icon-spock.svg'
};

const gameOptions = ['rock', 'paper', 'scissors'];
if (document.body.dataset.mode === 'advanced') {
  gameOptions.push('lizard', 'spock');
}

//let userSelection = null; esto puede quedarse así también: let userSelection;
let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;
let showResults = false;

const updateScore = () => {
  youPointsElement.textContent = userPoints;
  pcPointsElement.textContent = pcPoints;
};

const changeScreen = () => {
  if (showResults) {
    gameChoicesElement.classList.add('hide');
    resultElement.classList.remove('hide');
  } else {
    gameChoicesElement.classList.remove('hide');
    resultElement.classList.add('hide');
  }
};

const printResultsImage = () => {
  yourPickedImgElement.src = gameImages[userSelection];
  pcPickedImgElement.src = gameImages[pcSelection];

  yourPickedElement.className = `game__choice game__choice--result game__choice--${userSelection}`;
  pcPickedElement.className = `game__choice game__choice--result game__choice--${pcSelection}`;

  showResults = true;

  changeScreen();
};

const checkWinner = () => {
  if (userSelection === pcSelection) {
    winTieLoseElement.textContent = 'TIE';
    return;
  }
  if (gameRules[userSelection][pcSelection]) {
    winTieLoseElement.textContent = 'YOU WIN';
    userPoints++;
  } else {
    winTieLoseElement.textContent = 'YOU LOSE';
    pcPoints++;
  }
  updateScore();
};

const generateRandomPlay = () => {
  const randomNumber = Math.floor(Math.random() * gameOptions.length);
  pcSelection = gameOptions[randomNumber];
  checkWinner();
  printResultsImage();
};

const setUserSelection = selection => {
  userSelection = selection;
  generateRandomPlay();
};

// Si se pulsa fuera del game__choice, no hacer nada
gameChoicesElement.addEventListener('click', event => {
  if (!event.target.classList.contains('game__choice')) return;
  setUserSelection(event.target.dataset.choice);
});

buttonPlayAgainElement.addEventListener('click', () => {
  showResults = false;
  changeScreen();
});

/////////////////////////////

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

/////////////////////////////

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
