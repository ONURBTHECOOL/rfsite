
const quizContainer = document.getElementById('quiz-container');
quizContainer.innerHTML = "<div><h1>Welcome To The Fish Quiz!</h1> <button onclick='startQuiz()'>Start Quiz</button>";
function startQuiz() {
    quizContainer.innerHTML = `<script src="nav.js"></script><div id="question-container">
    <h2 id="question">What are your opinions on Moose™?</h2>
    <div id="options">button</div>
    <button id="next-btn" onclick="nextQuestion()">Next</button>
</div><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>`;
    loadQuestion();
}