let textarray = [  "m","y"," ","n","a","m","e"," ","i","s"," ","J","a","y","s","o","n",
  "I"," ","s","e","e"," ","t","r","e","e","s",
  "I"," ","d","a","n","c","e",
  "I"," ","s","l","e","e","p"," ","s","e","e","i","n","g"," ","t","h","e"," ","r","o","o","f",
  "I"," ","a","m"," ","f","r","o","m"," ","C","o","l","o","m","b","i","a",
  "I"," ","l","i","k","e"," ","v","a","n","i","l","l","a"," ","i","c","e"," ","c","r","e","a","m",
  "I"," ","k","i","s","s",
  "I"," ","l","i","k","e"," ","C","i","t","i","z","e","n"," ","K","a","n","e",
  "I"," ","l","i","k","e"," ","m","y"," ","c","a","t",
  "I"," ","w","a","s","h"," ","m","y"," ","h","a","i","r"," ","e","v","e","r","y"," ","d","a","y",
  "I"," ","s","i","n","g"," ","b","a","d",
  "I"," ","r","u","n",
  "I"," ","s","u","f","f","e","r"," ","f","r","o","m"," ","m","i","g","r","a","i","n","e",
  "I"," ","f","e","a","r"," ","p","l","a","n","e","s",
  "I"," ","l","o","v","e"," ","K","i","s","h","i"," ","B","a","s","h","i",
  "I"," ","d","o","n","'","t"," ","l","i","k","e"," ","y","o","g","a"," ","b","e","c","a","u","s","e"," ","o","f"," ","m","y"," ","t","u","m","m","y",
  "I"," ","h","a","t","e"," ","A",".","I",
  "I"," ","l","o","v","e"," ","A",".","I",
  "I"," ","l","o","v","e"," ","F","e","l","l","i","n","i",
  "I"," ","h","a","v","e"," ","m","a","n","y"," ","f","e","a","r","s"]
let xval=90
let yval=90


let xcanvas = 321
let ycanvas = 321

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;



function preload() {
    img1 = loadImage('Images/1.png');
    img2 = loadImage('Images/2.png');
    img3 = loadImage('Images/3.png');
    img4 = loadImage('Images/4.png');
    img5 = loadImage('Images/5.png');
    img6 = loadImage('Images/6.png');
    img7 = loadImage('Images/7.png');
    img8 = loadImage('Images/8.png');
    img9 = loadImage('Images/9.png');
    img10 = loadImage('Images/10.png');
    img11= loadImage('Images/11.png');
    img12 = loadImage('Images/12.png');
    img13 = loadImage('Images/13.png');
    img14 = loadImage('Images/14.png');
    img15 = loadImage ('Images/15.png');
    img16 = loadImage ('Images/16.png');
    img17 = loadImage ('Images/17.png');
    img18= loadImage ('Images/18.png');
    
}

function setup(){
  createCanvas(windowWidth,windowHeight)


  //c.position(20,0)
}

function draw() {
  background(220); 
  
 

  let imagesarray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18];
  let imgRandom = random(imagesarray); 

  for (let x=0 ; x<xval ; x++) {
    for (let y=0 ; y<yval ; y++) {
      
      index=x
      textSize(15)
      
      text(textarray[index], x*20,y*50)
      
    }
  }
  
  image(img1,windowWidth/2,windowHeight/2,499,373)

  frameRate(10)

  if (mouseIsPressed) {
    image(imgRandom,windowWidth/2,windowHeight/2,499,373)
  }
    else{
    image(img1,windowWidth/2,windowHeight/2,499,373)
    }
  
  
}













