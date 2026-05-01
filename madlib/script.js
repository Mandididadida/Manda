(function() {
    'use strict';
    console.log('Reading js');

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

    openBtn.addEventListener('click', function() {
        startPage.classList.add('hide');
        pageOne.classList.remove('hide');
    });

    backToStart.addEventListener('click', function() {
        pageOne.classList.add('hide');
        startPage.classList.remove('hide');
    });

    pageOneForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const friendName = document.querySelector('#friendName').value;
        const adjective = document.querySelector('#adjective').value;
        const creature = document.querySelector('#creature').value;
        const store = document.querySelector('#store').value;
        const animal = document.querySelector('#animal').value;
        const fruit = document.querySelector('#fruit').value;
        const verb = document.querySelector('#verb').value;
        const place = document.querySelector('#place').value;
        const clothes = document.querySelector('#clothes').value;
        const money = document.querySelector('#money').value;

        if(friendName && adjective && creature && store && animal && fruit && verb && place && clothes && money) {
            pageOne.classList.add('hide');
            pageTwo.classList.remove('hide');
        }
        else {
            if(friendName == '') {
                document.querySelector('#friendName').focus();
            }
            else if(adjective == '') {
                document.querySelector('#adjective').focus();
            }
            else if(creature == '') {
                document.querySelector('#creature').focus();
            }
            else if(store == '') {
                document.querySelector('#store').focus();
            }
            else if(animal == '') {
                document.querySelector('#animal').focus();
            }
            else if(fruit == '') {
                document.querySelector('#fruit').focus();
            }
            else if(verb == '') {
                document.querySelector('#verb').focus();
            }
            else if(place == '') {
                document.querySelector('#place').focus();
            }
            else if(clothes == '') {
                document.querySelector('#clothes').focus();
            }
            else if(money == '') {
                document.querySelector('#money').focus();
            }
        }
    });

    backToPageOne.addEventListener('click', function() {
        pageTwo.classList.add('hide');
        pageOne.classList.remove('hide');
    });

    pageTwoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const friendName = document.querySelector('#friendName').value;
        const adjective = document.querySelector('#adjective').value;
        const creature = document.querySelector('#creature').value;
        const store = document.querySelector('#store').value;
        const animal = document.querySelector('#animal').value;
        const fruit = document.querySelector('#fruit').value;
        const verb = document.querySelector('#verb').value;
        const place = document.querySelector('#place').value;
        const clothes = document.querySelector('#clothes').value;
        const money = document.querySelector('#money').value;

        let petAnimal = document.querySelector('#petAnimal').value;
        let wowAdjective = document.querySelector('#wowAdjective').value;
        let petAdjective = document.querySelector('#petAdjective').value;
        let secondVerb = document.querySelector('#secondVerb').value;
        let moneyAdjective = document.querySelector('#moneyAdjective').value;

        if(petAnimal == '') {
            petAnimal = animal;
        }

        if(wowAdjective == '') {
            wowAdjective = adjective;
        }

        if(petAdjective == '') {
            petAdjective = adjective;
        }

        if(secondVerb == '') {
            secondVerb = verb;
        }

        if(moneyAdjective == '') {
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

        pageTwo.classList.add('hide');
        resultPage.classList.remove('hide');
    });

    againBtn.addEventListener('click', function() {
        pageOneForm.reset();
        pageTwoForm.reset();

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

        resultPage.classList.add('hide');
        startPage.classList.remove('hide');
    });

})();