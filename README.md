# Whimsy Wisteria Garden

Build a polished, peaceful, whimsical interactive storytelling website/game called "Whimsy Wisteria" for a Hack Club hackathon.

THEME:

The hackathon theme is "Perfect Day".

The game should explore the idea that a perfect day does not have to be extraordinary or flawless. It can be made from small meaningful moments, kindness, reflection, and the way we make other people feel.

IMPORTANT:

This is NOT a traditional game with points, health, timers, combat, levels, or a win/lose system.

It is a short interactive narrative experience where the player creates flower bouquets in response to letters and occasions. The player's flower choices should feel thoughtful and meaningful rather than like solving a conventional puzzle.

TECHNOLOGY:

- Build this as a standard web project.

- Use HTML, CSS, and vanilla JavaScript.

- Do NOT use a game engine.

- Do NOT use React unless absolutely required by the platform.

- Do NOT add a backend.

- Do NOT add a database.

- Do NOT add authentication.

- Do NOT add accounts.

- Do NOT add APIs.

- The project must run entirely in the browser.

- Keep the architecture simple enough for a student team to understand and modify.

- Organize the project cleanly into separate HTML, CSS, JavaScript, and assets sections.

- All visual assets should be easily replaceable later with PNG files supplied by the team.

OVERALL EXPERIENCE:

The game has this flow:

INTRODUCTION

↓

GARDEN

↓

LETTER / OCCASION

↓

FLOWER SELECTION

↓

BOUQUET

↓

CHARACTER RESPONSE

↓

NEXT LETTER

↓

Repeat for 5 stages

↓

FINAL REFLECTIVE ENDING

There should be 5 bouquet-making stages.

Do NOT implement time-of-day changes between stages. The garden should remain visually consistent throughout the main game. The "Perfect Day" theme should be communicated through the writing, situations, character dialogue, and emotional progression rather than through morning/day/evening visual changes.

==================================================

1. INTRODUCTION SCREEN

==================================================

Create an elegant opening screen.

Visual composition:

- Soft, warm, slightly lavender/cream background rather than harsh white.

- A front-facing main character positioned prominently near the center.

- A translucent animated wisteria vine/foliage element behind and around the character.

- The wisteria will eventually be supplied as an animated GIF.

- Leave the wisteria element as an easily replaceable asset.

- The character will eventually be supplied as a transparent PNG.

- The character should have a subtle floating/breathing animation using CSS.

- The movement should be extremely gentle and peaceful, approximately 5-10px of vertical movement over several seconds.

- Do not make the character bounce or move dramatically.

- Add subtle atmospheric movement if appropriate, but keep the scene calm.

The introduction should contain a dialogue box near the lower portion of the screen.

Dialogue should appear one message at a time.

The character introduces the garden and explains that flowers carry meanings and that people sometimes leave letters asking for bouquets.

The writing should be sincere, gentle, and poetic without becoming overly dramatic or childish.

Example tone:

"Every flower in this garden carries a little meaning."

"Sometimes, people leave letters here when they don't quite know how to say something."

"Perhaps you can help them."

Do not copy these exact lines if a better original version fits the experience.

Include a clear "Continue" button.

After the introduction dialogue is complete, the player can enter the garden.

==================================================

2. GARDEN SCREEN

==================================================

Create a magical but peaceful garden.

The garden should contain:

- Several flower beds

- Individual clickable flowers

- A small pond

- Water lilies in the pond

- Wisteria elements

- Soft foliage

- Small decorative details

- Clear paths/open spaces so the player can visually understand where flowers are located

The garden should feel illustrated and storybook-like rather than realistic.

Do not overcrowd the screen.

The garden background should be designed so that the player can clearly identify clickable flowers.

Use placeholder visual assets where necessary.

IMPORTANT:

All flower images, character images, background images, and decorative assets must be easy to replace later with local PNG/GIF files.

==================================================

