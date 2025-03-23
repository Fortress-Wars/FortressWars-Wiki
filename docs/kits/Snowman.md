# Snowman

---

#### ![snowman-icon](../assets/icons/kits/snowman-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A kit that uses the element of ice to freeze and slow down enemies.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Diamond Chestplate
- Leather Leggings (White)
- Leather Boots (White)
- Stone Sword
- Spell Wand
- {{ kits.snowman.data.MAX_HEALING_POTIONS }} Healing Potions
- {{ kits.snowman.data.MAX_MANA_POTIONS }} Mana Potions
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

- Snowball _(Left-Click)_
- Snowstorm _(Right-Click)_
- Imbue _(Sneak + Right-Click)_

<!-- tabs:start -->

#### **Snowball**

## Snowball

The spell costs `{{ kits.snowman.data.SNOWMAN_SNOWBALL_MANA_COST }}` mana. Casting summons a snowball and launches it in the direction the player is looking. When enemies are hit, they are completely frozen and unable to move for `{{ kits.snowman.data.SNOWMAN_SNOWBALL_FROZEN_DURATION }}` ticks. Snowballs can only hit players.

![Snowman - Snowball Cast](../assets/kits/snowman/Snowman%20-%20Snowball%20Cast.gif)

![Snowman - Snowball Hit](../assets/kits/snowman/Snowman%20-%20Snowball%20Hit.gif)

#### **Snowstorm**

## Snowstorm

The spell costs `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_MANA_COST }}` mana. Casting summons a snowstorm that has a radius of `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_RADIUS }}` meters. The storm has `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_TICKS }}` icy gusts that each occur `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_TICK_RATE }}` ticks apart. Enemies in the snowstorm during an icy gust receive the freezing effect for `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_FROZEN_DURATION }}` ticks and slowness `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_SLOWNESS_LEVEL }}` for `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_SLOWNESS_DURATION }}` ticks.

![Snowman - Snowstorm Cast](../assets/kits/snowman/Snowman%20-%20Snowstorm%20Cast.gif)

![Snowman - Snowstorm Slowness](../assets/kits/snowman/Snowman%20-%20Snowstorm%20Slowness.gif)

Enemy engineer blocks caught inside snowstorms are stunned for `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_FROZEN_DURATION }}` ticks.

![Snowman - Snowstorm Stun Engineer Blocks](../assets/kits/snowman/Snowman%20-%20Snowstorm%20Stun%20Engineer%20Blocks.gif)

#### **Imbue**

## Imbue

The spell costs `{{ kits.snowman.data.SNOWMAN_IMBUE_MANA_COST }}` mana. Casting imbues the player's sword with ice. When the player deals melee damage with the sword, they also apply the freezing effect for `{{ kits.snowman.data.SNOWMAN_IMBUE_FREEZING_TICKS }}` ticks. The imbued state lasts `{{ kits.snowman.data.SNOWMAN_IMBUE_DURATION }}` ticks.

![Snowman - Imbue Cast](../assets/kits/snowman/Snowman%20-%20Imbue%20Cast.gif)

![Snowman - Imbue Hit](../assets/kits/snowman/Snowman%20-%20Imbue%20Hit.gif)

<!-- tabs:end -->

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Mana**

## Mana

Mana is a resource used to cast spells.

![Snowman - Mana](../assets/kits/snowman/Snowman%20-%20Mana.png)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it regenerates slowly over time.

![Snowman - Mana Regenerate](../assets/kits/snowman/Snowman%20-%20Mana%20Regenerate.gif)

