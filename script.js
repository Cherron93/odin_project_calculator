const numBtns = Array.from(document.getElementsByClassName('num'));
const display = document.getElementById('display');

console.log(btns)



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

numBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
    })
});


