/**
 * Created by Niubinjuan on 2016/9/6.
 */

function Ball(x,y){
    this.x = x;
    this.y = y;
    this.g = 1.5 + Math.random();
    this.vx = parseInt(Math.random()*11-5);
    this.vy = parseInt(Math.random()*3-5);
    this.color = "rgb("+parseInt(Math.random()*256)+","
        +parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";

}
Ball.prototype.r = 8;
Ball.prototype.draw = function(){
    cxt.beginPath();
    cxt.arc(this.x,this.y,this.r,0,Math.PI*2);
    cxt.fillStyle = this.color;
    cxt.fill();
};
Ball.prototype.jump = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.g;

    if(this.y >= sh -this.r){
        this.y = sh - this.r;
        this.vy *=-.75;
    }
};
