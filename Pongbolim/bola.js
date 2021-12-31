//variaveis da bola

let xBola = 350;
let yBola = 245;
let diametro = 13;
let raio = diametro/2;

let velocidadeXBola = 5;
let velocidadeYBola = 5;


function posicaoInicialBola(){
  fill(248,248,255);
  circle(xBola, yBola, diametro);
  
}

function moveBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisao(){
  if(xBola + raio > 667 || xBola - raio < 30){
    velocidadeXBola *= -1; 
  }
  
  if(yBola + raio > 482 || yBola - raio < 18){
    velocidadeYBola *= -1;
  }
}

function resetaPosicaoBola(){
  xBola = 350;
  yBola = 245;
}


function acaoBola(){
  posicaoInicialBola();
  moveBola();
  verificaColisao();
}