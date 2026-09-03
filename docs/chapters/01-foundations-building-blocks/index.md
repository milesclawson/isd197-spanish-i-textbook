---
title: "Foundations: Building Blocks of Spanish"
description: "The mechanical building blocks of Spanish -- sounds, stress, numbers, time, and grammar basics -- that every later chapter depends on."
generated_by: claude skill chapter-content-generator
date: 2026-08-31 11:51:04
version: 0.09
---

# Foundations: Building Blocks of Spanish

## Summary

This opening chapter covers the mechanical building blocks every later chapter depends on: the Spanish alphabet, vowel sounds, syllable stress and written accents, cognates, numbers, days and months, subject pronouns, and noun gender and number. Students finish this chapter able to read Spanish aloud with correct stress, recognize cognates, and use the basic building blocks (numbers, days, pronouns) that every subsequent unit assumes.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

1. Spanish Alphabet
2. Vowel Sounds
3. Syllable Stress
4. Written Accent Marks
5. Cognates
6. False Cognates
7. Classroom Expressions
8. Question Words
9. Asking Questions
10. Numbers 0-30
11. Numbers 31-100
12. Days Of The Week
13. Months Of The Year
14. Telling Time
15. Subject Pronouns
16. Gender Of Nouns
17. Plural Of Nouns
18. Capitalization Rules

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

## Welcome to Spanish I

Every language has a small set of mechanical building blocks that everything else gets built on top of: a sound system, a way to count, a way to mark time, and a handful of grammar habits that show up in nearly every sentence. This chapter is where you pick up those building blocks for Spanish. None of it is about holding a conversation yet -- that starts in Chapter 2. Instead, think of this chapter as assembling your toolkit: the alphabet and sounds you'll read and speak with, the numbers and time expressions you'll need in the very first real conversations, and grammar habits (like noun gender and stress patterns) that will otherwise feel arbitrary later if you meet them without warning here.

## The Sound System: Alphabet and Vowels

Spanish uses the same 26 letters as English, plus one: **ñ** (pronounced like the "ny" in "canyon"). The good news is that Spanish spelling is far more predictable than English spelling -- once you learn how a letter sounds, it almost always sounds that way, in every word. Compare that to English, where the letter combination "ough" is pronounced five different ways depending on the word (though, through, cough, rough, bought).

The five Spanish vowels are the foundation of that predictability. Unlike English vowels, which shift sound depending on context (compare the "a" in "cat," "father," and "make"), each Spanish vowel has exactly one sound:

- **a** — like the "a" in "father"
- **e** — like the "e" in "bed"
- **i** — like the "ee" in "see"
- **o** — like the "o" in "go"
- **u** — like the "oo" in "moon"

Because every vowel keeps its sound no matter what word it's in, you can sound out almost any Spanish word correctly the first time you see it written -- something that's impossible with English. This predictability is the reason pronunciation gets taught before vocabulary in this chapter: it's a skill that pays off in every single word you learn from here forward.

## Finding the Stressed Syllable

Every Spanish word longer than one syllable has one syllable that gets extra emphasis when spoken -- the **stressed syllable**. Getting the stress right matters more in Spanish than in English, because in some word pairs, stress is the *only* difference between two completely different words. Spanish has two simple rules that predict where the stress falls in the vast majority of words:

1. If a word ends in a **vowel**, **n**, or **s**, the stress falls on the *second-to-last* syllable. Example: **ca-SA** (house), **HA-blan** (they speak), **LI-bros** (books).
2. If a word ends in any **other consonant**, the stress falls on the *last* syllable. Example: **ha-BLAR** (to speak), **re-LOJ** (clock).

Any word that doesn't follow these two rules needs a **written accent mark** (´) placed over the vowel that actually carries the stress, so a reader knows to break the normal pattern. That's the entire purpose of the accent mark in Spanish -- it's not decorative, it's a signal that says "stress goes here instead of where the rules would predict."

