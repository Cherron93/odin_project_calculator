const operators = Array.from(document.getElementsByClassName('btn operator'))
const display = document.getElementById('display');
const equalsBtn = document.getElementById('equalsBtn');
const valueBtns = Array.from(document.getElementsByClassName('btn value'))
const clearBtn = document.getElementById('clear');

let currentDisplay = display.innerHTML;

valueBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let btnText = display.innerHTML;
        if (btn.innerHTML == '.') {
            if (btnText.indexOf('.') > -1) {
                console.log(btn.innerHTML)
                alert('Only one decimal allowed!')
            } else {
            display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
            };
        } else {
            display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
        }
    })
});

operators.forEach(btn => {
    btn.addEventListener('click', function () {
        display.innerHTML = `${display.innerHTML} ${btn.innerHTML} `
    })
})

equalsBtn.addEventListener('click', function () {
    const displayArray = display.innerHTML.split(" ")
    let currentValue = displayArray[0];
    for (let i = 1; i <= displayArray.length; i ++) {
        if (displayArray[i] == '+') {
            currentValue = eval(`${currentValue} + ${displayArray[i + 1]}`);
        } else if (displayArray[i] == '-') {
            currentValue = eval(`${currentValue} - ${displayArray[i + 1]}`);
        } else if (displayArray[i] == '/') {
            if (displayArray[i + 1] == 0) {
                alert("No dividing by zero!")
                display.innerHTML = ''; 
            } else {
                currentValue = eval(`${currentValue} / ${displayArray[i + 1]}`);
            }
        } else if (displayArray[i] == '*') {
            currentValue = eval(`${currentValue} * ${displayArray[i + 1]}`);
        }
    };
    if (Number.isInteger(currentValue)) {
        display.innerHTML = currentValue
    } else {
        display.innerHTML = currentValue.toFixed(2);
    };
});

clearBtn.addEventListener('click', ()  => display.innerHTML = '');