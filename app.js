const submitButton = document.getElementById("submit");
const msg = document.getElementById("message");
const life = document.getElementById("lives");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const scoreDisplay = document.getElementById('score');
const attemptsDisplay = document.getElementById('attempts');

function colorfulMessage(text, color) {
    msg.style.color = color;
    msg.innerHTML = text;
    msg.style.textShadow = '1px 1px 8px #fff8';
}

function checkGuess() {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 100) {
        colorfulMessage('⛔ Please enter a number between 1 and 100!', '#ff5858');
        return;
    }
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    if (guess === secretNumber) {
        score += 10;
        colorfulMessage('🎉 Correct! You guessed the number!', '#43e97b');
        scoreDisplay.textContent = `Score: ${score}`;
        document.body.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        guessInput.disabled = true;
    } else if (guess < secretNumber) {
        score--;
        colorfulMessage('🔼 Too low! Try a higher number.', '#ffb56b');
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        score--;
        colorfulMessage('🔽 Too high! Try a lower number.', '#f857a6');
        scoreDisplay.textContent = `Score: ${score}`;
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    score = 0;
    attempts = 0;
    guessInput.value = '';
    guessInput.disabled = false;
    scoreDisplay.textContent = 'Score: 0';
    attemptsDisplay.textContent = 'Attempts: 0';
    colorfulMessage('Game reset! Start guessing...', '#222');
    document.body.style.background = 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)';
}

submitButton.onclick = () => {
    checkGuess();
}

guessInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

resetGame();