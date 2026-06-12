(function() {
    "use strict";

    const startPage = document.querySelector("#startPage");
    const formPage = document.querySelector("#formPage");
    const resultPage = document.querySelector("#resultPage");

    const openBtn = document.querySelector("#openBtn");
    const backToStart = document.querySelector("#backToStart");
    const againBtn = document.querySelector("#againBtn");
    const madlibForm = document.querySelector("#madlibForm");

    const inputs = {
        nounOne: document.querySelector("#nounOne"),
        nounTwo: document.querySelector("#nounTwo"),
        verbOne: document.querySelector("#verbOne"),
        verbTwo: document.querySelector("#verbTwo"),
        adjectiveOne: document.querySelector("#adjectiveOne"),
        adjectiveTwo: document.querySelector("#adjectiveTwo"),
        place: document.querySelector("#place"),
        time: document.querySelector("#time"),
        touch: document.querySelector("#touch"),
        toyName: document.querySelector("#toyName")
    };

    const storySpans = {
        nounOne: document.querySelector("#storyNounOne"),
        nounTwo: document.querySelector("#storyNounTwo"),
        verbOne: document.querySelector("#storyVerbOne"),
        verbTwo: document.querySelector("#storyVerbTwo"),
        adjectiveOne: document.querySelector("#storyAdjectiveOne"),
        adjectiveTwo: document.querySelector("#storyAdjectiveTwo"),
        place: document.querySelector("#storyPlace"),
        time: document.querySelector("#storyTime"),
        touch: document.querySelector("#storyTouch"),
        toyName: document.querySelector("#storyToyName")
    };

    function showPage(pageToShow) {
        startPage.classList.add("hide");
        formPage.classList.add("hide");
        resultPage.classList.add("hide");

        pageToShow.classList.remove("hide");
    }

    function getCleanValue(input) {
        return input.value.trim();
    }

    function fillStory() {
        storySpans.nounOne.textContent = getCleanValue(inputs.nounOne);
        storySpans.nounTwo.textContent = getCleanValue(inputs.nounTwo);
        storySpans.verbOne.textContent = getCleanValue(inputs.verbOne);
        storySpans.verbTwo.textContent = getCleanValue(inputs.verbTwo);
        storySpans.adjectiveOne.textContent = getCleanValue(inputs.adjectiveOne);
        storySpans.adjectiveTwo.textContent = getCleanValue(inputs.adjectiveTwo);
        storySpans.place.textContent = getCleanValue(inputs.place);
        storySpans.time.textContent = getCleanValue(inputs.time);
        storySpans.touch.textContent = getCleanValue(inputs.touch);
        storySpans.toyName.textContent = getCleanValue(inputs.toyName);
    }

    function resetStory() {
        const blank = "________";

        storySpans.nounOne.textContent = blank;
        storySpans.nounTwo.textContent = blank;
        storySpans.verbOne.textContent = blank;
        storySpans.verbTwo.textContent = blank;
        storySpans.adjectiveOne.textContent = blank;
        storySpans.adjectiveTwo.textContent = blank;
        storySpans.place.textContent = blank;
        storySpans.time.textContent = blank;
        storySpans.touch.textContent = blank;
        storySpans.toyName.textContent = blank;
    }

    openBtn.addEventListener("click", function() {
        showPage(formPage);
        inputs.nounOne.focus();
    });

    backToStart.addEventListener("click", function() {
        showPage(startPage);
    });

    madlibForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (madlibForm.checkValidity()) {
            fillStory();
            showPage(resultPage);
        } else {
            madlibForm.reportValidity();
        }
    });

    againBtn.addEventListener("click", function() {
        madlibForm.reset();
        resetStory();
        showPage(startPage);
    });
})();