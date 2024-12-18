(function () {
    'use strict';

    // DOM Elements
    const startButton = document.querySelector('button');
    const playerOneP = document.querySelector('.player1 p');
    const playerTwoP = document.querySelector('.player2 p');
    const fingerOne = document.querySelector('.Finger1');
    const fingerTwo = document.querySelector('.Finger2');
    const smalldice = document.querySelector('.reddice');
    const bigDice = document.querySelector('#bigdice');
    const playerOneImg = document.querySelector('.player1 img');
    const playerTwoImg = document.querySelector('.player2 img');
    const playerOneDiv = document.querySelector('.player1');
    const playerTwoDiv = document.querySelector('.player2');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const actionArea = document.querySelector('#actions');

    
    // Create score display dynamically
    const scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('id', 'score');
    document.body.appendChild(scoreDiv);

    // Add finger swing animation
    function addFingerSwingAnimation(finger) {
        finger.style.position = 'relative';
        let direction = 1;
        setInterval(() => {
            finger.style.left = direction * 10 + 'px';
            direction *= -1;
        }, 500); // Switch direction every 500ms for a non-smooth, repetitive swing
    }

    // Add finger animation to both fingers
    addFingerSwingAnimation(fingerOne);
    addFingerSwingAnimation(fingerTwo);

    // Game Start: Button Click
    startButton.addEventListener('click', function (event) {
        const clickSound = new Audio('game.wav');
        clickSound.play();
        event.preventDefault();
        animateDice();
        assignFingers();
        smalldice.style.display = "none";
        const quitButton = document.querySelector('button');
        quitButton.textContent = "Wanna quit?";
        quitButton.id = 'quitButton';
        setupPlayerClickActions();

        startButton.parentNode.replaceChild(quitButton, startButton);

        quitButton.addEventListener('click', function(){
            window.location.href = 'https://tinygod716.github.io/des157a/gameon/index.html';
        })
    });

    // Animate Dice
    function animateDice() {
        bigDice.classList.add('bounce');
        bigDice.addEventListener('animationend', function () {
            bigDice.classList.remove('bounce');
        }, { once: true });
    }

    // Assign fingers to players
    function assignFingers() {
        if (fingerOne && fingerTwo) {
            playerOneP.prepend(fingerOne);
            playerTwoP.append(fingerTwo);
        } else {
            console.error('Finger images are missing.');
        }
    }

    // Player Click Actions
    function setupPlayerClickActions() {
        if (!playerOneP.classList.contains('click-bound')) {
            playerOneP.addEventListener('click', function () {
                const clickSound = new Audio('game.wav'); 
                clickSound.play();
                handlePlayerClick(playerOneImg, playerOneDiv, playerTwoDiv, fingerOne, fingerTwo);
                setUpTurn();
                removeStartButton();
            });
            playerOneP.classList.add('click-bound');
        }

        if (!playerTwoP.classList.contains('click-bound')) {
            playerTwoP.addEventListener('click', function () {
                handlePlayerClick(playerTwoImg, playerTwoDiv, playerOneDiv, fingerTwo, fingerOne);
                setUpTurn();
                removeStartButton();
            });
            playerTwoP.classList.add('click-bound');
        }
    }

    function removeStartButton() {
        if (startButton && startButton.parentNode) {
            startButton.parentNode.removeChild(startButton);
        }
    }

    function handlePlayerClick(playerImg, currentPlayerDiv, otherPlayerDiv, currentFinger, otherFinger) {
        // Clone image and play animation
        if (playerImg) {
            const clonedImg = playerImg.cloneNode(true);
            clonedImg.classList.add('expand-and-fade');
            document.body.appendChild(clonedImg);
            clonedImg.addEventListener('animationend', function () {
                clonedImg.remove();
            }, { once: true });
        }

        // Animate player divs and hide fingers
        currentPlayerDiv.classList.add('moving-left');
        currentFinger.style.display = 'none';

        otherPlayerDiv.classList.add('moving-right');
        otherFinger.style.display = 'none';
    }

    // Add score div to player
    function addScoreDiv(playerDiv, scoreText, className) {
        let scoreDiv = playerDiv.querySelector(`.${className}`);
        if (!scoreDiv) {
            scoreDiv = document.createElement('div');
            scoreDiv.classList.add(className);
            playerDiv.appendChild(scoreDiv);
        }
        scoreDiv.textContent = scoreText;
    }

    // Update Score Display
    function updateScoreDisplay() {
        addScoreDiv(playerOneDiv, `Score: ${gameData.score[0]}`, 'ScoreOne');
        addScoreDiv(playerTwoDiv, `Score: ${gameData.score[1]}`, 'ScoreTwo');
    }

    // Game Data
    const gameData = {
        dice: [
            'image/1die.png',
            'image/2die.png',
            'image/3die.png',
            'image/4die.png',
            'image/5die.png',
            'image/6die.png'
        ],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29 // Winning score threshold
    };
    
    // Function to Set Up a Turn
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function () {
            const clickSound = new Audio('preview.mp3'); 
            clickSound.play();
            animateDice();
            setTimeout(() => {
                throwDice();
            }, 1000); // Add delay to simulate dice rolling animation
        });
    }
    
    // Function to Roll the Dice
    function throwDice() {
        actionArea.innerHTML = '';
        smalldice.style.display = 'block';   
        setTimeout(() => {
            smalldice.style.display = 'none'; 
            
           
            gameData.roll1 = Math.floor(Math.random() * 6) + 1;
            gameData.roll2 = Math.floor(Math.random() * 6) + 1;
            gameData.rollSum = gameData.roll1 + gameData.roll2;
    
            game.innerHTML = `<p>Rolling dice for ${gameData.players[gameData.index]}</p>`;
            game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}">
                               <img src="${gameData.dice[gameData.roll2 - 1]}">`;
    
            handleRollOutcome();
            updateScoreDisplay(); 
        }, 1000); 
    }
    
    // Handle different outcomes based on dice roll
    function handleRollOutcome() {
        if (gameData.rollSum === 2) {
            console.log('Snake eyes rolled!');
            game.innerHTML += '<p>Oh snap! Snake eyes! Your score is reset to 0!</p>';
            gameData.score[gameData.index] = 0; // Reset score
            switchPlayer();
            setTimeout(setUpTurn, 2000); // Wait before the next turn
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            console.log('One of the dice was a 1');
            game.innerHTML += `<p>Sorry, one of your rolls was a one. Switching to ${gameData.players[getNextPlayerIndex()]}</p>`;
            switchPlayer();
            setTimeout(setUpTurn, 2000);
        } else {
            console.log('The game proceeds.');
            gameData.score[gameData.index] += gameData.rollSum; // Update score
            checkWinnerCondition();
            updateScoreDisplay(); // Update the score after handling outcome
            if (gameData.score[gameData.index] < gameData.gameEnd) {
                actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass Turn</button>';
                document.getElementById('rollagain').addEventListener('click', function () {
                const clickSound = new Audio('preview.mp3'); 
                clickSound.play();
                    animateDice();
                    setTimeout(() => {
                        throwDice();
                    }, 1000); // Add delay to simulate dice rolling animation
                });
                document.getElementById('pass').addEventListener('click', function () {
                    switchPlayer();
                    setUpTurn();
                });
            }
        }
    }
    
    // Function to switch player
    function switchPlayer() {
        gameData.index = getNextPlayerIndex();
    }
    
    // Function to get the next player index
    function getNextPlayerIndex() {
        return gameData.index === 0 ? 1 : 0;
    }
    
    // Function to Check Winner Condition
    function checkWinnerCondition() {
        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            scoreDiv.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = ''; // Clear actions
            document.getElementById('quit').addEventListener('click', function () {
                location.reload();
            });
        } else {
            showCurrentScore();
        }
    }
    
    // Function to Show Current Score
    function showCurrentScore() {
        scoreDiv.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong>.</p>`;
    }

   
})();