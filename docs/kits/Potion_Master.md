# Potion Master

---

#### ![potion-master-icon](../assets/icons/potion-master-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that uses various potions to debuff enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Throwable Potion
- {{ kits.potion_master.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Throwable Potion**

## Throwable Potion

Right-click to throw the potion. If the potion hits an enemy, it will affect them with its current potion effect. There are `4` different effects: Harming, Slowness, Poison, and Weakness. The ability will only cycle to the next potion effect after affecting an enemy with the current effect. The ability has a cooldown of `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_COOLDOWN }}` ticks.

<!-- tabs:start -->

#### **Harming**

## Harming

Affects enemies with Instant Damage (Level: `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_HARMING_LEVEL }}`)

![Potion Master - Harming](../assets/kits/potion_master/Potion%20Master%20-%20Harming.gif)

#### **Slowness**

## Slowness

Affects enemies with Slowness (Level: `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_LEVEL }}` for `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_DURATION }}` ticks)

![Potion Master - Slowness](../assets/kits/potion_master/Potion%20Master%20-%20Slowness.gif)

#### **Poison**

## Poison

Affects enemies with Poison (Level: `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_LEVEL }}` for `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_DURATION }}` ticks)

![Potion Master - Poison](../assets/kits/potion_master/Potion%20Master%20-%20Poison.gif)

#### **Weakness**

## Weakness

Affects enemies with Weakness (Level: `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_LEVEL }}` for `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_DURATION }}` ticks)

![Potion Master - Weakness](../assets/kits/potion_master/Potion%20Master%20-%20Weakness.gif)

<!-- tabs:end -->
<!-- tabs:end -->

<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Damage? What Damage? | Kill a brute while they are in berserk and have weakness applied as potion master. | 20 Credits |
| Creeper Cocktail | Throw a potion on an enemy creeper as potion master. | 20 Credits |
| Two to go please! | Get a double potion kill. | 20 Credits |
| Superb Cocktail | Get 50 potion kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.potion_master.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| POTION_MASTER_SWORD_DAMAGE | `{{ kits.potion_master.data.POTION_MASTER_SWORD_DAMAGE }}` | The base damage of the sword. |
| POTION_MASTER_SWORD_SPEED | `{{ kits.potion_master.data.POTION_MASTER_SWORD_SPEED }}` | The base speed of the sword. |
| POTION_MASTER_THROWABLE_POTION_COOLDOWN | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_COOLDOWN }}` | The cooldown, in ticks, of the throwable potion ability. |
| POTION_MASTER_THROWABLE_POTION_VELOCITY_MULTIPLIER | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_VELOCITY_MULTIPLIER }}` | The velocity multiplier for throwing potions. |
| POTION_MASTER_THROWABLE_POTION_HARMING_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_HARMING_LEVEL }}` | The level of the harming effect. |
| POTION_MASTER_THROWABLE_POTION_HARMING_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_HARMING_DURATION }}` | The duration, in ticks, of the harming effect. |
| POTION_MASTER_THROWABLE_POTION_SLOWNESS_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_LEVEL }}` | The level of the slowness effect. |
| POTION_MASTER_THROWABLE_POTION_SLOWNESS_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_DURATION }}` | The duration, in ticks, of the slowness effect. |
| POTION_MASTER_THROWABLE_POTION_POISON_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_LEVEL }}` | The level of the poison effect. |
| POTION_MASTER_THROWABLE_POTION_POISON_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_DURATION }}` | The duration, in ticks, of the poison effect. |
| POTION_MASTER_THROWABLE_POTION_WEAKNESS_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_LEVEL }}` | The level of the weakness effect. |
| POTION_MASTER_THROWABLE_POTION_WEAKNESS_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_DURATION }}` | The duration, in ticks, of the weakness effect. |
| POTION_MASTER_THROWABLE_POTION_CYCLE_ON_HIT | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_CYCLE_ON_HIT }}` | If the throwable potion ability should cycle to the next effect only after hitting an enemy. |
