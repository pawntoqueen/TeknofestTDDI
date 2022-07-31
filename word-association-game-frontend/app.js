const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
        tip : [ "value", "estimate", "evaluate"],
        options : ["jury", "assess" ],
        correct : 1
    },
    {
        tip : [ "close", "near", "next"],
        options : ["trace", "adjacent" ],
        correct : 1
    
    },
    {
        tip : [ "foreign", "national", "ethnic"],
        options : ["mad", "exotic" ],
        correct : 0
    },
    {
        tip : [ "assume", "insight", "weather"],
        options : ["forecast", "sustainable" ],
        correct : 0
    },
    {
        tip : [ "fast", "quick", "promt"],
        options : ["charity", "rapid" ],
        correct : 1
    }
]


let score = 0
let clicked = []
scoreDisplay.textContent = score

function createLogo(){
    const logoDisplay = document.createElement('h1')
    logoDisplay.textContent = "^_^"
    return logoDisplay
}

function createTips(question,questionBox){
    question.tip.forEach(tip => {
        const tipText =  document.createElement("p")
        tipText.textContent = tip
        questionBox.append(tipText)
    })
    return questionBox
}


function createOptions(question,questionBox){
    const questionButtons = document.createElement("div")
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)

    question.options.forEach((option, optionIndex) => {
        const questionButton =  document.createElement("button")
        questionButton.classList.add('question-button')
        questionButton.textContent = option

        questionButton.addEventListener('click', () => checkAnswer(questionBox,questionButton, option, optionIndex,question.correct))

        questionBox.append(questionButton)
    })
    return questionBox
}

function populateQuestions(){
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        questionBox.append(createLogo())

        createTips(question, questionBox)
        
        createOptions(question, questionBox)

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')
        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(answerDisplay,questionButton, option,optionIndex, questionCorrect){
    if(optionIndex == questionCorrect){
        score++
        scoreDisplay.textContent = score
        addResult(answerDisplay,"Correct!")
    }
    else{
        score--
        scoreDisplay.textContent = score
        addResult(answerDisplay,"Wrong")

    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer){
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.textContent = answer
}