//your parameter variables go here!
let fishbodyY = 10;
let fishbodyX = 20;
let fishshadowX = fishbodyX - 7;
let fishshadowY = fishbodyY + 15;
let fisheyesize = 5;
let dorsalfinX = fishbodyX + 0;
let dorsalfinY = fishbodyY - 0;
let kinaX = 45;
let kinaY = 155;
let kinasize = 30;
let seashellX = 165;
let seashellY = 55;
let seashellWidth = 5;
let seashellHeight = seashellY - 40;
let seashellPoint = seashellHeight - 10;

let shellshadowX = seashellX - 7;
let shellshadowY = seashellY + 5;
let shellshadowHeight = shellshadowY - 40;
let shellshadowPoint = shellshadowHeight - 10;

let darkMode = false;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 200;
}

function wallpaper_background() {
  if (darkMode) {
    background(1, 24, 74); //deep navy blue
  } else {
    background(240, 255, 240); //light honeydew green colour
  }
}

function my_symbol() {
  // do not rename this function. Treat this similarly to a Draw function
  fishshadow();
  fishfins();
  fishbody();
  fisheye();
  finscales();
  fishscales();

  seashellshadow();
  kinashell();
  seashell();
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
  line(fishbodyX + 95, fishbodyY + 75, fishbodyX + 93, fishbodyY + 90);
}

function kinashell() {
  ellipseMode(RADIUS);
  fill(255);
  ellipse(kinaX, kinaY, kinasize);

  ellipseMode(CENTER);
  fill(0);
  ellipse(kinaX, kinaY, kinasize / 6);

  fill(255);
  stroke(0.5);
  ellipse(kinaX, kinaY - kinasize / 3, kinasize / 30);
  ellipse(kinaX, kinaY + kinasize / 3, kinasize / 30);
  ellipse(kinaX - kinasize / 3, kinaY, kinasize / 30);
  ellipse(kinaX + kinasize / 3, kinaY, kinasize / 30);

  ellipse(kinaX, kinaY - kinasize / 1.5, kinasize / 15);
  ellipse(kinaX, kinaY + kinasize / 1.5, kinasize / 15);
  ellipse(kinaX - kinasize / 1.5, kinaY, kinasize / 15);
  ellipse(kinaX + kinasize / 1.5, kinaY, kinasize / 15);

  ellipse(kinaX, kinaY - kinasize, kinasize / 10);
  ellipse(kinaX, kinaY + kinasize, kinasize / 10);
  ellipse(kinaX - kinasize, kinaY, kinasize / 10);
  ellipse(kinaX + kinasize, kinaY, kinasize / 10);

  ellipse(kinaX - kinasize / 3, kinaY - kinasize / 3, kinasize / 20);
  ellipse(kinaX + kinasize / 3, kinaY + kinasize / 3, kinasize / 20);
  ellipse(kinaX - kinasize / 3, kinaY + kinasize / 3, kinasize / 20);
  ellipse(kinaX + kinasize / 3, kinaY - kinasize / 3, kinasize / 20);

  ellipse(kinaX - kinasize / 1.5, kinaY - kinasize / 1.5, kinasize / 12);
  ellipse(kinaX + kinasize / 1.5, kinaY + kinasize / 1.5, kinasize / 12);
  ellipse(kinaX - kinasize / 1.5, kinaY + kinasize / 1.5, kinasize / 12);
  ellipse(kinaX + kinasize / 1.5, kinaY - kinasize / 1.5, kinasize / 12);
}

