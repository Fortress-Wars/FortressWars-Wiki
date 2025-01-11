# Golem

---

#### ![golem-icon](../assets/icons/kits/golem-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A kit that uses the element of earth to hinder enemy movement.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Netherite Chestplate
- Leather Leggings (Brown)
- Leather Boots (Brown)
- Stone Sword
- Spell Wand
- {{ kits.golem.data.MAX_HEALING_POTIONS }} Healing Potions
- {{ kits.golem.data.MAX_MANA_POTIONS }} Mana Potions
- {{ kits._shared.data.MANA_MAX }} Mana

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Spell Wand**

## Spell Wand

A weapon that is used to cast spells. Casting spells costs mana and each spell has a cooldown.

### Casting

- Earth Shatter _(Left-Click)_
- Earth Wall (Horizontal) _(Right-Click)_
- Earth Wall (Vertical) _(Sneak + Right-Click)_

<!-- tabs:start -->

#### **Earth Shatter**

## Earth Shatter

The spell costs `{{ kits.golem.data.GOLEM_EARTH_SHATTER_MANA_COST }}` mana. Casting summons a shockwave on the ground that ripples out. The shockwave deals `{{ kits.golem.data.GOLEM_EARTH_SHATTER_DAMAGE }}` damage and applies the [rooting](#effects) effect to enemies. The rooting effect lasts `{{ kits.golem.data.GOLEM_EARTH_SHATTER_ROOTING_DURATION }}` ticks.

![Golem - Earth Shatter 1](../assets/kits/golem/Golem%20-%20Earth%20Shatter%201.gif)

![Golem - Earth Shatter 2](../assets/kits/golem/Golem%20-%20Earth%20Shatter%202.gif)

Earth shatter damages enemy engineer blocks.

![Golem - Earth Shatter Damage Engineer Blocks](../assets/kits/golem/Golem%20-%20Earth%20Shatter%20Damage%20Engineer%20Blocks.gif)

#### **Earth Wall**

## Earth Wall

The spell costs `{{ kits.golem.data.GOLEM_EARTH_WALL_MANA_COST }}` mana. Casting summons a wall of mud in front of the player. Earth Walls can be created horizontally and vertically.

![Golem - Earth Wall Horizontal](../assets/kits/golem/Golem%20-%20Earth%20Wall%20Horizontal.gif)

![Golem - Earth Wall Vertical](../assets/kits/golem/Golem%20-%20Earth%20Wall%20Vertical.gif)

Earth Walls can be broken by tools.

![Golem - Earth Wall Break With Tools](../assets/kits/golem/Golem%20-%20Earth%20Wall%20Break%20With%20Tools.gif)

<!-- tabs:end -->
<!-- tabs:end -->

### Effects

<!-- tabs:start -->

#### **Rooting**

## Rooting

Entities that are affected by the rooting effect are not able to move and take increased [Fire Damage](/technical_documentation/Damage#damage-types). Fire damage is increased by `+2` damage per level.

![Golem - Rooting Movement](../assets/kits/golem/Golem%20-%20Rooting%20Movement.gif)

![Golem - Rooting Increase Fire Damage](../assets/kits/golem/Golem%20-%20Rooting%20Increase%20Fire%20Damage.gif)

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Mana**

## Mana

Mana is a resource used to cast spells.

![Golem - Mana](../assets/kits/golem/Golem%20-%20Mana.png)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it regenerates slowly over time.

![Golem - Mana Regenerate](../assets/kits/golem/Golem%20-%20Mana%20Regenerate.gif)

After the player earns a final blow, they restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Golem - Mana Final Blow](../assets/kits/golem/Golem%20-%20Mana%20Final%20Blow.gif)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Golem - Mana Dispenser](../assets/kits/golem/Golem%20-%20Mana%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Even rocks move on | Get a double earth shatter kill. | 20 Credits |
| There is no planet B | Hit 4 enemies at once with one earth shatter. | 20 Credits |
| Earth Power | Cast 100 earth walls. | 250 Credits |
| Killer roots | Get 500 earth shatter kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.golem.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MAX_MANA_POTIONS | `{{ kits.golem.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
| MANA_POTION_CLICK_POTENCY | `{{ kits._shared.data.MANA_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_CLICK_POTENCY }} |
| MANA_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_POTENCY }} |
| MANA_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.MANA_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_THRESHOLD }} |
| MANA_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_HOTBAR_ONLY }} |
| MANA_MAX | `{{ kits._shared.data.MANA_MAX }}` | {{ kitDataSharedDescriptions.MANA_MAX }} |
| MANA_REGENERATION_RATE | `{{ kits._shared.data.MANA_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_RATE }} |
| MANA_REGENERATION_AMOUNT | `{{ kits._shared.data.MANA_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_AMOUNT }} |
| MANA_FINAL_BLOW_AMOUNT | `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_FINAL_BLOW_AMOUNT }} |
| MANA_ASSIST_AMOUNT | `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_ASSIST_AMOUNT }} |
| MANA_DISPENSER_DISPENSE_AMOUNT | `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_DISPENSER_DISPENSE_AMOUNT }} |
| TANK_ROLE_KNOCKBACK_PERCENTAGE | `{{ kits._shared.data.TANK_ROLE_KNOCKBACK_PERCENTAGE }}` | {{ kitDataSharedDescriptions.TANK_ROLE_KNOCKBACK_PERCENTAGE }} |
| SHIELD_REGENERATION_DELAY | `{{ kits._shared.data.SHIELD_REGENERATION_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_DELAY }} |
| SHIELD_REGENERATION_RATE | `{{ kits._shared.data.SHIELD_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_RATE }} |
| SHIELD_REGENERATION_AMOUNT | `{{ kits._shared.data.SHIELD_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_AMOUNT }} |
| SHIELD_BREAK_COOLDOWN | `{{ kits._shared.data.SHIELD_BREAK_COOLDOWN }}` | {{ kitDataSharedDescriptions.SHIELD_BREAK_COOLDOWN }} |
| GOLEM_SWORD_DAMAGE | `{{ kits.golem.data.GOLEM_SWORD_DAMAGE }}` | The base damage of the sword. |
| GOLEM_SWORD_SPEED | `{{ kits.golem.data.GOLEM_SWORD_SPEED }}` | The base speed of the sword. |
| GOLEM_WAND_KNOCKBACK_LEVEL | `{{ kits.golem.data.GOLEM_WAND_KNOCKBACK_LEVEL }}` | The level of the knockback enchantment on the spell wand. |
| GOLEM_EARTH_WALL_MANA_COST | `{{ kits.golem.data.GOLEM_EARTH_WALL_MANA_COST }}` | The cost of mana to cast the earth wall spell. |
| GOLEM_EARTH_WALL_CAST_COOLDOWN | `{{ kits.golem.data.GOLEM_EARTH_WALL_CAST_COOLDOWN }}` | The earth wall spell's cooldown in ticks. |
| GOLEM_EARTH_WALL_DURATION | `{{ kits.golem.data.GOLEM_EARTH_WALL_DURATION }}` | The duration, in ticks, of summoned earth walls. |
| GOLEM_EARTH_WALL_MAX_RANGE | `{{ kits.golem.data.GOLEM_EARTH_WALL_MAX_RANGE }}` | The maximum distance, in meters, from the player that earth walls can be summoned. |
| GOLEM_EARTH_SHATTER_MANA_COST | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_MANA_COST }}` | The cost of mana to cast the earth shatter spell. |
| GOLEM_EARTH_SHATTER_CAST_COOLDOWN | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_CAST_COOLDOWN }}` | The earth shatter spell's cooldown in ticks. |
| GOLEM_EARTH_SHATTER_ANGLE | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_ANGLE }}` | The angle, in degrees, of the earth shatter shockwave. |
| GOLEM_EARTH_SHATTER_SPEED | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_SPEED }}` | The speed of the earth shatter shockwave. |
| GOLEM_EARTH_SHATTER_DAMAGE | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_DAMAGE }}` | The amount of damage the earth shatter shockwave deals to enemies. |
| GOLEM_EARTH_SHATTER_RANGE | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_RANGE }}` | The maximum distance, in meters, that the earth shatter shockwave travels. |
| GOLEM_EARTH_SHATTER_HEIGHT | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_HEIGHT }}` | The height, in meters, of the earth shatter entity hitbox. |
| GOLEM_EARTH_SHATTER_FALL_HEIGHT | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_FALL_HEIGHT }}` | The maximum distance, in meters, that the earth shatter shockwave is able to fall before dissipating. |
| GOLEM_EARTH_SHATTER_MUST_CAST_ON_GROUND | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_MUST_CAST_ON_GROUND }}` | If the player has to be within the `GOLEM_EARTH_SHATTER_FALL_HEIGHT` distance above the ground to cast the spell. |
| GOLEM_EARTH_SHATTER_ROOTING_DURATION | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_ROOTING_DURATION }}` | The duration, in ticks, of the earth shatter rooting effect. |
| GOLEM_EARTH_SHATTER_ROOTING_LEVEL | `{{ kits.golem.data.GOLEM_EARTH_SHATTER_ROOTING_LEVEL }}` | The level of the earth shatter rooting effect. |
