function countObjects(map) {
    let c = 0;
    for (key in map) {
        c++;
    }
    return c;
}
const answers = document.querySelectorAll(".choice-grid div")
let selectedAnswers = {}
for (let answer of answers) {
    answer.addEventListener('click', selectAnswer)
}

let bottone = document.querySelector('.button')
bottone.addEventListener('click', resetQuiz)
let contatore = 0;

function selectAnswer(event) {
    event.currentTarget.querySelector('.checkbox').src = "checked.png"
    event.currentTarget.classList.add("selected")
    event.currentTarget.classList.remove("unselected")
    const selectedAnswer = event.currentTarget.dataset.choiceId
    contatore++;
    const otherAnswers = event.currentTarget.parentNode.querySelectorAll("div")
    for (let otherAnswer of otherAnswers) {
        if (otherAnswer.dataset.choiceId !== selectedAnswer) {
            otherAnswer.classList.add("unselected")
            otherAnswer.classList.remove("selected")
            otherAnswer.querySelector('.checkbox').src = "unchecked.png"

        }
    }

    const conteggio = {}

    selectedAnswers[event.currentTarget.dataset.questionId] = selectedAnswer
    if (countObjects(selectedAnswers) === 3) {
        const answers = document.querySelectorAll(".choice-grid div")
        for (let answer of answers) {
            answer.removeEventListener('click', selectAnswer)
        }
    }

    for (question in selectedAnswers) {
        const answer = selectedAnswers[question]


        if (!conteggio[answer]) {
            conteggio[answer] = 0
        }
        conteggio[answer]++;
    }

    let maxAnswer = null
    let maxAnswerCount = 0

    for (let answer in conteggio) {
        if (conteggio[answer] > maxAnswerCount) {
            maxAnswer = answer
            maxAnswerCount = conteggio[answer]

        }
    }
    if (countObjects(selectedAnswers) === 3) {
        const title = RESULTS_MAP[maxAnswer].title
        const content = RESULTS_MAP[maxAnswer].contents
        const results = document.querySelector("#results")
        results.querySelector("h2").textContent = title
        results.querySelector("p").textContent = content
        results.classList.remove("hidden")
    }




}


function resetQuiz() {
    selectedAnswers = {}
    const answers = document.querySelectorAll(".choice-grid div")
    for (let answer of answers) {
        answer.addEventListener("click", selectAnswer)
        answer.classList.remove("selected")
        answer.classList.remove("unselected")
        answer.querySelector(".checkbox").src = "unchecked.png"
    }
    results.classList.add("hidden")
    contatore = 0;
}
