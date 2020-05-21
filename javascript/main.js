window.addEventListener('load', selectTest);

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

function selectTest() {
    document.getElementById('test-option').style.display = 'block';
    document.getElementById('word-test').addEventListener('click', () => {
        document.getElementById('test-option').style.display = 'none';
        document.getElementById('word-content').style.display = 'block';
        document.getElementById('para-content').style.display = 'none';
        console.log("Hello");
        mainFunction();
    });
    document.getElementById('para-test').addEventListener('click', () => {
        document.getElementById('test-option').style.display = 'none';
        document.getElementById('word-content').style.display = 'none';
        document.getElementById('para-content').style.display = 'block';
        mainParaFunction();
    });

}

/* Word Test Functions Start */
function mainFunction() {
    document.getElementById('level-easy').addEventListener('click', () => {
        console.log(123);
        currentLevel = 6;
        time = 6;
        wordInput.disabled = false;
        scoreDisplay.innerHTML = 0;
        wordInput.value = '';
        wordInput.focus();
        document.getElementById('level-medium').style.opacity = 0.35;
        document.getElementById('level-hard').style.opacity = 0.35;
        document.getElementById('level-medium').disabled = true;
        document.getElementById('level-hard').disabled = true;
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
        document.getElementById('level-easy').disabled = true;
        document.getElementById('level-hard').disabled = true;
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
        document.getElementById('level-easy').disabled = true;
        document.getElementById('level-medium').disabled = true;
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
    
  }
}

document.getElementById('restart-btn').addEventListener('click', () => {
    window.location.reload();
});
/* Word Test Functions End */

const paragraphs = [
    'Don\'t forget that gifts often come with costs that go beyond their purchase price. When you purchase a child the latest smartphone, you\'re also committing to a monthly phone bill. When you purchase the latest gaming system, you\'re likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. When you buy gifts it\'s important to remember that some come with additional costs down the road that can be much more expensive than the initial gift itself.',

    'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. The more she peered, however, the more she thought it might be a figment of her imagination. Nothing seemed to move until the moment she began to take her eyes off the tree. Then in the corner of her eye, she would see the movement again and begin the process of staring again.',

    'Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last.',

    'Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she\'d believed his promise. Now she was paying the price.',

    'One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the next day would be Christmas.',

    'She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn\'t help but feel that something horrible was about to happen.'
]

const startBtn = document.querySelector('#start-btn');
const currentPara = document.querySelector('#current-para');
const inputPara = document.querySelector('#para-input');
const displayTime = document.querySelector('#para-time');
const paraMessage = document.querySelector('#para-message');
const correctScore = document.querySelector('#correct-score');
const incorrectScore = document.querySelector('#incorrect-score');

/* Para Test Functions Start */
function mainParaFunction() {
    document.getElementById('start-btn').addEventListener('click', () => {
        time = 5;
        startBtn.disabled = true;
        displayTime.innerHTML = time;
        showPara(paragraphs);
        inputPara.disabled = false;
        inputPara.focus();
        setInterval(countdown1, 1000);
    });
}

function showPara(paragraphs) {
    const randIndex = Math.floor(Math.random() * paragraphs.length);
    currentPara.innerHTML = paragraphs[randIndex];
}

function countdown1() {
    if (time > 0) {
      time--;
    } else if (time === 0) {
      calculateResults();
    }
    displayTime.innerHTML = time;
}

function calculateResults() {
    inputPara.disabled = true;
    let inputString = inputPara.value;
    let actualString = currentPara.innerHTML;
    inputString = inputString.replace(/\s\s+/g, ' ');
    inputString = inputString.trimStart();
    inputString = inputString.trimEnd();
    // console.log(inputString.length)
    // var i;
    // for(i = 0; i < inputString.length; i++) {
    //     console.log(inputString[i]);
    // }
    var typedWords = inputString.split(" ");
    var originalWords = actualString.split(" ");
    if(inputString === null || inputString === ' ' || inputString === '') {
        paraMessage.style.display = 'flex';
        correctScore.innerHTML = 0;
        incorrectScore.innerHTML = 0;
    } else {
        matchStrings(typedWords, originalWords);
    }
}

function matchStrings(typedWords, originalWords) {
    var i;
    let correct = 0, incorrect = 0;
    for(i = 0; i < Math.min(typedWords.length, originalWords.length); i++) {
        if(typedWords[i] === originalWords[i]) {
            correct += 1;
        } else {
            incorrect += 1;
        }
    }
    paraMessage.style.display = 'flex';
    correctScore.innerHTML = correct;
    incorrectScore.innerHTML = incorrect;
}

document.getElementById('para-restart-btn').addEventListener('click', () => {
    window.location.reload();
});
/* Para Test Functions End */