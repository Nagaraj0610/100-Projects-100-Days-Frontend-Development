class Calculator {
    constructor() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = '';
        this.waitingForNewInput = false;
        this.memory = 0;
        
        this.display = document.getElementById('display');
        this.memoryIndicator = document.getElementById('memoryIndicator');
        
        this.updateDisplay();
    }
    
    updateDisplay() {
        // Format large numbers with commas and handle scientific notation
        let displayValue = this.currentInput;
        if (!isNaN(displayValue) && displayValue !== '') {
            let num = parseFloat(displayValue);
            if (Math.abs(num) >= 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
                displayValue = num.toExponential(6);
            } else if (num % 1 === 0 && Math.abs(num) < 1e12) {
                displayValue = parseInt(num).toLocaleString();
            } else if (Math.abs(num) < 1e12) {
                displayValue = parseFloat(num.toFixed(10)).toLocaleString();
            }
        }
        
        this.display.textContent = displayValue;
        this.memoryIndicator.classList.toggle('active', this.memory !== 0);
    }
    
    inputNumber(num) {
        if (this.waitingForNewInput) {
            this.currentInput = num;
            this.waitingForNewInput = false;
        } else {
            this.currentInput = this.currentInput === '0' ? num : this.currentInput + num;
        }
        this.updateDisplay();
    }
    
    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.currentInput);
        
        if (this.previousInput === '') {
            this.previousInput = inputValue;
        } else if (this.operator) {
            const result = this.performCalculation();
            this.currentInput = String(result);
            this.previousInput = result;
        }
        
        this.waitingForNewInput = true;
        this.operator = nextOperator;
        this.updateDisplay();
    }
    
    calculate() {
        if (this.operator && this.previousInput !== '') {
            const result = this.performCalculation();
            this.currentInput = String(result);
            this.previousInput = '';
            this.operator = '';
            this.waitingForNewInput = true;
        }
        this.updateDisplay();
    }
    
    performCalculation() {
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        
        if (isNaN(prev) || isNaN(current)) return current;
        
        switch (this.operator) {
            case '+':
                return prev + current;
            case '-':
                return prev - current;
            case '*':
                return prev * current;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return prev;
                }
                return prev / current;
            default:
                return current;
        }
    }
    
    inputDecimal() {
        if (this.waitingForNewInput) {
            this.currentInput = '0.';
            this.waitingForNewInput = false;
        } else if (this.currentInput.indexOf('.') === -1) {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }
    
    clearAll() {
        this.currentInput = '0';
        this.previousInput = '';
        this.operator = '';
        this.waitingForNewInput = false;
        this.updateDisplay();
    }
    
    clearEntry() {
        this.currentInput = '0';
        this.updateDisplay();
    }
    
    backspace() {
        if (this.currentInput.length > 1) {
            this.currentInput = this.currentInput.slice(0, -1);
        } else {
            this.currentInput = '0';
        }
        this.updateDisplay();
    }
    
    // Memory Functions
    memoryStore() {
        this.memory = parseFloat(this.currentInput) || 0;
        this.updateDisplay();
    }
    
    memoryRecall() {
        this.currentInput = String(this.memory);
        this.waitingForNewInput = true;
        this.updateDisplay();
    }
    
    memoryAdd() {
        this.memory += parseFloat(this.currentInput) || 0;
        this.updateDisplay();
    }
    
    memorySubtract() {
        this.memory -= parseFloat(this.currentInput) || 0;
        this.updateDisplay();
    }
    
    memoryClear() {
        this.memory = 0;
        this.updateDisplay();
    }
}

// Initialize calculator
const calculator = new Calculator();

// Global functions for button onclick events
function inputNumber(num) {
    calculator.inputNumber(num);
}

function inputOperator(operator) {
    calculator.inputOperator(operator);
}

function calculate() {
    calculator.calculate();
}

function inputDecimal() {
    calculator.inputDecimal();
}

function clearAll() {
    calculator.clearAll();
}

function clearEntry() {
    calculator.clearEntry();
}

function backspace() {
    calculator.backspace();
}

function memoryStore() {
    calculator.memoryStore();
}

function memoryRecall() {
    calculator.memoryRecall();
}

function memoryAdd() {
    calculator.memoryAdd();
}

function memorySubtract() {
    calculator.memorySubtract();
}

function memoryClear() {
    calculator.memoryClear();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Prevent default for calculator keys
    if ('0123456789+-*/.='.includes(key) || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        event.preventDefault();
    }
    
    if ('0123456789'.includes(key)) {
        inputNumber(key);
    } else if (key === '+') {
        inputOperator('+');
    } else if (key === '-') {
        inputOperator('-');
    } else if (key === '*') {
        inputOperator('*');
    } else if (key === '/') {
        inputOperator('/');
    } else if (key === '.' || key === ',') {
        inputDecimal();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        backspace();
    }
});