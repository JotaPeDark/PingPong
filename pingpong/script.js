
let xBola = 300;
let yBola = 200;
let diametro = 40;
let VxBola = 10;
let VyBola = 10;
let raio = diametro / 2;
let xRaquete = 10;
let yRaquete = 150;
let compRaquete = 10;
let largRaquete = 100;

function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    circle(xBola, yBola, diametro);
    
    xBola += VxBola;
    yBola += VyBola;

    if(xBola + raio > 600 || xBola - raio < 0){
        VxBola *= -1;
    }

    if(yBola + raio > 400 || yBola -  raio < 0){
        VyBola *= -1;
    }

    rect(xRaquete, yRaquete, compRaquete, largRaquete);

    if (keyIsDown(UP_ARROW) === true) {
        yRaquete -= 10;
    }
    
    if (keyIsDown(DOWN_ARROW) === true) {
        yRaquete += 10;
    }

    

  }