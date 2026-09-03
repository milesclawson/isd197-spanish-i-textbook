---
title: "Unit 1: Review and El Ritmo de la Vida"
description: "Spanish 1B Unit 1 -- a quick review of Spanish 1A, then weekend activities, weather, and regular -er/-ir verbs."
generated_by: claude skill chapter-content-generator
date: 2026-08-31
version: 0.09
---

# Unit 1: Review and El Ritmo de la Vida

*Combines the Ven Conmigo Review of 1A and Chapter 5, El Ritmo de la Vida (The Rhythm of Life).*

## Summary

This unit starts with a quick review of everything you learned in Spanish 1A -- greetings, *ser*, noun gender, ages, and colors -- so you're ready to build on it. Then it moves into new territory: talking about what you and your friends like to do on weekends, describing the weather, and using a new group of verbs (*-er* and *-ir* verbs) to talk about everyday actions.

## What You Will Learn

- A quick refresher of 1A: greetings, *ser*, noun gender, numbers, age
- Regular *-er* and *-ir* verb endings
- How to talk about weekend activities with friends
- Seasons, months, and weather expressions
- Question words for asking about all of the above

## Review: What You Already Know

Before jumping into new material, let's quickly refresh the core building blocks from Spanish 1A. You'll use every one of these constantly in this unit and for the rest of the year:

| Topic | Reminder |
|---|---|
| Greetings | *Me llamo..., Mucho gusto, ¿De dónde eres?* |
| The verb *ser* | soy, eres, es, somos, son |
| Noun gender | words ending in **-o** are usually masculine, **-a** usually feminine |
| Age | *Tengo ___ años.* |
| Numbers | 1-30 |

If any of those feel shaky, that's exactly what the first week of this unit is for -- a slower-paced review before new content starts.

## New Verbs: *-Er* and *-Ir* Endings

In Spanish 1A, you learned *-ar* verbs (like *hablar*, to speak). Now you'll meet two more verb families: **-er** verbs (like *comer*, to eat) and **-ir** verbs (like *escribir*, to write). Both families follow a predictable pattern, just with slightly different endings than *-ar* verbs.

| Subject | -er verb (comer) | -ir verb (escribir) |
|---|---|---|
| yo | como | escribo |
| tú | comes | escribes |
| él/ella | come | escribe |
| nosotros | comemos | escribimos |
| ellos/ellas | comen | escriben |

Notice that *-er* and *-ir* verbs share almost the same endings -- they only differ in the *nosotros* form (*-emos* vs. *-imos*). Learning them together, side by side, is much easier than learning them separately.

#### Diagram: -Er and -Ir Verb Builder

<iframe src="../../sims/er-ir-verb-builder/main.html" width="100%" height="310px" scrolling="no"></iframe>

<details markdown="1">
<summary>-Er and -Ir Verb Builder</summary>
Type: microsim

**sim-id:** er-ir-verb-builder<br/>
**Library:** p5.js<br/>
**Status:** Built

Purpose: Help students see the shared pattern between -er and -ir verb endings by building conjugations side by side, rather than memorizing two separate lists.

Bloom Level: Apply (L3)
Bloom Verb: apply

Learning objective: Students apply the correct -er or -ir ending to a verb stem for a given subject pronoun, and identify the one form (nosotros) where the two families differ.

Visual elements: Two columns, one for an -er verb and one for an -ir verb, both showing the same subject pronoun at a time. Each column has a verb stem with a blank for the ending.

Controls: A subject-pronoun selector (yo, tú, él/ella, nosotros, ellos/ellas) and a text or multiple-choice input for the ending in each column.

Default state: Subject set to "yo," both endings blank.

Behavior: As the student selects an ending, both columns update live. When the subject is "nosotros," the tool highlights that this is the one row where -er (-emos) and -ir (-imos) endings differ, reinforcing the pattern from the prose above.

Canvas layout: Two-column verb display (700 x 220px) with subject selector below (700 x 60px). CANVAS_HEIGHT: 300.

Responsive design: Two columns stack vertically on narrow screens.

Implementation: p5.js canvas with a small conjugation-table data structure for comer and escribir, a subject-pronoun toggle, and live text rendering.
</details>

## Talking About Weekend Activities

