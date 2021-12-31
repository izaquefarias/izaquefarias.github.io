

function setup() {
  createCanvas(700, 500);
  somTrilha.loop();
}

function draw() {
  background(0,100,0);
  mostraCampo();
  acaoBola();
  acaoPlayers();
  marcaGolTime1();
  marcaGolTime2();
  incluiPlacar();

}

let golsTime1 = 0;
let golsTime2 = 0;


function marcaGolTime1(){
  if(xBola + raio > 669 && yBola > 198 && yBola < 304){
    golsTime1 += 1;
    somGol.play();
    resetaPosicaoBola();
  }
}

function marcaGolTime2(){
  if(xBola - raio < 30 && yBola > 198 && yBola < 304){
    golsTime2 += 1;
    somGol.play();
    resetaPosicaoBola();
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,0,0));
  rect(150, 10, 40, 20);
  fill(0);
  text(golsTime1, 170, 26);
  fill(color(0,255,0));
  rect(450, 10, 40, 20);
  fill(0);
  text(golsTime2, 470, 26);
}


  
  