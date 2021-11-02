class Walker{
    constructor(width,height,rad){
        this.x = width/2;
        this.y = height/2;
        this.rad = rad;
    }

    display(can,col){
        can.stroke(col);
        can.strokeWeight(this.rad);
        can.point(this.x,this.y);
    }

    step(){
        let ch = floor(random(4));
        switch(ch){
            case 0:
                this.x += this.rad;
                break;
            case 1:
                this.x -= this.rad;
                break;
            case 2:
                this.y += this.rad;
                break;
            case 3:
                this.y -= this.rad;
                break;    
        }
    }
}