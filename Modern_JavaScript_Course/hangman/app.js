let newWord;

const startGame = async () => {
  let word = await getPuzzle(2);
  newWord = new Hangman(word, 3);
  renderPuzzle();
};

startGame();

const renderPuzzle = () => {
  document.querySelector("#puzzle").textContent = newWord.getWord();
  document.querySelector("#remaining").textContent = newWord.statusMessage();
};

window.addEventListener("keypress", function (e) {
  if (newWord.status === "playing") {
    newWord.makeGuess(e.key);
    newWord.changeStatus();
    renderPuzzle();
    console.log(newWord.status);
  }
});

document.querySelector("#reset").addEventListener("click", startGame);
