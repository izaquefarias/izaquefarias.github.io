//variaveis do players

let comprimento = 10;
let altura = 60;

let xTime1 = [100, 428];
let yTime1 = [215, 215];

let xTime2 = [260, 585];
let yTime2 = [215, 215];


function movimentaTime1(){
  if(keyIsDown("87")){
    yTime1[0] -= 5;
    yTime1[1] -= 5;
  }
  if(keyIsDown("83")){
    yTime1[0] += 5;
    yTime1[1] += 5;
  }
}

function movimentaTime2(){
  if(keyIsDown(UP_ARROW)){
    yTime2[0] -= 5;
    yTime2[1] -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yTime2[0] += 5;
    yTime2[1] += 5;
  }
}

function mostraTime1(){
  for (let i = 0; i < 2; i++){
    noStroke();
    fill(255,0,0);
    rect(xTime1[i], yTime1[i], comprimento, altura);
  }  
}

function mostraTime2(){
  for (let i = 0; i < 2; i++){
    noStroke();
    fill(0,255,0);
    rect(xTime2[i], yTime2[i], comprimento, altura);
  }  
}

let acertouChute = false;

function verificaChute(x, y){
  acertouChute = collideRectCircle(x, y, comprimento, altura, xBola, yBola, raio);
  if(acertouChute)
    velocidadeXBola *= -1;
    somChutePlay();
    
}

function somChutePlay(){
  if(acertouChute)
    somChute.play();
}


function acaoPlayers(){
  movimentaTime1();
  movimentaTime2();
  mostraTime1();
  mostraTime2();
  verificaChute(xTime1[0], yTime1[0]);
  verificaChute(xTime1[1], yTime1[1]);
  verificaChute(xTime2[0], yTime2[0]);
  verificaChute(xTime2[1], yTime2[1]);
}

