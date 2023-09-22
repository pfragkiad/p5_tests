class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(1,0);
        this.vel.mult(random(3))
        
    }

    update() {
        // this.pos.x += random(-1, 1);
        // this.pos.y += random(-1, 1)
        this.pos.add(this.vel)
    }

    show() {
        stroke(255)
        strokeWeight(2)
        fill(255,100,100)
        //point(this.pos.x, this.pos.y)
        ellipse(this.pos.x,this.pos.y,32)
    }
}