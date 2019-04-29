function setup(){
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw(){
  loadPixels();

  var x = 0;
  var y = 255;

  for(var y = 0; y < height; y++){
    for (var x = 0; x< width; x++){
      var index = (x+y*width)*4
        pixels[index+0] = 255;
        pixels[index+1] = 0;
        pixels[index+2] = 0;
        pixels[index+3] = 255;
    }
  }

  updatePixels();

}