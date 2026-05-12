# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A collection of standalone browser games — each game is a **single self-contained HTML file** with no build system, no dependencies, and no bundler. Open any file directly in a browser to play.

## Git Workflow

After every change: commit with a clean message and push to GitHub.

```bash
git add <file>
git commit -m "descriptive message"
git push
```

Remote: `https://github.com/dshanshiashvili-hub/browser-games` (branch: `main`)

## Games

| File | Description |
|------|-------------|
| `tictactoe.html` | 2-player tic tac toe with score tracking and panda emoji background |
| `shooter.html` | Retro top-down pixel shooter — wave survival, 3 enemy types, particle FX |

## shooter.html Architecture

The entire game runs in a single `<script>` block. Sections in order:

1. **Canvas + resize** — full-window canvas, re-fits on window resize
2. **Input** — `keys{}` object for keyboard state; `mouse{x,y,down}` for aim/fire
3. **Pixel-art helpers** — `px(x, y, w, h, color)` draws one scaled pixel using `S=3` as the base scale multiplier
4. **Player sprite** — `PLAYER_BODY` array of `[col, row, w, h, color]` rects defines the pixel-art figure; `drawPlayer()` renders it with leg-bob walk animation and a separately-rotated gun arm
5. **Enemy types** — `ENEMY_TYPES` object keys: `grunt` / `rusher` / `tank`, each with `{ color, size, hp, speed, score }`; `drawEnemy()` renders body + eyes + HP bar
6. **Particles** — flat array, each entry has `{x, y, vx, vy, size, color, life, decay}`; `spawnParticles()` / `updateParticles()` / `drawParticles()`
7. **Game state** — module-level `let` vars (`player`, `bullets`, `enemies`, `score`, `wave`, …); `restartGame()` resets all of them
8. **Spawn logic** — `spawnEnemy()` picks a random screen edge and a wave-weighted enemy type
9. **`update(dt)`** — single function: movement → gun angle → shooting → bullet OOB → wave timer → enemy AI → collision detection (circle-circle for both bullet↔enemy and enemy↔player)
10. **Draw functions** — `drawBackground()`, `drawScanlines()`, `drawHUD()`, `drawGameOver()`
11. **Game loop** — `loop(now)` computes `dt` in "frames at 60fps" units (`dt=1` = one 60fps frame), calls `update(dt)` then all draw functions

### Key conventions in shooter.html
- `dt` is frame-normalised: multiply speeds/cooldowns by `dt` for frame-rate independence
- All cooldown/timer values are in **frames at 60fps** (e.g. `fireCooldown = 7.5` ≈ 8 shots/sec)
- Collision radii use `(size / 2) * S` — always scale by `S` when comparing pixel-space distances
- Adding a new enemy type: add an entry to `ENEMY_TYPES` and adjust the `spawnEnemy()` probability weights
