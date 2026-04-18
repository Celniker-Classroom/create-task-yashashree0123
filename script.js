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