
# Crusader

***

#### ![crusader-icon](../assets/kits/crusader/crusader-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A tanky kit that has higher mobility and a shield bashing ability.
- **Role:** Tank
- **How to Unlock:** Unlocked by Default

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
| MAX_HEALING_POTIONS | `{{ kits.crusader.data.MAX_HEALING_POTIONS }}` | Maximum number of healing potions the player can carry. |
| CRUSADER_SWORD_DAMAGE | `{{ kits.crusader.data.CRUSADER_SWORD_DAMAGE }}` | The base damage of the sword. |
| CRUSADER_SWORD_SPEED | `{{ kits.crusader.data.CRUSADER_SWORD_SPEED }}` | The base speed of the sword. |
| CRUSADER_SHIELD_BASH_DAMAGE | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_DAMAGE }}` | The base damage of a shield bash collision. |
| CRUSADER_SHIELD_BASH_KNOCKBACK | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_KNOCKBACK }}` | The knockback multiplier of a shield bash collision. |
| CRUSADER_SHIELD_BASH_COOLDOWN | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_COOLDOWN }}` | The cooldown, in ticks, of the Shield Bash ability. |
| CRUSADER_SHIELD_BASH_IMPACT_RADIUS | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_IMPACT_RADIUS }}` | The collision radius of the Shield Bash ability. |
| CRUSADER_SHIELD_BASH_VELOCITY_MULTIPLIER | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_VELOCITY_MULTIPLIER }}` | The launch velocity multiplier of the Shield Bash ability.  |
| CRUSADER_SHIELD_BASH_IMPACT_ICD | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_IMPACT_ICD }}` | The cooldown, in ticks, of an enemy being able to be hit by Shield Bash.  |
| CRUSADER_SHIELD_BASH_VELOCITY_THRESHOLD | `{{ kits.crusader.data.CRUSADER_SHIELD_BASH_VELOCITY_THRESHOLD }}` | The velocity threshold used to determine if a player is moving too slow during a Shield Bash. |
| CRUSADER_IRONCLAD_DURATION | `{{ kits.crusader.data.CRUSADER_IRONCLAD_DURATION }}` | The duration, in ticks, of the Ironclad ability. |
| CRUSADER_IRONCLAD_RESISTANCE_LEVEL | `{{ kits.crusader.data.CRUSADER_IRONCLAD_RESISTANCE_LEVEL }}` | The level of the resistance effect provided by the Ironclad Ability. |
