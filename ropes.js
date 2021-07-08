class Rope
{
  constructor(pointA,bodyB) 
  {
    var options = {
      pointA:pointA,
bodyB:bodyB,
lenght:270,
stiffness:0.1
    };
    
    this.con = Matter.Constraint.create(options)
	 World.add(world,this.con)


  }

  show() {
   // let pos = this.body.position;

    push();
    stroke(2);
    fill('green');
    line(this.con.pointA.x,this.con.pointA.y,this.con.bodyB.position.x,this.con.bodyB.position.y);
    pop();
  }
}