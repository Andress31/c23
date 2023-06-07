//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var motor;
var world;
var botao;
var solo, parado;

var helice;

var bola
function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    //criar os corpos
bola = Bodies.circle(300,10,30);
World.add(mundo,bola);
  solo_options = {isStatic:true}
solo = Bodies.rectangle(300,390,600,20, solo_options);
World.add(mundo, solo);
  //cria a helice
helice = Bodies.rectangle(300,300,100,20, solo_options);
World.add(mundo, helice)
    //é aqui que coloca a imagem
   botao = createImg ("cima.jpg");
   botao.position(500,50);
   botao.size(30,30);
   botao.mouseClicked(vForce)
   
   ellipseMode(RADIUS)
    rectMode(CENTER);
  }
  
var angulo = 0;
function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);
  //faz o retângulo para mostrar o corpo do solo
 fill ("blue")
 rect (solo.position.x, solo.position.y, 600,20)
 
 Body.rotate(helice, angulo);
 //é aqui que faz a helice girar
push ();
translate (helice.position.x, helice.position.y);
 rotate(angulo)
  rect (0, 0, 100,20)
pop ()
 
angulo+=0.01;
//aumenta o valor do ângulo


  //faz a ellipse para mostrar o corpo da bola
 fill ("red");
ellipse (bola.position.x, bola.position.y,30);
}

//é aqui que adiciona a função para aplicar força na bola












function vForce (){
Body.applyForce(bola, {x:0,y:0}, {x:0, y:-0.1})
}