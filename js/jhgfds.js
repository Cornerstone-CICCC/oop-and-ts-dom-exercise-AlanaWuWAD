<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <div>
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number">
        <select id="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select>
        <button id="calculateBtn">Calculate</button>
    </div>
    <div class="result">
        <p>Result: <span id="result">0</span></p>
    </div>
    <script>
        class Calculator {
            constructor() {
                this.num1 = document.querySelector('#num1');
                this.num2 = document.querySelector('#num2');
                this.result = document.querySelector('#result');
                this.btn = document.querySelector('#calculateBtn');
                
                this.btn.addEventListener('click', () => {
                    this.cal();
                });
            }

            cal() {
                const option = document.querySelector('#operation');
                const num1 = parseFloat(this.num1.value);
                const num2 = parseFloat(this.num2.value);

                let calculationResult;

                if (option.value === 'add') {
                    calculationResult = this.add(num1, num2);
                } else if (option.value === 'subtract') {
                    calculationResult = this.subtract(num1, num2);
                } else if (option.value === 'multiply') {
                    calculationResult = this.multiply(num1, num2);
                } else if (option.value === 'divide') {
                    calculationResult = this.divide(num1, num2);
                }

                // 顯示結果
                this.result.textContent = calculationResult !== undefined ? calculationResult : 'Error';
            }

            add(a, b) {
                return a + b;
            }

            subtract(a, b) {
                return a - b;
            }

            multiply(a, b) {
                return a * b;
            }

            divide(a, b) {
                if (b === 0) {
                    alert('Cannot divide by zero!');
                    return undefined;
                }
                return a / b;
            }
        }

        // 初始化計算器
        const calculator = new Calculator();
    </script>
</body>
</html>
