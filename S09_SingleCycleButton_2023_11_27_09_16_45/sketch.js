const MODE_NAMES = ["Black Disc", "White Disc", "Red Bar"]

let cycleMode = 0

function setup() {
  createCanvas(500, 500)
  setupCycleButton()
  
  rectMode(CENTER)
}

let cycleButton

function setupCycleButton() {
  cycleButton = createButton(MODE_NAMES[0])
  const BUTTON_WIDTH = 160
  cycleButton.position(width / 2 - BUTTON_WIDTH / 2, height - 100)
  cycleButton.size(BUTTON_WIDTH)
  cycleButton.style("color: #FFFFFF")
  // Exercise: make the text colour dynamically follow the
  // colour of the circle.
  cycleButton.style("background-color: #FF8050")
  cycleButton.style("font-family: Courier")
  cycleButton.style("font-size: 24px")
  cycleButton.mousePressed(changeCycle)
  
}

function changeCycle() {
  cycleMode = (cycleMode + 1) % MODE_NAMES.length
  cycleButton.html(MODE_NAMES[cycleMode])
}

function modeDots() {
  for (let i of [0, 1, 2]) {
    if (i == cycleMode) {
      fill(255, 0, 0)
    } else {
      fill(0)
    }

    circle(map(i, 0, 2, width / 2 - 30, width / 2 + 30), height - 20, 10)
  }
}

function draw() {
  background(50)
  noStroke()
  modeDots()
  
  translate(width / 2, height / 2)

  if (cycleMode == 0) {
    mode0()
  } else if (cycleMode == 1) {
    mode1()
  } else {
    mode2()
  }
}

function mode0() {
  fill(0)
  circle(0, 0, 100)
}

function mode1() {
  fill(255)
  circle(0, 0, 150)
}

function mode2() {
  fill(255, 0, 0)
  rect(0, 0, 300, 50)
}
