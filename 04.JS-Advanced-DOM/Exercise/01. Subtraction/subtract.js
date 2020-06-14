function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const resultDiv = document.getElementById('result');

    resultDiv.innerText = +firstNum.value - +secondNum.value;
}