3. FLOWERS

==================================================

Use exactly 6 primary flower types for the MVP:

1. Daisy

Meaning: new beginnings, innocence, simple happiness

2. Tulip

Meaning: affection, friendship, caring

3. Sunflower

Meaning: warmth, hope, optimism

4. Lavender

Meaning: calm, comfort, peace

5. Rose

Meaning: appreciation, deep emotion, affection

6. Water Lily

Meaning: reflection, peace, acceptance

These meanings should NOT be presented as rigid "correct answers."

The game should encourage interpretation.

The player should be able to select multiple flowers and create a bouquet.

The same flower may be selectable more than once if this is technically simple, but avoid making the interaction confusing.

When a flower is selected:

- Provide subtle visual feedback.

- Add the flower to the bouquet display.

- Do not use loud sounds, flashing effects, or aggressive animations.

==================================================

4. LETTER SYSTEM

==================================================

At each stage, the player receives a letter.

The letter provides the emotional context for the bouquet.

The player should NOT be told exactly which flowers to select.

Instead, the player should interpret the occasion.

There should be 5 increasingly thoughtful stages.

Stage 1:

A relatively simple, cheerful situation involving a new beginning or celebration.

Stage 2:

Someone who is nervous or uncertain and needs encouragement.

Stage 3:

A friendship or relationship involving change or separation.

Stage 4:

A more emotionally complex situation involving comfort, change, or bittersweet feelings.

Stage 5:

A reflective situation asking the player what they think makes a day feel perfect.

The stories should become deeper without becoming depressing, disturbing, or overly dark.

There should never be a single obvious "correct" bouquet.

==================================================

5. BOUQUET CREATION

==================================================

When the player begins selecting flowers, show a visible bouquet area.

Every selected flower should visually appear in the bouquet.

The bouquet should gradually become more complete as the player selects flowers.

Provide a clear:

"Done?"

button.

For the MVP, DO NOT implement ribbons, lace, wrapping, or additional bouquet decoration.

These may be added later if there is enough development time.

==================================================

6. CHARACTER RESPONSE

==================================================

When the player clicks "Done?", transition back to the character.

The character should appear with the completed bouquet.

The character gives a short, sincere response.

The response should be influenced by the general choices or the stage context, but it does not need a complicated scoring system.

Avoid:

- Points

- Stars

- Scores

- "Correct!"

- "Wrong!"

- Game over

- Leaderboards

The purpose is emotional reflection, not competition.

Example tone:

"I think they'll understand what you meant."

"You chose something gentle. Sometimes that's all someone needs."

Do not use these exact examples unless appropriate.

Then provide a button to continue to the next stage.

==================================================

7. FINAL STAGE AND ENDING

==================================================

After the fifth bouquet, return to the character.

The final stage should focus explicitly on the "Perfect Day" theme.

The final letter should ask the player to create a bouquet representing what a perfect day means to them.

There should be no correct answer.

The player makes their final bouquet.

After completing it, transition to the ending scene.

The ending should return to the same visual composition as the introduction:

- Character

- Wisteria

- Soft background

- Dialogue box

The character reflects on the player's journey.

The dialogue should communicate the central message:

A perfect day does not need to be flawless.

It can be made of small moments, kindness, connection, rest, and meaning.

End with a warm reminder that the player has helped others and should rest after their work.

The final message should feel sincere rather than preachy.

A possible conceptual ending is:

"Maybe a perfect day was never about everything going right."

"Maybe it was simply about noticing the little things that made it worth remembering."

"You've done enough for today."

"Rest. The garden will still be here."

Again, these are conceptual examples and should not necessarily be copied verbatim.

==================================================

8. VISUAL STYLE

==================================================

Overall aesthetic:

- Whimsical

- Peaceful

- Dreamlike

- Storybook

- Soft

- Elegant

- Slightly magical

- Emotionally warm

Avoid:

- Neon colors