Before you look at the diagram below, it helps to see the pattern in a few side-by-side examples:

| Word | Ends in | Rule Applied | Stressed Syllable |
|---|---|---|---|
| casa | vowel (a) | Rule 1 | ca-**SA** |
| hablar | consonant (r) | Rule 2 | ha-**BLAR** |
| café | vowel (e), but accented | Overrides Rule 1 | ca-**FÉ** |
| rápido | vowel (o) | Overrides Rule 1 | **RÁ**-pi-do |
| estás | consonant... wait, s | Overrides Rule 1 | es-**TÁS** |

That last row is worth pausing on: **estás** ends in "s," so Rule 1 would normally put the stress on the second-to-last syllable ("ES-tas"). But the word is actually stressed on the last syllable ("es-TÁS"), so it needs a written accent to override the default rule. This is exactly the kind of exception the accent mark exists to flag.

#### Diagram: Stress Pattern Detective

<iframe src="../../sims/stress-pattern-detective/main.html" width="100%" height="375px" scrolling="no"></iframe>

<details markdown="1">
<summary>Stress Pattern Detective</summary>
Type: microsim

**sim-id:** stress-pattern-detective<br/>
**Library:** p5.js<br/>
**Status:** Built

Purpose: Give students hands-on practice applying the two stress rules (and recognizing when a written accent overrides them) before they meet the rules again in every vocabulary list for the rest of the book.

Bloom Level: Apply (L3)
Bloom Verb: apply

Learning objective: Students apply the vowel/n/s rule and the other-consonant rule to correctly identify the stressed syllable in unfamiliar Spanish words, and recognize when a written accent signals an exception.

Visual elements:
- A word bank of 15 words split into syllable blocks (e.g., "ca | SA"), drawn as separate rounded rectangles side by side
- A "Show Rule" toggle that displays which of the two rules applies to the current word's ending
- A running score counter in the top-right corner

Controls:
- Click on the syllable block you believe is stressed
- "Next Word" button advances to a new word from the bank
- "Show Rule" toggle (off by default)

Default state: First word loaded is "casa" with no syllable pre-selected.

Behavior: When the student clicks a syllable block, it highlights green if correct or red if incorrect, and a one-line explanation appears below the word (e.g., "Correct! 'casa' ends in a vowel, so stress falls on the second-to-last syllable."). Words with a written accent explain the override explicitly (e.g., "'café' ends in a vowel, which would normally put stress on 'ca' -- but the accent mark on 'é' overrides that and moves stress to the last syllable.").

Word bank (15 words, mixed): casa, hablan, libros, hablar, reloj, feliz, café, rápido, estás, número, lápiz, ciudad, ratón, papel, música.

Canvas layout: Drawing area with syllable blocks and feedback text (700 x 280px) above a controls area with buttons and score (700 x 80px). CANVAS_HEIGHT: 360.

Responsive design: Syllable blocks and controls must reflow and rescale on window resize; maintain minimum tap-target size of 44x44px for mobile use.

Implementation: p5.js canvas with an array of word objects (word, syllables, correctSyllableIndex, endingType, hasAccent), click detection on syllable rectangles, and a small state machine for score and feedback text.
</details>

## Cognates: Words You Already Know

One of the fastest ways to build Spanish vocabulary is to notice **cognates** -- words that look similar and mean the same thing in both languages, because English and Spanish both borrowed heavily from Latin. Words like *familia* (family), *diferente* (different), and *información* (information) are cognates: recognize the pattern once, and you can often guess dozens of related words without ever looking them up.

But cognates come with a trap. A **false cognate** is a word that looks like an English word but means something different -- sometimes very different. Mixing these up is one of the most common (and most embarrassing) mistakes new Spanish learners make.

!!! warning "False Cognates Are Sneaky"
    *Embarazada* looks like "embarrassed," but it actually means "pregnant." *Actual* looks like "actual," but it means "current" or "present-day" (so *actualmente* means "currently," not "actually"). *Éxito* looks like "exit," but it means "success." Always double-check a word that seems suspiciously easy -- it might be a false cognate in disguise.

