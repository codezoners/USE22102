let button
let mode      //  The mode of our clock

let image1

function preload() {
  image1 = loadImage("sol.jpg")
  //image1 = loadImage("image1.jpeg")
  
  // Use it like this: image(image1, 0, 0)
}

function setup() {
  createCanvas(600, 600)
  image1.resize(width, height)
  
  button = createButton("HELLO")
  button.position(100, 50)
  button.size(200, 100)
  button.style("font-size", "48px")    //  CSS font size in pixels
  button.style("font-family", "Courier")
  
  button.mouseClicked(click)
  
  mode = 0    //  Startup mode
}

function draw() {
  background(220)
  
  if (mode == 1) {
    analogMode()
  } else if (mode == 2) {
    calendarMode()
  } else if (mode == 3) {
    timerMode()
  } else {
    digitalMode()
  }
}

// dist(width / 2, height / 2, mouseX, mouseY)

function click() {
  mode = mode + 1
  
  if (mode == 4) {
    mode = 0
  }
  
  console.log(mode)
}

function analogMode() {
  button.html("ANALOG") // Change the button text
  background(0)
  image(image1, 0, 0)
}

function calendarMode() {
  button.html("CALENDAR")
}

function timerMode() {
  button.html("TIMER")
  circle(width / 2, height / 2, 300)
}

function digitalMode() {
  button.html("DIGITAL")
}
