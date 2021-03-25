class Ship{
    constructor(x){
      //declaring the properties of the ship
      this.x=x;
      this.y=350;
      this.r=30;
      this.image=loadImage("images/SPACESHIP3.png");
    }

    display(){
      //displaying the image of spaceship
        imageMode(CENTER);
        image(this.image,this.x,this.y,30,40);
}

   
   

}