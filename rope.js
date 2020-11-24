class Rope{
    constructor(BodyA, PointB){
        var Property = {
            bodyA: BodyA,
            pointB: PointB,
            stiffness: 1, 
            length: 250
        };
    this.rope = MConstraint.create(Property);
    this.pointB = PointB;
    this.bodyA =BodyA;
    MWorld.add(world, this.rope);
    };
 display(){
     var PointA = this.bodyA.position;
     var PointB = this.pointB;
     push();
     strokeWeight(5);
     stroke("black");
     line(PointA.x, PointA.y, PointB.x, PointB.y);
    noFill();
    noStroke();
    pop();
 }
};