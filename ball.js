class Ball{
    constructor(x, y, radius){
        var Property = {
            density: 1,
            frictionAir: 0.005
        };
    this.body = MBodies.circle(x, y, radius, Property);
    this.radius = radius;
    MWorld.add(world, this.body);
    };
 display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     strokeWeight(6);
     stroke("blue");
     ellipseMode(RADIUS);
     ellipse(0, 0, this.radius, this.radius);
     noFill();
     noStroke();
     pop();
 }
};