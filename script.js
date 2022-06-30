const operators = Array.from(document.getElementsByClassName('btn operator'))
const display = document.getElementById('display');
const equalsBtn = document.getElementById('equalsBtn');
const valueBtns = Array.from(document.getElementsByClassName('btn value'))
const clearBtn = document.getElementById('clear');
const backSpaceBtn = document.getElementById('backspace');

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

// function updateDisplay () {
//     let btnText = display.innerHTML;
//     if (btn.innerHTML == '.') {
//         if (btnText.indexOf('.') > -1) {
//             console.log(btn.innerHTML)
//             alert('Only one decimal allowed!')
//         } else {
//         display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
//         };
//     } else {
//         display.innerHTML = `${display.innerHTML}${btn.innerHTML}`;
//     }
// };

// valueBtns.forEach(btn => {
//     btn.addEventListener('click', () => updateDisplay());
// });

operators.forEach(btn => {
    btn.addEventListener('click', function () {
        display.innerHTML = `${display.innerHTML} ${btn.innerHTML} `
    })
})


function calculate () {
    const displayArray = display.innerHTML.split(" ")
    let currentValue = parseInt(displayArray[0]);
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
        display.innerHTML = currentValue;
    } else {
        display.innerHTML = currentValue.toFixed(2);
    };
};

equalsBtn.addEventListener('click', () => calculate()); 

// equalsBtn.addEventListener('click', () => evaluate()); {
//     // const displayArray = display.innerHTML.split(" ")
//     // let currentValue = displayArray[0];
//     // for (let i = 1; i <= displayArray.length; i ++) {
//     //     if (displayArray[i] == '+') {
//     //         currentValue = eval(`${currentValue} + ${displayArray[i + 1]}`);
//     //     } else if (displayArray[i] == '-') {
//     //         currentValue = eval(`${currentValue} - ${displayArray[i + 1]}`);
//     //     } else if (displayArray[i] == '/') {
//     //         if (displayArray[i + 1] == 0) {
//     //             alert("No dividing by zero!")
//     //             display.innerHTML = ''; 
//     //         } else {
//     //             currentValue = eval(`${currentValue} / ${displayArray[i + 1]}`);
//     //         }
//     //     } else if (displayArray[i] == '*') {
//     //         currentValue = eval(`${currentValue} * ${displayArray[i + 1]}`);
//     //     }
//     // };
//     // if (Number.isInteger(currentValue)) {
//     //     display.innerHTML = currentValue
//     // } else {
//     //     display.innerHTML = currentValue.toFixed(2);
//     // };
// });

clearBtn.addEventListener('click', ()  => display.innerHTML = '');

backSpaceBtn.addEventListener('click', () => {
    let displayText = display.innerHTML;
    display.innerHTML = displayText.slice(0, -1)
});

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        calculate();
    } else if (e.key == '0' ||e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '(' || e.key == ')' || e.key == '.') {
        let btnText = display.innerHTML;
        if (e.key == '.') {
            if (btnText.indexOf('.') > -1) {
                alert('Only one decimal allowed!')
            } else {
            display.innerHTML = `${display.innerHTML}${e.key}`;
            };
        } else {
            display.innerHTML = `${display.innerHTML}${e.key}`;
        }
    } else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        display.innerHTML = `${display.innerHTML} ${e.key} `
    };
});