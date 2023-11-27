let button;

function setup() {
  createCanvas(400, 400);
  button = createButton("Meep!");
  button.mouseClicked(moveButton);
  button.size(200, 100);
  button.position(10, 10);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "48px");
} 

function draw() { 
  background(220);
  /*button.style("font-size",
               map(mouseX, 0, width, 0, 128) + "px");*/
}

function moveButton() {
  button.position(random(width), random(height));
  console.log("Meep!");
}