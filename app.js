
let countNumber = document.querySelector('.number');
let buttons = document.querySelectorAll('button')
let currentNumber = 0;

for (const button of buttons) {
    button.addEventListener('click',() =>{
        let clickedBtn = button.textContent
        if(clickedBtn.includes("increase")){
            currentNumber++
        }else if(clickedBtn.includes("decrease")){
            currentNumber--
        }else{
            currentNumber = 0;
        }

    if(currentNumber>0){
        countNumber.style.color="darkgreen"
    }else if(currentNumber<0){
        countNumber.style.color="red"
    }else if(currentNumber==0){
        countNumber.style.color="#336666"
    }    
        countNumber.textContent = currentNumber;
    })
    
}