After the player earns a final blow, they restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Snowman - Mana Final Blow](../assets/kits/snowman/Snowman%20-%20Mana%20Final%20Blow.gif)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Snowman - Mana Dispenser](../assets/kits/snowman/Snowman%20-%20Mana%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Heal Those Broken Wings | Freeze a raven while they are flying. | 20 Credits |
| Snowball Sniper | Freeze an enemy from 50 blocks away | 20 Credits |
| Ice Nation | Freeze 100 enemies with your freeze spell. | 250 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.snowman.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MAX_MANA_POTIONS | `{{ kits.snowman.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
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
| CHESTPLATE_ARMOR | `{{ kits.snowman.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.snowman.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.snowman.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.snowman.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.snowman.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.snowman.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.snowman.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.snowman.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.snowman.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.snowman.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.snowman.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.snowman.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| TANK_ROLE_KNOCKBACK_PERCENTAGE | `{{ kits._shared.data.TANK_ROLE_KNOCKBACK_PERCENTAGE }}` | {{ kitDataSharedDescriptions.TANK_ROLE_KNOCKBACK_PERCENTAGE }} |
| SHIELD_REGENERATION_DELAY | `{{ kits._shared.data.SHIELD_REGENERATION_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_DELAY }} |
| SHIELD_REGENERATION_RATE | `{{ kits._shared.data.SHIELD_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_RATE }} |
| SHIELD_REGENERATION_AMOUNT | `{{ kits._shared.data.SHIELD_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_AMOUNT }} |
| SHIELD_BREAK_COOLDOWN | `{{ kits._shared.data.SHIELD_BREAK_COOLDOWN }}` | {{ kitDataSharedDescriptions.SHIELD_BREAK_COOLDOWN }} |
| SHIELD_DAMAGE_FACTOR | `{{ kits._shared.data.SHIELD_DAMAGE_FACTOR }}` | {{ kitDataSharedDescriptions.SHIELD_DAMAGE_FACTOR }} | 
| SNOWMAN_SWORD_DAMAGE | `{{ kits.snowman.data.SNOWMAN_SWORD_DAMAGE }}` | The base damage of the sword. |
| SNOWMAN_SWORD_SPEED | `{{ kits.snowman.data.SNOWMAN_SWORD_SPEED }}` | The base speed of the sword. |
| SNOWMAN_WAND_KNOCKBACK | `{{ kits.snowman.data.SNOWMAN_WAND_KNOCKBACK }}` | The level of the knockback enchantment on the spell wand. |
| SNOWMAN_SNOWBALL_MANA_COST | `{{ kits.snowman.data.SNOWMAN_SNOWBALL_MANA_COST }}` | The cost of mana to cast the snowball spell. |
| SNOWMAN_SNOWBALL_CAST_COOLDOWN | `{{ kits.snowman.data.SNOWMAN_SNOWBALL_CAST_COOLDOWN }}` | The snowball spell's cooldown in ticks. |
| SNOWMAN_SNOWBALL_FROZEN_DURATION | `{{ kits.snowman.data.SNOWMAN_SNOWBALL_FROZEN_DURATION }}` | The duration, in ticks, of the snowball's frozen effect. |
| SNOWMAN_SNOWBALL_VELOCITY_MULTIPLIER | `{{ kits.snowman.data.SNOWMAN_SNOWBALL_VELOCITY_MULTIPLIER }}` | The velocity multiplier for the snowball projectile. |
| SNOWMAN_SNOWSTORM_MANA_COST | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_MANA_COST }}` | The cost of mana to cast the snowstorm spell. |
| SNOWMAN_SNOWSTORM_CAST_COOLDOWN | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_CAST_COOLDOWN }}` | The snowstorm spell's cooldown in ticks. |
| SNOWMAN_SNOWSTORM_TICK_RATE | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_TICK_RATE }}` | The duration, in ticks, between each snowstorm icy gust. |
| SNOWMAN_SNOWSTORM_TICKS | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_TICKS }}` | The total number of snowstorm icy gusts. |
| SNOWMAN_SNOWSTORM_RADIUS | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_RADIUS }}` | The radius, in meters, of the snowstorm spell. |
| SNOWMAN_SNOWSTORM_REQUIRE_LINE_OF_SIGHT | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_REQUIRE_LINE_OF_SIGHT }}` | If the snowstorm spell requires line of sight (from the origin) to affect enemies. |
| SNOWMAN_SNOWSTORM_FROZEN_DURATION | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_FROZEN_DURATION }}` | The duration, in ticks, of the snowstorm's freezing effect. |
| SNOWMAN_SNOWSTORM_SLOWNESS_LEVEL | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_SLOWNESS_LEVEL }}` | The level of the snowstorm's slowness effect. |
| SNOWMAN_SNOWSTORM_SLOWNESS_DURATION | `{{ kits.snowman.data.SNOWMAN_SNOWSTORM_SLOWNESS_DURATION }}` | The duration, in ticks, of the snowstorm's slowness effect. |
| SNOWMAN_IMBUE_MANA_COST | `{{ kits.snowman.data.SNOWMAN_IMBUE_MANA_COST }}` | The cost of mana to cast the imbue spell. |
| SNOWMAN_IMBUE_CAST_COOLDOWN | `{{ kits.snowman.data.SNOWMAN_IMBUE_CAST_COOLDOWN }}` | The imbue spell's cooldown in ticks. |
| SNOWMAN_IMBUE_DURATION | `{{ kits.snowman.data.SNOWMAN_IMBUE_DURATION }}` | The duration, in ticks, of the imbue spell. |
| SNOWMAN_IMBUE_FREEZING_TICKS | `{{ kits.snowman.data.SNOWMAN_IMBUE_FREEZING_TICKS }}` | The duration, in ticks, of the freezing effect applied by the imbued sword. |
