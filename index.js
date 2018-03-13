function checkEvery() {
    
}
function checkInputValue(validNum, inputVal) {
    let inputValArray = Array.from(inputVal);
    if(!inputValArray.every(elem => toString.call(elem) === "[object Number]")) {
        throw "숫자형 타입만 계산이 가능합니다.";
    }
    if(inputValArray.length === 0) {
        throw "최소 한가지 값이 필요합니다.";
    }
    if(!inputValArray.every(elem => elem > 0)) {
        throw "입력값은 0보다 커야 합니다.";
    }
    if(validNum !== inputValArray.length) {
        throw `${validNum}개의 인자가 필요합니다.`;
    }
    return true;
}
function calculateCircle(radius) {
    let result;
    try {
        checkInputValue(1, arguments);
    }
    catch(e) {
        console.log(e);
        return false;
    }
    result = radius * radius * Math.PI;
    console.log(result);
    return true;
}
function calculateSquare(width, height) {
    let result;
    try {
        checkInputValue(2, arguments);
    }
    catch(e) {
        console.log(e);
        return false;
    }
    result = width * height;
    console.log(result);
    return true;
}
function calculateTrapezoid(upper, lower, height) {
    let result;
    try {
        checkInputValue(3, arguments);
    }
    catch(e) {
        console.log(e);
        return false;
    }
    result = (upper + lower) * height / 2;
    console.log(result);
    return true;
}

calculateCircle(10);
calculateSquare(10,15);
calculateTrapezoid(10,5,12);