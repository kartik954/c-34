class Floor{
    constructor(x, y, width, height){
        var Property = {
            restitution: 0.5,
            density: 1,
            friction: 1
        };
    this.body = MBodies.rectangle(x, y, width, height, Property);
    this.width = width;
    this.height = height;
    MWorld.add(world, this.body);
    };
 display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     strokeWeight(5);
     stroke("black");
     fill("red");
    rect(0, 0, this.width, this.height);
    noFill();
    noStroke();
    pop();
 }
};