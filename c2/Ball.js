class Ball{
    constructor(w,h,r,sp){
        this.x = floor(random(w));
        this.y = floor(random(h));
        this.rad = r;
        this.spx = sp;
        this.spy = sp;
    }

    createBall(){
        fill(0);
        stroke(0);
        circle(this.x,this.y,this.rad);
    }
      
    moveBall(){
        this.x += this.spx;
        this.y += this.spy;
    }
      
    checkWalls(){
        if(this.x < 0 - this.spx || this.x > width - this.spx){
          this.spx = -1 * this.spx;
        }
        if(this.y < 0 - this.spy || this.y > height - this.spy){
          this.spy = -1 * this.spy;
        }
    }
}