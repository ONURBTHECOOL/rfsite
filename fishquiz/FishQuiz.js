function home() {
    return (
        <div>
            <h1>Welcome To The Fish Quiz!</h1>
            <button onClick={() => window.location.href = '/quiz'}>Start Quiz</button>
        </div>
    );
}
document.getElementById('quiz-container').innerHTML = home(); 