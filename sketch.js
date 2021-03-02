var gameState=0;
var contestantCount,database;
var quiz,question,contestant;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

quiz=new Quiz();
quiz.getState();
quiz.start();

}


function draw(){
  background("pink");
  if(gameState===1){
    quiz.play();
  }
  
  
  
}
