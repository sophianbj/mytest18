/**
 * Created by Niubinjuan on 2016/9/6.
 */

var cvs;

var cxt;
var sw;
var sh;
var allBalls = new Array();
var r = 8;
var l, t;
var dw = 119+10;
var mw = 67+10;
var  tmp = new Date();
var endTime = tmp.getTime() + 3600000;
var preTime;


window.onload =function (){
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;
    l = (sw - 794)/2;
    t = 100;
    cvs = document.getElementById('canvas');
    cvs.width = sw;
    cvs.height = sh;
    cxt = cvs.getContext('2d');

    //创建小球
    preTime = getCurTime();
    setInterval(function(){
        cxt.clearRect(0,0,sw,sh);
        //画所有的球
        drawBall();
        changeNumToBall();
        //var  curTime = getCurTime();
        ballJump();
    },50);
};

function changeNumToBall(){
    var ct = getCurTime();


    var second = ct % 60;
    var minute = parseInt(ct/60);

    var preMinute = parseInt(preTime/60);
    var preSecond = preTime % 60;

    if(second != preSecond){
        if(parseInt(second/10) !=parseInt(preSecond/10)){
            produceDigitBall(l+4*dw+2*mw,t,parseInt(second/10));
        }
        if(parseInt(second%10) !=parseInt(preSecond%10)){
            produceDigitBall(l+5*dw+2*mw,t,parseInt(second%10));
        }
        if(parseInt(minute/10) !=parseInt(preMinute/10)){

            produceDigitBall(l+2*dw+mw,t,parseInt(minute/10));
        }
        if(parseInt(minute%10) !=parseInt(preMinute%10)){
            produceDigitBall(l+3*dw+mw,t,parseInt(minute%10));
        }

    }

    //画小时
    drawDigit(l,t,2);

    drawDigit(l+dw,t,3);

    drawDigit(l+2*dw,t,10);

    //画分钟
    drawDigit(l+2*dw+mw,t,parseInt(minute/10));

    drawDigit(l+3*dw+mw,t,parseInt(minute%10));

    drawDigit(l+4*dw+mw,t,10);

    //画秒钟
    drawDigit(l+4*dw+2*mw,t,parseInt(second/10));

    drawDigit(l+5*dw+2*mw,t,parseInt(second%10));

    preTime = ct;

}

function getCurTime(){
    var date = new Date();
    var restTime = endTime - date.getTime();
    var res = parseInt(restTime/1000);
    return res > 0 ? res: 0 ;//三元运算符

}



function drawDigit(l,t,n){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 7; j++){
            if(digit[n][i][j] ==1){
                var x = l+(2*j+1)*r +j;
                var y = t+(2*i+1)*r +i;
                var b = new Ball(x,y);
                b.color = "springgreen";
                b.draw();
                //allBalls.push(b)
            }
        }
    }
    drawAllBalls();
}

function produceDigitBall(l,t,n){
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 7; j++){
            if(digit[n][i][j] ==1){
                var x = l+(2*j+1)*r +j;
                var y = t+(2*i+1)*r +i;
                var b = new Ball(x,y);

                allBalls.push(b)
            }
        }
    }
    //drawAllBalls();
}
function ballJump(){
    for(var i =0 ;i < allBalls.length; i++){
        allBalls[i].jump();
    }
}
function drawBall(){
    for(var i =0 ;i < allBalls.length; i++){
        allBalls[i].draw();
    }
}

function drawAllBalls(){
    for(var i =0 ;i < allBalls.length; i++){
        allBalls[i].draw();
    }
}

/*
 function drawColon() {
 for (var i = 0; i < 10; i++) {
 for (var j = 0; j < 4; j++) {
 if (digit[10][i][j] == 1) {
 var x = (2 * j + 1) * r + j;
 var y = (2 * i + 1) * r + i;
 var b = new Ball(x, y);
 allBalls.push(b)
 }
 }
 }
 drawAllBalls();
 }
 */