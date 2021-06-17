class Box{
 constructor(x,y,width,height){
  var options = {
   density:1.0,
   friction:1.0,
   restitution:0.8
  }
  this.body = Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  World.add(world,this.body);

 }

 display(){
   var pos = this.body.position;
   var ang = this.body.angle;
   
   push();
   translate(pos.x,pos.y);
   rotate(ang);
   rectMode(CENTER);
   fill("yellow");
   stroke("green");
   rect(0,0,this.width,this.height);
   pop();

 }



}