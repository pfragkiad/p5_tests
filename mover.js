class Mover
{
    constructor(x,y)
    {
        this.pos =  createVector(x,y)
        this.vel = p5.Vector.random2D()
        this.vel.mult(random(3))
        this.acc = p5.Vector.random2D()
        this.acc.setMag(0.01)
    }

    update()
    {
        //this.acc = p5.Vector.random2D()
        let mouse = createVector(mouseX,mouseY)
        this.acc = p5.Vector.sub(mouse, this.pos)
        this.acc.setMag(4)

        this.vel.add(this.acc)
        this.vel.limit(10)
        this.pos.add(this.vel)
    }

    show()
    {
        stroke(255)
        strokeWeight(2)
        fill(255,100)
        ellipse(this.pos.x, this.pos.y, 32)
    }

    
}