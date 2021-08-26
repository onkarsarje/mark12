const inputValues = document.querySelectorAll(".side-input");
const checkAreaButton = document.querySelector("#check-area-btn");
const outputE1 =document.querySelector("#output");

function calcProdOfSides(a,b){
    const prodOfSides=a*b;
    return prodOfSides;
}

function calculateAreaofTriangle(){
    const prodOfSides = calcProdOfSides(Number(inputValues[0].value), Number(inputValues[1].value));
    const areaOfTriangle = prodOfSides/2;
    outputE1.innerText = "The Area of Triangle is: " + areaOfTriangle + " cm²"
}

checkAreaButton.addEventListener("click", calculateAreaofTriangle);
