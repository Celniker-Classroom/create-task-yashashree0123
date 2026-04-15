const correctAnswers = ["const", "alert", ".", "0", "=="];

const submit = document.getElementById("submit-quiz");
submit.addEventListener("click", processQuiz);

function processQuiz() {
    let currentScore = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        let userInput = document.getElementById("q" + i).value.trim().toLowerCase();
        let feedbackText = document.getElementById("feedback" + i);

        if (userInput === correctAnswers[i]) {
            feedbackText.textContent = "Correct!";
            feedbackText.style.color = "green";
            currentScore++;
        } else {
            feedbackText.textContent = "Incorrect ";
            feedbackText.style.color = "red";
        }
    }

    updateUI(currentScore);
}

function updateUI(finalScore) {
    document.getElementById("score").textContent = finalScore;
    
    const resultsBox = document.getElementById("results");
    const message = document.getElementById("result-message");
    
    resultsBox.style.display = "block";
    message.textContent = "You scored " + finalScore + " out of " + correctAnswers.length;
}
