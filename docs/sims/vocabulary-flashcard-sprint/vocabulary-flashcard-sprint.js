// Vocabulary Flashcard Sprint MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 320
// Learning objective (Remember/L1): Students identify the English meaning of
// a Unit 1 Spanish vocabulary word within a timed round, building recall speed.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 240;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const bank = [
  { es: "el fútbol", en: "soccer", cat: "sports" },
  { es: "el básquetbol", en: "basketball", cat: "sports" },
  { es: "el béisbol", en: "baseball", cat: "sports" },
  { es: "el tenis", en: "tennis", cat: "sports" },
  { es: "la música rock", en: "rock music", cat: "music" },
  { es: "la música pop", en: "pop music", cat: "music" },
  { es: "la música clásica", en: "classical music", cat: "music" },
  { es: "la clase de matemáticas", en: "math class", cat: "classes" },
  { es: "la clase de ciencias", en: "science class", cat: "classes" },
  { es: "la clase de inglés", en: "English class", cat: "classes" },
  { es: "la pizza", en: "pizza", cat: "food" },
  { es: "la fruta", en: "fruit", cat: "food" },
  { es: "el pan", en: "bread", cat: "food" },
  { es: "rojo", en: "red", cat: "color" },
  { es: "azul", en: "blue", cat: "color" },
  { es: "verde", en: "green", cat: "color" },
  { es: "amarillo", en: "yellow", cat: "color" },
  { es: "mucho gusto", en: "nice to meet you", cat: "greeting" },
  { es: "¿de dónde eres?", en: "where are you from?", cat: "greeting" },
  { es: "me llamo", en: "my name is", cat: "greeting" },
];

let startButton;
let playing = false;
let timeLeft = 60;
let startMillis = 0;
let score = 0;
let currentCard = null;
let choices = [];
let flashColor = null;
let flashUntil = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  startButton = createButton("Start / Play Again");
  startButton.mousePressed(startRound);
  layoutControls();
  describe("60-second timed vocabulary review: pick the correct English meaning for each Spanish flashcard from four choices.", LABEL);
}

function layoutControls() {
  startButton.position(20, drawHeight + 20);
}

function startRound() {
  playing = true;
  timeLeft = 60;
  startMillis = millis();
  score = 0;
  nextCard();
}

function nextCard() {
  currentCard = random(bank);
  const distractors = shuffle(bank.filter((w) => w.cat === currentCard.cat && w.en !== currentCard.en)).slice(0, 3);
  let pool = distractors;
  if (pool.length < 3) {
    const extra = shuffle(bank.filter((w) => w.en !== currentCard.en && !pool.includes(w)));
    pool = pool.concat(extra).slice(0, 3);
  }
  choices = shuffle([currentCard.en, ...pool.map((w) => w.en)]);
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

  if (playing) {
    timeLeft = max(0, 60 - floor((millis() - startMillis) / 1000));
    if (timeLeft === 0) playing = false;
  }

  const barW = (canvasWidth - 2 * margin) * (timeLeft / 60);
  fill("#c62828");
  rect(margin, 8, barW, 10, 4);
  noStroke();
  fill("black");
  textAlign(RIGHT, TOP);
  textSize(13);
  text(timeLeft + "s", canvasWidth - margin, 22);

  textAlign(CENTER, TOP);
  textSize(22);
  fill("black");
  text("Vocabulary Flashcard Sprint", canvasWidth / 2, margin + 20);

  if (!playing && !currentCard) {
    textAlign(CENTER, CENTER);
    textSize(16);
    fill("#555");
    text("Press Start to begin a 60-second review round.", canvasWidth / 2, drawHeight / 2 + 10);
    return;
  }

  if (!playing && currentCard) {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill("#2F3C7E");
    text("You reviewed " + score + " words!", canvasWidth / 2, drawHeight / 2);
    return;
  }

  textAlign(CENTER, CENTER);
  textSize(30);
  fill(millis() < flashUntil ? flashColor : "black");
  text(currentCard.es, canvasWidth / 2, drawHeight * 0.42);

  const cols = 2;
  const cw = (canvasWidth - margin * 2 - 12) / cols;
  const ch = 42;
  const startY = drawHeight * 0.6;
  choicesRects = [];
  choices.forEach((c, i) => {
    const col = i % cols;
    const row = floor(i / cols);
    const x = margin + col * (cw + 12);
    const y = startY + row * (ch + 10);
    stroke("#999");
    strokeWeight(1);
    fill("#e8eaf6");
    rect(x, y, cw, ch, 6);
    noStroke();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(15);
    text(c, x + 5, y, cw - 10, ch);
    choicesRects.push({ x, y, w: cw, h: ch, value: c });
  });
}

let choicesRects = [];

function mousePressed() {
  if (!playing || !currentCard) return;
  for (const r of choicesRects) {
    if (mouseX >= r.x && mouseX <= r.x + r.w && mouseY >= r.y && mouseY <= r.y + r.h) {
      if (r.value === currentCard.en) {
        score++;
        flashColor = "#2e7d32";
      } else {
        flashColor = "#c62828";
      }
      flashUntil = millis() + 200;
      nextCard();
      return;
    }
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
