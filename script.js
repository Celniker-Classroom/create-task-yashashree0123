const correctAnswers = ["const", "alert", ".", "0", "=="];

document.getElementById("submit-quiz").addEventListener("click", function () {
    let currentScore = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        let userInput = document.getElementById("q" + i).value.trim().toLowerCase();
        let feedbackText = document.getElementById("feedback" + i);

        if (userInput === correctAnswers[i]) {
            feedbackText.textContent = "Correct";
            currentScore++;
        } else {
            feedbackText.textContent = "Incorrect";
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("result-message").textContent = "You scored " + currentScore + " out of " + correctAnswers.length;
});