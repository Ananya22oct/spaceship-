//declaring variable and creating objects
var ship1,ship2;
var bgImage;

var score=0;
var score1=0;

var allAsteroids=[];
const number=30;

var gameState="PLAY";


function preload(){
  //loading the background image
  bgImage=loadImage("images/background.jpg");
}

function setup(){
//creating the canvas
createCanvas(400,400);

    //creating two ship object
    ship1=new Ship(100);
    ship2=new Ship(300);

   //creating an array of asteroids object
    for(var i=0; i<number; i++){
        allAsteroids.push(new Asteroids());
    }
}

function draw(){
    background(bgImage);

    //gameState change play to end 
    if(score===5 || score1===5){
        gameState="END";
        textSize(25);
        fill("yellow");
        stroke("yellow");
        text("GAME OVER",150,200);
        textSize(20);
        //restart the game
        text("press the space key to restart the game",30,300)
        resetShip1();
        resetShip2();
    }

    //reseting the game
    if(keyDown("space") && gameState=="END"){
        gameState="PLAY";
        score=0;
        score1=0;
    }

    //increasing the score of ship1
    if(ship1.y===20){
        ship1.x=100;
        ship1.y=350;
        score++;
    }

    //increasing the score of ship2
    if(ship2.y===20){
        ship2.x=300;
        ship2.y=350;
        score1++;
    }

    //displaying the ship
    ship1.display();
    ship2.display();

    //displaying the score
    stroke("green");
    fill("green");
    textSize(18);
    text("score:" + score,80,390);
    text("score:" + score1,280,390);

    //calling the asteroid function
    updateAsteroids();

    //giving movement to both the ship
    if(keyDown("up")){
        ship1.y=ship1.y-15
    }

    if(keyDown("down")){
        ship1.y=ship1.y+15
    }

    if(keyDown("w")){
        ship2.y=ship2.y-15
    }
    
    if(keyDown("s")){
        ship2.y=ship2.y+15
    }

}


function updateAsteroids(){
    //displaying the countinous movement of asteroids from left to right and right to left
    for(var i=0; i<allAsteroids.length; i++){
        allAsteroids[i].update();
        allAsteroids[i].display();
        //collisoin between ship and asteroids 
        if(allAsteroids[i].hasHitShip(ship1)){
            resetShip1();
        }
        else if(allAsteroids[i].hasHitShip(ship2)){
            resetShip2();
        }
    }

}

function resetShip1(){
    ship1.x=100;
    ship1.y=350;
}

function resetShip2(){
    ship2.x=300;
    ship2.y=350;
}
 