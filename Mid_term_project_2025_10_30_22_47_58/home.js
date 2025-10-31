let textarray = ["w", "e", "l", "c", "o", "m", "e", "t", "o", "m", "y", "s", "k", "e", "t", "c", "h", "b", "o", "o", "k"]
let xval=50
let yval=500


let xcanvas = 20
let ycanvas = 350

function setup(){
  createCanvas(windowWidth,1500)

  //c.position(20,0)
}

function draw() {
  background(220);
  
 
  
  for (let x=0 ; x<xval ; x++) {
    for (let y=0 ; y<yval ; y++) {
      
      index=x
      textSize(15)
      
      text(textarray[index], x*62,y*50)
      
    }
  }
  
  
}














//Sketch The Frog

function thefrog(p) {
  
  let x = (160);
  let y = (190);
  let diameter = 50;

  let x2=(440)
  let y2=(190)

  let col1 = ('#F4ADF1')
  let col2 = ('#CEEAD6')
  let col3 =  ('#FFFFFF')

  
  p.setup = function () {
    let c = p.createCanvas(600,600)
    c.position(620,ycanvas+500)  
    p.createCanvas(600, 600);
    p.ellipse(200,200);
  };
    p.draw = function () {
    p.background (col2);
    p.strokeWeight(10);
    
    p.fill(col3)
    p.ellipse(x,y,diameter);
    p.ellipse(x2,y2,diameter);
    p.line(p.pmouseX,p.pmouseY,p.pmouseX,p.pmouseY) 
    
  let i = p.map(p.mouseX,0,400,0,400)
  p.fill(col1)
  p.ellipse(300,400,400,i)
    
  };
}

// Run first p5 instance
new p5(thefrog);


//Sketch Floating Flower

function floatingflower(p) {
  
  let xVal = []
  let yVal = []
  let maxNum = 400
  let x=300
  let y=200

  
  p.setup = function () {
    let c = p.createCanvas(1200,600)
    c.position(xcanvas,ycanvas)  
     for(let i=0 ; i<maxNum ; i++){
      xVal[i]=0
      yVal[i]=0
    }
  };
  p.draw = function () {
    p.background('#016cab');
    
    x = p.lerp(x,p.mouseX, 0.005)
    y = p.lerp(y,p.mouseY, 0.005)
    h = p.lerp (0,500,0.5)
    
    for (let i=0 ; i<maxNum ; i++){
    xVal[i]=xVal[i+1]
    yVal[i]=yVal[i+1]
      }
    xVal[maxNum-1] = x
    yVal[maxNum-1] = y
    
     p.fill('#015249')
     p.stroke('#015249')
     p.ellipse (x,y,200,20)
     p.fill('#c59caf')
     p.stroke('#c59caf')
     p.ellipse (x,y-20,20,40)
     p.fill('#e8b31a')
     p.stroke('#e8b31a')
     p.ellipse (x,y-40,20/3,40/2)
    
    for (let i=0 ; i<maxNum ; i++){
     p.fill('#e9b0f5')
     p.translate(0.7,09)
     p.ellipse (x+p.random(0,10),y+p.random(0,400),60,10)
   
    p.fill('#e8b31a')
    p.stroke('#e8b31a')
    p.translate(0.7,09)
    p.frameRate (10)
    p.ellipse (x+p.random(0,10),y+p.random(0,400),60,5)
    }
  };
}

// Run first p5 instance
new p5(floatingflower);


// Sketch squearecircle.

function squarecircle(p) {
  
   p.setup = function () {
    let c = p.createCanvas(600,500)
    c.position(xcanvas,ycanvas+600 ) 
  };
  
  p.draw = function () {
    p.background('#4285F4');
    p.noStroke()
    p.ellipse(p.mouseX,p.mouseY,60,60);
    if (p.mouseIsPressed) {
    p.background('#FBBC04')
    p.rect(p.mouseX -30,p.mouseY -30,60,60)
    }
  
}
}

new p5(squarecircle);