
quizContainer.innerHTML = "<div><h2>Welcome To The Fish Quiz!</h2> <button class='link-button' onclick='startQuiz()'>Start Quiz</button>";
function startQuiz() {
    quizContainer.innerHTML = "<h2>Question 1:</h2><p>How would you describe a moose?</p><button class='link-button' onclick='document.cookie = 'q1=c; path=/' qtwo()>Amazing/Cool</button><button class='link-button' onclick='document.cookie = 'q1=w; path=/ qtwo()'>Other/Bad</button>"
}
function qTwo() {
    quizContainer.innerHTML = ""
}