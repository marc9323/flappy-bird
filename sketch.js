var bird;
var pipes = [];

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}
