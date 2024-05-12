const questions = [
    
    {
        question: "This section is used for declaring variables without value.",
        answers: [
            { text: "Data Section", correct: false},
            { text: "Initialize Section", correct: false},
            { text: "BSS Section", correct: true},
            { text: "Text Section", correct: false},       
        ]
    },
    {
        question: "What register used for system calls? ",
        answers: [
            { text: "EBX", correct: false},
            { text: "ECX", correct: false},
            { text: "EDX", correct: false},
            { text: "EAX", correct: true},          
        ]
    },
    {
        question: "What does this statement mean 'jz evnn' ?",
        answers: [
            { text: "jump if 0 to the label 'evnn'", correct: true},
            { text: "jump if not 0 to the label 'evnn'", correct: false},
            { text: "jump if 1 to the label 'evenn'", correct: false},
            { text: "jump if not 1 to the label 'evenn'", correct: false},       
        ]
    },
    {
        question: "API for interface between the user space and the kernel space",
        answers: [
            { text: "System Calls", correct: true},
            { text: "Addressing Mode", correct: false},
            { text: "Arithmetic Instruction", correct: false},
            { text: "Logical Instruction", correct: false},       
        ]
    },
    {
        question: "What does this statement mean 'int 0x80'?",
        answers: [
            { text: "Integer 0 times 80", correct: false},
            { text: "Call the kernel", correct: true},
            { text: "A file descriptor", correct: false},
            { text: "Move the register to memory", correct: false},       
        ]
    },
    {
        question: "What is the difference between EAX and EBX?",
        answers: [
            { text: "EAX used for system calls while EBX is for file descriptor", correct: true},
            { text: "EAX used for file descriptor while EBX is for system calls", correct: false}, 
        ]
    },
    {
        question: "What is the operation of XOR Instruction?",
        answers: [
            { text: "If the bits from the operand are not the same, the resultant bit is 0", correct: false},
            { text: "If the bits from the operand are the same, the resultant bit is 1", correct: false},
            { text: "If the bits from the operand are the same, the resultant bit is 0", correct: true},        
        ]
    },
    {
        question: "'5' - '0' = ___",
        answers: [
            { text: "5", correct: true},
            { text: "0", correct: false},
            { text: "-5", correct: false},
            { text: "1", correct: false},           
        ]
    },
    {
        question: "The symbolic address of the first number will be NUMBERS and that of the second number will be NUMBERS + __ and so on?",
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "2", correct: true},
            { text: "5", correct: false},           
        ]
    },
    {
        question: "mov ECX, 20 <br> l25: <br> (loop body) <br> loop l25 <br> How many times will this loop iterate?",
        answers: [
            { text: "20", correct: true},
            { text: "25", correct: false},
            { text: "22", correct: false},
            { text: "23", correct: false},           
        ]
    },
   
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const remark = document.getElementById("remarksID");
const name = document.querySelector(".name");
const scoreText = document.getElementById("scoreID");
const rewardBtn = document.getElementById("reward");
const descrip = document.querySelector(".thanks");
const imgReward = document.getElementById("imgRewards");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".quiz1").style.display = "block";
    if(score <= 3){
        remark.innerHTML = "Better Luck Next Time";
    } else if(score <= 7 ) {
        remark.innerHTML = "Good";
    } else if(score === 8 && score === 9){
        remark.innerHTML = "Very Good";
    } else if(score === 10){
        remark.innerHTML = "Congrats, Perfect";
        rewardBtn.style.display = "block";
        descrip.style.marginTop = "-10px";
        document.getElementById('reward').addEventListener('click', function() {
            alert('Congratulations, Claim your prize now');
            document.querySelector(".quiz1").style.display = "none";
            document.querySelector(".qa_header").style.display = "none";
            imgReward.style.display = "block";
        });

    }
    scoreText.innerHTML = 'You scored ' + score + ' out of '+ questions.length + ' !';
    scoreText.style.textAlign = "center";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();