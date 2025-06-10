
let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let resultDisplayed = false;

    function appendNumber(num) {
      const display = document.getElementById('display');

      // Reset display after showing result
      if (resultDisplayed) {
        display.value = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        resultDisplayed = false;
      }

      // Prevent multiple decimals in the same number
      if (num === '.') {
        if (!operator && firstNumber.includes('.')) return;
        if (operator && secondNumber.includes('.')) return;
      }

      display.value += num;

      if (!operator) {
        firstNumber += num;
      } else {
        secondNumber += num;
      }
    }

    function setOperator(op) {
      const display = document.getElementById('display');

      if (firstNumber === '') return;

      if (operator === '') {
        // Convert visible operator to real JS operator
        operator = (op === '×') ? '*' :
                   (op === '÷') ? '/' :
                   (op === '−') ? '-' :
                   op;

        display.value += op;
      }
    }

    function calculate() {
      const display = document.getElementById('display');
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);
      let result = 0;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = (num2 !== 0) ? num1 / num2 : 'Error';
          break;
        default:
          result = 'Invalid';
      }

      display.value = result;
      firstNumber = '';
      secondNumber = '';
      operator = '';
      resultDisplayed = true;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
      firstNumber = '';
      secondNumber = '';
      operator = '';
      resultDisplayed = false;
    }