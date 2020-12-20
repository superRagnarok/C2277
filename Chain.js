class Chain{
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);

    }
display(){
    var posA = this.chain.bodyA.position;
    var posB = this.chain.bodyB.position;
    stroke(0);
    strokeWeight(3);
    line(posA.x,posA.y,posB.x,posB.y);
}
}