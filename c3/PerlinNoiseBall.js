class PerlinNoiseBall extends Ball{
    constructor(w,h,r){
        super(w,h,r)
        this.xoff = 0;
    }
      
    moveBall(){
        this.x = map(noise(this.xoff),0,1,0,width);
        this.xoff += 0.01;
    }
}