The table below reinforces the distinction you just read about, comparing a few reliable cognates against a few notorious false cognates:

| Spanish Word | Looks Like | True Cognate? | Actual Meaning |
|---|---|---|---|
| familia | family | ✅ Yes | family |
| información | information | ✅ Yes | information |
| embarazada | embarrassed | ❌ No | pregnant |
| actual | actual | ❌ No | current, present-day |
| éxito | exit | ❌ No | success |

## Classroom Expressions and Asking Questions

Before you can talk about anything else in Spanish, it helps to be able to talk *about the class itself* -- asking your teacher to repeat something, or understanding an instruction. These classroom expressions are some of the most frequently repeated phrases you'll hear in every class period from here through Spanish IV:

- *Levanten la mano.* — Raise your hand.
- *Abran el libro.* — Open your book.
- *¿Cómo se dice...?* — How do you say...?
- *No entiendo.* — I don't understand.
- *¿Puede repetir, por favor?* — Can you repeat, please?

Notice that two of those expressions are themselves questions. Spanish marks a question in writing with an upside-down question mark (¿) at the *beginning* of the sentence as well as a normal one (?) at the end -- a visual cue that tells a reader "a question is coming" before they even reach it.

Most questions in Spanish, just like in English, start with a **question word**. Learning these eight words gives you the ability to ask about almost anything:

| Question Word | Meaning |
|---|---|
| qué | what |
| quién / quiénes | who |
| cuándo | when |
| dónde | where |
| por qué | why |
| cómo | how |
| cuál / cuáles | which |
| cuánto/a/os/as | how much / how many |

#### Diagram: Question Word Explorer

<iframe src="../../sims/question-word-explorer/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>Question Word Explorer</summary>
Type: infographic

**sim-id:** question-word-explorer<br/>
**Library:** Custom (HTML/CSS/JavaScript)<br/>
**Status:** Built

Purpose: Help students connect each of the eight Spanish question words to its meaning and to a model question, through active exploration rather than passive list memorization.

Bloom Level: Understand (L2)
Bloom Verb: interpret

Learning objective: Students interpret each Spanish question word by matching it to its English meaning and a natural example question.

Layout: A circular wheel with a center hub labeled "¿?" and the eight question words arranged as clickable spokes around it (qué, quién/quiénes, cuándo, dónde, por qué, cómo, cuál/cuáles, cuánto/a/os/as).

Interactive elements:
- Hovering over a spoke highlights it and shows the English meaning in a small tooltip
- Clicking a spoke opens an info panel below the wheel with: the question word, its meaning, and one example question with an English translation (e.g., "¿Dónde vives?" -- "Where do you live?")
- A "Show All" toggle that displays all eight meanings simultaneously for review mode

Visual style: Each spoke uses a distinct color from a warm 8-color palette; the center hub uses a neutral gray so it doesn't compete with the spokes.

Data (word / meaning / example question / translation):
- qué / what / ¿Qué hora es? / What time is it?
- quién, quiénes / who / ¿Quién es? / Who is it?
- cuándo / when / ¿Cuándo es la clase? / When is class?
- dónde / where / ¿Dónde vives? / Where do you live?
- por qué / why / ¿Por qué estudias español? / Why do you study Spanish?
- cómo / how / ¿Cómo estás? / How are you?
- cuál, cuáles / which / ¿Cuál prefieres? / Which do you prefer?
- cuánto/a/os/as / how much, how many / ¿Cuántos años tienes? / How old are you?

Responsive design: Wheel rescales proportionally on window resize; on narrow (mobile) viewports, the layout switches from a radial wheel to a vertical list of the same eight clickable items.

Implementation: HTML/CSS for the radial layout with SVG or absolutely-positioned divs for the spokes, JavaScript for hover/click state and the info panel.
</details>

## Counting in Spanish

