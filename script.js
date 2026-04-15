// add javascript here
// Project: JavaScript Learning Quiz
// Purpose: To help students understand Javascript.
// This file manages quiz logic using a list of correct answers
// and a checkAnswer function to compare user input.

// List of correct answers (index matches question number)
const correctAnswers = ["const", "alert", ".", "0", "=="];

// Tracks which questions have already been answered correctly
const answered = [false, false, false, false, false];

// Score variable
let score = 0;

// Function: checkAnswer
// Parameters: questionIndex (number), correctAnswer (string)
// Compares the user's input to the correct answer and updates score
function checkAnswer(questionIndex, correctAnswer) {
    const userInput = document.getElementById("q" + questionIndex).value.trim().toLowerCase();
    const feedback = document.getElementById("feedback" + questionIndex);
    const expected = correctAnswer.toLowerCase();

    // Only allow answering each question once
    if (answered[questionIndex]) {
        feedback.textContent = "You already answered this one!";
        feedback.style.color = "gray";
        return;
    }

    // Selection: check if answer is correct
    if (userInput === expected) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        score++;
        answered[questionIndex] = true;
        document.getElementById("score").textContent = score;
    } else {
        feedback.textContent = "❌ Not quite. Try again!";
        feedback.style.color = "red";
    }
}

// Function: showResults
// No parameters — summarizes final score for the student
function showResults() {
    // Check if all questions are answered
    let unanswered = 0;
    for (let i = 0; i < answered.length; i++) {
        if (!answered[i]) unanswered++;
    }

    const resultBox = document.getElementById("results");
    const resultMsg = document.getElementById("result-message");

    resultBox.style.display = "block";

    if (unanswered > 0) {
        resultMsg.textContent =
            "You still have " + unanswered + " unanswered question(s). Your current score is " + score + "/" + correctAnswers.length + ".";
        resultMsg.style.color = "#b8860b";
    } else if (score === correctAnswers.length) {
        resultMsg.textContent = "🎉 Perfect score! You got " + score + "/" + correctAnswers.length + ". Great job!";
        resultMsg.style.color = "green";
    } else if (score >= 3) {
        resultMsg.textContent = "Good work! You scored " + score + "/" + correctAnswers.length + ". Review the ones you missed.";
        resultMsg.style.color = "#2e7d32";
    } else {
        resultMsg.textContent = "You scored " + score + "/" + correctAnswers.length + ". Keep practicing — you've got this!";
        resultMsg.style.color = "#c0392b";
    }
}

// Function: resetQuiz
// Resets all answers, score, and feedback so the student can retry
function resetQuiz() {
    score = 0;
    document.getElementById("score").textContent = "0";

    for (let i = 0; i < correctAnswers.length; i++) {
        answered[i] = false;
        document.getElementById("q" + i).value = "";
        document.getElementById("feedback" + i).textContent = "";
    }

    const resultBox = document.getElementById("results");
    resultBox.style.display = "none";
}
 
