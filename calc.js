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
            return add(a, b);
            break;
        
        case "-":
            return sbt(a, b);
            break;
        
        case "*":
            return mlt(a, b);
            break;

        case "/":
            return dvd(a, b);
            break;
    }
}

const a = spana;
const op = btn;
const b = spanb;