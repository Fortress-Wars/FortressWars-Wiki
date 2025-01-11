# Wizard

---

#### ![wizard-icon](../assets/icons/kits/wizard-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that uses electricity to damage and stun enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Leather Leggings (Purple)
- Chainmail Boots
- Iron Sword
- Spell Wand
- {{ kits.wizard.data.MAX_HEALING_POTIONS }} Healing Potions
- {{ kits.wizard.data.MAX_MANA_POTIONS }} Mana Potions
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

- Zap _(Left-Click)_
- Lightning _(Right-Click)_

<!-- tabs:start -->

#### **Zap**

## Zap

The spell costs `{{ kits.wizard.data.WIZARD_ZAP_MANA_COST }}` mana. Casting summons a zap of electricity in the direction the player is looking. When the zap hits a target, it deals `{{ kits.wizard.data.WIZARD_ZAP_DAMAGE }}` damage and stuns them for `{{ kits.wizard.data.WIZARD_ZAP_STUN_DURATION }}` ticks. After hitting one target, the zap chains to another target if they are in range and in line of sight. The zap can hit up to `{{ kits.wizard.data.WIZARD_ZAP_MAX_HITS }}` targets. The max range of the spell is `{{ kits.wizard.data.WIZARD_ZAP_MAX_RANGE }}` meters.

![Wizard - Zap Cast](../assets/kits/wizard/Wizard%20-%20Zap%20Cast.gif)

![Wizard - Zap Chain Lightning](../assets/kits/wizard/Wizard%20-%20Zap%20Chain%20Lightning.gif)

The zap spell chains to enemy engineer blocks.

![Wizard - Zap Chain Lightning Engineer Blocks](../assets/kits/wizard/Wizard%20-%20Zap%20Chain%20Lightning%20Engineer%20Blocks.gif)

The zap spell chains to enemy jumper translocators.

![Wizard - Zap Chain Lightning Jumper Translocator](../assets/kits/wizard/Wizard%20-%20Zap%20Chain%20Lightning%20Jumper%20Translocator.gif)

#### **Lightning**

## Lightning

The spell costs `{{ kits.wizard.data.WIZARD_LIGHTNING_MANA_COST }}` mana. Casting summons a lightning bolt at the location where the player is looking. Lightning bolts deal `{{ kits.wizard.data.WIZARD_LIGHTNING_DAMAGE }}` damage to enemies. The impact of the lightning bolt also stuns enemies for `{{ kits.wizard.data.WIZARD_LIGHTNING_STUN_DURATION }}` ticks. The caster is also damaged and stunned if they are caught within the lightning bolt's area of effect.

![Wizard - Lightning Cast](../assets/kits/wizard/Wizard%20-%20Lightning%20Cast.gif)

The lightning spell deals damage to enemy engineer blocks.

![Wizard - Lightning Cast Engineer Blocks](../assets/kits/wizard/Wizard%20-%20Zap%20Chain%20Lightning%20Engineer%20Blocks.gif)

<!-- tabs:end -->

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Mana**

## Mana

Mana is a resource used to cast spells.

![Wizard - Mana](../assets/kits/wizard/Wizard%20-%20Mana.png)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it regenerates slowly over time.

![Wizard - Mana Regenerate](../assets/kits/wizard/Wizard%20-%20Mana%20Regenerate.gif)

