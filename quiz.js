const quizForm =document.querySelector(".quiz-form");
const submitAnswerButton=document.querySelector("#submit-answer-btn");
const outputE1=document.querySelector("#output");

const correctAnswer=["90°","right angle d"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score++;
        }
        index++;
    }
    outputE1.innerText = "Your Score is: " + score ;
}

submitAnswerButton.addEventListener("click", calculateScore);