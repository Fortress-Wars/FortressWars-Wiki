# Hulk

---

#### ![hulk-icon](../assets/icons/kits/hulk-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A defensive damage kit with weaker armor that can rage and get much stronger.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Leather Chestplate
- Leather Leggings
- Leather Boots
- Bow
- Arrow
- Rage/Relax
- {{ kits.hulk.data.MAX_HEALING_POTIONS }} Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Rage**

## Rage

Right click to enter rage mode for `{{ kits.hulk.data.HULK_RAGE_FORM_DURATION }}` ticks. When entering rage mode, the player:

- Increases in size.
- Has their armor replaced with diamond.
- Has their bow replaced with a sword.
- Receives a `{{ kits.hulk.data.HULK_RAGE_FORM_DAMAGE_PERCENTAGE_BONUS }}%` melee damage bonus.

The player exits rage mode when the duration ends. The cooldown scales with the amount of time spent in rage mode.

![Rage](../assets/kits/hulk/Hulk%20-%20Rage.gif)

#### **Relax**

## Relax

Right click to enter relax mode. The diamond armor is replaced with leather armor and the sword is replaced with a bow.

![Relax](../assets/kits/hulk/Hulk%20-%20Relax.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Kill Chain**

## Kill Chain

While the player is in rage mode, every elimination extends the duration of rage. _(Final Blow: `{{ kits.hulk.data.HULK_RAGE_FORM_KILL_EXTENSION }}` ticks, Assist: `{{ kits.hulk.data.HULK_RAGE_FORM_ASSIST_EXTENSION }}` ticks)_

![Kill Chain](../assets/kits/hulk/Hulk%20-%20Kill%20Chain.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Quit yapping! | Kill an enemy with your hulk bow. | 20 Credits |
| Get 3 kills during one rage mode activation! | Get 3 kills during one rage mode activation! | 50 Credits |
| HULK SMASH | Hulk out and destroy a sentry, bomb and a cobweb. | 250 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.hulk.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.hulk.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.hulk.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.hulk.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.hulk.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.hulk.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.hulk.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.hulk.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.hulk.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.hulk.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| HULK_RAGE_FORM_DURATION | `{{ kits.hulk.data.HULK_RAGE_FORM_DURATION }}` | The duration, in ticks, of the Rage ability. |
| HULK_RAGE_FORM_MIN_COOLDOWN | `{{ kits.hulk.data.HULK_RAGE_FORM_MIN_COOLDOWN }}` | The minimum cooldown of the rage ability. |
| HULK_RAGE_FORM_MAX_COOLDOWN | `{{ kits.hulk.data.HULK_RAGE_FORM_MAX_COOLDOWN }}` | The maximum cooldown of the rage ability. |
| HULK_RAGE_FORM_SIZE | `{{ kits.hulk.data.HULK_RAGE_FORM_SIZE }}` | The player's size multiplier while in rage mode. |
| HULK_RELAX_FORM_SIZE | `{{ kits.hulk.data.HULK_RELAX_FORM_SIZE }}` | The player's size multiplier while in relax mode. |
| HULK_RAGE_FORM_DAMAGE_PERCENTAGE_BONUS | `{{ kits.hulk.data.HULK_RAGE_FORM_DAMAGE_PERCENTAGE_BONUS }}` | The percentage damage bonus received for melee attacks in rage mode. |
| HULK_RELAX_BOX_PUNCH | `{{ kits.hulk.data.HULK_RELAX_BOX_PUNCH }}` | The bow's punch level. |
| HULK_RAGE_FORM_KILL_EXTENSION | `{{ kits.hulk.data.HULK_RAGE_FORM_KILL_EXTENSION }}` | The duration extention, in ticks, of the Rage ability that final blows will reward. |
| HULK_RAGE_FORM_ASSIST_EXTENSION | `{{ kits.hulk.data.HULK_RAGE_FORM_ASSIST_EXTENSION }}` | The duration extention, in ticks, of the Rage ability that assists will reward. |
| HULK_RAGE_FORM_ACTIVATION_COOLDOWN | `{{ kits.hulk.data.HULK_RAGE_FORM_ACTIVATION_COOLDOWN }}` | The cooldown, in ticks, after using the rage ability before the player can use the relax ability. |
| HULK_RAGE_SWORD_DAMAGE | `{{ kits.hulk.data.HULK_RAGE_SWORD_DAMAGE }}` | The base damage of the rage mode sword. |
| HULK_RAGE_SWORD_SPEED | `{{ kits.hulk.data.HULK_RAGE_SWORD_SPEED }}` | The base speed of the rage mode sword. |
| HULK_RAGE_CHESTPLATE_ARMOR | `{{ kits.hulk.data.HULK_RAGE_CHESTPLATE_ARMOR }}` | The base armor of the rage mode chestplate. |
| HULK_RAGE_CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.hulk.data.HULK_RAGE_CHESTPLATE_ARMOR_TOUGHNESS }}` | The base armor toughness of the rage mode chestplate. |
| HULK_RAGE_CHESTPLATE_PROTECTION_LEVEL | `{{ kits.hulk.data.HULK_RAGE_CHESTPLATE_PROTECTION_LEVEL }}` | The protection level of the rage mode chestplate. |
| HULK_RAGE_CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.HULK_RAGE_CHESTPLATE_KNOCKBACK_RESISTANCE }}` | The knockback resistance of the rage mode chestplate. |
| HULK_RAGE_LEGGINGS_ARMOR | `{{ kits.hulk.data.HULK_RAGE_LEGGINGS_ARMOR }}` | The base armor of the rage mode leggings. |
| HULK_RAGE_LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.hulk.data.HULK_RAGE_LEGGINGS_ARMOR_TOUGHNESS }}` | The base armor toughness of the rage mode leggings. |
| HULK_RAGE_LEGGINGS_PROTECTION_LEVEL | `{{ kits.hulk.data.HULK_RAGE_LEGGINGS_PROTECTION_LEVEL }}` | The protection level of the rage mode leggings. |
| HULK_RAGE_LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.HULK_RAGE_LEGGINGS_KNOCKBACK_RESISTANCE }}` | The knockback resistance of the rage mode leggings. |
| HULK_RAGE_BOOTS_ARMOR | `{{ kits.hulk.data.HULK_RAGE_BOOTS_ARMOR }}` | The base armor of the rage mode boots. |
| HULK_RAGE_BOOTS_ARMOR_TOUGHNESS | `{{ kits.hulk.data.HULK_RAGE_BOOTS_ARMOR_TOUGHNESS }}` | The base armor toughness of the rage mode boots. |
| HULK_RAGE_BOOTS_PROTECTION_LEVEL | `{{ kits.hulk.data.HULK_RAGE_BOOTS_PROTECTION_LEVEL }}` | The protection level of the rage mode boots. |
| HULK_RAGE_BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.hulk.data.HULK_RAGE_BOOTS_KNOCKBACK_RESISTANCE }}` | The knockback resistance of the rage mode boots. |
