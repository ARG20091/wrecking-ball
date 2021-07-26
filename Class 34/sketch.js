const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
//var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10, Block11, Block12, Block13, Block14, Block15, Block16, Block17, Block18, Block19, Block20
var blocks = []
var ball
var rope
function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 600, 1200, 20)
    // Block1 = new Block(900, 100, 70, 70);
    // Block2 = new Block(900, 100, 70, 70);
    // Block3 = new Block(900, 100, 70, 70);
    // Block4 = new Block(900, 100, 70, 70);
    // Block5 = new Block(900, 100, 70, 70);
    // Block6 = new Block(900, 100, 70, 70);
    // Block7 = new Block(800, 100, 70, 70);
    // Block8 = new Block(800, 100, 70, 70);
    // Block9 = new Block(800, 100, 70, 70);
    // Block10 = new Block(800, 100, 70, 70);
    // Block11 = new Block(800, 100, 70, 70);
    // Block12 = new Block(800, 100, 70, 70);
    // Block13 = new Block(700, 100, 70, 70);
    // Block14 = new Block(700, 100, 70, 70);
    // Block15 = new Block(700, 100, 70, 70);
    // Block16 = new Block(700, 100, 70, 70);
    // Block17 = new Block(700, 100, 70, 70);
    // Block18 = new Block(700, 100, 70, 70);
    // Block19 = new Block(700, 100, 70, 70);
    // Block20 = new Block(700, 100, 70, 70);
    ball = new Ball(200,200,80,80)
    rope = new Rope(ball.body,{x:500,y:50})
    for(var i=0;i<6;i++){

        
        blocks.push(new Block(600,100,70,70))
        blocks.push(new Block(670,100,70,70))
        blocks.push(new Block(750,100,70,70))
        }
}

function draw() {
    background("grey");
    ground.display();
    Engine.update(engine)
    // Block1.display();
    // Block2.display();
    // Block3.display();
    // Block4.display();
    // Block5.display();
    // Block6.display();
    // Block7.display();
    // Block8.display();
    // Block9.display();
    // Block10.display();
    // Block11.display();
    // Block12.display();
    // Block13.display();
    // Block14.display();
    // Block15.display();
    // Block16.display();
    // Block17.display();
    // Block18.display();
    // Block19.display();
    // Block20.display();


    ball.display();
    rope.display();
    for(var i=0;i<blocks.length;i++){

        blocks[i].display();
        
        }

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }



