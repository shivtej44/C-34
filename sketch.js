const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball,chain;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function setup(){
 canvas = createCanvas(1200,800);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(400,750,900,20);
 ball = new Ball(200,500,100);
 chain = new Chain(ball.body,{x:500,y:250});
 box1= new Box(600,650,50,50);
 box2= new Box(600,600,50,50);
 box3= new Box(600,550,50,50);
 box4= new Box(600,500,50,50);
 box5= new Box(600,450,50,50);
 box6= new Box(600,400,50,50);
 box7= new Box(600,350,50,50);
 box8= new Box(700,650,50,50);
 box9= new Box(700,600,50,50);
 box10= new Box(700,550,50,50);
 box11= new Box(700,450,50,50);
 box12= new Box(700,400,50,50); 
 box13= new Box(700,350,50,50);
 box14= new Box(800,650,50,50);
 box15= new Box(800,600,50,50);
 box16= new Box(800,5500,50,50);
 box17= new Box(800,500,50,50);
 box18= new Box(800,450,50,50);
 box19= new Box(800,400,50,50);
 box20= new Box(800,350,50,50);

}

function draw(){
 background("lightblue");
 Engine.update(engine);

 ground.display();
 ball.display();
 chain.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
}


