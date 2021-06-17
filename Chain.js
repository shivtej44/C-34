class Chain{
 constructor(bodyA,pointB){
 var options = {
 bodyA:bodyA,
 pointB:pointB,
 stiffness:0.2,
 length:250
 }
 this.chain = Constraint.create(options);
 this.pointB = pointB
 World.add(world,this.chain);


 }

  display(){
   var posA =this.chain.bodyA.position;
   var posB = this.pointB;
   push();
    strokeWeight(4);
    stroke("black");
    line(posA.x,posA.y,posB.x,posB.y);
   pop();



  }



}