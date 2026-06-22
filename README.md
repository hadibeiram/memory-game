# Pairs

A card-matching memory game built for SEG3125 (Analysis and Design of User Interfaces),
Assignment 3.

Live: https://omarkaaki.me/memory-game/

## How to play

At the start of each round the whole board is shown for a three-second countdown. Memorize it,
then flip the cards two at a time to find every matching pair in as few moves as you can.

## Features

- **Memorize peek** before every round, so it tests memory instead of luck.
- **Three difficulty levels** — Easy (6 pairs), Medium (8 pairs), Hard (12 pairs).
- **Four card sets** — Animals, Fruit, Sports, Travel.
- **Move counter and timer**, plus a personal best saved per level and card set.
- Works with mouse, touch, and keyboard; the board adapts from phone to desktop.

## Running locally

```bash
npm install
npm run dev
```

Open the address Vite prints (default http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Tech

- React + Vite
- Plain CSS (custom properties, CSS grid, a 3D transform for the card flip)

The game logic — the peek, flipping, matching, timing, and scoring — is written from scratch.

## Files

```
src/
  App.jsx          screen switching
  StartScreen.jsx  difficulty and card-set picker
  Game.jsx         board, peek, matching, timer, best score, win screen
  Card.jsx         a single flip card
  data.js          levels, card sets, shuffle
  index.css        all styling
report/report.html the design report (open and print to PDF)
```
