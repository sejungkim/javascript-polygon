function circleSize(rad) {
    var size = rad*rad*Math.PI;
    console.log("원의 넓이: "+size);
}

function rectSize(width,height) {
    var size = width*height/2;
    console.log("사각형의 넓이: "+size);
}

function trapeSize(upper,bottom,height) {
    if(arguments.length<=2){
        console.log('3개의 인자가 필요합니다');
    }
    var size = upper*bottom*height/2;
    console.log("사다리꼴의 넓이: "+size);
}

circleSize(10);
rectSize(10,15);
trapeSize(10,5,12);

