class RandomBall extends Ball{
    constructor(w,h,r){
        super(w,h,r)
    }
      
    moveBall(){
        this.x = map(random(),0,1,0,width);
    }
}