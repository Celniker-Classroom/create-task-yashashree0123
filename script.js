const correctAnswers = ["const", "alert", ".", "0", "=="];

function checkAnswer(answers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        let userInput = document.getElementById("q" + i).value.trim().toLowerCase();
        let feedbackText = document.getElementById("feedback" + i);
        if (userInput === answers[i]) {
            feedbackText.textContent = "Correct";
            score++;
        } else {
            feedbackText.textContent = "Incorrect";
        }
    }
    return score;
}

document.getElementById("submit-quiz").addEventListener("click", function () {
    let currentScore = checkAnswer(correctAnswers);
    document.getElementById("results").style.display = "block";
    document.getElementById("result-message").textContent = "You scored " + currentScore + " out of " + correctAnswers.length;
});
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value;
    const correctAnswer = "-5"; // Example from our previous logic

    if (userAnswer === correctAnswer) {
        // Trigger the confetti!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Show your results div
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').innerText = "Correct! 🎉";
    } else {
        alert("Try again!");
    }
}