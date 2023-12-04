const SIZE = 600

var imageFileNames = [
  "05E1F61B-87FA-4C57-8FE9-416CD3970BA4.jpeg",
  "69D20ABD-0532-423D-80A1-28E0AC7C0137.jpeg",
  "6B1C8AB2-5698-43E4-AB00-B422B10A1DE4.jpeg",
  "700BC4E9-D65E-4BF7-9C8A-5E5D4E554AB6.jpeg",
  "79DD5FA0-3DF0-43D2-96D4-BB81B870679C.jpeg",
  "85465CB8-BAA4-41A4-AD5D-0B712AE07A57.jpeg",
  "8774B12E-4068-4A37-B9DB-91CF78004C6D.jpeg",
  "C0CDAF56-DB67-41C6-A642-8A70B3057445.jpeg",
  "DC75DCA9-3E04-4B40-BBD2-506F556DC0D4.jpeg",
  "FAE70263-DBF4-4FB2-A2E7-4FCE6F75CCEF.jpeg"
]

// The images get loaded and stored here:
var images = []

function preload() {
  /* Images must be loaded in preload(), before setup(). For each file
     name, we load the image and push it onto the end of the images array. */
  for (var imageFileName of imageFileNames) {
    var image = loadImage(imageFileName)
    images.push(image)
  }
}

function setup() {
  createCanvas(SIZE, SIZE)
  
  // Once all images are loaded, we can resize them before we start using them. (Vestigial: we can set size when drawing)
  // But: might need to resize if we start sampling within
  // images (and don't know the original size)
  // (We can also apply a filter for fun...)
  for (var img of images) {
    //img.resize(SIZE / 2, SIZE / 2)
    //img.filter(INVERT)
  }
  
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220)
  
  // We have 10 images, so to select we can use any index number between
  // 0 and 9.
  
  //var selection = second() % 10
  //var selection = frameCount % 10
  //var selection = int(frameCount / 10) % 10
  //var selection = int(mouseX / width * 10) % 10
  
  var leftSelection = int(second() / 10) 
  //var leftSelection = 0
  var img = images[leftSelection]
  image(img, 0, SIZE / 4, SIZE / 2, SIZE / 2)
  
  textSize(36)
  text(leftSelection, width / 4, SIZE - 100)
  
  var rightSelection = second() % 10
  //var rightSelection = 0
  img = images[rightSelection]
  image(img, SIZE / 2, SIZE / 4, SIZE / 2, SIZE / 2)
  text(rightSelection, width * 3 / 4, SIZE - 100)
}
