
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;

function preload(){
    backgroundImg = loadImage("circuit board.jpg");


}

function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,390,400,10);
    //ground.shapeColor("blue");
   
}

function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX,mouseY,random(10,50),random(10,50)));
    
       }
        // Every time a mouse press occures create a new box.
      
    }

 
function draw() {
    // Draw all the elements including the slider that 
    background(backgroundImg);
    ground.display();
    for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
}
   
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    textSize(25)
    fill(120)
    text("GRAVITY:"+fVal,200,380);
    // Use a for loop to show all the boxes
   
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {
    // add options such as friction and restitution. Experiment with the values
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
    
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill(0);
        rect(0, 0, this.w, this.h);
        pop();
    }
    }
