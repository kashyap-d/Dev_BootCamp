let calculation = '';

function appendValue(value) {
  calculation += value;
  updateDisplay();
}

function calculateResult() {
  try {
    calculation = eval(calculation).toString();
  } catch (error) {
    calculation = 'Error';
  }
  updateDisplay();
}

function resetCalculator() {
  calculation = '';
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = calculation || '0';
}
