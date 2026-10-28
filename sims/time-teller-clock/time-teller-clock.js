// Time Teller Clock MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 450
// Learning objective (Apply/L3): Students demonstrate correct use of
// Son las / Es la, y, menos, media, and cuarto by setting a clock and
// reading the resulting time aloud in Spanish.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 370;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const hourWords = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
const minuteWords = { 0: "", 5: "cinco", 10: "diez", 15: "cuarto", 20: "veinte", 25: "veinticinco", 30: "media", 35: "treinta y cinco", 40: "cuarenta", 45: "cuarenta y cinco", 50: "cincuenta", 55: "cincuenta y cinco" };

let hour = 12; // 1-12
let minute = 0; // 0,5,...,55
let period = 0; // 0=unset,1=mañana,2=tarde,3=noche
let periodButton;
let draggingHand = null; // 'hour' | 'minute' | null
let clockCX, clockCY, clockR;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  periodButton = createButton("de la mañana");
  periodButton.mousePressed(cyclePeriod);
  layoutControls();
  describe("Drag the hour and minute hands on an analog clock to build a Spanish time phrase using Son las, Es la, y, menos, media, and cuarto.", LABEL);
}

function cyclePeriod() {
  period = (period % 3) + 1;
  const labels = { 1: "de la mañana", 2: "de la tarde", 3: "de la noche" };
  periodButton.html(labels[period]);
}

function layoutControls() {
  periodButton.position(20, drawHeight + 20);
}

function draw() {
  updateCanvasSize();

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
  text("Time Teller Clock", canvasWidth / 2, margin - 15);

  clockCX = canvasWidth / 2;
  clockCY = drawHeight / 2 + 5;
  clockR = min(canvasWidth * 0.28, 130);

  drawClockFace();
  drawHands();

  textAlign(CENTER, TOP);
  textSize(20);
  fill("#2F3C7E");
  const phrase = buildPhrase();
  text(phrase, margin, drawHeight - 40, canvasWidth - margin * 2);

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("Time period:", 140, drawHeight + 32);
}

function drawClockFace() {
  stroke("#333");
  strokeWeight(2);
  fill("white");
  circle(clockCX, clockCY, clockR * 2);
  noStroke();
  fill("#333");
  textAlign(CENTER, CENTER);
  textSize(14);
  for (let h = 1; h <= 12; h++) {
    const a = (h / 12) * TWO_PI - HALF_PI;
    const x = clockCX + cos(a) * (clockR - 18);
    const y = clockCY + sin(a) * (clockR - 18);
    text(h, x, y);
  }
}

function drawHands() {
  const hourAngle = ((hour % 12) / 12) * TWO_PI + (minute / 60) * (TWO_PI / 12) - HALF_PI;
  const minuteAngle = (minute / 60) * TWO_PI - HALF_PI;

  stroke("#2F3C7E");
  strokeWeight(5);
  line(clockCX, clockCY, clockCX + cos(hourAngle) * clockR * 0.5, clockCY + sin(hourAngle) * clockR * 0.5);

  stroke("#c62828");
  strokeWeight(3);
  line(clockCX, clockCY, clockCX + cos(minuteAngle) * clockR * 0.8, clockCY + sin(minuteAngle) * clockR * 0.8);

  noStroke();
  fill("#333");
  circle(clockCX, clockCY, 8);
}

function buildPhrase() {
  let displayHour = hour;
  let usesMenos = minute > 30;
  let phraseHour = usesMenos ? (hour % 12) + 1 : hour;
  if (phraseHour > 12) phraseHour = 1;
  const isUna = phraseHour === 1;
  const verb = isUna ? "Es la" : "Son las";
  let mid = "";
  if (minute === 0) {
    mid = "";
  } else if (!usesMenos) {
    mid = minute === 30 ? " y media" : (minute === 15 ? " y cuarto" : " y " + minuteWords[minute]);
  } else {
    const remaining = 60 - minute;
    const remWord = minuteWords[remaining] || remaining;
    mid = remaining === 15 ? " menos cuarto" : " menos " + remWord;
  }
  const periodLabels = { 0: "", 1: " de la mañana", 2: " de la tarde", 3: " de la noche" };
  return verb + " " + hourWords[phraseHour] + mid + periodLabels[period] + ".";
}

function mousePressed() {
  handAt(mouseX, mouseY, true);
}

function mouseDragged() {
  handAt(mouseX, mouseY, false);
}

function mouseReleased() {
  draggingHand = null;
}

function handAt(mx, my, isPress) {
  if (!clockCX || my > drawHeight) return;
  const dx = mx - clockCX;
  const dy = my - clockCY;
  const dist = sqrt(dx * dx + dy * dy);
  if (isPress) {
    if (dist > clockR + 10) return;
    draggingHand = dist < clockR * 0.6 ? "hour" : "minute";
  }
  if (!draggingHand) return;
  let a = atan2(dy, dx) + HALF_PI;
  if (a < 0) a += TWO_PI;
  if (draggingHand === "minute") {
    let m = Math.round((a / TWO_PI) * 60 / 5) * 5;
    if (m === 60) m = 0;
    minute = m;
  } else {
    let h = Math.round((a / TWO_PI) * 12);
    if (h === 0) h = 12;
    hour = h;
  }
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
