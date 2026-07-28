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
    let ans = 0;
    switch (op) {
        case "+":
            ans = add(+a, +b);
            break;
        
        case "-":
            ans = sbt(+a, +b);
            break;
        
        case "*":
            ans = mlt(+a, +b);
            break;

        case "/":
            if(b === "0") {
                display.textContent = "Nice try!";
                return;
            }
            ans = dvd(+a, +b);
            break;
    }
    ans = parseFloat(ans.toFixed(10));
    display.textContent = ans;
    current = ans; 
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

document.addEventListener('keydown', (e) => {
    evaluate(e.key);
});

function updateDisplay(num) {
    if(justCalcd) {
        display.textContent = "";
        justCalcd = false;
    }
    if(display.textContent.length > 20) return;
    display.textContent += num;
}

function updateVar(num) {
    if(current.length > 20) return;
    current += num;
}

function evaluate(button) {
    if(!isNaN(button)) {
        updateDisplay(button);
        updateVar(button);
        return
    }
    if(button === "=" || button === "Enter") {
        b = current;
        operate(a, op, b);
        return;
    }

    if(button === "clear") {
        justCalcd = true;
        updateDisplay("");
        a = "";
        op = "";
        b = "";
        current = "";
        return;
    }

    if(button === ".") {
        if (current.includes(".")) return;
        updateDisplay(button);
        updateVar(button);
        return;
    }

    if(button === "back") {
        if(!current) return;
        current = current.slice(0, -1);
        display.textContent = current;
        return;
    }

    op = button; //catches +-*/ then updates variables
    a = current;
    current = "";
    justCalcd = true;
}