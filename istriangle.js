const inputs=document.querySelectorAll(".angle-input");
const isTriangleButton= document.querySelector("#is-triangle-button");
const outputE1 =document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles=angle1+angle2+angle3;
    // console.log(sumOfAngles);
    return  sumOfAngles;
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputE1.innerText="Yea, The Angles form a Triangle."
    }else{
        outputE1.innerText="Nah, The Angles Don't form a Triangle."
    }
}

isTriangleButton.addEventListener("click", isTriangle)