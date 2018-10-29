var myTable;
var myImage;
var myText;

function preload() {
  myTable = loadTable('assets/USMortalityman.csv', 'csv', 'header')
  //myImage = loadImage('./assets/titulo41000.png')
}
var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight)


  var tableObject = myTable.getObject();

  for (var rowIndex in tableObject) {
    var row = tableObject[rowIndex];

    var x = random(width);
    var y = random(height);
    var d = row.Rate;
    var l = row.Cause;

    var newBall = new Ball(x, y, d, l)
    balls.push(newBall);

  }

}

var myDelta = 0;

function draw() {

  background(0)



  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
    balls[j].click();

  }

  //image(myImage,50,50,myImage.width/6,myImage.height/6)
  push()
    var myText = 'Most men in the urban areas of US died because of a heart attack'
    fill(255)
    textFont('Arial')
    textSize(25)
    textStyle(BOLD)
    text(myText,50,100)
  pop()

  push()
    var myText2 = 'Pass the mouse over the diseases to delete all of them'
    fill(102,97,97)
    textFont('Arial')
    textSize(20)
    text(myText2,50,125)
  pop()
}

function mouseWheel(event) {
  myDelta = abs(event.deltaY);


}

function Ball(_x, _y, _diameter, _label) {
  this.x = _x;
  this.y = _y;
  this.d = _diameter;
  this.label = _label;
  this.color = 'red';

  this.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  this.display = function() {
    fill(this.color)
    ellipse(this.x, this.y, this.d);
    fill(255)
    noStroke()
    text(this.label, this.x, this.y)
  }

  this.click = function() {

    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 40) {
      this.color = (0);
      this.label = 'disease not found'

    }
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
