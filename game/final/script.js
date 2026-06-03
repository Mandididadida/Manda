(function(){
    'use strict';

    console.log('reading js');

    const gamePage = document.querySelector('#game-page');
    const gameBackground = document.querySelector('#game-background');

    const landingOverlay = document.querySelector('#landing-overlay');
    const rulesOverlay = document.querySelector('#rules-overlay');
    const winnerOverlay = document.querySelector('#winner-overlay');

    const goBtn = document.querySelector('#go-btn');
    const startGameBtn = document.querySelector('#start-game-btn');
    const rulesHelpBtn = document.querySelector('#rules-help-btn');

    const playAgainBtn = document.querySelector('#play-again-btn');
    const portalBtn = document.querySelector('#portal-btn');
    const winnerMessage = document.querySelector('#winner-message');

    const leftReelBtn = document.querySelector('#left-reel');
    const rightReelBtn = document.querySelector('#right-reel');

    const leftScoreNum = document.querySelector('#left-score-num');
    const rightScoreNum = document.querySelector('#right-score-num');

    const gameMessage = document.querySelector('#game-message');

    const resultCard = document.querySelector('#result-card');
    const resultImage = document.querySelector('#result-image');

    const gameData = {
        oldManScore: 0,
        catScore: 0,
        winningScore: 5,
        gameOver: false,

        /* 一开始老人和猫都可以先点 */
        currentTurn: 'both',

        mainGameImage: 'images/game.jpg',

        /* 老人点击 Reel In 后滑入显示 */
        oldManReelImage: 'images/hook.jpg',

        /* 猫点击 Reel In 后滑入显示 */
        catReelImage: 'images/cat.jpg',

        missItems: ['a shoe', 'seaweed', 'nothing']
    };

    gamePage.classList.add('blur-game');

    /* 点击 Go 后，先显示规则弹窗 */
    goBtn.addEventListener('click', function(){
        landingOverlay.classList.add('hidden');
        rulesOverlay.classList.remove('hidden');
    });

    /* 点击 Start Fishing 后，正式进入游戏，或从规则页返回游戏 */
    startGameBtn.addEventListener('click', function(){
        rulesOverlay.classList.add('hidden');
        gamePage.classList.remove('blur-game');
        rulesHelpBtn.classList.remove('hidden');

        if (
            gameData.currentTurn === 'both' &&
            gameData.oldManScore === 0 &&
            gameData.catScore === 0
        ) {
            gameMessage.textContent = 'The old man or the cat can start fishing!';
        }
    });

    /* 游戏中点击右上角 ? 可以重新查看规则 */
    rulesHelpBtn.addEventListener('click', function(){
        rulesOverlay.classList.remove('hidden');
        gamePage.classList.add('blur-game');
    });

    leftReelBtn.addEventListener('click', function(){
        reelIn('oldMan');
    });

    rightReelBtn.addEventListener('click', function(){
        reelIn('cat');
    });

    playAgainBtn.addEventListener('click', function(){
        resetGameToLanding();
    });

    portalBtn.addEventListener('click', function(){
        window.location.href = '../../index.html';
    });

    function reelIn(player){
        if (gameData.gameOver) {
            return;
        }

        if (gameData.currentTurn !== 'both' && gameData.currentTurn !== player) {
            return;
        }

        disableBothButtons();

        if (player === 'oldMan') {
            resultImage.src = gameData.oldManReelImage;
        } else {
            resultImage.src = gameData.catReelImage;
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
        if (player === 'oldMan') {
            gameData.oldManScore++;
            leftScoreNum.textContent = gameData.oldManScore;
            gameMessage.textContent = 'The old man caught 1 fish!';
        } else {
            gameData.catScore++;
            rightScoreNum.textContent = gameData.catScore;
            gameMessage.textContent = 'The cat caught 1 fish!';
        }
    }

    function missFish(player){
        const randomIndex = Math.floor(Math.random() * gameData.missItems.length);
        const item = gameData.missItems[randomIndex];

        if (player === 'oldMan') {
            gameMessage.textContent = `The old man caught ${item}. Miss!`;
        } else {
            gameMessage.textContent = `The cat caught ${item}. Miss!`;
        }
    }

    function switchTurn(player){
        if (player === 'oldMan') {
            gameData.currentTurn = 'cat';

            leftReelBtn.classList.add('inactive-turn');
            rightReelBtn.classList.remove('inactive-turn');

            gameMessage.textContent += ' Now it is the cat’s turn.';
        } else {
            gameData.currentTurn = 'oldMan';

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
        if (gameData.oldManScore >= gameData.winningScore) {
            gameData.gameOver = true;
            endGame('the old man');
        } else if (gameData.catScore >= gameData.winningScore) {
            gameData.gameOver = true;
            endGame('the cat');
        }
    }

    function endGame(winnerName){
        leftReelBtn.classList.add('inactive-turn');
        rightReelBtn.classList.add('inactive-turn');
        rulesHelpBtn.classList.add('hidden');

        gamePage.classList.add('blur-game');

        winnerMessage.textContent = `Congratulations! ${winnerName} caught 5 fish first and won the game!`;
        winnerOverlay.classList.remove('hidden');
    }

    function resetGameToLanding(){
        gameData.oldManScore = 0;
        gameData.catScore = 0;
        gameData.gameOver = false;
        gameData.currentTurn = 'both';

        leftScoreNum.textContent = '0';
        rightScoreNum.textContent = '0';

        gameBackground.src = gameData.mainGameImage;

        gameMessage.textContent = 'Click Reel In to start fishing!';

        leftReelBtn.classList.remove('inactive-turn', 'hidden');
        rightReelBtn.classList.remove('inactive-turn', 'hidden');

        rulesHelpBtn.classList.add('hidden');

        winnerOverlay.classList.add('hidden');
        rulesOverlay.classList.add('hidden');
        resultCard.classList.add('hidden');

        landingOverlay.classList.remove('hidden');
        gamePage.classList.add('blur-game');
    }

})();