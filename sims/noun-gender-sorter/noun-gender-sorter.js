// Noun Gender Sorter MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 340
// Learning objective (Evaluate/L5): Students judge the grammatical gender of
// a Spanish noun using ending patterns and known exceptions, sorting it into
// an "el" or "la" bin.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 260;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const words = [
  { word: "libro", gender: "el", exception: false },
  { word: "casa", gender: "la", exception: false },
  { word: "chico", gender: "el", exception: false },
  { word: "chica", gender: "la", exception: false },
  { word: "día", gender: "el", exception: true },
  { word: "mano", gender: "la", exception: true },
  { word: "mesa", gender: "la", exception: false },
  { word: "problema", gender: "el", exception: true },
  { word: "papel", gender: "el", exception: false },
  { word: "ciudad", gender: "la", exception: false },
  { word: "mapa", gender: "el", exception: true },
  { word: "foto", gender: "la", exception: true },
];

let order = [];
let current = 0;
let answered = false;
let feedback = "";
let feedbackColor = "black";
let score = 0;
let attempts = 0;
let revealBox, nextButton;
let elZone, laZone;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  order = shuffleOrder(words.length);

  nextButton = createButton("Next Word");
  nextButton.mousePressed(nextWord);
  revealBox = createCheckbox(" Reveal Exceptions", false);

  layoutControls();
  describe("Click the el or la bin to sort each Spanish noun by grammatical gender, with feedback and an optional exceptions hint.", LABEL);
}

function shuffleOrder(n) {
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random(0, i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function layoutControls() {
  nextButton.position(20, drawHeight + 20);
  revealBox.position(160, drawHeight + 21);
}

function currentWord() {
  return words[order[current]];
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
  text("Noun Gender Sorter", canvasWidth / 2, margin - 15);

  textSize(13);
  fill("#555");
  text("Score: " + score + " / " + attempts, canvasWidth / 2, margin + 15);

  const zoneW = min(160, canvasWidth * 0.22);
  const zoneH = 90;
  const y = drawHeight / 2 + 10;
  elZone = { x: 40, y: y - zoneH / 2, w: zoneW, h: zoneH };
  laZone = { x: canvasWidth - 40 - zoneW, y: y - zoneH / 2, w: zoneW, h: zoneH };

  drawZone(elZone, "el", "#bbdefb");
  drawZone(laZone, "la", "#f8bbd0");

  const w = currentWord();
  const exceptionMark = (revealBox.checked() && w.exception) ? " *" : "";
  fill("white");
  stroke("#999");
  strokeWeight(1);
  const cardW = 180, cardH = 70;
  rect(canvasWidth / 2 - cardW / 2, y - cardH / 2, cardW, cardH, 8);
  noStroke();
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(24);
  text(w.word + exceptionMark, canvasWidth / 2, y);

  if (feedback) {
    fill(feedbackColor);
    textAlign(CENTER, TOP);
    textSize(14);
    text(feedback, 40, y + 55, canvasWidth - 80);
  }

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
}

function drawZone(zone, label, col) {
  stroke("#999");
  strokeWeight(1);
  fill(col);
  rect(zone.x, zone.y, zone.w, zone.h, 10);
  noStroke();
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(28);
  text(label, zone.x + zone.w / 2, zone.y + zone.h / 2);
}

function mousePressed() {
  if (answered || !elZone) return;
  if (inZone(elZone)) chooseGender("el");
  else if (inZone(laZone)) chooseGender("la");
}

function inZone(z) {
  return mouseX >= z.x && mouseX <= z.x + z.w && mouseY >= z.y && mouseY <= z.y + z.h;
}

function chooseGender(choice) {
  answered = true;
  attempts++;
  const w = currentWord();
  if (choice === w.gender) {
    score++;
    feedback = "Correct! " + w.word + " ends in -" + w.word.slice(-1) + ", and is " + (w.gender === "el" ? "masculine" : "feminine") + (w.exception ? " (this one is an exception to the usual pattern)." : ".");
    feedbackColor = "#2e7d32";
  } else {
    feedback = "Not quite -- " + w.word + " is \"" + w.gender + " " + w.word + "\"" + (w.exception ? " (an exception to the -o/-a pattern)." : ".");
    feedbackColor = "#c62828";
  }
}

function nextWord() {
  current = (current + 1) % order.length;
  if (current === 0) order = shuffleOrder(words.length);
  answered = false;
  feedback = "";
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
