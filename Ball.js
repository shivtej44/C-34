class Ball{
 constructor(x,y,r){
  var options = {
   frictionAir:0.005,
   density:1.0,
  }
  this.body = Bodies.circle(x,y,r,options);
  this.radius = r;
  World.add(world,this.body);

 }

 display(){
    var pos = this.body.position;
    var ang = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    ellipseMode(CENTER);
    fill("green");
    stroke("green");
    ellipse(0,0,this.radius,this.radius);
    pop();
 }



}