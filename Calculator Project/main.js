const display = document.getElementById('display');

let equation = ''; // This holds the full equation
let shouldResetDisplay = false; // Track if we just showed a result

// Append number or decimal to the equation
function appendNumber(number) {
    // If result is being shown, reset for a new equation
    if (shouldResetDisplay) {
        equation = '';
        shouldResetDisplay = false;
    }
    
    // Prevent multiple decimals in a row
    const lastToken = equation.split(/[\+\-\×\÷]/).pop();
    if (number === '.' && lastToken.includes('.')) {
        return;
    }
    
    equation += number;
    display.value = equation;
}

// Set the operator and update the equation
function setOperator(op) {
    if (equation === '') return;
    
    const lastChar = equation.slice(-1);
    
    // Prevent multiple operators
    if (['+', '-', '×', '÷'].includes(lastChar)) return;
    
    equation += op;
    display.value = equation;
    shouldResetDisplay = false;
}

// Calculate and show result
function calculate() {
    if (equation === '') return;
    
    // Replace display symbols with actual operators
    const expression = equation
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/–/g, '-');
    
    try {
        const result = eval(expression);
        display.value = parseFloat(result.toFixed(10)).toString();
        equation = display.value; // Set result as new base for next input
        shouldResetDisplay = true;
    } catch (e) {
        display.value = 'Error';
        equation = '';
        shouldResetDisplay = true;
    }
}

// Clear all
function clearDisplay() {
    equation = '';
    display.value = '';
    shouldResetDisplay = false;
}

// Delete last character
function deleteLast() {
    if (shouldResetDisplay) return; // Disable delete after result shown
    equation = equation.slice(0, -1);
    display.value = equation;
}

// Keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+') {
        setOperator('+');
    } else if (key === '-') {
        setOperator('-');
    } else if (key === '*') {
        setOperator('×');
    } else if (key === '/') {
        event.preventDefault();
        setOperator('÷');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});