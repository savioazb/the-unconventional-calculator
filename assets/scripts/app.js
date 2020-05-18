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

function add(){
    const enteredNumber = getUserNumberInput(); //number typed by the user
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writetoLog('ADD', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput(); //number typed by the user
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writetoLog('SUBTRACT', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput(); //number typed by the user
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writetoLog('MULTIPLY',initialResult,enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput(); //number typed by the user
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writetoLog('DIVIDE',initialResult,enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

