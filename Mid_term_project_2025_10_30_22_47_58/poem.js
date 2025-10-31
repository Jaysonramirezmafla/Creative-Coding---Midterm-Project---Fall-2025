let textarray = ["T","h","e"," ","w","a","t","e","r"," ","s","t","i","r","s",",",
  "s","c","a","l","e","s",","," ",
  "l","i","g","h","t","s",","," ",
  "g","l","i","m","m","e","r","s",","," ",
  "l","i","f","e"," ","t","h","a","t"," ","m","o","v","e","s","."]
let xval=58
let yval=54


let xcanvas = 20
let ycanvas = 350

function setup(){
  createCanvas(windowWidth,900)

  //c.position(20,0)
}

function draw() {
  background(220);
  
 
  
  for (let x=0 ; x<xval ; x++) {
    for (let y=0 ; y<yval ; y++) {
      
      index=x
      textSize(15)
      
      text(textarray[index], x*20,y*50)
      
    }
  }
}

  //Sketch Fish Party

function fishparty(p) {
  
let dot1 = [];
let dot2 = [];
let d1;
let d2;

class Dot {
  
  constructor(){
    this.x=-4
    this.t=1
    this.col = p.color(p.random(255), p.random(225), p.random(255), 150);
    this.generated = false;
  }
  
  steps(){
    this.t += 0.001 
    this.y = p.noise(this.t)*p.height
    this.x +=0.1
   
  }
  
  display(){
    p.fill (this.col)
    p.ellipse(this.x,this.y,40,20)
    p.fill (255,255,255,20)
    p.ellipse(this.x+12,this.y,5,5)
    p.push()
    p.rotate(0.040)
    p.ellipse (this.x+11,this.y+5,10,20)
    p.ellipse (this.x+8,this.y-11,15,10)
    p.pop()
    p.ellipse (this.x-20,this.y,10,35)
  }
}

  
  p.setup = function () {
    
    let c = p.createCanvas(800,600)
    c.position(700,100)  
     
  for (let i=0 ; i<2 ; i++) {
    dot1[i] = new Dot()
    dot2[i] = new Dot() 

  };
}
    p.draw = function () {
    p.noStroke()
    p.fill (0,51,102,100)
    p.rect(0,0,p.width,p.height)
  
  for (let i=0 ; i<dot1.length ; i++){
    dot1[i].display()
    dot1[i].steps()
  
  
  if (!dot1[i].generated && dot1[i].x > p.width/20){
  
  dot1.push(new Dot())
  dot1[i].generated = true  
    
  };
}

}
}

// Run first p5 instance
new p5(fishparty);