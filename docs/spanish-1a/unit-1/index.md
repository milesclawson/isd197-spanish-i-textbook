---
title: "Unit 1: ¡Bienvenidos! and ¡Mucho Gusto!"
description: "Spanish 1A Unit 1 -- alphabet, colors, numbers, and your first real introductions in Spanish."
generated_by: claude skill chapter-content-generator
date: 2026-08-31
version: 0.09
---

# Unit 1: ¡Bienvenidos! and ¡Mucho Gusto!

*Combines the Ven Conmigo Capítulo Preliminar and Chapter 1, ¡Mucho Gusto!*

## Summary

This unit is your very first step into Spanish class. You'll learn the alphabet, colors, and numbers, and then use them right away to introduce yourself, say where you're from, tell your age, and give today's date. By the end of this unit, you can have a short, real conversation meeting someone new in Spanish.

## What You Will Learn

- The Spanish alphabet and how letters sound
- Colors and numbers 1-30
- How to introduce yourself and respond to an introduction
- How to say where you are from
- How to say your age and give the date
- The verb *ser* (to be) and how nouns have gender in Spanish

## Getting Started: Alphabet, Colors, and Numbers

Spanish uses almost the same alphabet as English. It has one extra letter: **ñ**. It sounds like the "ny" in "canyon." You'll see it in words like *año* (year) and *español* (Spanish).

Spanish letters mostly sound the way they look once you learn the pattern. A few letters are different from English in an important way:

- **h** is always silent. *Hola* sounds like "OH-la."
- **j** sounds like the English "h." *Jugo* sounds like "HOO-go."
- **ll** sounds like the English "y." *Llamo* sounds like "YAH-mo."

Colors are some of the first describing words you'll use in Spanish, and you'll use them constantly this year -- describing your room, your clothes, and objects around the classroom.

| Spanish | English |
|---|---|
| rojo | red |
| azul | blue |
| verde | green |
| amarillo | yellow |
| negro | black |
| blanco | white |
| anaranjado | orange |
| morado | purple |

Numbers 1-30 are the next building block. Just like colors, you'll use numbers every day -- ages, dates, and counting things in the classroom.

- 1-10: *uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez*
- 11-15: *once, doce, trece, catorce, quince*
- 16-19 squeeze "ten and six/seven/eight/nine" into one word: *dieciséis, diecisiete, dieciocho, diecinueve*
- 20 is *veinte*, and 21-29 follow the same squeeze pattern: *veintiuno, veintidós* ... *veintinueve*
- 30 is *treinta*

#### Diagram: Colors and Numbers Match-Up

<iframe src="../../sims/colors-numbers-matchup/main.html" width="100%" height="380px" scrolling="no"></iframe>

<details markdown="1">
<summary>Colors and Numbers Match-Up</summary>
Type: microsim

**sim-id:** colors-numbers-matchup<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Give 7th/8th grade students a low-pressure, game-like way to memorize colors and numbers 1-30 before those words show up in every later activity this year.

Bloom Level: Remember (L1)
Bloom Verb: recall

Learning objective: Students recall the Spanish word for a given color or number by matching cards, building automatic recognition before the words are needed for real communication.

Visual elements: A grid of face-down cards. Half show a color swatch or a digit (1-30); the other half show the matching Spanish word.

Controls: Click two cards to flip them. If they match (e.g., the red swatch and the card reading "rojo"), both stay face up and turn green. If they don't match, both flip back over after one second.

Default state: All cards face down, shuffled randomly. A "New Game" button reshuffles.

Behavior: A move counter and a "matches found" counter update after each pair attempt. When all pairs are found, a short celebration message appears ("¡Bien hecho!").

Canvas layout: Card grid (700 x 320px) with counters and New Game button below (700 x 60px). CANVAS_HEIGHT: 380.

Responsive design: Grid must reflow to fewer columns on narrow screens while keeping cards a legible, tappable size (minimum 60x60px).

Implementation: p5.js canvas with a card-object array (value, isColorOrNumber, isFlipped, isMatched), click detection, and a simple flip/match state machine.
</details>

## Meeting Someone New

Now that you know some basic sounds, it's time to actually use Spanish to meet someone. Here's a short conversation between two students meeting for the first time:

> **Ana:** ¡Hola! Me llamo Ana. ¿Cómo te llamas?
> **Luis:** Me llamo Luis. Mucho gusto.
> **Ana:** Igualmente. ¿De dónde eres?
> **Luis:** Soy de Minnesota. ¿Y tú?
> **Ana:** Soy de Texas también.

Notice the pattern in that conversation. *Me llamo* means "my name is." *Mucho gusto* means "nice to meet you," and you answer it with *igualmente* ("likewise") or *mucho gusto* right back. *¿De dónde eres?* asks where someone is from, and *soy de...* answers it.

- *Me llamo...* — My name is...
- *¿Cómo te llamas?* — What's your name?
- *Mucho gusto.* — Nice to meet you.
- *Igualmente.* — Likewise.
- *¿De dónde eres?* — Where are you from?
- *Soy de...* — I am from...

## The Verb *Ser*

All of those introduction phrases use a form of one very important verb: ***ser***, which means "to be." You'll use *ser* in almost every conversation this year, so it's worth learning its forms now.

| Spanish | English | Example |
|---|---|---|
| yo soy | I am | Yo soy Ana. |
| tú eres | you are (informal) | Tú eres de Texas. |
| él/ella es | he/she is | Ella es mi amiga. |
| nosotros somos | we are | Nosotros somos estudiantes. |
| ellos/ellas son | they are | Ellos son de España. |

