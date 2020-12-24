class plinko{
    constructor(x,y,r){
        this.r=r;
        var opt={
            isStatic:true,
            friction:0
        }
        this.body=Bodies.circle(x,y,r/2,opt);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);

    }
}