const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
const operatorSet = new Set(['+', '-', '*', '/']);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (
        operatorSet.has(value) &&
        operatorSet.has(currentInput.slice(-1))
      ) {
        return;
      }

      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
