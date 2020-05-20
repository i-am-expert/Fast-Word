window.addEventListener('load', mainFunction);

let currentLevel;

let time;
let score = 0;
let isPlaying;
let countDownInterval;
let CheckStatusInterval;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'rat',
    'sky',
    'laborer',
    'political',
    'fact',
    'scarecrow',
    'concentrate',
    'ladybug',
    'door',
    'wonderful',
    'crawl',
    'nippy',
    'mixed',
    'found',
    'tongue',
    'sigh',
    'furry',
    'brash',
    'cave',
    'afford',
    'crime',
    'frame',
    'didactic',
    'repulsive',
    'scrub',
    'cub',
    'cheap',
    'stiff',
    'handsomely',
    'listen',
    'glib',
    'distance',
    'acoustic',
    'existence',
    'gleaming',
    'railway',
    'cast',
    'please',
    'fat',
    'scare',
    'quill',
    'street',
    'dinner',
    'obscene',
    'yard',
    'snakes',
    'account',
    'abounding',
    'verdant',
    'violent',
    'clear',
    'pleasure',
    'sun',
    'urgency',
    'inhabitant',
    'herb',
    'observer',
    'driver',
    'tongue',
    'litigation',
    'rate',
    'poem',
    'attitude',
    'jaw',
    'pioneer',
    'glue',
    'station',
    'costume',
    'budget',
    'expect',
    'gain',
    'mourning',
    'ecstasy',
    'expenditure',
    'mouth',
    'publication',
    'peasant',
    'gaffe',
    'finance',
    'land',
    'shaft',
    'market',
    'rub',
    'fly',
    'addition',
    'galaxy',
    'palace',
    'on',
    'locate',
    'season',
    'revolution',
    'guide',
    'grudge',
    'scholar',
    'unfair',
    'health',
    'seller',
    'halt',
    'summer',
    'carve'
];

function mainFunction() {
    document.getElementById('level-easy').addEventListener('click', () => {
        currentLevel = 6;
        time = 6;
        wordInput.disabled = false;
        scoreDisplay.innerHTML = 0;
        wordInput.value = '';
        wordInput.focus();
        document.getElementById('level-medium').style.opacity = 0.35;
        document.getElementById('level-hard').style.opacity = 0.35;
        init();
    });
    
    document.getElementById('level-medium').addEventListener('click', () => {
        currentLevel = 4;
        time = 4;
        wordInput.disabled = false;
        scoreDisplay.innerHTML = 0;
        wordInput.value = '';
        wordInput.focus();
        document.getElementById('level-easy').style.opacity = 0.35;
        document.getElementById('level-hard').style.opacity = 0.35;
        init();
    });
    
    document.getElementById('level-hard').addEventListener('click', () => {
        currentLevel = 3;
        time = 3;
        wordInput.disabled = false;
        scoreDisplay.innerHTML = 0;
        wordInput.value = '';
        wordInput.focus();
        document.getElementById('level-easy').style.opacity = 0.35;
        document.getElementById('level-medium').style.opacity = 0.35;
        init();
    });
}

function init() {
  seconds.innerHTML = currentLevel - 1;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  countDownInterval = setInterval(countdown, 1000);
  CheckStatusInterval = setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  scoreDisplay.innerHTML = score;
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    wordInput.style.border = "1px solid green";
    return true;
  } else {
    message.innerHTML = '';
    wordInput.style.border = "1px solid red";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = 0;
    wordInput.disabled = true;

    document.getElementById('level-easy').disabled = true;
    document.getElementById('level-medium').disabled = true;
    document.getElementById('level-hard').disabled = true;

    clearInterval(countDownInterval);
    clearInterval(CheckStatusInterval);
    wordInput.removeEventListener('input', () => { });
    document.getElementById('level-easy').removeEventListener('click', () => {});
    document.getElementById('level-medium').removeEventListener('click', () => {});
    document.getElementById('level-hard').removeEventListener('click', () => {});
    mainFunction();
  }
}