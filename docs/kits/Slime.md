# Slime

***

#### ![slime-icon](../assets/icons/slime-icon.jpg)

# Overview
***
- **Introduced:** v1.8.0
- **Description:** A kit that summons slimes, prevents fall damage, and reduces piercing damage.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Iron Chestplate
- Leather Leggings (Lime Green)
- Iron Boots
- Stone Sword
- Slime Armor
- Slime Shield
- {{ kits.slime.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Slime Armor**
## Slime Armor
Provide the `Slime Armor` status effect to all allies in a `7` meter radius. The slime armor `level` is `2` and provides the following effects: Mitgates `100` percent fall dammage and mitigates `(level * 15)` percent `Piercing Damage`. Examples of [Piercing Damage](/systems/Damage#damage-types) include damage from arrows, bullets, and thorns.

![Slime - Slime Armor Provude](../assets/kits/slime/_image_1_.jpg_)

![Slime - Slime Armor Mitigate Fall Damage](../assets/kits/slime/_image_1_.jpg_)

![Slime - Slime Armor Mitigate Piercing Damage](../assets/kits/slime/_image_1_.jpg_)

Slime Armor will break from fire and ice damage, and it will break from `Blast Damage` that is equal to or greater than `level * 2` damage. Examples of [Blast Damage](/systems/Damage#damage-types) include: Bombs, Rockets, Grenades, Creepers, etc.

![Slime - Slime Armor Break Fire](../assets/kits/slime/_image_1_.jpg_)

#### **Slime Shield**
## Slime Shield
_description_2_

![_image_2_](../assets/kits/slime/_image_2_.jpg_)

#### **Slime Minion**
## Slime Minion
_description_2_

![_image_2_](../assets/kits/slime/_image_2_.jpg_)

<!-- tabs:end -->

<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| A touch of jello. | Have your slime give you absorption. | 20 Credits |
| Extra protection. | Provide a kangaroo with slime armor! | 20 Credits |
| Not just a damage sponge! | Get a slime kill. | 20 Credits |
| Slimy slime | Provide slime armor to your slimes. | 20 Creditts |
| Blessed Rebuttal | Mitigate 10,000 damage from allies. | 250 Credits |
| Optimus Slime | Get 1,000 slime kills. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.slime.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
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
| SLIME_SWORD_DAMAGE | `{{ kits.slime.data.SLIME_SWORD_DAMAGE }}` | |
| SLIME_SWORD_SPEED | `{{ kits.slime.data.SLIME_SWORD_SPEED }}` | |
| SLIME_MINION_HEALTH | `{{ kits.slime.data.SLIME_MINION_HEALTH }}` | |
| SLIME_MINION_DAMAGE | `{{ kits.slime.data.SLIME_MINION_DAMAGE }}` | |
| SLIME_MINION_DURATION | `{{ kits.slime.data.SLIME_MINION_DURATION }}` | |
| SLIME_MINION_SUMMON_COOLDOWN | `{{ kits.slime.data.SLIME_MINION_SUMMON_COOLDOWN }}` | |
| SLIME_MINION_MAX_MINIONS | `{{ kits.slime.data.SLIME_MINION_MAX_MINIONS }}` | |
| SLIME_MINION_ABSORPTION_LEVEL | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_LEVEL }}` | |
| SLIME_MINION_ABSORPTION_DURATION | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_DURATION }}` | |
| SLIME_MINION_ABSORPTION_RADIUS | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_RADIUS }}` | |
| SLIME_ARMOR_DURATION | `{{ kits.slime.data.SLIME_ARMOR_DURATION }}` | |
| SLIME_ARMOR_LEVEL | `{{ kits.slime.data.SLIME_ARMOR_LEVEL }}` | |
| SLIME_ARMOR_COOLDOWN | `{{ kits.slime.data.SLIME_ARMOR_COOLDOWN }}` | |
| SLIME_ARMOR_APPLY_RADIUS | `{{ kits.slime.data.SLIME_ARMOR_APPLY_RADIUS }}` | |

### Changelog