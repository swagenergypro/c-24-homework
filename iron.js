class iron{
	constructor(x,y,width,height){
		var options = {
			restitution : 0.8,
			friction : 3,
			density :30


		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width = width
        this.height = height
		this.body=Bodies.rectangle(x,y,width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			var angle = this.body.angle
            push()
			translate(pos.x, pos.y);
		    rotate(angle)
            rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("silver");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
       
			pop()
	}

}