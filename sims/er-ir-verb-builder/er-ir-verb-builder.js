// -Er and -Ir Verb Builder MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 300
// Learning objective (Apply/L3): Students apply the correct -er or -ir
// ending to a verb stem for a given subject pronoun, and identify the one
// form (nosotros) where the two families differ.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 220;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const subjects = ["yo", "tú", "él/ella", "nosotros", "ellos/ellas"];
const erEndings = ["o", "es", "e", "emos", "en"];
const irEndings = ["o", "es", "e", "imos", "en"];

let subjectIndex = 0;
let subjectSelect;
let erAnswer = "";
let irAnswer = "";
let erButtons = [];
let irButtons = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  subjectSelect = createSelect();
  subjects.forEach((s) => subjectSelect.option(s));
  subjectSelect.changed(() => {
    subjectIndex = subjects.indexOf(subjectSelect.value());
    erAnswer = "";
    irAnswer = "";
  });

  erButtons = erEndings.map((e) => {
    const b = createButton(e);
    b.mousePressed(() => { erAnswer = e; });
    return b;
  });
  irButtons = irEndings.map((e) => {
    const b = createButton(e);
    b.mousePressed(() => { irAnswer = e; });
    return b;
  });

  layoutControls();
  describe("Pick the subject pronoun, then choose the matching -er and -ir verb endings side by side to see where the two verb families agree and where they differ.", LABEL);
}

function layoutControls() {
  subjectSelect.position(canvasWidth / 2 - 70, drawHeight + 15);
  const half = canvasWidth / 2;
  const btnW = 46;
  const gap = 6;
  const erStartX = max(15, half / 2 - (erEndings.length * (btnW + gap)) / 2);
  erButtons.forEach((b, i) => {
    b.position(erStartX + i * (btnW + gap), drawHeight + 48);
    b.size(btnW, 26);
  });
  const irStartX = max(half + 15, half + half / 2 - (irEndings.length * (btnW + gap)) / 2);
  irButtons.forEach((b, i) => {
    b.position(irStartX + i * (btnW + gap), drawHeight + 48);
    b.size(btnW, 26);
  });
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
  textSize(22);
  text("-Er and -Ir Verb Builder", canvasWidth / 2, margin - 15);

  const half = canvasWidth / 2;
  const isNosotros = subjects[subjectIndex] === "nosotros";

  drawColumn(0, half, "comer (-er)", "com", erAnswer, "es", isNosotros);
  drawColumn(half, half, "escribir (-ir)", "escrib", irAnswer, "ir", isNosotros);

  stroke("#ccc");
  line(half, margin + 10, half, drawHeight - 40);
  noStroke();

  if (isNosotros) {
    fill("#c62828");
    textAlign(CENTER, TOP);
    textSize(13);
    text("nosotros is the one row where -er (-emos) and -ir (-imos) endings differ!", margin, drawHeight - 34, canvasWidth - margin * 2);
  }

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("Subject:", 20, drawHeight + 26);
}

function drawColumn(x0, w, title, stem, answer, tag, isNosotros) {
  textAlign(CENTER, TOP);
  textSize(16);
  fill("#2F3C7E");
  text(title, x0 + w / 2, margin + 20);

  textSize(30);
  fill(isNosotros ? "#c62828" : "black");
  const isCorrect = answer && ((tag === "es" && answer === expectedEnding(erEndings)) || (tag === "ir" && answer === expectedEnding(irEndings)));
  fill(answer ? (isCorrect ? "#2e7d32" : "#c62828") : "black");
  text(stem + (answer || "___"), x0 + w / 2, margin + 55);

  textAlign(CENTER, TOP);
  textSize(13);
  fill("#555");
  text("Subject: " + subjects[subjectIndex], x0 + w / 2, margin + 100);
}

function expectedEnding(endingsList) {
  return endingsList[subjectIndex];
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
