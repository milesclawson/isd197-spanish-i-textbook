// Spanish Number Builder MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 250
// Learning objective (Apply/L3): Students apply the rules for combining tens
// and ones to construct the correct Spanish word for any number 0-100,
// including the special "compressed" forms for 16-19 and 21-29.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 170;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;
let sliderLeftMargin = 90;

const ones = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",
  "once", "doce", "trece", "catorce", "quince"];
const teensCompressed = ["dieciséis", "diecisiete", "dieciocho", "diecinueve"];
const twentiesCompressed = ["veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
const tens = { 3: "treinta", 4: "cuarenta", 5: "cincuenta", 6: "sesenta", 7: "setenta", 8: "ochenta", 9: "noventa" };

function numberToSpanish(n) {
  if (n <= 15) return ones[n];
  if (n <= 19) return teensCompressed[n - 16];
  if (n === 20) return "veinte";
  if (n <= 29) return twentiesCompressed[n - 21];
  if (n === 100) return "cien";
  const t = Math.floor(n / 10);
  const o = n % 10;
  if (o === 0) return tens[t];
  return tens[t] + " y " + ones[o];
}

let numberSlider, minusButton, plusButton;
let value = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  numberSlider = createSlider(0, 100, 0, 1);
  minusButton = createButton("-1");
  minusButton.mousePressed(() => setValue(value - 1));
  plusButton = createButton("+1");
  plusButton.mousePressed(() => setValue(value + 1));

  layoutControls();
  describe("Slide to build any number from 0 to 100 and see it written and spoken in Spanish, with a highlight when the number uses a compressed one-word form.", LABEL);
}

function layoutControls() {
  numberSlider.position(sliderLeftMargin, drawHeight + 12);
  numberSlider.size(max(120, canvasWidth - sliderLeftMargin - 140));
  minusButton.position(20, drawHeight + 40);
  plusButton.position(70, drawHeight + 40);
}

function setValue(v) {
  value = constrain(v, 0, 100);
  numberSlider.value(value);
}

function draw() {
  updateCanvasSize();
  value = numberSlider.value();

  fill("aliceblue");
  stroke("silver");
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill("white");
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);
  noStroke();

  fill("black");
  textAlign(CENTER, TOP);
  textSize(24);
  text("Spanish Number Builder", canvasWidth / 2, margin - 15);

  textAlign(CENTER, CENTER);
  textSize(48);
  fill("#2F3C7E");
  text(value, canvasWidth / 2, drawHeight / 2 - 20);

  const isCompressed = (value >= 16 && value <= 19) || (value >= 21 && value <= 29);
  textSize(26);
  fill(isCompressed ? "#c62828" : "black");
  text(numberToSpanish(value), canvasWidth / 2, drawHeight / 2 + 30);

  if (isCompressed) {
    textSize(14);
    fill("#c62828");
    text("Compressed form! (one word, not two)", canvasWidth / 2, drawHeight / 2 + 58);
  }

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("0", 20, drawHeight + 12);
  text("100", canvasWidth - 40, drawHeight + 12);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  layoutControls();
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
