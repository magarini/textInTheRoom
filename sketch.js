

let pg;
let pg2;
let pg3;


function setup() {
    
    let canvas=createCanvas(windowWidth,windowHeight,WEBGL)

  pg = createGraphics(1000, 1000);
  pg.textSize(50);

  pg2 = createGraphics(1000, 1000);
  pg2.textSize(50);

  pg3 = createGraphics(1000, 1000);
  pg3.textSize(50);

  




}

function draw(){
    background(255,240,245);
    orbitControl();


//text
push();
noStroke();
translate(200,-300,-500);
pg.text('this is our room / here we could write text', 0, 100);
texture(pg);
plane(800,800);
pop();

//text
push();
noStroke();
pg2.text('infront', 0, 100,-100);
texture(pg2);
translate(200,200,-200);
plane(800,800);

pop();

//text
push();
noStroke();
pg3.text('behind', 0, 100);
texture(pg3);
translate(800,-100,-300);
plane(800,800);

pop();




  //dwmatio
  fill(255,240,245);
  //translate(0,0,200);
  box(1500);
}
