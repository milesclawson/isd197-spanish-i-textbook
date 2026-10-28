// Colors and Numbers Match-Up MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 380
// Learning objective (Remember/L1): Students recall the Spanish word for a
// given color or number by matching face-down cards.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 300;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// Each pair: a "visual" card (color swatch or digit) and a "word" card
const pairs = [
  { type: "color", value: "rojo", swatch: "#e53935" },
  { type: "color", value: "azul", swatch: "#1e88e5" },
  { type: "color", value: "verde", swatch: "#43a047" },
  { type: "number", value: "siete", digit: "7" },
  { type: "number", value: "doce", digit: "12" },
  { type: "number", value: "veinte", digit: "20" },
];

let cards = []; // {pairIndex, isWordCard, flipped, matched, x,y,w,h}
let flippedIndices = [];
let moves = 0;
let matchesFound = 0;
let lockUntil = 0;
let newGameButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  newGameButton = createButton("New Game");
  newGameButton.mousePressed(newGame);
  layoutControls();
  newGame();
  describe("Memory-style matching game: flip two cards to match a Spanish color or number word to its swatch or digit.", LABEL);
}

function layoutControls() {
  newGameButton.position(20, drawHeight + 20);
}

function newGame() {
  const deck = [];
  pairs.forEach((p, i) => {
    deck.push({ pairIndex: i, isWordCard: false, flipped: false, matched: false });
    deck.push({ pairIndex: i, isWordCard: true, flipped: false, matched: false });
  });
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random(0, i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  cards = deck;
  flippedIndices = [];
  moves = 0;
  matchesFound = 0;
  lockUntil = 0;
  layoutCards();
}

function layoutCards() {
  const cols = canvasWidth < 480 ? 3 : 4;
  const rows = Math.ceil(cards.length / cols);
  const gap = 12;
  const cardW = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  const cardH = Math.min(70, (drawHeight - 60 - gap * (rows - 1)) / rows);
  let i = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (i >= cards.length) break;
      cards[i].x = margin + c * (cardW + gap);
      cards[i].y = 55 + r * (cardH + gap);
      cards[i].w = cardW;
      cards[i].h = cardH;
      i++;
    }
  }
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
  text("Colors and Numbers Match-Up", canvasWidth / 2, margin - 18);

  if (millis() < lockUntil && flippedIndices.length === 2) {
    const [a, b] = flippedIndices;
    if (cards[a].pairIndex !== cards[b].pairIndex) {
      if (millis() >= lockUntil - 1) { /* about to unflip */ }
    }
  }
  if (flippedIndices.length === 2 && millis() >= lockUntil) {
    const [a, b] = flippedIndices;
    if (cards[a].pairIndex === cards[b].pairIndex) {
      cards[a].matched = true;
      cards[b].matched = true;
    } else {
      cards[a].flipped = false;
      cards[b].flipped = false;
    }
    flippedIndices = [];
  }

  for (const card of cards) drawCard(card);

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("Moves: " + moves, 140, drawHeight + 32);
  text("Matches: " + matchesFound + " / " + pairs.length, 250, drawHeight + 32);

  if (matchesFound === pairs.length) {
    textAlign(CENTER, TOP);
    fill("#2e7d32");
    textSize(16);
    text("¡Bien hecho! All matched!", canvasWidth / 2, drawHeight - 24);
  }
}

function drawCard(card) {
  const pair = pairs[card.pairIndex];
  stroke("#999");
  strokeWeight(1);
  fill(card.matched ? "#c8e6c9" : (card.flipped ? "#fff9c4" : "#5c6bc0"));
  rect(card.x, card.y, card.w, card.h, 8);
  noStroke();

  if (!card.flipped && !card.matched) {
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(20);
    text("?", card.x + card.w / 2, card.y + card.h / 2);
    return;
  }

  textAlign(CENTER, CENTER);
  if (!card.isWordCard) {
    if (pair.type === "color") {
      fill(pair.swatch);
      rect(card.x + card.w * 0.3, card.y + 8, card.w * 0.4, card.h - 16, 6);
    } else {
      fill("black");
      textSize(22);
      text(pair.digit, card.x + card.w / 2, card.y + card.h / 2);
    }
  } else {
    fill("black");
    textSize(15);
    text(pair.value, card.x + card.w / 2, card.y + card.h / 2);
  }
}

function mousePressed() {
  if (flippedIndices.length === 2 && millis() < lockUntil) return;
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    if (c.matched || c.flipped) continue;
    if (mouseX >= c.x && mouseX <= c.x + c.w && mouseY >= c.y && mouseY <= c.y + c.h) {
      if (flippedIndices.length < 2) {
        c.flipped = true;
        flippedIndices.push(i);
        if (flippedIndices.length === 2) {
          moves++;
          const [a, b] = flippedIndices;
          if (cards[a].pairIndex === cards[b].pairIndex) {
            matchesFound++;
          }
          lockUntil = millis() + 700;
        }
      }
      break;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  layoutControls();
  layoutCards();
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector("main").getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
