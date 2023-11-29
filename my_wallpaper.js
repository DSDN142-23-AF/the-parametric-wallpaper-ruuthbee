//your parameter variables go here!
let fishbodyY = 10;
let fishbodyX = 20;
let fishshadowX = fishbodyX - 7;
let fishshadowY = fishbodyY + 15;
let fisheyesize = 5;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() {
  // do not rename this function. Treat this similarly to a Draw function
  fishshadow();
  fishbody();
  fisheye();
}

function fishbody(x, y) {
  strokeWeight(3);
  point(fishbodyX, fishbodyY); //nose
  point(fishbodyX + 40, fishbodyY + 10); //top of head
  point(fishbodyX + 90, fishbodyY + 60); // top of body
  point(fishbodyX + 130, fishbodyY + 120); //body and tail join (top)
  point(fishbodyX + 170, fishbodyY + 150); // top of tail
  point(fishbodyX + 160, fishbodyY + 160); // middle of tail
  point(fishbodyX + 150, fishbodyY + 170); // bottom of tail
  point(fishbodyX + 130, fishbodyY + 120); // body and tail join (bottom)
  point(fishbodyX + 65, fishbodyY + 100); //bottom of body near tail
  point(fishbodyX + 15, fishbodyY + 45); //bottom of head

  strokeWeight(1);
  fill(255);
  //noFill();
  beginShape();
  curveVertex(fishbodyX, fishbodyY);
  curveVertex(fishbodyX, fishbodyY); //nose
  curveVertex(fishbodyX + 40, fishbodyY + 10); //top of head
  curveVertex(fishbodyX + 90, fishbodyY + 60); // top of body
  curveVertex(fishbodyX + 133, fishbodyY + 120); //body and tail join (top)
  curveVertex(fishbodyX + 175, fishbodyY + 150); // top of tail
  curveVertex(fishbodyX + 160, fishbodyY + 160); // middle of tail
  curveVertex(fishbodyX + 150, fishbodyY + 180); // bottom of tail
  curveVertex(fishbodyX + 130, fishbodyY + 122); // body and tail join (bottom)
  curveVertex(fishbodyX + 65, fishbodyY + 100); //bottom of body near tail
  curveVertex(fishbodyX + 10, fishbodyY + 40); // bottom of head

  endShape(CLOSE);
}

function fishshadow() {
  strokeWeight(1);
  fill(0);
  beginShape();
  curveVertex(fishshadowX, fishshadowY);
  curveVertex(fishshadowX, fishshadowY); //nose
  curveVertex(fishshadowX + 40, fishshadowY + 10); //top of head
  curveVertex(fishshadowX + 90, fishshadowY + 60); // top of body
  curveVertex(fishshadowX + 133, fishshadowY + 120); //body and tail join (top)
  curveVertex(fishshadowX + 175, fishshadowY + 150); //top of tail
  curveVertex(fishshadowX + 160, fishshadowY + 160); // middle of tail
  curveVertex(fishshadowX + 150, fishshadowY + 180); //bottom of tail
  curveVertex(fishshadowX + 130, fishshadowY + 122); //body and tail join (bottom)
  curveVertex(fishshadowX + 65, fishshadowY + 100); //bottom of body
  curveVertex(fishshadowX + 15, fishshadowY + 45); //bottom of head
  endShape(CLOSE);
}

function fisheye() {
  fill(0);
  ellipse(fishbodyX + 28, fishbodyY + 17, fisheyesize);
  fill(255);
  ellipse(fishbodyX + 29, fishbodyY + 16.5, fisheyesize * 0.5);
}

function fishfins() {}

function fishscales() {}

function water() {}
