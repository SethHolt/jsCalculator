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
            display.textContent = add(+a, +b);
            break;
        
        case "-":
            display.textContent = sbt(+a, +b);
            break;
        
        case "X":
            display.textContent = mlt(+a, +b);
            break;

        case "/":
            display.textContent = dvd(+a, +b);
            break;
    }
    current = "";
}

let display = document.querySelector("span");
let current = "";
let a = "";
let op = "";
let b = "";
let justCalcd = true;

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener('click', () => evaluate(btn.textContent))
});

function updateDisplay(num) {
    if(justCalcd) {
        display.textContent = "";
        justCalcd = false;
    }
    display.textContent += num;
}

function updateVar(num) {
    current += num;
}

function evaluate(button) {
    if(!isNaN(button)) {
        updateDisplay(button);
        updateVar(button);
        return
    }
    if(button === "=") {
        b = current;
        updateDisplay("");
        operate(a, op, b);
        return;
    }

    op = button.textContent; //catches +-*/ then updates variables
    a = current;
    current = "";
}