function checkEvery(targetArr, funcName) {
  for (let i = 0; i < targetArr.length; i++) {
    if (!funcName(targetArr[i])) {
      return false;
    }
  }
  return true;
}

function checkInputValue(validNum, inputValArray) {
  if (checkEvery(inputValArray, elem => typeof elem === "undefined")) {
    throw "최소 한가지 값이 필요합니다.";
  }
  if (validNum !== (inputValArray.filter(elem => elem !== undefined)).length) {
    throw `${validNum}개의 인자가 필요합니다.`;
  }
  if (!checkEvery(inputValArray, elem => typeof elem === "number")) {
    throw "숫자형 타입만 계산이 가능합니다.";
  }
  if (!checkEvery(inputValArray, elem => elem > 0)) {
    throw "입력값은 0보다 커야 합니다.";
  }
}

function calculateCircle(radius) {
  checkInputValue(1, [radius]);
  let result = radius * radius * Math.PI;
  console.log(result);
}

function calculateSquare(width, height) {
  checkInputValue(2, [width, height]);
  let result = width * height;
  console.log(result);
}

function calculateTrapezoid(upper, lower, height) {
  checkInputValue(3, [upper, lower, height]);
  let result = (upper + lower) * height / 2;
  console.log(result);
}

function getArea(shape, v1, v2, v3) {
  switch (shape) {
    case 'circle':
      v2 = (v2 === undefined ? 1 : v2);
      for (let i = 0; i < v2; i++) {
        calculateCircle(v1 + i);
      }
      break;
    case 'rect':
      calculateSquare(v1, v2);
      break;
    case 'trapezoid':
      calculateTrapezoid(v1, v2, v3);
      break;
  }
}

getArea('circle', 1, 1);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);