#### Diagram: Ser Conjugation Practice

<iframe src="../../sims/ser-conjugation-practice/main.html" width="100%" height="340px" scrolling="no"></iframe>

<details markdown="1">
<summary>Ser Conjugation Practice</summary>
Type: microsim

**sim-id:** ser-conjugation-practice<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Give students repeated practice choosing the correct form of *ser* to match a subject, building the automatic recall they'll need for real conversation.

Bloom Level: Apply (L3)
Bloom Verb: apply

Learning objective: Students apply the correct conjugated form of *ser* (soy, eres, es, somos, son) to complete a sentence matching the given subject.

Visual elements: A sentence with a blank where the verb goes (e.g., "Ellos ___ de México."), and five buttons showing the five forms of *ser*.

Controls: Click the button with the correct form to fill the blank.

Default state: First sentence uses "Yo ___ estudiante," buttons unselected.

Behavior: Clicking the correct button fills the blank in green and shows the complete sentence with its English translation. Clicking an incorrect button flashes red and the sentence stays blank. A "Next" button loads a new sentence from a bank of 10.

Canvas layout: Sentence display (700 x 150px) with five answer buttons below (700 x 100px) and a Next button (700 x 40px). CANVAS_HEIGHT: 340.

Responsive design: Buttons stack into two rows on narrow screens; sentence text wraps and remains legible.

Implementation: p5.js canvas with a sentence-bank array (sentence template, subject, correctForm), click detection on five buttons, and simple correct/incorrect feedback state.
</details>

## Noun Gender: A New Idea

Here's something Spanish does that English doesn't: every noun (person, place, or thing) is either **masculine** or **feminine** -- even objects, like "book" or "chair." This isn't about the object itself; it's just a category the word belongs to, and it changes which little word ("el" or "la," meaning "the") goes in front of it.

- Words ending in **-o** are usually masculine: *el libro* (the book).
- Words ending in **-a** are usually feminine: *la mesa* (the table).

This might feel strange at first, but you'll get used to it fast, because you'll hear it constantly starting today.

!!! tip "Don't Panic About Exceptions"
    A few common words break the -o/-a pattern (like *el día*, "the day," which is masculine even though it ends in -a). Your teacher will point these out as they come up -- you don't need to memorize every exception today.

## Numbers, Age, and the Date

You already learned numbers 1-30 at the start of this unit. Now you'll put them to work in two very common sentences: telling your age, and giving today's date.

- *¿Cuántos años tienes?* — How old are you?
- *Tengo [number] años.* — I am [number] years old. (Literally: "I have [number] years.")
- *¿Cuál es la fecha?* — What is the date?
- *Hoy es el [number] de [month].* — Today is the [number]th of [month].

## Talking About Yourself

Chapter 1 also introduces vocabulary you'll use to describe your own interests -- sports, music, and school classes. These words don't need a new grammar rule; you can just plug them straight into sentences using words you already know.

- **Sports:** el fútbol, el básquetbol, el béisbol, el tenis
- **Music:** la música rock, la música pop, la música clásica
- **Classes:** la clase de matemáticas, la clase de ciencias, la clase de inglés
- **Foods:** la pizza, la fruta, el pan

#### Diagram: Vocabulary Flashcard Sprint

<iframe src="../../sims/vocabulary-flashcard-sprint/main.html" width="100%" height="320px" scrolling="no"></iframe>

<details markdown="1">
<summary>Vocabulary Flashcard Sprint</summary>
Type: microsim

**sim-id:** vocabulary-flashcard-sprint<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Quick daily-warm-up-style repetition of Unit 1 vocabulary (sports, music, classes, foods) across a timed round.

Bloom Level: Remember (L1)
Bloom Verb: identify

Learning objective: Students identify the English meaning of a Unit 1 Spanish vocabulary word (or vice versa) within a timed round, building recall speed.

Visual elements: One flashcard shown at a time with a Spanish word or phrase; four English-meaning buttons below, one correct and three plausible distractors from the same vocabulary category.

Controls: Click the button matching the card's meaning. A 60-second countdown timer runs across the top.

Default state: Timer at 60 seconds, first card from a shuffled 20-word bank, score at 0.

Behavior: Correct answers add a point and advance to the next card immediately; incorrect answers flash red and also advance (no penalty, low-stakes practice). When the timer reaches 0, a final score screen shows "You reviewed X words!" with a Play Again button.

Canvas layout: Timer bar (700 x 30px), flashcard (700 x 150px), four answer buttons in a 2x2 grid (700 x 140px). CANVAS_HEIGHT: 320.

Responsive design: Answer buttons stack vertically on narrow screens; card text scales to remain legible.

Implementation: p5.js canvas with a word bank (Spanish, English, category), a countdown timer using millis(), and randomized distractor selection from the same category.
</details>

## Culture Connection: Spain

This unit's chapter video introduces students to Spain -- the country where Spanish began. As you watch, notice how Spanish greetings, gestures, and daily routines are similar to and different from your own.

## Key Takeaways

- Spanish has one extra letter (ñ) and a few consistent pronunciation differences from English (h is silent, j sounds like h, ll sounds like y).
- *Ser* means "to be" and has five forms: soy, eres, es, somos, son.
- Every Spanish noun is masculine or feminine, usually shown by an -o or -a ending.
- You can now introduce yourself, say where you're from, tell your age, and give the date -- a complete first conversation in Spanish.

??? note "Quick check: How do you say 'Nice to meet you' back to someone who just said it to you? — Click to expand"
    You can say *mucho gusto* right back, or say *igualmente* ("likewise").
