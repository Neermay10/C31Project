class Particles{
    constructor(x,y,r){
        var opt={
            friction:0,
            restitution:0.5,
            density:1
        }
        this.body=Bodies.circle(x,y,r/2,opt);
        this.r=r;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        fill(this.color);
        noStroke();
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}