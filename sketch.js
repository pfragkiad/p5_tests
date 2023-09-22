var xoff1 = 0
var xoff2 = 10000
var inc = 0.01
var start = 0

var x, y;

let walker;
let mover;

function setup() {
    createCanvas(500, 500)
    background(50,50,50)
    pixelDensity(1)
    
    //noiseDetail(5)

    //x = width/2; y = height/2;
    //pos = createVector(width/2,height/2)
    walker = new Walker(width/2,height/2)

    background(0)
    //noStroke()

    mover = new Mover(width/2,height/2)
}

function danceCircle() {

    background(50,50,50)
    //var x = random(width)
    var x = map(noise(xoff1), 0, 1, 0, width)
    var y = map(noise(xoff2), 0, 1, 0, width)
    xoff1 += 0.02
    xoff2 += 0.02


    ellipse(x, y, 20)

}

function movingXfunction() {
    stroke(255);
    noFill();
    var xoff = start
    beginShape();
    for (var x = 0; x < width; x++) {
        stroke(255)
        //point(x,random(height));

        var y = noise(xoff) * height
        vertex(x, y);

        xoff += inc
    }
    endShape();

    start += inc
}

function movingWindowSmoke() {
    var yoff = start

    loadPixels()

    for (var x = 0; x < width; x++) {
        var xoff = 0
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4

            var r = noise(xoff, yoff) * 255 // random(255)
            pixels[index] = r //r
            pixels[index + 1] = r //g
            pixels[index + 2] = r //b
            pixels[index + 3] = 255 //a

            xoff += inc
        }
        yoff += inc
    }
    updatePixels()

    start += inc
}


x
//learn
function randomWalker()
{
    background(50)
    fill(0,255,0)


    xIncr = 5

    //var r = floor(random(4))
    // switch(r)
    // {
    //     case 0: x+=xIncr; break
    //     case 1: x-=xIncr; break;
    //     case 2: y+=xIncr; break;
    //     case 3: y-=xIncr; break;
    // }
    sz = 20
    // if(x>=width) x=0;
    // else if (x<=-1) x=width-1;

    // if(y>=height) y=0;
    // else if (y<=-1) y=height-1;


    //circle(x,y,sz)
    circle(pos.x,pos.y,20)

    pos.x += random(-1,1)
    pos.y += random(-1,1)

    mover
}

function randomWalkerOop()
{
    walker.update();
    walker.show();


}

function randomLines()
{

    translate(width/2, height/2)

    //let v = createVector(-100,50)
    let v = p5.Vector.random2D()
    v.mult(random(50,100))

    strokeWeight(4)
    stroke(255, 50)
    line(0,0,v.x,v.y)
}

function moverWithAcceleration()
{
    mover.update()
    mover.show()
}

//at C# we have add/sub overrides!

var i=0;

function draw() {
    background(0)

    //moverWithAcceleration()

  
   // translate(width/2,height/2)
    //danceCircle()
    //movingXfunction()
    movingWindowSmoke()

    i++;

    if (i % 10 ==0)
    console.log(frameRate())

    //randomWalker();
    //randomWalkerOop();
    //randomLines()


    //noLoop()
}