After the player earns a final blow, they restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Wizard - Mana Final Blow](../assets/kits/wizard/Wizard%20-%20Mana%20Final%20Blow.gif)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Wizard - Mana Dispenser](../assets/kits/wizard/Wizard%20-%20Mana%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| I'm de-lighted | Use chain lightning and hit an enemy and an enemy engineer block. | 20 Credits |
| I'm ex-static | Get a lightning strike kill while damage boosted by a friendly mercy. | 20 Credits |
| Powered Creeper | Electrify an ally creeper. | 20 Credits |
| Watts up? | Get a double chain lightning kill. | 20 Credits |
| I'm shocked at the current situation | Get a triple chain lightning kill. | 250 Credits |
| Learn how to conduct yourself | Get a quadruple chain lightning kill. | 250 Credits |
| Shocking revelation! | Get a double lightning strike kill. | 20 Credits |
| It hertz! | Get a triple lightning strike kill. | 250 Credits |
| Be sure to wear shocks | Get 50 lightning strike kills. | 1,000 Credits |
| I'm wired different | Get 50 chain lightning kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.wizard.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MAX_MANA_POTIONS | `{{ kits.wizard.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
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
| WIZARD_SWORD_DAMAGE | `{{ kits.wizard.data.WIZARD_SWORD_DAMAGE }}` | The base damage of the sword. |
| WIZARD_SWORD_SPEED | `{{ kits.wizard.data.WIZARD_SWORD_SPEED }}` | The base speed of the sword. |
| WIZARD_WAND_KNOCKBACK | `{{ kits.wizard.data.WIZARD_WAND_KNOCKBACK }}` | The level of the knockback enchantment on the spell wand. |
| WIZARD_ZAP_MANA_COST | `{{ kits.wizard.data.WIZARD_ZAP_MANA_COST }}` | The cost of mana to cast the zap spell. |
| WIZARD_ZAP_CAST_COOLDOWN | `{{ kits.wizard.data.WIZARD_ZAP_CAST_COOLDOWN }}` | The zap spell's cooldown in ticks. |
| WIZARD_ZAP_DAMAGE | `{{ kits.wizard.data.WIZARD_ZAP_DAMAGE }}` | The damage dealt by the zap spell. |
| WIZARD_ZAP_IGNORE_I_FRAMES | `{{ kits.wizard.data.WIZARD_ZAP_IGNORE_I_FRAMES }}` | If the zap spell should ignore no damage ticks. |
| WIZARD_ZAP_MAX_HITS | `{{ kits.wizard.data.WIZARD_ZAP_MAX_HITS }}` | The maximum number of targets the zap spell can hit. |
| WIZARD_ZAP_ENTITY_HITBOX_SIZE | `{{ kits.wizard.data.WIZARD_ZAP_ENTITY_HITBOX_SIZE }}` | The hitbox size of the initial zap beam used to detect entity collision. |
| WIZARD_ZAP_BLOCK_HITBOX_SIZE | `{{ kits.wizard.data.WIZARD_ZAP_BLOCK_HITBOX_SIZE }}` | The hitbox size of the initial zap beam used to detect block collision. |
| WIZARD_ZAP_STUN_DURATION | `{{ kits.wizard.data.WIZARD_ZAP_STUN_DURATION }}` | The stun duration, in ticks, of the zap spell. |
| WIZARD_ZAP_MAX_RANGE | `{{ kits.wizard.data.WIZARD_ZAP_MAX_RANGE }}` | The maximum distance, in meters, the zap spell can travel. |
| WIZARD_LIGHTNING_MANA_COST | `{{ kits.wizard.data.WIZARD_LIGHTNING_MANA_COST }}` | The cost of mana to cast the lightning spell. |
| WIZARD_LIGHTNING_CAST_COOLDOWN | `{{ kits.wizard.data.WIZARD_LIGHTNING_CAST_COOLDOWN }}` | The lightning spell's cooldown in ticks. |
| WIZARD_LIGHTNING_DAMAGE | `{{ kits.wizard.data.WIZARD_LIGHTNING_DAMAGE }}` | The damage dealt by the lightning spell. |
| WIZARD_LIGHTNING_IGNORE_I_FRAMES | `{{ kits.wizard.data.WIZARD_LIGHTNING_IGNORE_I_FRAMES }}` | If the lightning spell should ignore no damage ticks. |
| WIZARD_LIGHTNING_REQUIRE_LINE_OF_SIGHT | `{{ kits.wizard.data.WIZARD_LIGHTNING_REQUIRE_LINE_OF_SIGHT }}` | If the lightning spell requires line of sight to damage and stun enemies. |
| WIZARD_LIGHTNING_SELF_DAMAGE_MULTIPLIER | `{{ kits.wizard.data.WIZARD_LIGHTNING_SELF_DAMAGE_MULTIPLIER }}` | The damage multiplier of the lightning spell when dealing damage to the caster. |
| WIZARD_LIGHTNING_MAX_RANGE | `{{ kits.wizard.data.WIZARD_LIGHTNING_MAX_RANGE }}` | The maximum distance, in meters, from the caster that lightning bolts can be summoned. |
| WIZARD_LIGHTNING_IMPACT_RADIUS | `{{ kits.wizard.data.WIZARD_LIGHTNING_IMPACT_RADIUS }}` | The impact radius, in meters, of the lightning spell. |
| WIZARD_LIGHTNING_STUN_DURATION | `{{ kits.wizard.data.WIZARD_LIGHTNING_STUN_DURATION }}` | The stun duration, in ticks, of the lightning spell. |
