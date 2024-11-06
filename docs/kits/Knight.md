# Knight

---

#### ![knight-icon](../assets/icons/knight-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A tank kit that uses their shield to mitigate damage for allies.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Iron Chestplate
- Chainmail Leggings
- Iron Boots
- Stone Sword
- Shield
- Fortify
- {{ kits.knight.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Fortify**

## Fortify

When the ability is used, the player's shield becomes stronger. The shield will take `{{ kits.knight.data.KNIGHT_FORTIFY_SHIELD_DAMAGE_PERCENTAGE }}%` of the incoming damage and all damage types that would normally break or ignore the shield, will damage the shield instead.

![Knight - Fortify Block](../assets/kits/knight/Knight%20-%20Fortify%20Block.gif)

If `KNIGHT_FORTIFY_RESET_SHIELD_DURABILITY` is set to `true`, then the player's shield durability will reset upon activating this ability.

![Knight - Fortify Reset Shield](../assets/kits/knight/Knight%20-%20Fortify%20Reset%20Shield.gif)

When the player's shield breaks, fortify will wear off.

![Knight - Fortify Break Shield](../assets/kits/knight/Knight%20-%20Fortify%20Shield%20Break.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Royal Guard**

## Royal Guard

While `Fortify` is active and the player is blocking, the player will take `{{ kits.knight.data.KNIGHT_ROYAL_GUARD_REDIRECTED_DAMAGE_PERCENTAGE }}%` of the damage from nearby allies in a `{{ kits.knight.data.KNIGHT_FORTIFY_RADIUS }}` meter radius.

![Knight - Royal Guard](../assets/kits/knight/Knight%20-%20Royal%20Guard.gif)

#### **Damage Deflection**

## Damage Deflection

While `Fortify` is active and the player is blocking, when enemies are within `{{ kits.knight.data.KNIGHT_FORTIFY_RADIUS }}` meters of the player and they damage the player's shield, `{{ kits.knight.data.KNIGHT_DAMAGE_DEFLECTION_PERCENTAGE }}%` of the incoming damage will be deflected at them.

![Knight - Damage Deflection](../assets/kits//knight/Knight%20-%20Damage%20Deflection.gif)

<!-- tabs:end -->

<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Royal Shield! | Absorb a decent amount of damage with the royal guard passive. | 20 Credits |
| Spiky! | Get a deflect kill. | 20 Credits |
| Thorns 1,000 | Get 1,000 deflect kills. | 250 Credits |
<!-- | Where do you think you're going? | Pull an enemy kangaroo while they are using their stomp ability. | 20 Credits -->

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.knight.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| TANK_ROLE_KNOCKBACK_PERCENTAGE | `{{ kits._shared.data.TANK_ROLE_KNOCKBACK_PERCENTAGE }}` | {{ kitDataSharedDescriptions.TANK_ROLE_KNOCKBACK_PERCENTAGE }} |
| SHIELD_REGENERATION_DELAY | `{{ kits._shared.data.SHIELD_REGENERATION_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_DELAY }} |
| SHIELD_REGENERATION_RATE | `{{ kits._shared.data.SHIELD_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_RATE }} |
| SHIELD_REGENERATION_AMOUNT | `{{ kits._shared.data.SHIELD_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_AMOUNT }} |
| SHIELD_BREAK_COOLDOWN | `{{ kits._shared.data.SHIELD_BREAK_COOLDOWN }}` | {{ kitDataSharedDescriptions.SHIELD_BREAK_COOLDOWN }} |
| KNIGHT_SWORD_DAMAGE | `{{ kits.knight.data.KNIGHT_SWORD_DAMAGE }}` | The base damage of the sword. |
| KNIGHT_SWORD_SPEED | `{{ kits.knight.data.KNIGHT_SWORD_SPEED }}` | The base speed of the sword. |
| KNIGHT_FORTIFY_SHIELD_DAMAGE_PERCENTAGE | `{{ kits.knight.data.KNIGHT_FORTIFY_SHIELD_DAMAGE_PERCENTAGE }}` | The percentage of incoming damage that the shield will take during the Fortify ability. |
| KNIGHT_ROYAL_GUARD_REDIRECTED_DAMAGE_PERCENTAGE | `{{ kits.knight.data.KNIGHT_ROYAL_GUARD_REDIRECTED_DAMAGE_PERCENTAGE }}` | The percentage of damage from allies that will be redirected to the player when the Royal Guard ability is trigged. |
| KNIGHT_DAMAGE_DEFLECTION_PERCENTAGE | `{{ kits.knight.data.KNIGHT_DAMAGE_DEFLECTION_PERCENTAGE }}` | The percentage of damage during Fortify that is deflected to enemies that attack the player's shield. |
| KNIGHT_FORTIFY_COOLDOWN | `{{ kits.knight.data.KNIGHT_FORTIFY_COOLDOWN }}` | The cooldown, in ticks, of the Fortify ability. |
| KNIGHT_FORTIFY_DURATION | `{{ kits.knight.data.KNIGHT_FORTIFY_DURATION }}` | The duration, in ticks, of the Fortify ability. |
| KNIGHT_FORTIFY_RADIUS | `{{ kits.knight.data.KNIGHT_FORTIFY_RADIUS }}` | The radius, in meters, of the Royal Guard and Damage Defelection abilies. |
| KNIGHT_FORTIFY_RESET_SHIELD_DURABILITY | `{{ kits.knight.data.KNIGHT_FORTIFY_RESET_SHIELD_DURABILITY }}` | Determines if the shield's durability should be reset when activing the Foritfy ability. |
