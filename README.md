# Pairs

A UI design portfolio with a playable card-matching memory game, built for SEG3125
(Analysis and Design of User Interfaces). The site opens on the portfolio; the game is the
"Pairs" case study.

Live portfolio: https://hadibeiram.github.io/memory-game/
Play the game: https://hadibeiram.github.io/memory-game/#game

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
  App.jsx          routes between the portfolio, the game, and hold pages
  Portfolio.jsx    portfolio landing (about, how I work, case studies)
  GamePage.jsx     wraps the game flow
  HoldPage.jsx     "coming soon" page for unfinished case studies
  StartScreen.jsx  difficulty and card-set picker
  Game.jsx         board, peek, matching, timer, best score, win screen
  Card.jsx         a single flip card
  data.js          levels, card sets, shuffle
  index.css        all styling
report/report.pdf  the Assignment 3 design report
```
