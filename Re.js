class Re   {
    constructor (x,y,height,width){
      var  options = {
        isStatic: false,
          restution:1,
        friction:0.1,
        density:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        
      }
    }
    