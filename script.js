// Load saved XP from localStorage
let xp = parseInt(localStorage.getItem('xp')) || 0;

const xpDisplay = document.getElementById('xp');
const sky = document.getElementById('sky');
const tree = document.getElementById('tree');
const message = document.getElementById('message');
const button = document.getElementById('daily-challenge');

xpDisplay.textContent = xp;

// Function to update visuals
function updateWorld() {
    // Update sky color
    let skyColor = 52 + xp; 
    if (skyColor > 200) skyColor = 200;
    sky.style.background = `linear-gradient(to top, rgb(${skyColor}, ${skyColor + 50}, ${skyColor + 70}), #2c3e50)`;

    // Update tree height
    let treeHeight = 50 + xp; 
    if (treeHeight > 200) treeHeight = 200;
    tree.style.height = treeHeight + 'px';
}

// Function to complete daily challenge
function completeChallenge() {
    xp += 10;
    xpDisplay.textContent = xp;
    localStorage.setItem('xp', xp);

    updateWorld();
    message.textContent = "Great job! Keep completing challenges 🌟";
}

// Button click event
button.addEventListener('click', completeChallenge);

// Initial update
updateWorld();