Numbers show up constantly in real communication -- ages, prices, times, addresses -- which is why they belong in this foundations chapter rather than later. Spanish numbers 0 through 30 follow a pattern that's worth noticing rather than memorizing item by item:

- 0–15 are each their own word: *cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince*.
- 16–19 compress "ten and six/seven/eight/nine" into a single word: *dieciséis, diecisiete, dieciocho, diecinueve*.
- 20 is *veinte*, and 21–29 follow the same compression pattern as the teens: *veintiuno, veintidós* ... *veintinueve*.
- 30 is *treinta*.

Once you get past 30, the pattern changes: instead of compressing into one word, the tens and ones stay separate, joined by *y* ("and"). *Treinta y uno* (31), *treinta y dos* (32), and so on. The other tens follow the same pattern: *cuarenta* (40), *cincuenta* (50), *sesenta* (60), *setenta* (70), *ochenta* (80), *noventa* (90), and *cien* (100).

The table below summarizes that compression-versus-separation pattern so you can see it at a glance:

| Range | Pattern | Example |
|---|---|---|
| 0–15 | Individual words | quince (15) |
| 16–19 | Compressed: "dieci-" + digit | dieciséis (16) |
| 20 | Its own word | veinte (20) |
| 21–29 | Compressed: "veinti-" + digit | veintidós (22) |
| 31–99 | Separate words joined by *y* | treinta y uno (31) |
| 100 | Its own word | cien (100) |

#### Diagram: Spanish Number Builder

<iframe src="../../sims/spanish-number-builder/main.html" width="100%" height="260px" scrolling="no"></iframe>

<details markdown="1">
<summary>Spanish Number Builder</summary>
Type: microsim

**sim-id:** spanish-number-builder<br/>
**Library:** p5.js<br/>
**Status:** Built

Purpose: Let students build any number from 0-100 and immediately see (and eventually hear) how it's rendered in Spanish, reinforcing the compression-vs-separation pattern from the prose above.

Bloom Level: Apply (L3)
Bloom Verb: apply

Learning objective: Students apply the rules for combining tens and ones to correctly construct the Spanish word for any number from 0 to 100.

Visual elements:
- A large digit display showing the current number (0-100)
- A large text display below it showing the Spanish word for that number
- A colored highlight zone that activates automatically when the number falls in the 16-19 or 21-29 "compressed" ranges, with a small label reading "Compressed form!"

Controls:
- A single horizontal slider from 0 to 100
- Increment/decrement buttons (+1 / -1) for fine control

Default state: Slider starts at 0, displaying "cero."

Behavior: As the student drags the slider, both the digit display and the Spanish word update in real time. When the number is 16-19 or 21-29, the highlight zone activates to visually call out the compressed one-word form; for all other numbers above 15, the display shows the separate tens-and-ones construction with "y" between them.

Canvas layout: Display area with number and word (700 x 180px) above a controls area with slider and buttons (700 x 70px). CANVAS_HEIGHT: 250.

Responsive design: Slider width and text size must scale proportionally on window resize; maintain usable touch targets on mobile.

Implementation: p5.js canvas with a lookup/construction function that maps 0-100 to its correct Spanish word string, following the ranges and rules described above.
</details>

## Days, Months, and a Capitalization Surprise

Days of the week and months of the year are two more building blocks you'll reach for constantly once you start scheduling and describing your routine in Chapter 4. The seven days, starting with Monday (the conventional start of the week in Spanish-speaking countries), are: *lunes, martes, miércoles, jueves, viernes, sábado, domingo*. The twelve months are: *enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre*.

Here's the surprise: unlike English, Spanish does **not** capitalize days of the week or months of the year, except when one happens to start a sentence. You write *el lunes* (on Monday) and *en enero* (in January), not *el Lunes* or *en Enero*. This is the first example of a broader capitalization rule in Spanish, which you'll see again later in the course with nationalities and languages: only true proper names (people, specific places) get capitalized -- calendar words and identity words that function more like regular adjectives or nouns do not.

