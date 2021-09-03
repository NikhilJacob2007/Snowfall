
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var snow, snow2, snow3;

var backgroundImg;

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world

  snow = new Snow(100, 50);
  snow2 = new Snow(200, 50);
  snow3 = new Snow(600, 30);


}

function preload() {

  backgroundImg = loadImage("snow3.jpg");

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  snow.display();
  snow2.display();
  snow3.display();

  drawSprites();

}