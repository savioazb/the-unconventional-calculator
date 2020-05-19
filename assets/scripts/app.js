const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field

function getUserNumberInput(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writetoLog(operator, resultBeforeCalc, calcNumber){
    const logEntry = {
        operation: operator,
        prevResult: resultBeforeCalc,
        number: calcNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){

    const enteredNumber = getUserNumberInput(); //number typed by the user

    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
        ){
        return;  
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ){
        
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    }
    else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*'
    }
    else{
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writetoLog(calculationType, initialResult, enteredNumber);

    // }
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