- Harsh white backgrounds

- Excessive gradients

- Corporate UI

- Generic SaaS styling

- Excessive rounded cards everywhere

- Cartoonish childish UI

- Gamified XP bars

- Excessive particles

- Flashy transitions

- Clutter

Use a restrained palette inspired by:

- Soft lavender

- Muted sage

- Cream

- Dusty pink

- Gentle greens

- Muted floral colors

The interface should feel like part of the illustrated garden rather than a modern dashboard placed on top of it.

Typography should be elegant and highly readable.

==================================================

9. ANIMATION

==================================================

Use subtle CSS animations.

Character:

- Gentle floating/breathing movement.

Wisteria:

- The provided GIF should retain its own animation.

Flowers:

- Slight hover movement or gentle scale when interacted with.

Scene transitions:

- Soft fades.

- No rapid movement.

The game should feel calm.

==================================================

10. RESPONSIVENESS

==================================================

The primary target is desktop/laptop browsers.

Design primarily for 16:9 screens.

However, avoid hardcoding everything to one exact resolution.

The garden and UI should scale reasonably across common laptop and desktop screen sizes.

==================================================

11. CODE ORGANIZATION

==================================================

Keep the code understandable.

Use clear functions and variables.

Separate:

- Scene management

- Dialogue

- Flower selection

- Bouquet management

- Stage progression

Use data structures for the 5 stages rather than duplicating the same code five times.

For example, each stage should conceptually contain:

- Letter text

- Occasion

- Available flowers

- Character response

- Stage number

The flower meanings should also be stored in a clear data structure so they can easily be modified later.

Do not create unnecessary abstractions.

==================================================

12. PLACEHOLDER ASSETS

==================================================

For now, use clearly labeled placeholder assets for:

- Main character

- Wisteria

- Garden background

- Six flowers

- Water lilies

Make sure replacing a placeholder with a real PNG/GIF does not require rewriting the game logic.

The eventual asset structure should resemble:

assets/

    characters/

    backgrounds/

    flowers/

    ui/

    audio/

==================================================

13. AUDIO

==================================================

Leave a clean place in the project for background music.

Do not automatically add copyrighted music.

The eventual game will use a peaceful melodic background track supplied or created by the team.

The audio should:

- Start only after user interaction if browser autoplay restrictions require it.

- Have a volume control or easily adjustable volume in JavaScript.

- Be subtle and not interfere with dialogue.

==================================================

14. ACCESSIBILITY AND UX

==================================================

- Buttons should be readable.

- Text should have sufficient contrast.

- Clickable flowers should have obvious hover/selected states.

- Dialogue should be easy to read.

- Avoid relying only on color to communicate selection.

- Avoid tiny text.

==================================================

15. WHAT NOT TO BUILD

Do NOT add:

- Login

- User accounts

- Database

- Multiplayer

- Backend

- Chat

- Leaderboards

- Points

- Currency

- XP

- Inventory systems

- Timers

- Health

- Combat

- Character customization

- Complex movement systems

- Physics

- Game engine

- Ribbons/lace in the MVP

- Time-of-day progression

- Weather systems

- Procedural generation

- AI-generated dialogue at runtime

- External APIs

Keep the project small, polished, and emotionally coherent.

==================================================

FINAL GOAL

==================================================

The finished experience should feel like a small interactive story rather than a conventional game.

The player enters a peaceful garden, receives letters from people, interprets their feelings through flower choices, creates bouquets, receives sincere responses, and gradually arrives at their own interpretation of what makes a "perfect day."

Prioritize:

1. Strong visual atmosphere

2. Smooth interaction

3. Clear storytelling

4. Meaningful flower choices

5. Simple, maintainable code

6. A polished complete experience over excessive features

Build the project as a clean MVP first. Do not add extra features unless explicitly requested later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a27f770f-30fd-49e6-b5fb-1d8c6c8a57fb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
