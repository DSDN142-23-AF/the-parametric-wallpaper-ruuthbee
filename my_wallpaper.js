//your parameter variables go here!
let fishbodyY = 10;
let fishbodyX = 20;
let fishshadowX = fishbodyX - 7;
let fishshadowY = fishbodyY + 15;
let fisheyesize = 5;
let dorsalfinX = fishbodyX + 0;
let dorsalfinY = fishbodyY - 0;

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
  fishfins();
  fishbody();
  fisheye();
  finscales();
  fishscales();
}

function fishbody(x, y) {
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

function fishfins() {
  strokeWeight(1);
  fill(255);
  beginShape();
  curveVertex(dorsalfinX + 53, dorsalfinY + 20); //start of dorsal? fin (left side - near head)
  curveVertex(fishbodyX + 53, fishbodyY + 20); //start of dorsal? fin (left side - near head)
  //curveVertex(fishbodyX + 70, fishbodyY + 23);
  curveVertex(dorsalfinX + 80, dorsalfinY + 30);
  curveVertex(dorsalfinX + 105, dorsalfinY + 70);
  curveVertex(dorsalfinX + 118, dorsalfinY + 100);
  curveVertex(fishbodyX + 118, fishbodyY + 100);
  curveVertex(dorsalfinX + 118, dorsalfinY + 100);
  endShape();

  //beginShape();
  //curveVertex(fishbodyX + 45, fishbodyY + 40);
  //curveVertex(fishbodyX + 40, fishbodyY + 40);
  // curveVertex(fishbodyX + 38, fishbodyY + 55);
  //curveVertex(fishbodyX + 60, fishbodyY + 75);
  // curveVertex(fishbodyX + 80, fishbodyY + 85);
  //curveVertex(fishbodyX + 80, fishbodyY + 85);
  //endShape();

  fill(255);
  beginShape();
  curveVertex(fishbodyX + 95, fishbodyY + 100);
  curveVertex(fishbodyX + 70, fishbodyY + 103);
  curveVertex(fishbodyX + 85, fishbodyY + 115);
  curveVertex(fishbodyX + 95, fishbodyY + 110);
  curveVertex(fishbodyX + 150, fishbodyY + 110);
  endShape();
}

function finscales() {
  line(fishbodyX + 145, fishbodyY + 135, fishbodyX + 170, fishbodyY + 150);
  line(fishbodyX + 146, fishbodyY + 140, fishbodyX + 158, fishbodyY + 157);
  line(fishbodyX + 142, fishbodyY + 138, fishbodyX + 150, fishbodyY + 168);

  line(fishbodyX + 65, fishbodyY + 32, fishbodyX + 75, fishbodyY + 33);
  line(fishbodyX + 71, fishbodyY + 38, fishbodyX + 80, fishbodyY + 38.5);
}
function fishscales() {
  line(fishbodyX + 25, fishbodyY + 50, fishbodyX + 45, fishbodyY + 45);
  line(fishbodyX + 30, fishbodyY + 55, fishbodyX + 50, fishbodyY + 50);
  line(fishbodyX + 45, fishbodyY + 43, fishbodyX + 40, fishbodyY + 65);
  line(fishbodyX + 40, fishbodyY + 38, fishbodyX + 35, fishbodyY + 60);

  line(fishbodyX + 90, fishbodyY + 70, fishbodyX + 88, fishbodyY + 85);
  line(fishbodyX + 90, fishbodyY + 70, fishbodyX + 88, fishbodyY + 85);
}

function seashells() {}

function starfish() {}

function seaweed() {}

function water() {}
