const puzzleElement = document.getElementById('puzzle');
const letterButtonsElement = document.getElementById('letter-buttons');
const currentWordElement = document.getElementById('current-word');
const messageElement = document.getElementById('message');

let currentWord = '';
let availableLetters = ['A', 'P', 'L', 'E', 'T'];
let wordList = ['APPLE', 'PET', 'TAP'];
let puzzleGrid = [
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_'],
];

// Initialize the puzzle grid with blanks
function renderPuzzle() {
    puzzleElement.innerHTML = '';
    for (let row = 0; row < puzzleGrid.length; row++) {
        for (let col = 0; col < puzzleGrid[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('puzzle-cell');
            cell.textContent = puzzleGrid[row][col];
            puzzleElement.appendChild(cell);
        }
    }
}

// Display available letters as buttons
function renderLetters() {
    letterButtonsElement.innerHTML = '';
    availableLetters.forEach(letter => {
        const button = document.createElement('button');
        button.classList.add('letter-button');
        button.textContent = letter;
        button.onclick = () => selectLetter(letter);
        letterButtonsElement.appendChild(button);
    });
}

// Add letter to the current word
function selectLetter(letter) {
    currentWord += letter;
    currentWordElement.textContent = currentWord;
}

// Submit the formed word and check if it is valid
function submitWord() {
    if (wordList.includes(currentWord)) {
        fillPuzzle(currentWord);
        messageElement.textContent = `Good job! You found "${currentWord}"!`;
    } else {
        messageElement.textContent = `"${currentWord}" is not a valid word. Try again!`;
    }
    currentWord = '';
    currentWordElement.textContent = '';
}

// Fill in the puzzle grid with the word (for demo, we'll place words horizontally)
function fillPuzzle(word) {
    for (let i = 0; i < word.length; i++) {
        puzzleGrid[0][i] = word[i];
    }
    renderPuzzle();
}

// Initialize game
function startGame() {
    renderPuzzle();
    renderLetters();
}

startGame();
