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
Provide the `Slime Armor` status effect to all allies in a `{{ kits.slime.data.SLIME_ARMOR_APPLY_RADIUS }}` meter radius. The slime armor level is `level {{ kits.slime.data.SLIME_ARMOR_LEVEL }}` and provides affected allies with the following effects: Mitigates `100%` fall damage and mitigates `level * 15%` `Piercing Damage`. Examples of [Piercing Damage](/systems/Damage#damage-types) include damage from arrows, bullets, and thorns.

![Slime - Slime Armor Provide](../assets/kits/slime/Slime%20-%20Slime%20Armor%20Provide.gif)

![Slime - Slime Armor Mitigate Fall Damage](../assets/kits/slime/Slime%20-%20Slime%20Armor%20Mitigate%20Fall%20Damage.gif)

![Slime - Slime Armor Mitigate Piercing Damage](../assets/kits/slime/Slime%20-%20Slime%20Armor%20Mitigate%20Piercing%20Damage.gif)

Slime Armor will break from fire and ice damage, and it will break from `Blast Damage` that is equal to or greater than `level * 2` damage. Examples of [Blast Damage](/systems/Damage#damage-types) include: Bombs, Rockets, Grenades, and Creepers.

![Slime - Slime Armor Break Blast Damage](../assets/kits/slime/Slime%20-%20Slime%20Armor%20Break%20Blast%20Damage.gif)

#### **Slime Shield**
## Slime Shield
A shield used to summon slime minions. The shield will summon slimes when it is damaged. There is a cooldown of `{{ kits.slime.data.SLIME_MINION_SUMMON_COOLDOWN }}` ticks.

![Slime - Slime Shield Summon Slime](../assets/kits/slime/Slime%20-%20Slime%20Shield%20Summon%20Slime.gif)

#### **Slime Minion**
## Slime Minion
Slimes are minions that help the player in battle. Slimes have `{{ kits.slime.data.SLIME_MINION_HEALTH }}` health and deal `{{ kits.slime.data.SLIME_MINION_DAMAGE }}` damage per attack. The player can only have a maximum of `{{ kits.slime.data.SLIME_MINION_MAX_MINIONS }}` slimes.

![Slime - Slime Minion Attack](../assets/kits/slime/Slime%20-%20Slime%20Minion%20Attack.gif)

When a slime minion dies and the player is within `{{ kits.slime.data.SLIME_MINION_ABSORPTION_RADIUS }}` meters, it will affect the player with absorption level `{{ kits.slime.data.SLIME_MINION_ABSORPTION_LEVEL }}` for `{{ kits.slime.data.SLIME_MINION_ABSORPTION_DURATION }}` ticks.

![Slime - Slime Minion Absorption](../assets/kits/slime/Slime%20-%20Slime%20Minion%20Absorption.gif)

<!-- tabs:end -->

<br />

# Achievements
***

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| A touch of jello. | Have your slime give you absorption. | 20 Credits |
| Extra protection. | Provide a kangaroo with slime armor! | 20 Credits |
| Not just a damage sponge! | Get a slime kill. | 20 Credits |
| Slimy slime | Provide slime armor to your slimes. | 20 Credits |
| Damage Sponge | Mitigate 10,000 damage from allies. | 250 Credits |
| Optimus Slime | Get 1,000 slime kills. | 250 Credits |

<br />  

# Kit Data
***

<!-- prettier-ignore -->
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
| SLIME_SWORD_DAMAGE | `{{ kits.slime.data.SLIME_SWORD_DAMAGE }}` | The base damage of the sword. |
| SLIME_SWORD_SPEED | `{{ kits.slime.data.SLIME_SWORD_SPEED }}` | The base speed of the sword. |
| SLIME_MINION_HEALTH | `{{ kits.slime.data.SLIME_MINION_HEALTH }}` | The maximum health of slime minions. |
| SLIME_MINION_DAMAGE | `{{ kits.slime.data.SLIME_MINION_DAMAGE }}` | The damage dealt by slime minions. |
| SLIME_MINION_DURATION | `{{ kits.slime.data.SLIME_MINION_DURATION }}` | The life duration, in ticks, of slime minions. |
| SLIME_MINION_SUMMON_COOLDOWN | `{{ kits.slime.data.SLIME_MINION_SUMMON_COOLDOWN }}` | The cooldown, in ticks, to summon a slime minion from the slime shield. |
| SLIME_MINION_MAX_MINIONS | `{{ kits.slime.data.SLIME_MINION_MAX_MINIONS }}` | The maximum number of slime minions the player can have alive at once. |
| SLIME_MINION_ABSORPTION_LEVEL | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_LEVEL }}` | The level of the slime minions' absorption effect. |
| SLIME_MINION_ABSORPTION_DURATION | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_DURATION }}` | The duration, in ticks, of the slime minions' absorption effect. |
| SLIME_MINION_ABSORPTION_RADIUS | `{{ kits.slime.data.SLIME_MINION_ABSORPTION_RADIUS }}` | The radius, in meters, that the player must be in, in order to receive the absorption effect from slime minions. |
| SLIME_ARMOR_DURATION | `{{ kits.slime.data.SLIME_ARMOR_DURATION }}` | The duration, in ticks, of the slime armor provided by the player. |
| SLIME_ARMOR_LEVEL | `{{ kits.slime.data.SLIME_ARMOR_LEVEL }}` | The level of the slime armor provided by the player. |
| SLIME_ARMOR_COOLDOWN | `{{ kits.slime.data.SLIME_ARMOR_COOLDOWN }}` | The cooldown, in ticks, of the slime armor ability. |
| SLIME_ARMOR_APPLY_RADIUS | `{{ kits.slime.data.SLIME_ARMOR_APPLY_RADIUS }}` | The radius, in meters, in which allies will receive slime armor from the player. |