class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.bloc = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos= this.body.position;
        image(this.bloc,pos.x,pos.y,this.width,this.height);
      }
      else{
        push();
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        World.remove(world,this.body);
        pop();
      }
  
        

      // rectMode(CENTER);
      // rect(pos.x,pos.y,this.width, this.height);
    }
}