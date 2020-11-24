class Ground{
    constructor(x, y, width, height){
        var Property = {
            isStatic: true
        };
    this.body = MBodies.rectangle(x, y, width, height, Property);
    this.width = width;
    this.height = height;
    MWorld.add(world, this.body);
    }
 display(){
     var pos = this.body.position;
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    noFill();
 }
}