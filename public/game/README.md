# Whimsy Wisteria

A small interactive story built with plain HTML, CSS and vanilla JavaScript. No build step, no
frameworks, no backend — open `index.html` in a browser and it runs.

## Files

```
game/
  index.html        markup for all four scenes
  css/style.css     the whole design system (palette variables at the top)
  js/data.js        story content: flowers, intro lines, 5 stages, ending lines
  js/game.js        logic: scene manager, dialogue, flowers, bouquet, progression, audio
  assets/
    characters/     character.png       (transparent PNG)
    backgrounds/    garden.jpg, wisteria.png  (wisteria may be swapped for a GIF)
    flowers/        daisy / tulip / sunflower / lavender / rose / waterlily .png
    ui/             spare folder for future UI art
    audio/          drop theme.mp3 here for background music
```

## Editing the story

Everything a writer needs is in `js/data.js`.

- `FLOWERS` — name, meaning, image path, and `x`/`y` position in the garden (percentages).
- `INTRO_LINES` / `ENDING_LINES` — arrays of dialogue lines, one shown at a time.
- `STAGES` — one object per letter: `occasion`, `from`, `letter` (paragraphs), `flowers`
  (which flower ids appear), and `responseFor(picked)` which returns the reply lines.
  `picked` is the array of chosen flower ids — use it to lean the reply, never to score.

## Replacing art

Swap any file in `assets/` for your own PNG/GIF of the same name; no code changes needed.
If you rename a file, update the single path in `js/data.js` (flowers) or `index.html`
(character, wisteria, garden background).

## Audio

Put a peaceful loop at `assets/audio/theme.mp3`. It never autoplays — the player starts it with
the toggle in the top-right corner. Volume lives in `BGM_VOLUME` at the bottom of `js/game.js`.
