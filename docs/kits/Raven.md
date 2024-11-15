# Raven

---

#### ![raven-icon](../assets/icons/raven-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that uses the element of air to swifty move around.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Leather Leggings (Green)
- Chainmail Boots
- Diamond Sword
- Spell Wand
- {{ kits.raven.data.MAX_MANA_POTIONS }} Mana Potions
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

- Wind Gust (Target Enemies) _(Left-Click)_
- Wind Gust (Target Enemies + Allies) _(Sneak + Left-Click)_
- Flight _(Right-Click)_

<!-- tabs:start -->

#### **Wind Gust**

## Wind Gust

The spell costs `{{ kits.raven.data.RAVEN_WIND_GUST_MANA_COST }}` mana. Casting summons a gust of wind that travels forward in the direction the player is looking. The wind gust carries enemies and deals `{{ kits.raven.data.RAVEN_WIND_GUST_DAMAGE }}` damage to them.

![Raven - Wind Gust Enemies](../assets/kits/raven/Raven%20-%20Wind%20Gust%20Enemies.gif)

If the player is sneaking while casting, the wind gust also carries allies. This includes the player.

![Raven - Wind Gust Allies](../assets/kits/raven/Raven%20-%20Wind%20Gust%20Allies.gif)

#### **Flight**

## Flight

Casting the spell activates flight for the player. While flight is active, the spell consumes `{{ kits.raven.data.RAVEN_FLIGHT_ACTIVE_MANA_COST }}` mana every `{{ kits.raven.data.RAVEN_FLIGHT_TICK_RATE }}` ticks. If the spell is casted again, flight deactivates.

![Raven - Flight Use](../assets/kits/raven/Raven%20-%20Flight%20Use.gif)

If the player runs out of mana while flight is active, then the player takes `{{ kits.raven.data.RAVEN_FLIGHT_DAMAGE }}` damage every `{{ kits.raven.data.RAVEN_FLIGHT_TICK_RATE }}` ticks until flight is deactivated or canceled.

![Raven - Flight No Mana](../assets/kits/raven/Raven%20-%20Flight%20No%20Mana.gif)

Flight is canceled if the player is stunned, hacked, or takes [damage](/systems/Damage#damage-types) of the following types:

- Piercing
- Impaling
- Impact
- Electric
- Fire
- Ice

![Raven - Flight Porcupine Quill](../assets/kits/raven/Raven%20-%20Flight%20Porcupine%20Quill.gif)

![Raven - Flight Fire](../assets/kits/raven/Raven%20-%20Flight%20Fire.gif)

![Raven - Flight Grenade](../assets/kits/raven/Raven%20-%20Flight%20Grenade.gif)

<!-- tabs:end -->

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Mana**

## Mana

Mana is a resource used to cast spells.

![Raven - Mana](../assets/kits/raven/Raven%20-%20Mana.png)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it regenerates slowly over time.

![Raven - Mana Regenerate](../assets/kits/raven/Raven%20-%20Mana%20Regenerate.gif)

After the player earns a final blow, they restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Raven - Mana Final Blow](../assets/kits/raven/Raven%20-%20Mana%20Final%20Blow.gif)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Raven - Mana Dispenser](../assets/kits/raven/Raven%20-%20Mana%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| How did I die? | Forget to deactivate your flight spell. | 20 Credits |
| I believe I can fly... | Fly for over 100,000 meters. | 100 Credits |
| Project Excelsior | Fly for over 2 hours. | 20 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.raven.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MAX_MANA_POTIONS | `{{ kits.raven.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
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
| RAVEN_SWORD_DAMAGE | `{{ kits.raven.data.RAVEN_SWORD_DAMAGE }}` | The base damage of the sword. |
| RAVEN_SWORD_SPEED | `{{ kits.raven.data.RAVEN_SWORD_SPEED }}` | The base speed of the sword. |
| RAVEN_WAND_KNOCKBACK | `{{ kits.raven.data.RAVEN_WAND_KNOCKBACK }}` | The level of the knockback enchantment on the spell wand. |
| RAVEN_WIND_GUST_MANA_COST | `{{ kits.raven.data.RAVEN_WIND_GUST_MANA_COST }}` | The cost of mana in order to cast the wind gust spell. |
| RAVEN_WIND_GUST_CAST_COOLDOWN | `{{ kits.raven.data.RAVEN_WIND_GUST_CAST_COOLDOWN }}` | The wind gust spell's cooldown in ticks. |
| RAVEN_WIND_GUST_STRENGTH | `{{ kits.raven.data.RAVEN_WIND_GUST_STRENGTH }}` | The entity knockback strength of the wind gust spell. |
| RAVEN_WIND_GUST_SPEED | `{{ kits.raven.data.RAVEN_WIND_GUST_SPEED }}` | The speed at which the wind gust spell travels. (0 = no travel time) |
| RAVEN_WIND_GUST_RANGE | `{{ kits.raven.data.RAVEN_WIND_GUST_RANGE }}` | The maximum travel distance, in meters, of the wind gust spell.
| RAVEN_WIND_GUST_DAMAGE | `{{ kits.raven.data.RAVEN_WIND_GUST_DAMAGE }}` | The damage dealt to enemies from the wind gust spell. |
| RAVEN_WIND_GUST_BLOCK_HIT_BOX_SIZE | `{{ kits.raven.data.RAVEN_WIND_GUST_BLOCK_HIT_BOX_SIZE }}` | The hitbox size of the wind gust spell that is used to detect block collision. |
| RAVEN_WIND_GUST_ENTITY_HIT_BOX_SIZE | `{{ kits.raven.data.RAVEN_WIND_GUST_ENTITY_HIT_BOX_SIZE }}` | The hitbox size of the wind gust spell that is used to detect entity collision. |
| RAVEN_FLIGHT_MANA_CAST_COST | `{{ kits.raven.data.RAVEN_FLIGHT_MANA_CAST_COST }}` | The cost of mana in order to cast the flight spell. |
| RAVEN_FLIGHT_CAST_COOLDOWN | `{{ kits.raven.data.RAVEN_FLIGHT_CAST_COOLDOWN }}` | The flight spell's cooldown in ticks. |
| RAVEN_FLIGHT_ACTIVE_MANA_COST | `{{ kits.raven.data.RAVEN_FLIGHT_ACTIVE_MANA_COST }}` | The cost of mana in order to maintain flight. |
| RAVEN_FLIGHT_TICK_RATE | `{{ kits.raven.data.RAVEN_FLIGHT_TICK_RATE }}` | The interval, in ticks, that the flight spell checks mana. |
| RAVEN_FLIGHT_SPEED | `{{ kits.raven.data.RAVEN_FLIGHT_SPEED }}` | The speed of the flight granted by the flight spell. |
| RAVEN_FLIGHT_DAMAGE | `{{ kits.raven.data.RAVEN_FLIGHT_DAMAGE }}` | The amount of damage the player takes when they don't have enough mana to maintain the flight spell. |
| RAVEN_FLIGHT_STUNNED_DURATION | `{{ kits.raven.data.RAVEN_FLIGHT_STUNNED_DURATION }}` | The duration, in ticks, after flight is canceled during which the player is unable to cast the flight spell. |
