// Ser Conjugation Practice MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 340
// Learning objective (Apply/L3): Students apply the correct conjugated form
// of ser (soy, eres, es, somos, son) to complete a sentence matching the
// given subject.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 190;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const bank = [
  { template: "Yo ___ estudiante.", correct: "soy", full: "Yo soy estudiante.", en: "I am a student." },
  { template: "Tú ___ de Texas.", correct: "eres", full: "Tú eres de Texas.", en: "You are from Texas." },
  { template: "Ella ___ mi amiga.", correct: "es", full: "Ella es mi amiga.", en: "She is my friend." },
  { template: "Nosotros ___ estudiantes.", correct: "somos", full: "Nosotros somos estudiantes.", en: "We are students." },
  { template: "Ellos ___ de México.", correct: "son", full: "Ellos son de México.", en: "They are from Mexico." },
  { template: "Yo ___ de Minnesota.", correct: "soy", full: "Yo soy de Minnesota.", en: "I am from Minnesota." },
  { template: "¿Tú ___ estudiante también?", correct: "eres", full: "¿Tú eres estudiante también?", en: "Are you a student too?" },
  { template: "Él ___ mi amigo.", correct: "es", full: "Él es mi amigo.", en: "He is my friend." },
  { template: "Nosotras ___ de California.", correct: "somos", full: "Nosotras somos de California.", en: "We (fem.) are from California." },
  { template: "Ellas ___ estudiantes nuevas.", correct: "son", full: "Ellas son estudiantes nuevas.", en: "They (fem.) are new students." },
];

const forms = ["soy", "eres", "es", "somos", "son"];
let order = [];
let current = 0;
let answered = false;
let selected = "";
let correctFlag = false;
let buttons = [];
let nextButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  order = shuffleOrder(bank.length);

  buttons = forms.map((f) => {
    const b = createButton(f);
    b.mousePressed(() => chooseForm(f));
    return b;
  });
  nextButton = createButton("Next");
  nextButton.mousePressed(nextSentence);

  layoutControls();
  describe("Choose the correct form of ser to complete each sentence, then see its English translation.", LABEL);
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
  const btnW = 90;
  const gap = 12;
  const totalW = forms.length * btnW + (forms.length - 1) * gap;
  let startX = max(20, (canvasWidth - totalW) / 2);
  buttons.forEach((b, i) => {
    b.position(startX + i * (btnW + gap), drawHeight + 20);
    b.size(btnW, 32);
  });
  nextButton.position(canvasWidth / 2 - 35, drawHeight + 75);
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
  text("Ser Conjugation Practice", canvasWidth / 2, margin - 15);

  const item = bank[order[current]];
  const sentence = answered ? item.full : item.template;

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(answered ? (correctFlag ? "#2e7d32" : "#c62828") : "black");
  text(sentence, 40, drawHeight / 2 - 10, canvasWidth - 80);

  if (answered) {
    textSize(15);
    fill("#555");
    text(item.en, 40, drawHeight / 2 + 35, canvasWidth - 80);
  }

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
}

function chooseForm(f) {
  if (answered) return;
  answered = true;
  selected = f;
  const item = bank[order[current]];
  correctFlag = f === item.correct;
}

function nextSentence() {
  current = (current + 1) % order.length;
  if (current === 0) order = shuffleOrder(bank.length);
  answered = false;
  selected = "";
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
