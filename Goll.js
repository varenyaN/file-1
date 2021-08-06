class Goll  {
    constructor (x,y,height,width){
        this.image = loadImage("goal.png");
      var  options = {
        isStatic: true
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,  this.width, this.height);
      }
    }
    