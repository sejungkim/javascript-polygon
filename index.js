function calculateCircleSize(radius1,radius2) {
    var size = 0;
    if(arguments.length === 1){
        size = radius1 * radius1 * Math.PI;
        console.log("원의 넓이: " + size);
    }
    if(arguments.length === 2){
        for(var i = radius1; i <= radius2; i++){
            console.log('반지름이 '+i+'인 원의 넓이는 :'+(i*i*Math.PI));
        }
    }
}

function calculateRectSize(width,height) {
    if(typeof width !== 'number' && typeof height !== 'number'){
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

function calculateTrapeSize(upper,bottom,height) {
    if(arguments.length<=2){
        console.log('3개의 인자가 필요합니다');
    }

    var size = upper*bottom*height/2;
    console.log("사다리꼴의 넓이: "+size);
}



function getArea(shape, para1, para2, para3) {
    switch(shape){
        case 'circle': calculateCircleSize(para1, para2);
            break;
        case 'rect': calculateRectSize(para1, para2);
            break;
        case 'trape': calculateTrapeSize(para1, para2, para3);
            break;
    }
}

getArea('circle',1,10);