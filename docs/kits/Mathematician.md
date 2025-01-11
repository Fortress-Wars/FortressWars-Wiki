# Mathematician

---

#### ![mathematician-icon](../assets/icons/kits/mathematician-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A support kit that uses the power of math to heal and damage players.
- **Role:** Support
- **How to Unlock:** Completing the "Top-tier Pacifist" achievement.

<br />

# Gear

---

- Chainmail Chestplate
- Leather Leggings
- Leather Boots
- Stone Sword
- Worksheets
- {{ kits.mathematician.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Distribute Worksheets**

## Distribute Worksheets

Left click to distribute math worksheets. When players pick them up, it will increase their held worksheet count by `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISTRIBUTE_INCREMENT_AMOUNT }}`. Players can hold a maximum of `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEETS_PER_PLAYER }}` worksheets. In addition, worksheets will expire after `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_DURATION }}` ticks. This duration resets whenever a new worksheet is picked up. Worksheets will be removed if they mathematician dies, the player holding them dies, the player that is holding them is cleansed, or until all worksheet problems are answered.

![Mathematician - Distribute Worksheets](../assets/kits/mathematician/Mathematician%20-%20Distribute%20Worksheets.gif)

#### **Solve Practice Problems**

## Solve Practice Problems

Right click to start solving problems. Practice problems can be Addition, Subtraction, Multiplication, or Division problems. Problems can include negative numbers. The initial problem arguments are created using a number between `-{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_MAX_ARGUMENT_MAGNITUDE }}` and `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_MAX_ARGUMENT_MAGNITUDE }}`.

![Mathematician - Generate Practice Problem](../assets/kits/mathematician/Mathematician%20-%20Generate%20Practice%20Problem.gif)

Players can generate a new problem every `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_GENERATE_COOLDOWN }}` ticks.

<!-- tabs:start -->

#### **Answer Correctly**

## Answer Correctly

When the player answers a problem correctly, they will receive a random [buff](#buffs). The player will also deal `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_DAMAGE }}` damage to all enemies with worksheets and restore `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_ALLY_HEALING }}` hp to allies with worksheets.

![Mathematician - Answer Correctly](../assets/kits/mathematician/Mathematician%20-%20Answer%20Correctly.gif)

![Mathematician - Damage Enemies](../assets/kits/mathematician/Mathematician%20-%20Damage%20Enemies.gif)

![Mathematician - Heal Allies](../assets/kits/mathematician/Mathematician%20-%20Heal%20Allies.gif)

#### **Answer Incorrectly**

## Answer Incorrectly

When the player answers a problem incorrectly, they will receive a random [debuff](#debuffs). The player will also restore `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_ENEMY_HEALING }}` hp to enemies with worksheets.

![Mathematician - Answer Incorrectly](../assets/kits/mathematician/Mathematician%20-%20Answer%20Incorrectly.gif)

![Mathematician - Heal Enemies](../assets/kits/mathematician/Mathematician%20-%20Heal%20Enemies.gif)

<!-- tabs:end -->

When the player answers a problem, all of the players that are affected by the outcome will have their held worksheets count reduced by `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISTRIBUTE_DECREMENT_AMOUNT }}`.

![Mathematician - Reduce Distributed Worksheet Count](../assets/kits/mathematician/Mathematician%20-%20Reduce%20Distributed%20Worksheet%20Count.gif)

Players will receive `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISPENSE_AMOUNT }}` worksheets from [Engineer Dispensers](Engineer#dispensers).

![Mathematician - Worksheets From Engineer Dispensers](../assets/kits/mathematician/Mathematician%20-%20Worksheets%20From%20Engineer%20Dispensers.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Math Tutor**

## Math Tutor

When eliminating an enemy, the player will receive a random [buff](#buffs) and receive `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_ELIMINATION_REWARD }}` additional worksheets.

![Mathematician - Math Tutor](../assets/kits/mathematician/Mathematician%20-%20Math%20Tutor.gif)

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Buffs**

## Buffs

Available Buffs:

- Absorption
- Fire Resistance
- Haste
- Health Boost
- Invisibility
- Jump Boost
- Regeneration
- Resistance
- Speed
- Strength
- Water Breathing

#### **Debuffs**

## Debuffs

Available Debuffs:

- Blindness
- Darkness
- Glowing
- Levitation
- Mining Fatigue
- Nausea
- Slow Falling
- Slowness
- Poison
- Weakness
- Wither

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Algebruh moment | Pay the ultimate price for incorrectly answering a practice problem. | 20 Credits |
| Consequences of bad math | Heal an enemy. | 20 Credits |
| Math Wizard | Solve 100 math problems. | 250 Credits |
| All according to my calculations | Do a total of 1,000 math healing. | 500 Credits |
| Just an arbitrary number | Get 50 practice problems kills. | 1,000 Credits |
| Top-tier Pacifist | Win a game with the best EDR with no final blows. | Kit Mathematician |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.mathematician.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MATHEMATICIAN_SWORD_DAMAGE | `{{ kits.mathematician.data.MATHEMATICIAN_SWORD_DAMAGE }}` | The base damage of the sword. |
| MATHEMATICIAN_SWORD_SPEED | `{{ kits.mathematician.data.MATHEMATICIAN_SWORD_SPEED }}` | The base speed of the sword. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_DURATION | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_DURATION }}` | The duration, in ticks, that worksheets are held for. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_DAMAGE | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_DAMAGE }}` | The damage dealt after solving practice problems. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_ALLY_HEALING | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_ALLY_HEALING }}` | The hp restored to allies after answering a practice problem correctly. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_ENEMY_HEALING | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_ENEMY_HEALING }}` | The hp restored to enemies after answering a practice problem incorrectly. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_MAX_ARGUMENT_MAGNITUDE | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_MAX_ARGUMENT_MAGNITUDE }}` | The maxiumum magnitude of arguments when generating practice problems. |
| MATHEMATICIAN_PRACTICE_PROBLEMS_GENERATE_COOLDOWN | `{{ kits.mathematician.data.MATHEMATICIAN_PRACTICE_PROBLEMS_GENERATE_COOLDOWN }}` | The cooldown, in ticks, of generating practice problems. |
| MATHEMATICIAN_WORKSHEETS_PER_PLAYER | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEETS_PER_PLAYER }}` | The maximum number of worksheets allies and enemies can hold. |
| MATHEMATICIAN_WORKSHEET_COUNT | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_COUNT }}` | The maximum number of distributable worksheets the player can hold in their inventory. |
| MATHEMATICIAN_WORKSHEET_REGENERATION_RATE | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_REGENERATION_RATE }}` | The rate, in ticks, that distributable worksheets will be restored. |
| MATHEMATICIAN_WORKSHEET_THROW_COOLDOWN | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_THROW_COOLDOWN }}` | The cooldown, in ticks, of distributing worksheets. |
| MATHEMATICIAN_WORKSHEET_EFFECT_DURATION | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_EFFECT_DURATION }}` | The duration, in ticks, of buffs and debuffs. |
| MATHEMATICIAN_WORKSHEET_EFFECT_LEVEL | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_EFFECT_LEVEL }}` | The level of buffs and debuffs. |
| MATHEMATICIAN_WORKSHEET_VELOCITY_MULTIPLIER | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_VELOCITY_MULTIPLIER }}` | The throw velocity of distributing worksheets. |
| MATHEMATICIAN_WORKSHEET_DISTRIBUTE_INCREMENT_AMOUNT | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISTRIBUTE_INCREMENT_AMOUNT }}` | The amount of worksheets to remove after solving a problem from affected players. |
| MATHEMATICIAN_WORKSHEET_DISTRIBUTE_DECREMENT_AMOUNT | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISTRIBUTE_DECREMENT_AMOUNT }}` | The amount of worksheets to add after a player picks up a worksheet. |
| MATHEMATICIAN_WORKSHEET_DISPENSE_AMOUNT | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_DISPENSE_AMOUNT }}` | The amount of worksheets `Engineer Dispensers` dispense. |
| MATHEMATICIAN_WORKSHEET_ELIMINATION_REWARD | `{{ kits.mathematician.data.MATHEMATICIAN_WORKSHEET_ELIMINATION_REWARD }}` | The amount of worksheets given after getting an elimination. |
