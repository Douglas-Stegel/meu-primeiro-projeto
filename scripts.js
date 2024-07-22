// scripts.js

let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('result');
    display.value = currentInput;
}
