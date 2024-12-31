# Gunner

---

#### ![gunner-icon](../assets/icons/gunner-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that uses a machine gun to damage enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Machine Gun
- {{ kits.gunner.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Machine Gun**

## Machine Gun

Right click to shoot bullets. Each time the player shoots, the heat meter percentage will increase. (The player must rev up before shooting)

![Machine Gun - Shoot](../assets/kits/gunner/Gunner%20-%20Shoot.gif)

If the hit enemy is blocking, they will still take damage, but will take `x{{ kits.gunner.data.GUNNER_BULLET_BLOCK_MULTIPLIER }}` damage.

![Machine Gun - Shoot Shield](../assets/kits/gunner/Gunner%20-%20Shoot%20Shield.gif)

#### **Rev Up**

## Rev Up

Left click to rev up.

![Rev Up](../assets/kits/gunner/Gunner%20-%20Rev%20Up.gif)

#### **Rev Down**

## Rev Down

Left click to rev down.

![Rev Down](../assets/kits/gunner/Gunner%20-%20Rev%20Down.gif)

The player will rev down automatcially if their machine gun overheats.

![Rev Down - Overheat](../assets/kits/gunner/Gunner%20-%20Overheat.gif)

The player will rev down automatcially if they are stunned or hacked.

![Rev Down - Stun](../assets/kits/gunner/Gunner%20-%20Stun.gif)

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Heat Meter**

## Heat Meter

The heat meter indicates how close the machine gun is to overheating.

![Heat Meter](../assets/kits/gunner/Heat_Meter.png)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Go ahead! Build your tiny gun, then run! | Destroy a sentry with your machine gun. | 20 Credits. |
| Not today, oh wait... | Get hit by a gunner bullet while shielding. | 20 Credits |
| Weeeeeeeeh! Waaaaaaaahh! | Gun down an enemy from 50 blocks away. | 50 Credits |
| Ooohhhh, run, run, I'm coming for you! | Get 50 machine gun kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.gunner.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| GUNNER_SWORD_DAMAGE | `{{ kits.gunner.data.GUNNER_SWORD_DAMAGE }}` | The base damage of the sword. |
| GUNNER_SWORD_SPEED | `{{ kits.gunner.data.GUNNER_SWORD_SPEED }}` | The base speed of the sword. |
| GUNNER_BULLET_DAMAGE | `{{ kits.gunner.data.GUNNER_BULLET_DAMAGE }}` | The base damage of a bullet. |
| GUNNER_FIRE_RATE | `{{ kits.gunner.data.GUNNER_FIRE_RATE }}` | The fire rate, in ticks, of the machine gun. |
| GUNNER_OVERHEAT_COOLDOWN | `{{ kits.gunner.data.GUNNER_OVERHEAT_COOLDOWN }}` | The cooldown, in ticks, after the machine gun overheats. (Overheat cooling duration) |
| GUNNER_OVERHEAT_PERCENTAGE_PER_SHOT | `{{ kits.gunner.data.GUNNER_OVERHEAT_PERCENTAGE_PER_SHOT }}` | The heat percentage increase per bullet shot from the machine gun. |
| GUNNER_BULLET_VELOCITY_MULTIPLIER | `{{ kits.gunner.data.GUNNER_BULLET_VELOCITY_MULTIPLIER }}` | The multiplier that controls the initial speed of the bullet. |
| GUNNER_REV_UP_ICD | `{{ kits.gunner.data.GUNNER_REV_UP_ICD }}` | The cooldown, in ticks, to rev up and down. |
| GUNNER_COOLING_RATE | `{{ kits.gunner.data.GUNNER_COOLING_RATE }}` | The percentage per tick that the heat meter cools off by when revved down. |
| GUNNER_BULLET_BLOCK_MULTIPLIER | `{{ kits.gunner.data.GUNNER_BULLET_BLOCK_MULTIPLIER }}` | The damage multiplier of bullets when damaging enemies that are blocking. |
