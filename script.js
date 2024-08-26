function showMotivation() {
    const bubble = document.getElementById('motivational-bubble');
    bubble.innerHTML = "You're doing amazing! Keep going!";
    bubble.style.display = 'block';
    setTimeout(() => bubble.style.display = 'none', 3000);
}

function showDate() {
    const today = new Date();
    const bubble = document.getElementById('date-bubble');
    bubble.innerHTML = `Today's date is: ${today.toDateString()}`;
    bubble.style.display = 'block';
    setTimeout(() => bubble.style.display = 'none', 3000);
}

function showAffirmation() {
    const affirmations = [
        "You are purrfect just the way you are!",
        "Believe in yourself, you're clawsome!",
        "You deserve all the naps and treats!"
    ];
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const bubble = document.getElementById('affirmation-bubble');
    bubble.innerHTML = affirmations[randomIndex];
    bubble.style.display = 'block';
    setTimeout(() => bubble.style.display = 'none', 3000);
}

function showSurprise() {
    const surprises = [
        "Surprise! A virtual cuddle from a cat!",
        "You've unlocked a secret cat dance party!",
        "Meow! You're the cat's pajamas!"
    ];
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const bubble = document.getElementById('surprise-bubble');
    bubble.innerHTML = surprises[randomIndex];
    bubble.style.display = 'block';
    setTimeout(() => bubble.style.display = 'none', 3000);
}

function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = 'cover';  // Ensure the background covers the entire viewport
    document.body.style.backgroundPosition = 'center';  // Center the background image
    document.body.style.backgroundRepeat = 'no-repeat';  // Prevent the image from repeating
}

function openGame(gameId) {
    // Close any currently open popups
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');

    // Show the selected game popup
    document.getElementById(`${gameId}-popup`).style.display = 'block';

    // Initialize the selected game
    if (gameId === 'cat-game') {
        startGame();
    } else if (gameId === 'memory-game') {
        resetMemoryGame(); // Reset memory game state
        setupGame();
    }
}

function closePopup(gameId) {
    document.getElementById(`${gameId}-popup`).style.display = 'none';
}

let score = 0;

// Function to start the Cat Game
function startGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear existing cats
    score = 0; // Reset score

    const catCount = 5;
    for (let i = 0; i < catCount; i++) {
        const cat = document.createElement('img');
        cat.src = 'https://i.giphy.com/fikiml0dKfRQ2ZS08E.webp'; // Cat image
        cat.className = 'game-cat';
        cat.style.top = `${Math.random() * 250}px`;
        cat.style.left = `${Math.random() * 350}px`;
        cat.onclick = () => {
            score++;
            document.getElementById('game-score').textContent = `Score: ${score}`;
            cat.remove();
        };
        container.appendChild(cat);
    }
}

// Ensure you reset the cat game area as well
function resetCatGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear existing cats
    document.getElementById('game-score').textContent = 'Score: 0'; // Reset score display
}

const cards = [
    'https://github.com/MashaalJ/LailasCabin/blob/main/Designer.jpeg?raw=true', 'https://github.com/MashaalJ/LailasCabin/blob/main/Designer.jpeg?raw=true',
    'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(1).jpeg?raw=true', 'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(1).jpeg?raw=true',
    'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(2).jpeg?raw=true', 'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(2).jpeg?raw=true',
    'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(3).jpeg?raw=true', 'https://github.com/MashaalJ/LailasCabin/blob/main/Designer%20(3).jpeg?raw=true'
];
let firstCard = null;
let secondCard = null;

function setupGame() {
    const gameBoard = document.getElementById('game-board');
    const shuffledCards = cards.sort(() => 0.5 - Math.random());

    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<img src="${card}" alt="Cat">`;
        cardElement.onclick = () => flipCard(cardElement);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(card) {
    if (firstCard === null) {
        firstCard = card;
        card.classList.add('flipped');
    } else if (secondCard === null) {
        secondCard = card;
        card.classList.add('flipped');
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard = null;
        secondCard = null;
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
        }, 1000);
    }
}

function resetMemoryGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear existing cards
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
}

function changeCabinBackground(imageUrl) {
    if (imageUrl) { // Ensure an image URL is selected
        document.querySelector('.cabin').style.backgroundImage = `url('${imageUrl}')`;
    }
}