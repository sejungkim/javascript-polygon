function circleSize(rad) {
    if(typeof rad === 'string'){
        console.log('숫자형타입만 계산이 가능합니다');
    } else if(arguments.length===0){
        console.log('최소 한가지 값이 필요합니다')
    } else if(rad <= 0){
        console.log('반지름은 0보다 커야합니다');
    }
    else {
        var size = rad * rad * Math.PI;
        console.log("원의 넓이: " + size);
    }
}

function rectSize(width,height) {
    if(typeof width=== 'string'||typeof height === 'string'){
        console.log('숫자형타입만 계산이 가능합니다');
    } else if(arguments.length===0){
        console.log('최소 한가지 값이 필요합니다')
    } else if(width<= 0 || height<= 0){
        console.log('길이값과 높이값은 0보다 커야합니다');
    }
    else {
        var size = width * height / 2;
        console.log("사각형의 넓이: " + size);
    }
}

function trapeSize(upper,bottom,height) {
    if(arguments.length<=2){
        console.log('3개의 인자가 필요합니다');
    }

    var size = upper*bottom*height/2;
    console.log("사다리꼴의 넓이: "+size);
}

circleSize();
rectSize(-1,15);
trapeSize(10,5,12);