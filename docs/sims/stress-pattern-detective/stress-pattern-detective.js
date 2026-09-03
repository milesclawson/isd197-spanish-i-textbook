// Stress Pattern Detective MicroSim - width responsive p5.js MicroSim
// CANVAS_HEIGHT = 360
// Learning objective (Apply/L3): Students apply the vowel/n/s rule and the
// other-consonant rule to identify the stressed syllable in Spanish words,
// and recognize when a written accent overrides the default rule.

let containerWidth;
let canvasWidth = 700;
let drawHeight = 280;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const words = [
  { word: "casa", syll: ["ca", "sa"], correct: 0, explain: "\"casa\" ends in a vowel, so stress falls on the second-to-last syllable." },
  { word: "hablan", syll: ["ha", "blan"], correct: 0, explain: "\"hablan\" ends in n, so stress falls on the second-to-last syllable." },
  { word: "libros", syll: ["li", "bros"], correct: 0, explain: "\"libros\" ends in s, so stress falls on the second-to-last syllable." },
  { word: "hablar", syll: ["ha", "blar"], correct: 1, explain: "\"hablar\" ends in a consonant other than n/s, so stress falls on the last syllable." },
  { word: "reloj", syll: ["re", "loj"], correct: 1, explain: "\"reloj\" ends in a consonant other than n/s, so stress falls on the last syllable." },
  { word: "feliz", syll: ["fe", "liz"], correct: 1, explain: "\"feliz\" ends in a consonant other than n/s, so stress falls on the last syllable." },
  { word: "café", syll: ["ca", "fé"], correct: 1, explain: "\"café\" ends in a vowel, which would normally put stress on \"ca\" -- but the accent on é overrides that and moves stress to the last syllable." },
  { word: "rápido", syll: ["rá", "pi", "do"], correct: 0, explain: "\"rápido\" ends in a vowel, which would predict stress on \"pi\" -- but the accent moves stress to the first syllable instead." },
  { word: "estás", syll: ["es", "tás"], correct: 1, explain: "\"estás\" ends in s, which would predict \"ES-tas\" -- but the accent moves the stress to the last syllable." },
  { word: "número", syll: ["nú", "me", "ro"], correct: 0, explain: "\"número\" ends in a vowel, which would predict stress on \"me\" -- but the accent moves stress to the first syllable." },
  { word: "lápiz", syll: ["lá", "piz"], correct: 0, explain: "\"lápiz\" ends in z (not n/s), which would predict stress on \"piz\" -- but the accent moves it to the first syllable." },
  { word: "ciudad", syll: ["ciu", "dad"], correct: 1, explain: "\"ciudad\" ends in a consonant other than n/s, so stress falls on the last syllable." },
  { word: "ratón", syll: ["ra", "tón"], correct: 1, explain: "\"ratón\" ends in n, which would predict \"RA-ton\" -- but the accent moves stress to the last syllable." },
  { word: "papel", syll: ["pa", "pel"], correct: 1, explain: "\"papel\" ends in a consonant other than n/s, so stress falls on the last syllable." },
  { word: "música", syll: ["mú", "si", "ca"], correct: 0, explain: "\"música\" ends in a vowel, which would predict stress on \"si\" -- but the accent moves it to the first syllable." },
];

let order = [];
let current = 0;
let selectedIndex = -1;
let feedback = "";
let feedbackColor = "black";
let score = 0;
let attempts = 0;
let showRuleBox;
let nextButton;
let blockRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  const mainElement = document.querySelector("main");
  canvas.parent(mainElement);
  textSize(defaultTextSize);

  order = shuffleOrder(words.length);

  nextButton = createButton("Next Word");
  nextButton.mousePressed(nextWord);

  showRuleBox = createCheckbox(" Show Rule", false);

  layoutControls();
  describe("Click the syllable you think is stressed. Feedback shows whether the vowel/n/s rule, the other-consonant rule, or a written accent applies.", LABEL);
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
  nextButton.position(20, drawHeight + 15);
  showRuleBox.position(150, drawHeight + 16);
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
  textSize(26);
  text("Stress Pattern Detective", canvasWidth / 2, margin - 10);

  textSize(14);
  fill("#555");
  text("Score: " + score + " / " + attempts, canvasWidth / 2, margin + 26);

  const w = currentWord();
  drawSyllables(w);

  if (showRuleBox.checked()) {
    const endsIn = w.word[w.word.length - 1];
    let ruleText;
    if (["a", "e", "i", "o", "u", "n", "s"].includes(endsIn)) {
      ruleText = "Rule: ends in a vowel, n, or s -> stress usually on 2nd-to-last syllable.";
    } else {
      ruleText = "Rule: ends in another consonant -> stress usually on the last syllable.";
    }
    fill("#1565c0");
    textAlign(CENTER, TOP);
    textSize(14);
    text(ruleText, canvasWidth / 2, drawHeight - 60);
  }

  if (feedback) {
    fill(feedbackColor);
    textAlign(CENTER, TOP);
    textSize(15);
    text(feedback, margin, drawHeight - 34, canvasWidth - margin * 2);
  }

  fill("black");
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("", 0, 0); // reset alignment safely before UI labels
}

function drawSyllables(w) {
  const n = w.syll.length;
  const blockW = 90;
  const blockH = 60;
  const gap = 14;
  const totalW = n * blockW + (n - 1) * gap;
  let startX = (canvasWidth - totalW) / 2;
  const y = drawHeight / 2 - blockH / 2 + 10;
  blockRects = [];

  for (let i = 0; i < n; i++) {
    const x = startX + i * (blockW + gap);
    let fillColor = "#eeeeee";
    if (selectedIndex === i) {
      fillColor = i === w.correct ? "#a5d6a7" : "#ef9a9a";
    }
    stroke("#999");
    strokeWeight(1);
    fill(fillColor);
    rect(x, y, blockW, blockH, 8);
    noStroke();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(22);
    text(w.syll[i], x + blockW / 2, y + blockH / 2);
    blockRects.push({ x, y, w: blockW, h: blockH, index: i });
  }
}

function mousePressed() {
  if (mouseY < 0 || mouseY > drawHeight) return;
  for (const b of blockRects) {
    if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
      selectAnswer(b.index);
      return;
    }
  }
}

function selectAnswer(i) {
  if (selectedIndex !== -1) return; // already answered this word
  selectedIndex = i;
  attempts++;
  const w = currentWord();
  if (i === w.correct) {
    score++;
    feedback = "Correct! " + w.explain;
    feedbackColor = "#2e7d32";
  } else {
    feedback = "Not quite. " + w.explain;
    feedbackColor = "#c62828";
  }
}

function nextWord() {
  current = (current + 1) % order.length;
  if (current === 0) order = shuffleOrder(words.length);
  selectedIndex = -1;
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
