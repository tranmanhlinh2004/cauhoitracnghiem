document.addEventListener("DOMContentLoaded", function () {
    const correctAnswer = "D"; // Đáp án đúng
    const buttons = document.querySelectorAll(".answer-button");
    const correctSound = new Audio('correct_answer.mp3');
    const incorrectSound = new Audio('wrong_answer.mp3');
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("pending", "correct", "incorrect"));
            this.classList.add("pending");
            let selectedAnswer = this.innerText.charAt(0);
            setTimeout(() => {
                this.classList.remove("pending");
                if (selectedAnswer === correctAnswer) {
                    this.classList.add("correct");
                    correctSound.play();
                } else {
                    this.classList.add("incorrect");
                    incorrectSound.play();
                }
            }, 3000);
        });
    });
});