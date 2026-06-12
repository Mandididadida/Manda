(function() {
    'use strict';

    const startPage = document.querySelector('#startPage');
    const pageOne = document.querySelector('#pageOne');
    const pageTwo = document.querySelector('#pageTwo');
    const resultPage = document.querySelector('#resultPage');

    const openBtn = document.querySelector('#openBtn');
    const backToStart = document.querySelector('#backToStart');
    const backToPageOne = document.querySelector('#backToPageOne');
    const againBtn = document.querySelector('#againBtn');

    const pageOneForm = document.querySelector('#pageOneForm');
    const pageTwoForm = document.querySelector('#pageTwoForm');

    let dragStartY = null;

    function showPage(pageToShow) {
        startPage.classList.add('hide');
        pageOne.classList.add('hide');
        pageTwo.classList.add('hide');
        resultPage.classList.add('hide');

        pageToShow.classList.remove('hide');
    }

    function resetStoryBlanks() {
        document.querySelector('#storyName').textContent = '________';
        document.querySelector('#storyAdjective').textContent = '________';
        document.querySelector('#storyCreature').textContent = '________';
        document.querySelector('#storyStore').textContent = '________';

        document.querySelector('#storyAnimal').textContent = '________';
        document.querySelector('#storySameName').textContent = '________';
        document.querySelector('#storyPetAnimal').textContent = '________';
        document.querySelector('#storyWowAdjective').textContent = '________';

        document.querySelector('#storyPetAdjective').textContent = '________';
        document.querySelector('#storyFruit').textContent = '________';
        document.querySelector('#storyVerb').textContent = '________';
        document.querySelector('#storySecondVerb').textContent = '________';
        document.querySelector('#storyPlace').textContent = '________';

        document.querySelector('#storyClothes').textContent = '________';
        document.querySelector('#storyMoney').textContent = '________';
        document.querySelector('#storySameMoney').textContent = '________';
        document.querySelector('#storyMoneyAdjective').textContent = '________';
    }

    function openFirstPage() {
        showPage(pageOne);

        window.setTimeout(function() {
            document.querySelector('#friendName').focus();
        }, 250);
    }

    openBtn.addEventListener('click', openFirstPage);

    

    openBtn.addEventListener('pointerdown', function(event) {
        dragStartY = event.clientY;
    });

    openBtn.addEventListener('pointerup', function(event) {
        if(dragStartY === null) {
            return;
        }

        const dragDistance = dragStartY - event.clientY;
        dragStartY = null;

        if(dragDistance > 36) {
            openFirstPage();
        }
    });

    backToStart.addEventListener('click', function() {
        showPage(startPage);
    });

    pageOneForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const friendName = document.querySelector('#friendName').value.trim();
        const adjective = document.querySelector('#adjective').value.trim();
        const creature = document.querySelector('#creature').value.trim();
        const store = document.querySelector('#store').value.trim();
        const animal = document.querySelector('#animal').value.trim();
        const fruit = document.querySelector('#fruit').value.trim();
        const verb = document.querySelector('#verb').value.trim();
        const place = document.querySelector('#place').value.trim();
        const clothes = document.querySelector('#clothes').value.trim();
        const money = document.querySelector('#money').value.trim();

        if(friendName && adjective && creature && store && animal && fruit && verb && place && clothes && money) {
            showPage(pageTwo);

            window.setTimeout(function() {
                document.querySelector('#petAnimal').focus();
            }, 250);
        }
        else {
            if(friendName === '') {
                document.querySelector('#friendName').focus();
            }
            else if(adjective === '') {
                document.querySelector('#adjective').focus();
            }
            else if(creature === '') {
                document.querySelector('#creature').focus();
            }
            else if(store === '') {
                document.querySelector('#store').focus();
            }
            else if(animal === '') {
                document.querySelector('#animal').focus();
            }
            else if(fruit === '') {
                document.querySelector('#fruit').focus();
            }
            else if(verb === '') {
                document.querySelector('#verb').focus();
            }
            else if(place === '') {
                document.querySelector('#place').focus();
            }
            else if(clothes === '') {
                document.querySelector('#clothes').focus();
            }
            else if(money === '') {
                document.querySelector('#money').focus();
            }
        }
    });

    backToPageOne.addEventListener('click', function() {
        showPage(pageOne);
    });

    pageTwoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const friendName = document.querySelector('#friendName').value.trim();
        const adjective = document.querySelector('#adjective').value.trim();
        const creature = document.querySelector('#creature').value.trim();
        const store = document.querySelector('#store').value.trim();
        const animal = document.querySelector('#animal').value.trim();
        const fruit = document.querySelector('#fruit').value.trim();
        const verb = document.querySelector('#verb').value.trim();
        const place = document.querySelector('#place').value.trim();
        const clothes = document.querySelector('#clothes').value.trim();
        const money = document.querySelector('#money').value.trim();

        let petAnimal = document.querySelector('#petAnimal').value.trim();
        let wowAdjective = document.querySelector('#wowAdjective').value.trim();
        let petAdjective = document.querySelector('#petAdjective').value.trim();
        let secondVerb = document.querySelector('#secondVerb').value.trim();
        let moneyAdjective = document.querySelector('#moneyAdjective').value.trim();

        if(petAnimal === '') {
            petAnimal = animal;
        }

        if(wowAdjective === '') {
            wowAdjective = adjective;
        }

        if(petAdjective === '') {
            petAdjective = adjective;
        }

        if(secondVerb === '') {
            secondVerb = verb;
        }

        if(moneyAdjective === '') {
            moneyAdjective = adjective;
        }

        document.querySelector('#storyName').textContent = friendName;
        document.querySelector('#storyAdjective').textContent = adjective;
        document.querySelector('#storyCreature').textContent = creature;
        document.querySelector('#storyStore').textContent = store;

        document.querySelector('#storyAnimal').textContent = animal;
        document.querySelector('#storySameName').textContent = friendName;
        document.querySelector('#storyPetAnimal').textContent = petAnimal;
        document.querySelector('#storyWowAdjective').textContent = wowAdjective;

        document.querySelector('#storyPetAdjective').textContent = petAdjective;
        document.querySelector('#storyFruit').textContent = fruit;
        document.querySelector('#storyVerb').textContent = verb;
        document.querySelector('#storySecondVerb').textContent = secondVerb;
        document.querySelector('#storyPlace').textContent = place;

        document.querySelector('#storyClothes').textContent = clothes;
        document.querySelector('#storyMoney').textContent = money;
        document.querySelector('#storySameMoney').textContent = money;
        document.querySelector('#storyMoneyAdjective').textContent = moneyAdjective;

        showPage(resultPage);
    });

    againBtn.addEventListener('click', function() {
        pageOneForm.reset();
        pageTwoForm.reset();
        resetStoryBlanks();
        showPage(startPage);
    });
})();