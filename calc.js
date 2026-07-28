function add(a, b) {
    return a + b;
}

function sbt(a, b) {
    return a - b;
}

function mlt(a, b) {
    return a * b;
}

function dvd(a, b) {
    return a / b;
}

function operate(a, op, b) {
    switch (op) {
        case "+":
            display.textContent = add(a, b);
            break;
        
        case "-":
            display.textContent = sbt(a, b);
            break;
        
        case "X":
            display.textContent = mlt(a, b);
            break;

        case "/":
            display.textContent = dvd(a, b);
            break;
    }
    current = "";
}

let display = document.querySelector("span");

document.querySelectorAll("button").forEach(btn => 
    {btn.addEventListener('click', () => evaluate(button.textContent))});

function updateDisplay(num) {
    if(display.textContent === "80085" || isNaN(num))
        display.textContent = "";

    display.textContent += num;
}

function updateVar(num) {
    current += num;
}

function evaluate(button) {
    if(isNaN(button.textContent)) {
        updateDisplay(button.textContent);
        updateVar(button.textContent);
        return
    }
    if(button.textContent === "=") {
        b = current;
        updateDisplay("");
        operate(a, op, b);
        return;
    }

    op = button.textContent; //catches +-*/ then updates variables
    a = current;
    current = "";
}

let current = "";
let a = "";
let op = "";
let b = "";