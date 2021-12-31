
//variaveis quadriláteros 

let x = [30, 30, 30, 569, 636, 20, 670];
let y = [18, 113, 189, 113, 189, 198, 198];
let w = [640, 100, 34, 100, 34, 9, 9];
let h = [465, 274, 124, 274, 124, 107, 107];

function quadrilateros(){
  for(let i = 0; i < 7; i++){
    noFill();
    rect(x[i], y[i], w[i], h[i]);
    stroke(255,250,250);
    strokeWeight(3);
  }  
}

//linha central

function linhaCentral(){
  line(350, 20, 350, 480);
  stroke(255,250,250);
  strokeWeight(3);
}

// marca saida

let circuloX = [100, 595,350];

function marcaSaida(){
  for(let i = 0; i < 3; i++){
    fill(250,250,250);
    circle(circuloX[i], 249, 7);
  }
}
// arcos

let arcoX = [350, 130, 567, 32, 32, 668, 668];
let arcoY = [249, 249, 249, 20, 482, 21, 482];
let arcoW = [128, 60, 60, 23, 23, 23, 23];
let arcoH = [128, 108, 108, 23, 23, 23, 23];
let arcoInicio = [0, 3*3.14/2, 3.14/2, 0, 3*3.14/2, 3.14/2, 3.14];
let arcoFim = [2*3.14, 3.14/2, 3*3.14/2, 3.14/2, 0, 3.14, 3*3.14/2];

function areaCircular(){
  for(let i = 0; i < 7; i++){
      noFill();
      arc(arcoX[i], arcoY[i], arcoW[i], arcoH[i], arcoInicio[i], arcoFim[i]);
      stroke(255,250,250);
      strokeWeight(3);
  }
}


function mostraCampo(){
  quadrilateros();
  linhaCentral();
  marcaSaida();
  areaCircular();

  

}