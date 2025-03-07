let raqueteEsquerdaX = 20;
let raqueteEsquerdaY = 200;

let raqueteDireitaX = 380;
let raqueteDireitaY = 200;

let velocidadeRaquete = 2;
let alturaRaquete = 80;
let larguraRaquete = 10;

let pontuacaoEsquerda = 0;
let pontuacaoDireita = 0;

let bolaPosX = 200;
let bolaPosY = 200;
let bolaVelocidadeX = 0;
let bolaVelocidadeY = 0;
let tamanhoBola = 10;

function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER);

  noLoop();
}

function draw() {
  background(0);

  rect(raqueteEsquerdaX, raqueteEsquerdaY, larguraRaquete, alturaRaquete);
  rect(raqueteDireitaX, raqueteDireitaY, larguraRaquete, alturaRaquete);

  circle(bolaPosX, bolaPosY, tamanhoBola);

  text(pontuacaoEsquerda, width * 0.25, height * 0.1);
  text(pontuacaoDireita, width * 0.75, height * 0.1);

  bolaPosX += bolaVelocidadeX;
  bolaPosY += bolaVelocidadeY;

  let colisaoEsquerdaEsquerda = raqueteEsquerdaX - larguraRaquete / 2 - tamanhoBola / 2;
  let colisaoEsquerdaDireita = raqueteEsquerdaX + larguraRaquete / 2 + tamanhoBola / 2;
  let colisaoEsquerdaTopo = raqueteEsquerdaY - alturaRaquete / 2 - tamanhoBola / 2;
  let colisaoEsquerdaBase = raqueteEsquerdaY + alturaRaquete / 2 + tamanhoBola / 2;

  if (
    bolaPosX >= colisaoEsquerdaEsquerda &&
    bolaPosX <= colisaoEsquerdaDireita &&
    bolaPosY >= colisaoEsquerdaTopo &&
    bolaPosY <= colisaoEsquerdaBase
  ) {
    bolaVelocidadeX = -bolaVelocidadeX;
    bolaVelocidadeY = (bolaPosY - raqueteEsquerdaY) / 20;
  }

  let colisaoDireitaEsquerda = raqueteDireitaX - larguraRaquete / 2 - tamanhoBola / 2;
  let colisaoDireitaDireita = raqueteDireitaX + larguraRaquete / 2 + tamanhoBola / 2;
  let colisaoDireitaTopo = raqueteDireitaY - alturaRaquete / 2 - tamanhoBola / 2;
  let colisaoDireitaBase = raqueteDireitaY + alturaRaquete / 2 + tamanhoBola / 2;

  if (
    bolaPosX >= colisaoDireitaEsquerda &&
    bolaPosX <= colisaoDireitaDireita &&
    bolaPosY >= colisaoDireitaTopo &&
    bolaPosY <= colisaoDireitaBase
  ) {
    bolaVelocidadeX = -bolaVelocidadeX;
    bolaVelocidadeY = (bolaPosY - raqueteDireitaY) / 20;
  }

  if (bolaPosX < 0) {
    pontuacaoDireita += 1;
    resetarBola();
  } else if (bolaPosX > width) {
    pontuacaoEsquerda += 1;
    resetarBola();
  }

  if (bolaPosY < 0 || bolaPosY > height) {
    bolaVelocidadeY = -bolaVelocidadeY;
  }

  let teclaS = keyIsDown(83);
  let teclaW = keyIsDown(87);
  let movimentoEsquerda = 0;

  if (teclaS) {
    movimentoEsquerda += velocidadeRaquete;
  }
  if (teclaW) {
    movimentoEsquerda -= velocidadeRaquete;
  }

  raqueteEsquerdaY = constrain(
    raqueteEsquerdaY + movimentoEsquerda,
    alturaRaquete / 2,
    height - alturaRaquete / 2
  );

  let setaBaixo = keyIsDown(DOWN_ARROW);
  let setaCima = keyIsDown(UP_ARROW);
  let movimentoDireita = 0;

  if (setaBaixo) {
    movimentoDireita += velocidadeRaquete;
  }
  if (setaCima) {
    movimentoDireita -= velocidadeRaquete;
  }

  raqueteDireitaY = constrain(
    raqueteDireitaY + movimentoDireita,
    alturaRaquete / 2,
    height - alturaRaquete / 2
  );

  if (!isLooping()) {
    text('Clique para começar', width / 2, height / 2 - 20);
  }
}

function resetarBola() {
  bolaPosX = width / 2;
  bolaPosY = height / 2;
  bolaVelocidadeX = random([-3, 3]);
  bolaVelocidadeY = random([-1, 1]);
}

function mousePressed() {
  if (!isLooping()) {
    resetarBola();
    loop();
  }
}
