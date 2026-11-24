let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === 'Error') {
        currentInput = value === '.' ? '0.' : value;
        updateDisplay();
        return;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentInput === 'Error') {
        clearDisplay();
        return;
    }

    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    if (!currentInput) return;
    try {
        const result = eval(currentInput);
        if (typeof result !== 'number' || !Number.isFinite(result)) {
            throw new Error('Invalid result');
        }
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}

// 在 script.js 末尾增加
function calculatePercentage() {
    if (!currentInput || currentInput === 'Error') return;
    try {
        const result = eval(currentInput);
        if (typeof result !== 'number' || !Number.isFinite(result)) {
            throw new Error('Invalid percentage calculation');
        }
        currentInput = (result / 100).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}