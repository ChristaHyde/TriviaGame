(function () {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = "darkgreen";
            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        console.log("show results")
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Who was the first President of the United States of America?",
            answers: {
                a: "Abraham Lincoln",
                b: "Thomas Jefferson",
                c: "John Quincy Adams",
                d: "George Washington"
            },
            correctAnswer: "d"
        },
        {
            question: "Who was the 42nd President??",
            answers: {
                a: "Barack Obama",
                b: "George W. Bush",
                c: "Bill Clinton",
                d: "Ronald Reagan"
            },
            correctAnswer: "c"
        },
        {
            question: "Who was the first President to live in the White House?",
            answers: {
                a: "John Quincy Adams",
                b: "James Madison",
                c: "Thomas Jefferson",
                d: "James Monroe"
            },
            correctAnswer: "a"
        },
        {
            question: "Who was the first President to appear on TV?",
            answers: {
                a: "Dwight Eisenhower",
                b: "Harry Truman",
                c: "John F. Kennedy",
                d: "Franklin D. Roosevelt"
            },
            correctAnswer: "d"
        }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();




var timeLeft = 60;
var elem = document.getElementById('timer')

var timerId = setInterval(countdown, 1000);
// var endQuiz = showResults();
// console.log(endQuiz);


function showResults() {
    quizContainer.innerHTML = output.join("");
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = "darkgreen";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    console.log("show results")
}


function countdown() {
    if (timeLeft == 0) {
        console.log(timeLeft)
        // quizContainer.innerHTML = output.join("");
        clearTimeout(timerId);
        showResults();
        elem.innerHTML = timeLeft + ' seconds remaining';
        // if (submitButton.addEventListener("click", clearTimeout(timerId))
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        console.log(timeLeft, "L")
    }

}













// var intervalId;

// var clockRunning = false;
// var time = 60;
// var lap = 1;

// // function reset() {

// // time = 60;
// lap = 1;

// $("#display").text(time + " seconds");

// $("#laps").text("");
// }

// reset()
// function start() {

//     if (!clockRunning) {
//         intervalId = setInterval(count, 1000);
//         clockRunning = true;
//     }
//     for (var i = 0; i < questions.length; i++) {
//         $("#game").append("<p>" + questions[i].question + "</p>")
//         var formGroup = $("#game").append(`<input id=${"questions" + i} type = 'radio' ></input>`)
//         // create form group DOM node 
//         console.log(questions[i].choices)
//         var currentChoices = questions[i].choices
//         for (var j = 0; j < currentChoices.length; j++) {
//             // append to form group DOM node
//             formGroup.append(`<option> ${currentChoices[j]} </option>`)
//         }

//     }


// }
// function stop() {

//     clearInterval(intervalId);
//     clockRunning = false;
// }
// function recordLap() {

//     var converted = timeConverter(time);

//     $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");

//     lap++;
// }
// function count() {

    // time--;

    //     // var converted = timeConverter(time);
    //     // console.log(converted);

    // $("#display").text(time + " seconds");
// }


// var questions = [
//     {
//         question: "Who was the first President of the United States of America?",
//         choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Quincy Adams"],
//         answers: "George Washington"
//     },
//     {
//         question: "Who was the 42nd President?",
//         choices: ["Bill Clinton", "George W. Bush", "Ronald Reagan", "Barack Obama"],
//         answers: "Bill Clinton"
//     },
//     {
//         question: "Who was the first President to live in the White House?",
//         choices: ["James Madison", "James Monroe", "John Adams", "Thomas Jefferson"],
//         answers: "John Adams"
//     },
//     {
//         question: "Who was the first President to appear on TV?",
//         choices: ["Dwight Eisenhower", "John Kennedy", "Franklin Roosevelt", "Harry Truman"],
//         answers: "Franklin Roosevelt"
//     }
// ]
// start()