## Telling Time

Telling time combines two things you've already learned in this chapter -- numbers and a new grammatical pattern. The question *¿Qué hora es?* ("What time is it?") is answered with *Son las* + the hour, except for one o'clock, which uses *Es la* instead (because "una," one, is singular). From there:

- *y* + minutes describes time **after** the hour: *Son las tres y diez* (It's 3:10).
- *menos* + minutes describes time **before** the next hour: *Son las cuatro menos diez* (It's 3:50, literally "four minus ten").
- *y media* means "half past": *Son las dos y media* (It's 2:30).
- *y cuarto* / *menos cuarto* mean "quarter past" / "quarter to": *Es la una y cuarto* (It's 1:15).
- *de la mañana*, *de la tarde*, and *de la noche* specify morning, afternoon, and night, the way English uses "a.m." and "p.m."

#### Diagram: Time Teller Clock

<iframe src="../../sims/time-teller-clock/main.html" width="100%" height="460px" scrolling="no"></iframe>

<details markdown="1">
<summary>Time Teller Clock</summary>
Type: microsim

**sim-id:** time-teller-clock<br/>
**Library:** p5.js<br/>
**Status:** Built

Purpose: Let students manipulate an analog clock face and practice constructing the matching Spanish time phrase, reinforcing the y/menos/media/cuarto patterns from the prose above.

Bloom Level: Apply (L3)
Bloom Verb: demonstrate

Learning objective: Students demonstrate correct use of Son las / Es la, y, menos, media, and cuarto by manipulating a clock and reading the resulting time aloud in Spanish.

Visual elements:
- An analog clock face (circular, with hour and minute hands)
- A live-updating text display below the clock showing the full Spanish time phrase (e.g., "Son las cuatro menos diez de la tarde")
- A morning/afternoon/night toggle (de la mañana / de la tarde / de la noche)

Controls:
- Drag the hour hand to set the hour
- Drag the minute hand to set the minutes (snaps to 5-minute increments)
- Click the mañana/tarde/noche toggle to cycle through the three options

Default state: Clock shows 12:00 with no mañana/tarde/noche selected, and the text display prompts "Set a time to see it in Spanish."

Behavior: As hands move, the text display recalculates and updates instantly, correctly switching between "Son las" and "Es la" for one o'clock, and correctly choosing "y" vs "menos" based on which side of the half-hour the minute hand is on.

Canvas layout: Clock face (320 x 320px) with text display and toggle below (320 x 100px). CANVAS_HEIGHT: 450.

Responsive design: Clock face scales proportionally on window resize while remaining circular; text must remain legible at minimum width of 280px.

Implementation: p5.js canvas with polar-coordinate hand dragging, a time-to-Spanish-phrase conversion function implementing the y/menos/media/cuarto rules, and a simple toggle button for time-of-day.
</details>

## Subject Pronouns

**Subject pronouns** are the words that tell you *who* is doing an action -- "I," "you," "he," "we," and so on in English. You'll use them constantly starting in Chapter 2, so it's worth meeting the full set now:

| Spanish | English | Notes |
|---|---|---|
| yo | I | |
| tú | you (informal, singular) | used with friends, peers, family |
| usted | you (formal, singular) | used with teachers, strangers, elders |
| él / ella | he / she | |
| nosotros / nosotras | we | -as form used for all-female groups |
| vosotros / vosotras | you all (informal, Spain) | not commonly used outside Spain |
| ustedes | you all (formal, or general plural outside Spain) | |
| ellos / ellas | they | -as form used for all-female groups |

Notice that Spanish has two different words for "you" in the singular (*tú* and *usted*), depending on how formal the relationship is. That distinction -- and how to choose between them correctly -- becomes the very first grammar topic of Chapter 2, so keep this table in mind as a preview of what's coming.

## Noun Gender and Plurals

Every Spanish noun has a **grammatical gender** -- masculine or feminine -- even for objects that have no biological sex, like "book" or "table." This might feel unfamiliar coming from English, where only living things have gender. In Spanish, gender affects which articles ("the," "a") and adjectives can pair with a noun, which is why it matters from day one, even before you've learned a single adjective.

The endings of a noun are your best clue to its gender, though not a guarantee:

- Nouns ending in **-o** are usually masculine: *el libro* (the book), *el chico* (the boy).
- Nouns ending in **-a** are usually feminine: *la casa* (the house), *la chica* (the girl).
- A handful of common exceptions break this pattern and simply have to be learned individually, such as *el día* (the day, masculine despite ending in -a) and *la mano* (the hand, feminine despite ending in -o).

Making a noun plural follows its own pattern, based on how the word ends:

- If the noun ends in a **vowel**, add **-s**: *casa* → *casas*.
- If the noun ends in a **consonant**, add **-es**: *papel* → *papeles*.
- If the noun ends in **-z**, change the z to c before adding -es: *lápiz* → *lápices*.

#### Diagram: Noun Gender Sorter

<iframe src="../../sims/noun-gender-sorter/main.html" width="100%" height="350px" scrolling="no"></iframe>

<details markdown="1">
<summary>Noun Gender Sorter</summary>
Type: microsim

**sim-id:** noun-gender-sorter<br/>
**Library:** p5.js<br/>
**Status:** Built

Purpose: Give students repeated, low-stakes practice judging a noun's gender from its ending, including exposure to the common exceptions called out in the prose above.

Bloom Level: Evaluate (L5)
Bloom Verb: judge

Learning objective: Students judge the grammatical gender of a Spanish noun using ending patterns and known exceptions, and sort it correctly into an "el" or "la" bin.

Visual elements:
- Two labeled drop zones side by side: "el" (left) and "la" (right)
- A word card in the center showing one noun at a time
- A running accuracy score in the top corner
- A "Reveal Exceptions" toggle that, when on, marks exception words (like "día" and "mano") with a small asterisk before they're sorted

Controls:
- Drag the word card into the "el" or "la" bin (or, for accessibility, click the bin you choose)
- "Next Word" button after each sort
- "Reveal Exceptions" toggle (off by default, for a harder mode)

Default state: First card is "libro," toggle off, score at 0/0.

Behavior: When the student sorts a card, it flashes green (correct) or red (incorrect) and briefly shows the rule that applied (e.g., "casa ends in -a, so it's feminine: la casa" or "día is an exception -- it ends in -a but is masculine: el día"). Score updates after each attempt.

Word bank (12 nouns, mixed regular and exception): libro, casa, chico, chica, día, mano, mesa, problema, papel, ciudad, mapa, foto.

Canvas layout: Drop zones and card display (700 x 260px) above controls and score (700 x 60px). CANVAS_HEIGHT: 340.

Responsive design: Drop zones and card must resize and reflow on narrow viewports; support both drag-and-drop and click-to-select interaction so the activity works on touch devices.

Implementation: p5.js canvas with a word-object array (word, gender, isException), drag/click detection on the two drop zones, and a scoring state machine.
</details>

## Bringing the Chapter Together

You've now met all 18 foundational building blocks: how Spanish sounds, how it marks stress and capitalization, how to count and tell time, and the grammar habits (subject pronouns, noun gender) that shape almost every sentence you'll build starting in Chapter 2. None of these concepts are isolated facts -- they connect to and enable each other, and they'll each resurface constantly in the four content units ahead.

The concept map below lets you explore those connections directly: click any concept to see how it links to the others you just learned.

#### Diagram: Chapter 1 Concept Map

<iframe src="../../sims/chapter-1-concept-map/main.html" width="100%" height="640px" scrolling="no"></iframe>

<details markdown="1">
<summary>Chapter 1 Concept Map</summary>
Type: graph-data-model

**sim-id:** chapter-1-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Built

Purpose: Let students examine, rather than just read, how this chapter's 18 concepts depend on and enable each other, previewing the same graph-based structure used by the full course learning graph.

Bloom Level: Analyze (L4)
Bloom Verb: examine

Learning objective: Students examine the dependency relationships among this chapter's foundational concepts and identify which concepts (like Gender Of Nouns and Subject Pronouns) other chapters rely on most heavily.

Nodes: One node per concept in this chapter (18 total): Spanish Alphabet, Vowel Sounds, Syllable Stress, Written Accent Marks, Cognates, False Cognates, Classroom Expressions, Question Words, Asking Questions, Numbers 0-30, Numbers 31-100, Days Of The Week, Months Of The Year, Telling Time, Subject Pronouns, Gender Of Nouns, Plural Of Nouns, Capitalization Rules.

Node grouping and color:
- Sound & mechanics group (SteelBlue): Spanish Alphabet, Vowel Sounds, Syllable Stress, Written Accent Marks, Capitalization Rules
- Vocabulary strategy group (LimeGreen): Cognates, False Cognates
- Communication group (Gold): Classroom Expressions, Question Words, Asking Questions
- Numbers & time group (DarkGoldenrod): Numbers 0-30, Numbers 31-100, Days Of The Week, Months Of The Year, Telling Time
- Grammar mechanics group (DarkSlateBlue): Subject Pronouns, Gender Of Nouns, Plural Of Nouns

Edges: Directed edges matching this chapter's dependency subset of the course learning graph (e.g., Vowel Sounds -> Spanish Alphabet, Syllable Stress -> Spanish Alphabet + Vowel Sounds, Written Accent Marks -> Syllable Stress, Numbers 31-100 -> Numbers 0-30, Plural Of Nouns -> Gender Of Nouns, Asking Questions -> Question Words). Arrows point from a concept to the prerequisite it depends on.

Interactive elements:
- Click any node to open an info panel showing that concept's one-sentence definition (pulled from this chapter's prose) and highlight all of its direct connections
- Hover an edge to reveal a tooltip reading "[Concept A] is needed before [Concept B]"
- A legend in the corner identifies the four color groups

Visual style: Force-directed network layout, matching the visual language of the site-wide learning graph viewer so students recognize the pattern when they encounter the full graph later.

Canvas layout: Network area (700 x 480px) with legend and info panel below (700 x 120px). CANVAS_HEIGHT: 620.

Responsive design: Network must re-run its layout and rescale on window resize, keeping all nodes within the visible canvas area.

Implementation: vis-network with a nodes/edges dataset generated from this chapter's slice of learning-graph.json, plus a click handler that populates the info panel from a small definitions lookup table.
</details>

## Key Takeaways

- Spanish spelling is predictable: each of the five vowels has exactly one sound, so once you learn the sound system you can read almost any word aloud correctly.
- Two rules predict stress in most words (vowel/n/s → second-to-last syllable; other consonants → last syllable); written accents flag the exceptions.
- Cognates speed up vocabulary learning, but false cognates can trip you up -- always double-check words that seem "too easy."
- Numbers 16-19 and 21-29 compress into one word; everything from 31-99 stays as separate words joined by *y*.
- Days, months, and (later) nationalities are not capitalized in Spanish unless they start a sentence.
- Every noun has a grammatical gender, and -o/-a endings are a strong (but not perfect) clue to what it is.

??? note "Quick check: Why does *estás* need a written accent, but *casa* does not? — Click to expand"
    *Casa* ends in a vowel, so the default rule already predicts the correct stress (second-to-last syllable: ca-SA) -- no accent needed. *Estás* also ends in a letter that would normally trigger the "second-to-last syllable" rule (it ends in "s"), which would predict "ES-tas." But the word is actually stressed on the last syllable ("es-TÁS"), so it needs a written accent to override the default and signal the exception.

With these building blocks in place, Chapter 2 puts them to work in your very first real Spanish conversations: greeting someone, choosing between *tú* and *usted*, and introducing yourself.
