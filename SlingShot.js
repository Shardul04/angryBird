class SlingShot{
    constructor(bodyA,PointB){
        var option = {
            bodyA:bodyA,
            pointB:PointB,
            stiffness:0.04,
            length:10
        }
    this.pointB = PointB;
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
    }  
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        push();
        strokeWeight(4);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
      pop();
        }
}
}