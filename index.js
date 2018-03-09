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

calculateCircle(3);