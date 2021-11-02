class Walker{
    constructor(width,height){
        this.x = width/2;
        this.y = height/2;
    }

    display(){
        stroke(255);
        strokeWeight(1);
        point(this.x,this.y);
    }

    step(){
        let ch = floor(random(4));
        switch(ch){
            case 0:
                this.x++;
                break;
            case 1:
                this.x--;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.y--;
                break;    
        }
    }
}