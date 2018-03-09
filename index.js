function checkNumberOfInput(validNum, inputVal) {
    if(inputVal.length !== validNum) {
        return false;
    }
    else {
        return true;
    }
}
function calculateCircle(radius) {
    if(!checkNumberOfInput(1, arguments)) {
        return console.log("1개의 인자가 필요합니다.");
    }
    let result = radius * radius * Math.PI;
    return console.log(result);
}
function calculateSquare(width, height) {
    if(!checkNumberOfInput(2, arguments)) {
        return console.log("2개의 인자가 필요합니다.");
    }
    let result = width * height;
    return console.log(result);
}
function calculateTrapezoid(upper, lower, height) {
    if(!checkNumberOfInput(3, arguments)) {
        return console.log("3개의 인자가 필요합니다.");
    }
    let result = (upper + lower) * height;
    return console.log(result);
}

calculateCircle(10);
calculateSquare(10,15);
calculateTrapezoid(10,5,12);