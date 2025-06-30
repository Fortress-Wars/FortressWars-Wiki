# Killstreaks

_Introduced: v2.1.0_

---

### Overview

Killstreaks is a combat feature that rewards players for achieving multiple kills in a single life. The system highlights players on streaks with sound effects and messages. It also encourages others to shut them down for bonus rewards.

### Core Mechanics

#### Final Blow Only

Killstreaks only count final blows, not assists.

#### Killstreak Announcements

As a player reaches certain milestones, dramatic messages are broadcasted to all players. Messages are color-coded by streak level.

#### Streak Reset on Death

A player's killstreak ends when they are eliminated or die to any cause (including void, suicide, or logout).

#### Glow Effect

Upon reaching a killstreak milestone, the player glows for `60` ticks (unless they are invisible).

![Killstreaks - Glow](../assets/features/killstreaks/Killstreaks%20-%20Glow.png)

#### Credit Bonus

At the end of a game, players receive bonus credits based on their longest killstreak.

#### Cooldown Reset

Ability cooldowns are refreshed in the following ways:

- When a player reaches a killstreak milestone (5, 10, 15, etc.).
- When a player eliminates someone on a killstreak (assist or final blow).

### Nametag Update

Players' nametags display their current killstreak.

![Killstreaks - Nametags](../assets/features/killstreaks/Killstreaks%20-%20Nametags.png)

### Playerlist Update

The in-game playerlist shows each player's current killstreak, allowing everyone to track who's on a streak.

![Killstreaks - Playerlist](../assets/features/killstreaks/Killstreaks%20-%20Playerlist.png)

### Statistics

Statistics related to killstreaks. Statistics can be seen using `/stats`.

<!-- prettier-ignore -->
| Statistic | Description |
| --------- | ----------- |
| Killstreaks Started | The number of times a player has started a killstreak. |
| Killstreaks Ended | The number of times a player has ended another player's killstreak. |
| Longest Killstreak | The player's longest killstreaks.|

#### Achievements

Achievements related to killstreaks.

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Hard to Kill! | Go on a killstreak of 5 | 20 Credits |
| Relentless! | Go on a killstreak of 10. | 20 Credits |
| Unstoppable! | Go on a killstreak of 15. | 20 Credits |
| Rampage! | Go on a killstreak of 20. | 20 Credits |
| Godlike! | Go on a killstreak of 25. | 20 credits |
| Beyond Godlike! | Go on a killstreak of 30. | 20 Credits |

### Killstreak Messages

Messages are shown in chat when a player reaches a milestone:

| Streak | Message Example                                                                                                      |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| 5      | ![Killstreaks - Killing Spree](../assets/features/killstreaks/Killstreaks%20-%20Killing%20Spree.png)                 |
| 10     | ![Killstreaks - Relentless](../assets/features/killstreaks/Killstreaks%20-%20Relentless.png)                         |
| 15     | ![Killstreaks - Unstoppable](../assets/features/killstreaks/Killstreaks%20-%20Unstoppable.png)                       |
| 20     | ![Killstreaks - Rampage](../assets/features/killstreaks/Killstreaks%20-%20Rampage.png)                               |
| 25     | ![Killstreaks - Godlike](../assets/features/killstreaks/Killstreaks%20-%20Godlike.png)                               |
| 30     | ![Killstreaks - Beyond Godlike](../assets/features/killstreaks/Killstreaks%20-%20Beyond%20Godlike.png)               |
| 35+    | ![Killstreaks - Still Beyond Godlike](../assets/features/killstreaks/Killstreaks%20-%20Still%20Beyond%20Godlike.png) |

Messages are also shown when a killstreak ends:

| Reason      | Message Example                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| Elimination | ![Killstreaks - End Elimination](../assets/features/killstreaks/Killstreaks%20-%20End%20Elimination.png) |
| Suicide     | ![Killstreaks - End Suicide](../assets/features/killstreaks/Killstreaks%20-%20End%20Suicide.png)         |
| Other       | ![Killstreaks - End Other](../assets/features/killstreaks/Killstreaks%20-%20End%20Other.png)             |

### Configuration

configuration_description

```yaml
settings:
  killstreaks:
    enabled: true
    killsPerLevel: 5
    glowingDurationFromLevelIncrease: 60
```

### Properties

#### enabled

`Optional`

- Specifies if killstreaks are enabled.
- Default: `true`

#### killsPerLevel

`Optional`

- The number of kills required for each killstreak level.
- Default: `5`

#### glowingDurationFromLevelIncrease

`Optional`

- The duration, in ticks, of the glowing effect given to players when their killstreak level increases.
- Default: `60`

# Changelog

- 2.1.0 - First Introduced
