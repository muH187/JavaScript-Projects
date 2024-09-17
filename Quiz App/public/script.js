const choices = document.querySelectorAll(".choices")
const nextBtn = document.getElementById("nextBtn")

function checkingQuestion() {
    if("Q1. Which is the largest continent in the world?" === "Asia") {
        console.log("You have choosed correct answer.")
    } else {
        console.log("You have choosed incorrect answer.")
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        checkingQuestion()
    })
})

nextBtn.addEventListener('click', () => {

})
