(function(){
    'use strict'
    console.log('reading JS');

    //Add script here

    //Practice selecting elements

    //1. grab the first section of the page:
    const firstSection = document.querySelector('#firstsection');

    //2. Get the first joke
    const firstJoke = document.querySelector('#joke-1');
    console.log(firstJoke);
    

    //3. Get the second Joke
    const secondJoke = document.querySelector('#joke-2');
    console.log(secondJoke);
    
    //4. Get the question in the third joke

    const thirdJokeQuestion = document.querySelector('#joke-3 .question');
    console.log(thirdJokeQuestion);

    //5. Get the answer in the fourth question
    const fourthJokeAnswer = document.querySelector('#joke-4 .answer');
    console.log(fourthJokeAnswer);
    //6. Get all the questions in the first section
    const firstSectionQuestions = document.querySelectorAll('#firstsection .question');
    console.log(firstSectionQuestions);

    //7. Get all the answers in the first section
    const firstSectionAnswers = document.querySelectorAll('#firstsection .answer');
    console.log(firstSectionAnswers);
    

    /* Now that we have access to these elements through the variables that we assigned them to, what can we do with them? */

    // 8. Use the style attribute to set a background color
    firstSection.style.backgroundColor = 'rgb(255, 200, 200)';


    // 9. Use the style attribute to change the font for the first joke
    firstSection.style.fontFamily = 'Arial, sans-serif';   

    // 10. Use the style attribute to change the color of the text in joke 2
    secondJoke.style.color = 'rgb(157, 157, 252)';

    // 11. Use the style attribute to change the fontsize of the third joke's question
    thirdJokeQuestion.style.fontSize = '34px';

    //12. Apply a class to the 4th joke answer that is already on the stylesheet
    fourthJokeAnswer.className = ' wiggle-loop';

    //13. Apply style attributes to items in arrays
    for(let i = 0; i < firstSectionQuestions.length; i++){
        firstSectionQuestions[i].style.fontSize = '20px';
    }

    //14. Use a loop to add a style attribute to all the elements in an array
    for(let i = 0; i < firstSectionAnswers.length; i++){
        firstSectionAnswers[i].style.fontSize = '24px';
    }

    // Section 2: Practicing with basic event listeners

    // 1. Click the button for question 6 and show the answer.
   
    const button6 = document.querySelector('#joke-6-btn');
    button6.addEventListener('click', function(){
        const button6Answer = document.querySelector('#joke-6 .answer');
        button6Answer.className = 'answer';
    });
    // 2. Add an event listener for question 7 and add the wiggle-loop class to the answer
    const button7 = document.querySelector('#joke-7-btn');
    button7.addEventListener('click', function(){
        const button7Answer = document.querySelector('#joke-7 .answer');
        button7Answer.className = 'answer wiggle-loop';
    });
    // 3. Add event listeners to jokes 8, 9 & 10 for practice.
    const button8 = document.querySelector('#joke-8-btn');
    button8.addEventListener('click', function(){
        const button8Answer = document.querySelector('#joke-8 .answer');
        button8Answer.className = 'answer';
    });
    const button9 = document.querySelector('#joke-9-btn');
    button9.addEventListener('click', function(){
        const button9Answer = document.querySelector('#joke-9 .answer');
        button9Answer.className = 'answer wiggle-loop';
    });
    const button10 = document.querySelector('#joke-10-btn');
    button10.addEventListener('click', function(){
        const button10Answer = document.querySelector('#joke-10 .answer');
        button10Answer.className = 'answer';
    }); 
    // Section 3 - Using loops to create more advanced event handlers

    /* 1. Create a loop that puts an event handler on each button in the third section. When the button is pressed an alert message comes up and says "button pressed" */
    const thirdSectionButtons = document.querySelectorAll('#thirdsection button');
    for(let i = 0; i < thirdSectionButtons.length; i++){
        thirdSectionButtons[i].addEventListener('click', function(){
            alert('button pressed');
        });
    }

    /* 2. You need to know WHICH button was clicked. Pass in the event property to find out which button was clicked */
    for(let i = 0; i < thirdSectionButtons.length; i++){
        thirdSectionButtons[i].addEventListener('click', function(event){
            console.log(event.target);
        });
    }

    /* 3. Now that you know how to identify the button pressed, you have to find the answer associated with that question, so you can show it. This can be done in lots of ways. */
    for(let i = 0; i < thirdSectionButtons.length; i++){
        thirdSectionButtons[i].addEventListener('click', function(event){
            const buttonPressed = event.target;
            const joke = buttonPressed.parentElement;
            const answer = joke.querySelector('.answer');
            answer.className = 'answer wiggle-loop';
        });
    }

})();