With *-er* and *-ir* verbs in hand, you can now talk about a much wider range of activities than just the *-ar* verbs from Spanish 1A. Weekend plans are a natural place to use them:

- *leer* (to read) — Yo leo un libro los sábados.
- *correr* (to run) — Nosotros corremos en el parque.
- *escribir* (to write) — Ella escribe mensajes a sus amigos.
- *compartir* (to share) — Compartimos la pizza.

Spanish also has a special way to clarify *who* likes something, especially with verbs like *gustar*. You'll often hear phrases like *a él le gusta...* (he likes...) or *a ellos les gusta...* (they like...). The little word before the name or pronoun (*a*) points out exactly who you're talking about, which is especially useful when a group is being discussed.

| Clarifier | Meaning |
|---|---|
| a mí | to me |
| a ti | to you |
| a él / a ella | to him / to her |
| a nosotros | to us |
| a ustedes | to you all |
| a ellos / a ellas | to them |

## Seasons, Months, and Weather

Weather is one of the most common things people talk about in any language, and it pairs naturally with the seasons and months you'll need for scheduling and planning.

- **Seasons:** la primavera (spring), el verano (summer), el otoño (fall), el invierno (winter)
- **Weather:** Hace sol (It's sunny), Hace frío (It's cold), Hace calor (It's hot), Llueve (It's raining), Nieva (It's snowing)

#### Diagram: Weather and Season Explorer

<iframe src="../../sims/weather-season-explorer/main.html" width="100%" height="360px" scrolling="no"></iframe>

<details markdown="1">
<summary>Weather and Season Explorer</summary>
Type: infographic

**sim-id:** weather-season-explorer<br/>
**Library:** Custom (HTML/CSS/JavaScript)<br/>
**Status:** Built

Purpose: Connect weather expressions to the season they're most associated with, using an interactive visual rather than a flat vocabulary list.

Bloom Level: Understand (L2)
Bloom Verb: classify

Learning objective: Students classify weather expressions by the season(s) they're typically associated with, and state the Spanish phrase for a given weather condition.

Layout: Four season "cards" arranged in a row (primavera, verano, otoño, invierno), each with a background illustration hint (sun, snowflake, falling leaf, flower) implemented as simple CSS shapes/icons, not photographic images.

Interactive elements:
- Click a season card to reveal the 2-3 weather expressions most associated with it, with English translations
- A "Quiz Me" toggle that hides the translations and instead shows a weather icon, asking the student to type or select the matching Spanish phrase

Visual style: Warm color palette per season (spring: green/pink, summer: yellow/orange, fall: orange/brown, winter: blue/white).

Data: primavera -- Hace fresco, Llueve; verano -- Hace calor, Hace sol; otoño -- Hace viento, Hace fresco; invierno -- Hace frío, Nieva.

Responsive design: Four cards reflow to a 2x2 grid on narrow screens.

Implementation: HTML/CSS for the card layout with simple CSS-drawn season icons, JavaScript for click/reveal state and the quiz-mode toggle.
</details>

## Asking About All of This

You now have new verbs, new vocabulary, and weather expressions -- but you still need question words to ask other people about them. Review these from Spanish 1A and notice how naturally they fit this unit's new content:

- *¿Qué haces los fines de semana?* — What do you do on weekends?
- *¿Con quién?* — With whom?
- *¿Cuándo?* — When?
- *¿Qué tiempo hace?* — What's the weather like?

## Culture Connection: Florida

This unit's chapter video introduces Florida, a U.S. state with a large Spanish-speaking population. As you watch, pay attention to how Spanish is used in everyday life in a U.S. community, not just in another country.

## Key Takeaways

- *-Er* and *-ir* verbs share almost identical endings, differing only in the *nosotros* form.
- Clarifier phrases like *a él* and *a ellos* specify exactly who you're talking about, especially with *gustar*-type verbs.
- Weather and season vocabulary let you describe conditions and make weekend plans that depend on them.

??? note "Quick check: What's the difference between the nosotros form of an -er verb and an -ir verb? — Click to expand"
    -Er verbs end in *-emos* for nosotros (comemos), while -ir verbs end in *-imos* (escribimos). Every other form (yo, tú, él/ella, ellos/ellas) uses the same ending pattern for both verb families.
