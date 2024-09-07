
# Crusader

***

#### ![crusader-icon](../assets/icons/crusader-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A tanky kit that has higher mobility and a shield bashing ability.
- **Role:** Tank
- **How to Unlock:** Unlocked by Default.

<br />  

# Gear
***
- Iron Chestplate
- Iron Leggings
- Iron Boots
- Stone Sword
- Shield
- Shield Bash
- {{ kits.crusader.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Shield**
## Shield
Use your shield to block damage.

![Shield 1](../assets/kits/crusader/Crusader%20-%20Shield%20Block%201.gif)

![Shield 2](../assets/kits/crusader/Crusader%20-%20Shield%20Block%202.gif)

The shield will automatically regenerate HP if it is damaged and not being used.

![Shield 3](../assets/kits/crusader/Crusader%20-%20Shield%20Repair.gif)

#### **Shield Bash**
## Shield Bash
Right click and hold to perform a shield bash. This will launch the player forward into a shield bashing state. While in this state, colliding into enemies deals deal damage and knockback. If the player stops blocking or they slows down too much, then they will exit the shield bashing state.

![Shield Bash 1](../assets/kits/crusader/Crusader%20-%20Shield%20Bash%20Mobility.gif)

![Shield Bash 2](../assets/kits/crusader/Crusader%20-%20Shield%20Bash%20Hit.gif)

<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Ironclad**
## Ironclad
Hitting an enemy with shield bash will trigger Ironclad. Ironclad will provide damage resistance to the player.

![Ironclad](../assets/kits/crusader/Crusader%20-%20Ironclad.gif)

<!-- tabs:end -->
<br />  

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Get out of my way! | Hit 4 enemies with one shield bash! | 20 Credits |
| Iron Shield | Get 1,000 shield bash kills. | 20 Credits |
| Stronk Shield! | Get a double shield bash kill. | 100 Credits |
| The Flattener! | Get a triple shield bash kill. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.crusader.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
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
| CRUSADER_SWORD_DAMAGE | `{{ kits.crusader.data.CRUSADER_SWORD_DAMAGE }}` | The base damage of the sword. |
| CRUSADER_SWORD_SPEED | `{{ kits.crusader.data.CRUSADER_SWORD_SPEED }}` | The base speed of the sword. |
| CRUSADER_SHIELD_BASH_DAMAGE | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_DAMAGE }}` | The base damage of a shield bash collision. |
| CRUSADER_SHIELD_BASH_KNOCKBACK | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_KNOCKBACK }}` | The knockback multiplier of a shield bash collision. |
| CRUSADER_SHIELD_BASH_COOLDOWN | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_COOLDOWN }}` | The cooldown, in ticks, of the Shield Bash ability. |
| CRUSADER_SHIELD_BASH_IMPACT_CHECK_RADIUS | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_IMPACT_CHECK_RADIUS }}` | The radius, in meters, used to check if nearby entities are colliding with the player. |
| CRUSADER_SHIELD_BASH_COLLISION_HIT_BOX_EXPANSION | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_COLLISION_HIT_BOX_EXPANSION }}` | The value, in meters, to expand the collision hitbox size. | 
| CRUSADER_SHIELD_BASH_VELOCITY_MULTIPLIER | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_VELOCITY_MULTIPLIER }}` | The launch velocity multiplier of the Shield Bash ability.  |
| CRUSADER_SHIELD_BASH_IMPACT_ICD | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_IMPACT_ICD }}` | The cooldown, in ticks, of an enemy being able to be hit by Shield Bash.  |
| CRUSADER_SHIELD_BASH_VELOCITY_THRESHOLD | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_VELOCITY_THRESHOLD }}` | The velocity threshold used to determine if a player is moving too slow during a Shield Bash. |
| CRUSADER_IRONCLAD_DURATION | `{{ kits.crusader.data.CRUSADER_IRONCLAD_DURATION }}` | The duration, in ticks, of the Ironclad ability. |
| CRUSADER_IRONCLAD_RESISTANCE_LEVEL | `{{ kits.crusader.data.CRUSADER_IRONCLAD_RESISTANCE_LEVEL }}` | The level of the resistance effect provided by the Ironclad Ability. |
