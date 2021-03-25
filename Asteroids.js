class Asteroids{
    constructor(){
       //declaring the properties  
      this.r=20;
      this.resetAsteroids();
      this.image=loadImage("images/asteroid.png");
    }

    resetAsteroids(){
        //reseting the asteroids to the orignal position
     this.y=random(50,300);
     var spawnOnLeftSide=random(1)< 0.5;
     if(spawnOnLeftSide){
         this.x=random(-width,0);
         this.isGoingLeft=false;
     }
     else{
         this.x=random(width,width*2);
         this.isGoingLeft=true;
     }
     
    }

    update(){
    //update the movement of asteroids
     if(this.isGoingLeft){
         this.x--;
     }
     else{
         this.x++;
     }
     
     //calling the offScreen function and reseting the asteroids
     if(this.isOffScreen()){
        this.resetAsteroids();
     }
    }

    isOffScreen(){
       //allowing the continous movement of asteroids
        if(this.isGoingLeft && this.x<-10){
            return true;
        }
        else if(!this.isGoingLeft && this.x>405){
            return true;
        }
        return false;
    }

    hasHitShip(ship){
        //collision function
        if(dist(this.x,this.y,ship.x,ship.y)<this.r+ship.r){
            return true;
        }
         return false;
    }


    display(){
       //displaying the image of the asteroids
       image(this.image,this.x,this.y,this.r,this.r);

    }
}