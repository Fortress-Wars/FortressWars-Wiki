# Respawn System

> Documentation for the respawn system.

---

## Overview

In Fortress Wars, the respawn system is **wave-based**, playing a key role in controlling the pacing of the game and influencing combat dynamics. These mechanics ensure players respawn in groups, fostering opportunities for coordinated team plays while adding strategic depth to team positioning, engagement, and objectives.

Respawn waves begin when a player dies. The duration of the wave is equal to the player's respawn time. Several factors can influence this duration, including the winning team, the game mode, and the current game state. If another player dies within the configured wave window, they will join the ongoing respawn wave. However, if a player dies after the wave window expires, they will start a new respawn wave. Each team has its own set of respawn waves.

## Configuration

### settings.yml

The default respawn times for every map.

```yaml
settings:
  defaultRespawnTimes:
    low: 5
    medium: 10
    high: 15
    waveWindow: 5
```

### map.yml

The respawn times for a specific map.

```yaml
respawnTimes:
  low: 5
  medium: 10
  high: 15
```

### Properties

#### low

`Optional`

- The high configuration property specifies the **shortest** duration of a respawn wave.

#### medium

`Optional`

- The high configuration property specifies the **normal** duration of a respawn wave.

#### high

`Optional`

- The high configuration property specifies the **longest** duration of a respawn wave.

#### waveWindow

`Optional`

- The wave window configuration property defines the duration, starting from the beginning of a respawn wave, during which a player must die to be included in that specific wave. If the player dies after this time window expires, they will be placed in the next respawn wave instead.

## Commands

Commands related to respawning.

### /respawn

Instantly respawn.

- Permissions:
  - fw.respawn
