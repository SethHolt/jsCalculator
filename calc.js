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
    a = b;
    current = "";
    justCalcd = true;
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
        operate(a, op, b);
        return;
    }

    if(button === "clear") {
        justCalcd = true;
        updateDisplay("");
        a = "";
        op = ""
        b =""
        current = "";
    }

    op = button; //catches +-*/ then updates variables
    a = current;
    current = "";
    justCalcd = true;
}