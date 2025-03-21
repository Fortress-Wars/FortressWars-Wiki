# Buff Master

---

#### ![buff-master-icon](../assets/icons/kits/buff-master-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A support kit that gives potion effects to teammates. Selectable buffs include Regeneration, Absorption, Speed, and Resistance.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Iron Chestplate
- Leather Leggings
- Iron Boots
- Wooden Sword
- Buff
- Select Buff
- {{ kits.buff_master.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Buff**

## Buff

Right click to buff all allies within `{{ kits.buff_master.data.BUFF_MASTER_BUFF_RADIUS }}` meters. The buff applied will be determined by the selected buff. The ability has a base cooldown of `{{ kits.buff_master.data.BUFF_MASTER_BUFF_BASE_COOLDOWN }}` ticks and will increase by `{{ kits.buff_master.data.BUFF_MASTER_BUFF_PER_PLAYER_COOLDOWN }}`ticks per player and `{{ kits.buff_master.data.BUFF_MASTER_BUFF_PER_MOB_COOLDOWN }}`ticks per mob affected. The max cooldown is `{{ kits.buff_master.data.BUFF_MASTER_BUFF_MAX_COOLDOWN }}` ticks.

![Buff Master - Buff](../assets/kits/buff_master/Buff%20Master%20-%20Absorption.gif)

#### **Select Buff**

## Select Buff

Right click to cycle between buffs forwards. Left click to cycle between buffs backwards.

![Buff Master - Select Buff](../assets/kits/buff_master/Buff%20Master%20-%20Select%20Effect.gif)

The Available effects are as follows:

<!-- tabs:start -->

#### **Regeneration**

## Regeneration

Gives the regeneration effect _(level: `{{ kits.buff_master.data.BUFF_MASTER_REGENERATION_LEVEL }}`)_ for `{{ kits.buff_master.data.BUFF_MASTER_REGENERATION_DURATION }}` ticks.

![Buff Master - Regeneration](../assets/kits/buff_master/Buff%20Master%20-%20Regeneration.gif)

#### **Absorption**

## Absorption

Gives the absorption effect _(level: `{{ kits.buff_master.data.BUFF_MASTER_ABSORPTION_LEVEL }}`)_ for `{{ kits.buff_master.data.BUFF_MASTER_ABSORPTION_DURATION }}` ticks.

![Buff Master - Absorption](../assets/kits/buff_master/Buff%20Master%20-%20Absorption.gif)

#### **Speed**

## Speed

Gives the speed effect _(level: `{{ kits.buff_master.data.BUFF_MASTER_SPEED_LEVEL }}`)_ for `{{ kits.buff_master.data.BUFF_MASTER_SPEED_DURATION }}` ticks.

![Buff Master - Speed](../assets/kits/buff_master/Buff%20Master%20-%20Speed.gif)

#### **Resistance**

## Resistance

Gives the resistance effect _(level: `{{ kits.buff_master.data.BUFF_MASTER_RESISTANCE_LEVEL }}`)_ for `{{ kits.buff_master.data.BUFF_MASTER_RESISTANCE_DURATION }}` ticks.

![Buff Master - Buff](../assets/kits/buff_master/Buff%20Master%20-%20Resistance.gif)

<!-- tabs:end -->

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Family Practice | Buff 4 teammates with one activation. | 20 Credits |
| Stronk Creeper | Buff a creeper with buff master. | 20 Credits |
| The True Buff Master | Buff 250 teammates. | 100 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.buff_master.data.MAX_HEALING_POTIONS }}`  | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.buff_master.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.buff_master.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.buff_master.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.buff_master.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.buff_master.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.buff_master.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.buff_master.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.buff_master.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.buff_master.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.buff_master.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.buff_master.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.buff_master.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| BUFF_MASTER_BUFF_BASE_COOLDOWN | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_BASE_COOLDOWN }}` | The base cooldown, in ticks, of the Buff ability. |
| BUFF_MASTER_BUFF_MAX_COOLDOWN | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_MAX_COOLDOWN }}` | The max cooldown, in ticks, of the Buff ability. |
| BUFF_MASTER_BUFF_PER_MOB_COOLDOWN | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_PER_MOB_COOLDOWN }}` | The cooldown per mob affected, in ticks, added to the base cooldown. |
| BUFF_MASTER_BUFF_PER_PLAYER_COOLDOWN | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_PER_PLAYER_COOLDOWN }}` | The cooldown per player affected, in ticks, added to the base cooldown. |
| BUFF_MASTER_BUFF_RADIUS | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_RADIUS }}` | The radius of the Buff ability. |
| BUFF_MASTER_BUFF_SWITCH_ICD | `{{ kits.buff_master.data.BUFF_MASTER_BUFF_SWITCH_ICD }}` | The cooldown, in ticks, for switching effects. |
| BUFF_MASTER_REGENERATION_DURATION | `{{ kits.buff_master.data.BUFF_MASTER_REGENERATION_DURATION }}` | The duration of the regeneration effect. |
| BUFF_MASTER_REGENERATION_LEVEL | `{{ kits.buff_master.data.BUFF_MASTER_REGENERATION_LEVEL }}` | The level of the regeneration effect. |
| BUFF_MASTER_ABSORPTION_DURATION | `{{ kits.buff_master.data.BUFF_MASTER_ABSORPTION_DURATION }}` | The duration of the absorption effect. |
| BUFF_MASTER_ABSORPTION_LEVEL | `{{ kits.buff_master.data.BUFF_MASTER_ABSORPTION_LEVEL }}` | The level of the absorption effect. |
| BUFF_MASTER_SPEED_DURATION | `{{ kits.buff_master.data.BUFF_MASTER_SPEED_DURATION }}` | The duration of the speed effect. |
| BUFF_MASTER_SPEED_LEVEL | `{{ kits.buff_master.data.BUFF_MASTER_SPEED_LEVEL }}` | The level of the speed effect. |
| BUFF_MASTER_RESISTANCE_DURATION | `{{ kits.buff_master.data.BUFF_MASTER_RESISTANCE_DURATION }}` | The duration of the resistance effect. |
| BUFF_MASTER_RESISTANCE_LEVEL | `{{ kits.buff_master.data.BUFF_MASTER_RESISTANCE_LEVEL }}` | The level of the resistance effect. |
| BUFF_MASTER_SWORD_DAMAGE | `{{ kits.buff_master.data.BUFF_MASTER_SWORD_DAMAGE }}` | The base melee damage of the sword. |
| BUFF_MASTER_SWORD_SPEED | `{{ kits.buff_master.data.BUFF_MASTER_SWORD_SPEED }}` | The base melee speed of the sword. |
