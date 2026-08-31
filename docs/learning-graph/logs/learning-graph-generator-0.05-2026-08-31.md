# Session Log — learning-graph-generator v0.05

**Date:** 2026-08-31
**Book:** Spanish I (isd197-spanish-i-textbook)

## Steps completed

1. **Course description quality check** — skipped re-assessment; existing
   `quality_score: 100` in `course-description.md` frontmatter already
   cleared the ≥85 gate.
2. **Concept enumeration** — 200 concepts written to `concept-list.md`,
   reviewed and approved by the user with no changes.
3. **Dependency graph** — `learning-graph.csv` (3-column: ConceptID,
   ConceptLabel, Dependencies) authored directly, using the convention that
   every dependency ID is strictly less than its concept's ID (guarantees
   acyclicity by construction).
4. **Quality validation** — ran `analyze-graph.py` (bundled version, no
   separate version string in the script). First pass found 1 orphaned node
   (Months Of The Year) and 7 disconnected components (alphabet/pronunciation
   cluster, cognates cluster, dictionary/context-clues cluster,
   Canvas/online-tools cluster, Spanish-speaking-world-overview cluster, plus
   the main graph and one singleton). Fixed with 7 added cross-dependency
   edges (see diff in `learning-graph.csv` history). Second pass: 0 orphans,
   1 connected component, valid DAG, 35.5% terminal nodes (healthy range).
5. **Taxonomy** — 11 categories designed as a hybrid: cross-cutting `VERB`
   (verb conjugation systems), `GRAM` (articles/adjectives/sentence
   mechanics), and `CULT` (all paired cultural comparisons) pulled out
   across all four units, plus `FOUND`, `ACTFL`, `PRAC`, `ASMT`, and four
   per-unit vocabulary categories (`GREET`, `SCHL`, `FAM`, `FOOD`). Largest
   category 13.0% (`VERB`), smallest 3.0% (`ASMT`) — all under the 30%
   ceiling. TaxonomyID column added to `learning-graph.csv` via a one-off
   Python script using an explicit ID→category mapping (not the bundled
   `add-taxonomy.py` template, which is keyword/range-heuristic based and
   less precise for this hand-designed taxonomy).
6. **taxonomy-names.json** and **color-config.json** written using the
   skill's recommended 24-color palette (positions 1–11).
7. **metadata.json** written from `course-description.md` title/description.
8. **learning-graph.json** generated via `csv-to-json.py` (v0.04): 200 nodes,
   268 edges, 11 groups, 13 foundational concepts. No warnings.
9. **Schema validation** — attempted via `validate-learning-graph.py`
   against the bundled `learning-graph-schema.json`. **Validation failed**,
   but the failure is a bug in the bundled schema, not the data: the schema
   requires `groups.<ID>.color` to be a nested object matching pattern
   `^(#[0-9A-Fa-f]{6}|[a-z]+)$` (lowercase only), while SKILL.md's own Step 8
   instructions and `csv-to-json.py`'s actual output both use a flat
   `"color": "SteelBlue"` string with mixed-case CSS names (matching the
   skill's own documented 24-color palette, none of which are lowercase).
   Validation was skipped as optional per the skill instructions; the JSON
   matches the format the graph viewer actually consumes.
10. **taxonomy-distribution.py** run successfully — note: the report's
    "Category" column shows raw TaxonomyIDs instead of the human-readable
    names from `taxonomy-names.json` for all but `FOUND` (cosmetic script
    limitation, not a data issue — counts/percentages are correct).
11. **index.md** generated from `index-template.md` with TEXTBOOK_NAME →
    "Spanish I" and stats filled in (13 foundational concepts, 100%
    connectivity, chain length 11, quality score 100/100).

## Files created

- `course-description-assessment.md` (from prior course-description-analyzer run)
- `concept-list.md`
- `learning-graph.csv`
- `taxonomy-names.json`
- `color-config.json`
- `metadata.json`
- `learning-graph.json`
- `concept-taxonomy.md`
- `quality-metrics.md`
- `taxonomy-distribution.md`
- `index.md`

## Python program versions used

- `analyze-graph.py` — no explicit VERSION string in file
- `csv-to-json.py` — v0.04
- `taxonomy-distribution.py` — no explicit VERSION string in file
- `validate-learning-graph.py` — attempted, schema mismatch (see step 9)

## Known issues carried forward

- Bundled `learning-graph-schema.json` is stale relative to the
  SKILL.md-documented JSON format (nested-object vs. flat-string color).
  Not fixed here (out of scope — skill infrastructure, not book content).
- `taxonomy-distribution.py` doesn't consistently resolve human-readable
  category names in its report table. Cosmetic only.
