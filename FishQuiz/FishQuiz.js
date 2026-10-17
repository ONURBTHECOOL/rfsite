let q1, q2, q3, q4, q5;

quizContainer.innerHTML = `<div><h2>Welcome to the Fish Quiz!</h2> <button class='link-button' onclick="startQuiz()">Start Quiz</button>`;
function startQuiz() {
    quizContainer.innerHTML = `<h2>Question 1:</h2><p>How would you describe a moose?</p><button class='link-button' onclick="q1=1; qTwo()">Amazing/cool</button><button class='link-button' onclick="q1=0; qTwo()">Other/bad</button>`;
}
function qTwo() {
    quizContainer.innerHTML = `<h2>Question 2:</h2><p>How would you describe a Belly Button?</p><button class='link-button' onclick="q2=1; qThree()">Amazing/cool</button><button class='link-button' onclick="q2=0; qThree()">Amazing/cool</button>`;
}
function qThree() {
    quizContainer.innerHTML = `<h2>Question 3:</h2><p>How would you describe a moose?</p><button class='link-button' onclick="q3=1; qFour()">Amazing/cool</button><button class='link-button' onclick="q3=0; qFour()">Other/bad</button>`;
}
function qFour() {
    quizContainer.innerHTML = `<h2>Question 4:</h2><p>How would you describe a moose?</p><button class='link-button' onclick="q4=1; qFive()">Amazing/cool</button><button class='link-button' onclick="q4=0; qFive()">Other/bad</button>`;
}
function qFive() {
    quizContainer.innerHTML = `<h2>Question 5:</h2><p>How would you describe a moose?</p><button class='link-button' onclick="q5=1; result()">Amazing/cool</button><button class='link-button' onclick="q5=0; result()">Other/bad</button>`;
}
function result() {
    let r = q1 + q2 + q3 + q4 + q5;
    document.cookie("quizResult=" + r + "; path=/");
    quizContainer.innerHTML = `<h2>Result:</h2><p>${r} out of 5 questions correct</p><button class='link-button' onclick="startQuiz()">Try again</button>`;
}