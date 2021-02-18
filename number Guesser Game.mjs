let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const generateTarget= () => {
  return Math.floor(Math.random()*10);
};
const compareGuesses =  (human, computer, numberGuess) => {
  if(human === true){
    return 'The human player win.';
  }else{
    return 'The computer player win.';
  };

};
const updateScore = Winner => {
  if(human === winner) {
    human++;
  }else {
    computer++;
  };
};
const advanceRound= () => {
  currentRoundNumber++;
};