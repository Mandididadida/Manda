(function(){
    'use strict';

    console.log('reading js');

    const gamePage = document.querySelector('#game-page');
    const gameBackground = document.querySelector('#game-background');

    const landingOverlay = document.querySelector('#landing-overlay');
    const goBtn = document.querySelector('#go-btn');

    const leftReelBtn = document.querySelector('#left-reel');
    const rightReelBtn = document.querySelector('#right-reel');
    const goHomeBtn = document.querySelector('#go-home-btn');

    const leftScoreNum = document.querySelector('#left-score-num');
    const rightScoreNum = document.querySelector('#right-score-num');

    const gameMessage = document.querySelector('#game-message');

    const resultCard = document.querySelector('#result-card');
    const resultImage = document.querySelector('#result-image');

    const gameData = {
        leftScore: 0,
        rightScore: 0,
        winningScore: 5,
        gameOver: false,

        /* 一开始谁都可以先点 */
        currentTurn: 'both',

        mainGameImage: 'images/game.jpg',

        /* 左边 player 点击 Reel In 后滑入显示 */
        leftReelImage: 'images/hook.jpg',

        /* 右边 player 点击 Reel In 后滑入显示 */
        rightReelImage: 'images/cat.jpg',

        /* 左边 player 先钓满 5 条后，替换 game 背景 */
        leftWinImage: 'images/hookfish.jpg.jpg',

        /* 右边 player 先钓满 5 条后，替换 game 背景 */
        rightWinImage: 'images/catfish.jpg',

        missItems: ['a shoe', 'seaweed', 'nothing']
    };

    gamePage.classList.add('blur-game');

    goBtn.addEventListener('click', function(){
        landingOverlay.classList.add('hidden');
        gamePage.classList.remove('blur-game');
        gameMessage.textContent = 'Either player can start fishing!';
    });

    leftReelBtn.addEventListener('click', function(){
        reelIn('left');
    });

    rightReelBtn.addEventListener('click', function(){
        reelIn('right');
    });

    goHomeBtn.addEventListener('click', function(){
        gameMessage.textContent = 'Time to cook the FISH!';
    });

    function reelIn(player){
        if (gameData.gameOver) {
            return;
        }

        if (gameData.currentTurn !== 'both' && gameData.currentTurn !== player) {
            return;
        }

        disableBothButtons();

        if (player === 'left') {
            resultImage.src = gameData.leftReelImage;
        } else {
            resultImage.src = gameData.rightReelImage;
        }

        showResultCard();

        setTimeout(function(){
            hideResultCard();
            checkFishingResult(player);
        }, 4000);
    }

    function showResultCard(){
        resultCard.classList.remove('hidden');

        /* 重新触发 animation */
        resultCard.classList.remove('slide-through');

        void resultCard.offsetWidth;

        resultCard.classList.add('slide-through');
    }

    function hideResultCard(){
        resultCard.classList.add('hidden');
        resultCard.classList.remove('slide-through');
    }

    function checkFishingResult(player){
        const caughtFish = Math.floor(Math.random() * 2);

        if (caughtFish === 1) {
            addFish(player);
        } else {
            missFish(player);
        }

        checkWinner();

        if (!gameData.gameOver) {
            switchTurn(player);
        }
    }

    function addFish(player){
        if (player === 'left') {
            gameData.leftScore++;
            leftScoreNum.textContent = gameData.leftScore;
            gameMessage.textContent = 'The old man caught 1 fish!';
        } else {
            gameData.rightScore++;
            rightScoreNum.textContent = gameData.rightScore;
            gameMessage.textContent = 'The cat caught 1 fish!';
        }
    }

    function missFish(player){
        const randomIndex = Math.floor(Math.random() * gameData.missItems.length);
        const item = gameData.missItems[randomIndex];

        if (player === 'left') {
            gameMessage.textContent = `The old man caught ${item}. Miss!`;
        } else {
            gameMessage.textContent = `The cat caught ${item}. Miss!`;
        }
    }

    function switchTurn(player){
        if (player === 'left') {
            gameData.currentTurn = 'right';

            leftReelBtn.classList.add('inactive-turn');
            rightReelBtn.classList.remove('inactive-turn');

            gameMessage.textContent += ' Now it is the cat’s turn.';
        } else {
            gameData.currentTurn = 'left';

            rightReelBtn.classList.add('inactive-turn');
            leftReelBtn.classList.remove('inactive-turn');

            gameMessage.textContent += ' Now it is the old man’s turn.';
        }
    }

    function disableBothButtons(){
        leftReelBtn.classList.add('inactive-turn');
        rightReelBtn.classList.add('inactive-turn');
    }

    function checkWinner(){
        if (gameData.leftScore >= gameData.winningScore) {
            gameData.gameOver = true;
            gameBackground.src = gameData.leftWinImage;
            gameMessage.textContent = 'The old man caught 5 fish and wins!';
            endGame();
        } else if (gameData.rightScore >= gameData.winningScore) {
            gameData.gameOver = true;
            gameBackground.src = gameData.rightWinImage;
            gameMessage.textContent = 'The cat caught 5 fish and wins!';
            endGame();
        }
    }

    function endGame(){
        leftReelBtn.classList.add('hidden');
        rightReelBtn.classList.add('hidden');
        goHomeBtn.classList.remove('hidden');
    }

})();