function seashellshadow() {
  fill(000);

  ellipse(kinaX - 7, kinaY + 15, kinasize * 1.8); //kina shadow

  //seashell shadow
  triangle(
    //right bottom piece
    shellshadowX,
    shellshadowY,
    shellshadowX + seashellWidth + 10,
    shellshadowHeight + 30,
    shellshadowX + seashellWidth + 7,
    shellshadowY + 2
  );

  triangle(
    //left bottom piece
    shellshadowX,
    shellshadowY,
    shellshadowX - seashellWidth - 10,
    shellshadowHeight + 30,
    shellshadowX - seashellWidth - 7,
    shellshadowY + 2
  );

  beginShape(); // number three left from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth - 18, shellshadowHeight + 30);
  curveVertex(shellshadowX - 20, shellshadowPoint + 30); //apex of segment
  curveVertex(shellshadowX + seashellWidth - 15, shellshadowHeight + 30);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); // number three right from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth + 15, shellshadowHeight + 30);
  curveVertex(shellshadowX + 20, shellshadowPoint + 30); //apex of segment
  curveVertex(shellshadowX + seashellWidth + 18, shellshadowHeight + 30);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); // number two left from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth - 17, shellshadowHeight + 15);
  curveVertex(shellshadowX - 17, shellshadowPoint + 15); //apex of segment
  curveVertex(shellshadowX + seashellWidth - 15, shellshadowHeight + 15);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); // number two right from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth + 15, shellshadowHeight + 15);
  curveVertex(shellshadowX + 17, shellshadowPoint + 15); //apex of segment
  curveVertex(shellshadowX + seashellWidth + 16, shellshadowHeight + 15);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); // number one left from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth - 10, shellshadowHeight + 5);
  curveVertex(shellshadowX - 10, shellshadowPoint + 5); //apex of segment
  curveVertex(shellshadowX + seashellWidth - 10, shellshadowHeight + 5);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); // number one right from center
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth + 10, shellshadowHeight + 5);
  curveVertex(shellshadowX + 10, shellshadowPoint + 5); //apex of segment
  curveVertex(shellshadowX + seashellWidth + 10, shellshadowHeight + 5);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();

  beginShape(); //central segment
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX - seashellWidth, shellshadowHeight);
  curveVertex(shellshadowX, shellshadowPoint); //apex of segment
  curveVertex(shellshadowX + seashellWidth, shellshadowHeight);
  curveVertex(shellshadowX, shellshadowY);
  curveVertex(shellshadowX, shellshadowY);
  endShape();
}

function seashell() {
  triangle(
    //right bottom piece
    seashellX,
    seashellY,
    seashellX + seashellWidth + 10,
    seashellHeight + 30,
    seashellX + seashellWidth + 7,
    seashellY + 2
  );

  triangle(
    //left bottom piece
    seashellX,
    seashellY,
    seashellX - seashellWidth - 10,
    seashellHeight + 30,
    seashellX - seashellWidth - 7,
    seashellY + 2
  );

  beginShape(); // number three left from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth - 18, seashellHeight + 30);
  curveVertex(seashellX - 20, seashellPoint + 30); //apex of segment
  curveVertex(seashellX + seashellWidth - 15, seashellHeight + 30);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); // number three right from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth + 15, seashellHeight + 30);
  curveVertex(seashellX + 20, seashellPoint + 30); //apex of segment
  curveVertex(seashellX + seashellWidth + 18, seashellHeight + 30);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); // number two left from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth - 17, seashellHeight + 15);
  curveVertex(seashellX - 17, seashellPoint + 15); //apex of segment
  curveVertex(seashellX + seashellWidth - 15, seashellHeight + 15);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); // number two right from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth + 15, seashellHeight + 15);
  curveVertex(seashellX + 17, seashellPoint + 15); //apex of segment
  curveVertex(seashellX + seashellWidth + 16, seashellHeight + 15);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); // number one left from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth - 10, seashellHeight + 5);
  curveVertex(seashellX - 10, seashellPoint + 5); //apex of segment
  curveVertex(seashellX + seashellWidth - 10, seashellHeight + 5);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); // number one right from center
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth + 10, seashellHeight + 5);
  curveVertex(seashellX + 10, seashellPoint + 5); //apex of segment
  curveVertex(seashellX + seashellWidth + 10, seashellHeight + 5);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();

  beginShape(); //central segment
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX - seashellWidth, seashellHeight);
  curveVertex(seashellX, seashellPoint); //apex of segment
  curveVertex(seashellX + seashellWidth, seashellHeight);
  curveVertex(seashellX, seashellY);
  curveVertex(seashellX, seashellY);
  endShape();
}

function starfishshadow() {}
