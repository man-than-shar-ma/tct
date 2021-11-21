class Ball{
    constructor(w,h,r){
        this.x = floor(random(w));
        this.y = h;
        this.rad = r;
    }

    createBall(){
        fill(0);
        stroke(0);
        circle(this.x,this.y,this.rad);
    }
      
    moveBall(){
    }
}