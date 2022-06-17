const numBtns = Array.from(document.getElementsByClassName('btn num'));
const operators = Array.from(document.getElementsByClassName('btn operator'))
const display = document.getElementById('display');
const equalsBtn = document.getElementById('equalsBtn');
const btns = Array.from(document.getElementsByClassName('btn'));
const valueBtns = Array.from(document.getElementsByClassName('btn value'))
const clearBtn = document.getElementById('clear');

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate (operator, a, b) {
    return operator(a, b);
};

let displayValue = 0;
let currentValue = 0;
let calcArray = [];

valueBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
        displayValue = display.innerHTML;
    })
});


equalsBtn.addEventListener('click', () => display.innerHTML = eval(displayValue));

clearBtn.addEventListener('click', ()  => display.innerHTML = '');


