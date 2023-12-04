function setup() {
  createCanvas(400, 400)
  textAlign(CENTER, CENTER)
  textSize(48)
}

function draw() {
  background(220)
  
  let highS = second() / 10
  let highS_int = int(highS)
  let lowS = second() % 10
  
  fill(0)
  text(highS, width / 2, height / 4)
  
  fill(255, 0, 0)
  text(highS_int, width /2, height / 2)
  text(lowS, width / 2, height * 3 / 4)
}
