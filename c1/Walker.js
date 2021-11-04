class Walker{
    
    constructor(w,h,r){
        this.x = w/2;
        this.y = h/2;
        this.rad = r;
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
                if(!(this.x > width-this.rad))
                    this.x += this.rad;
                break;
            case 1:
                if (!(this.x < 0+this.rad))
                    this.x -= this.rad;
                break;
            case 2:
                if(!(this.y > height-this.rad))
                    this.y += this.rad;
                break;
            case 3:
                if (!(this.y < 0+this.rad))
                    this.y -= this.rad;
                break;    
        }
    }
}