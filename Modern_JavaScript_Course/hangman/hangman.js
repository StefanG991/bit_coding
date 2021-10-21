class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLettters = [];
    this.status = "playing";
  }
  getWord() {
    let word = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.guessedLettters.includes(this.word[i])) {
        word += this.word[i];
      } else if (this.word[i] === " ") {
        word += this.word[i];
      } else {
        word += "*";
      }
    }
    return word;
  }
  makeGuess(guess) {
    let isUnique = !this.guessedLettters.includes(guess);
    let isBadGuess = !this.word.includes(guess);

    guess = guess.toLowerCase();
    if (isUnique) {
      this.guessedLettters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
  }
  changeStatus() {
    let word = this.getWord();
    console.log(word);
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (!word.includes("*")) {
      this.status = "win";
    } else this.status = "playing";
  }
  statusMessage() {
    if (this.status === "playing") {
      return `Guesses left ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return `Great work, you guessed the word`;
    }
  }
}
