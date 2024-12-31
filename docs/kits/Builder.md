# Builder

---

#### ![builder-icon](../assets/icons/builder-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A utility kit that can place bricks and ladders around the map.
- **Role:** Utility
- **How to Unlock:** Unlocked by Default.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- {{ kits.builder.data.BUILDER_BRICKS_COUNT }} Builder Bricks
- {{ kits.builder.data.BUILDER_LADDERS_COUNT }} Builder Ladders
- {{ kits.builder.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Bricks**

## Bricks

Place bricks in most places around the map.

![Bricks](../assets/kits/builder/Builder%20-%20Place%201.gif)

#### **Brick Melee**

## Brick Melee

Use your bricks to melee and deal massive knockback. Damaging an enemy with your bricks will consume `{{ kits.builder.data.BUILDER_BRICKS_REMOVE_COUNT_ON_MELEE }}` bricks.

![Brick Melee](../assets/kits/builder/Builder%20-%20Melee.gif)

#### **Ladders**

## Ladders

Place ladders in most places around the map.

![Ladders](../assets/kits/builder/Builder%20-%20Place%202.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Builders Toolbox**

## Builders Toolbox

Regenerate 1 bricks every `{{ kits.builder.data.BUILDER_BRICKS_REGENERATION_TICK_INTERVAL }}` ticks and 1 ladder every `{{ kits.builder.data.BUILDER_LADDERS_REGENERATION_TICK_INTERVAL }}` ticks.

![Builders Toolbox 1](../assets/kits/builder/Builder%20-%20Builders%20Tool%20Box.gif)

Receive bricks and ladders from engineer dispensers.

![Builders Toolbox 2](../assets/kits/builder/Builder%20-%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| BUILDAH KILL! | Eliminate an enemy with your bricks. | 20 Credits |
| Don't underestimate the BRICKS! | Get a death plane kill as builder. | 20 Credits |
| Ladder to heaven! | Place 500 ladders. | 250 Credits |
| Sturdy fortress! | Place 1,000 bricks. | 250 Credits |
| Monumental Mason | Get 50 brick kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.builder.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| BUILDER_BRICKS_COUNT | `{{ kits.builder.data.BUILDER_BRICKS_COUNT }}` | The maximum number of bricks that the player can hold in a stack. |
| BUILDER_BRICKS_FINAL_BLOW_REWARD | `{{ kits.builder.data.BUILDER_BRICKS_FINAL_BLOW_REWARD }}` | The number of bricks awarded for a final blow. |
| BUILDER_BRICKS_ASSIST_REWARD | `{{ kits.builder.data.BUILDER_BRICKS_ASSIST_REWARD }}` | The number of bricks awarded or an assist. |
| BUILDER_BRICKS_REGENERATION_TICK_INTERVAL | `{{ kits.builder.data.BUILDER_BRICKS_REGENERATION_TICK_INTERVAL }}` | The interval, in ticks, at which the player receives bricks naturally. |
| BUILDER_BRICKS_KNOCKBACK | `{{ kits.builder.data.BUILDER_BRICKS_KNOCKBACK }}` | The knockback level of the bricks. |
| BUILDER_BRICKS_DAMAGE | `{{ kits.builder.data.BUILDER_BRICKS_DAMAGE }}` | The base melee damage of the bricks. |
| BUILDER_BRICKS_SPEED | `{{ kits.builder.data.BUILDER_BRICKS_SPEED }}` | The base melee speed of the bricks. |
| BUILDER_BRICKS_REMOVE_COUNT_ON_MELEE | `{{ kits.builder.data.BUILDER_BRICKS_REMOVE_COUNT_ON_MELEE }}` | The number of bricks to remove from the current stack after meleeing an enemy. |
| BUILDER_BRICKS_DISPENSER_NUM | `{{ kits.builder.data.BUILDER_BRICKS_DISPENSER_NUM }}` | The number of bricks dispensed to the player from an engineer dispenser. |
| BUILDER_LADDERS_COUNT | `{{ kits.builder.data.BUILDER_LADDERS_COUNT }}` | The maximum number of ladders that the player can hold in a stack. |
| BUILDER_LADDERS_REGENERATION_TICK_INTERVAL | `{{ kits.builder.data.BUILDER_LADDERS_REGENERATION_TICK_INTERVAL }}` | The interval, in ticks, at which the player receives ladders natrually. |
| BUILDER_LADDERS_FINAL_BLOW_REWARD | `{{ kits.builder.data.BUILDER_LADDERS_FINAL_BLOW_REWARD }}` | The number of ladders awarded for a final blow. |
| BUILDER_LADDERS_ASSIST_REWARD | `{{ kits.builder.data.BUILDER_LADDERS_ASSIST_REWARD }}` | The number of ladders awarded for an assist.|
| BUILDER_LADDERS_DISPENSER_NUM | `{{ kits.builder.data.BUILDER_LADDERS_DISPENSER_NUM }}` | The number of ladders dispensed to the player from an engineer dispenser. |
