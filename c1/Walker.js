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
                if(!(this.x > windowWidth-this.rad))
                    this.x += this.rad;
                break;
            case 1:
                if (!(this.x < 0+this.rad))
                    this.x -= this.rad;
                break;
            case 2:
                if(!(this.y > windowHeight-this.rad))
                    this.y += this.rad;
                break;
            case 3:
                if (!(this.y < 0+this.rad))
                    this.y -= this.rad;
                break;    
        }
    }
}