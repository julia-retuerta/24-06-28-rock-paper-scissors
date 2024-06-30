// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameChoices = document.getElementById('game-choices');

const chooseOption = event => {
    const choice = event.target.dataset.choice
  if (event.target.dataset.choice === 'paper') {
    console.log(`Has escogido papel`);
  } else if (event.target.dataset.choice === 'scissors') {
    console.log(`Has escogido tijeras`);
  } /* else {
    console.log(`Has escogido piedra`);
  } */
};

gameChoices.addEventListener('click', chooseOption);
