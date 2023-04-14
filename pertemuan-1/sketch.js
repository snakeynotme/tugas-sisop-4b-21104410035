function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(71, 71, 71);
  // membuat persegi panjang kiri
  fill(189, 189, 189);
  rect(170, 250, 120, 170);
  
  // membuat persegi panjang kanan
  fill(189, 189, 189);
  rect(350, 250, 120, 170);
  
  // membuat persegi panjang tengah
  fill(189, 189, 189);
  rect(260, 270, 120, 50);


  // membuat segitiga dan lingkaran
  fill(179, 109, 34);
  triangle(320, 30, 140, 250, 505, 250);
  
  ellipse(300, 290, 10, 10);
  ellipse(340, 290, 10, 10);
}