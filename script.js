class Calculator {

    constructor(previousOperandTextElement, currentOperandTextElement){

        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


clear(){

    this.currentOperand = '' ;
    this.previousOperand = '' ;
    this.operation = undefined ;
}


delete(){
 this.currentOperand = this.currentOperand.toString().slice(0,-1);

}

appendNumber(number){
 if(number === '.' && this.currentOperand.includes('.')) return

 this.
}
 

chooseOperation(){

}


compute(){

}


getDisplayNumber(){

}


updateDisplay(){

}


numberButtons.forEach(button => {
    
});



operationButtons.forEach(button =>{

});



equalsButton.addEventListener('click', button =>{

});



deleteButton.addEventListener('click', button =>{

});
