# Porcupine

***

#### ![porcupine-icon](../assets/icons/porcupine-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A damage kit that summons a sphere of quills to deal damage to enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Quills
- {{ kits.porcupine.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Quills**
## Quills
Right click to summon a sphere of quills. When a quill hits an enemy, it will deal `{{ kits.porcupine.data.PORCUPINE_QUILL_DAMAGE }}`. Quills will stun enemies for `{{ kits.porcupine.data.PORCUPINE_QUILL_STUN_DURATION }}` ticks and apply poison and slowness potion effects. Using the quills ability will also activate the [Thorns](#thorns) passive ability.

![Porcupine - Quills 1](../assets/kits/porcupine/Porcupine%20-%20Quills%201.gif)
![Porcupine - Quills 2](../assets/kits/porcupine/Porcupine%20-%20Quills%202.gif)

<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Thorns**
## Thorns
After using the quills ability, the player will receive the thorns effect for `{{ kits.porcupine.data.PORCUPINE_THORNS_DURATION }}` ticks. When thorns is active and an enemy attacks the player, there is a `{{ kits.porcupine.data.PORCUPINE_THORNS_HIT_CHANCE_PERCENTAGE }}%` chance for for the player to deal `{{ kits.porcupine.data.PORCUPINE_THORNS_DAMAGE_PERCENTAGE }}%` damage back to the enemy. Thorns will only trigger if the enemy is within `{{ kits.porcupine.data.PORCUPINE_THORNS_HIT_RADIUS }}` meters.

![Porcupine - Thorns](../assets/kits/porcupine/Porcupine%20-%20Thorns.gif)

<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Effective Quills | Get a double quill kill. | 20 Credits |
| Super Effective Quills | Get a triple quill kill. | 20 Credits |
| Did that hurt? | Get a kill with your thorns. | 20 Credits |
| Spiny | Get 1,000 quill kills. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.porcupine.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| PORCUPINE_SWORD_DAMAGE | `{{ kits.porcupine.data.PORCUPINE_SWORD_DAMAGE }}` | The base damage of the sword. |
| PORCUPINE_SWORD_SPEED | `{{ kits.porcupine.data.PORCUPINE_SWORD_SPEED }}` | The base speed of the sword. |
| PORCUPINE_QUILL_DAMAGE | `{{ kits.porcupine.data.PORCUPINE_QUILL_DAMAGE }}` | The damage of each quill. |
| PORCUPINE_QUILL_COOLDOWN | `{{ kits.porcupine.data.PORCUPINE_QUILL_COOLDOWN }}` | The cooldown, in ticks, of the quills ability. |
| PORCUPINE_QUILL_SPEED | `{{ kits.porcupine.data.PORCUPINE_QUILL_SPEED }}` | The speed multiplier of each quill. |
| PORCUPINE_QUILL_SPREAD | `{{ kits.porcupine.data.PORCUPINE_QUILL_SPREAD }}` | The random spread value for each quill. |
| PORCUPINE_QUILL_ARROWS_PER_LAYER | `{{ kits.porcupine.data.PORCUPINE_QUILL_ARROWS_PER_LAYER }}` | The number of quills that are in each layer in the summoned quill sphere. |
| PORCUPINE_QUILL_NUMBER_OF_LAYERS | `{{ kits.porcupine.data.PORCUPINE_QUILL_NUMBER_OF_LAYERS }}` | The number of layers that are in the summoned quill sphere. |
| PORCUPINE_QUILL_STUN_DURATION | `{{ kits.porcupine.data.PORCUPINE_QUILL_STUN_DURATION }}` | The duration, in ticks, of the quill's stun effect. |
| PORCUPINE_QUILL_POISON_LEVEL | `{{ kits.porcupine.data.PORCUPINE_QUILL_POISON_LEVEL }}` | The level of the quill's poison effect. |
| PORCUPINE_QUILL_POISON_DURATION | `{{ kits.porcupine.data.PORCUPINE_QUILL_POISON_DURATION }}` | The duration, in ticks, of the quill's poison effect. |
| PORCUPINE_QUILL_SLOWNESS_LEVEL | `{{ kits.porcupine.data.PORCUPINE_QUILL_SLOWNESS_LEVEL }}` | The level of the quill's slowness effect. |
| PORCUPINE_QUILL_SLOWNESS_DURATION | `{{ kits.porcupine.data.PORCUPINE_QUILL_SLOWNESS_DURATION }}` | The duration, in ticks, of the quill's slowness effect. |
| PORCUPINE_THORNS_DURATION | `{{ kits.porcupine.data.PORCUPINE_THORNS_DURATION }}` | The duration, in ticks, of the thorns ability. |
| PORCUPINE_THORNS_HIT_CHANCE_PERCENTAGE | `{{ kits.porcupine.data.PORCUPINE_THORNS_HIT_CHANCE_PERCENTAGE }}` | The probability (percentage) that the thorns ability will deal damage. |
| PORCUPINE_THORNS_HIT_RADIUS | `{{ kits.porcupine.data.PORCUPINE_THORNS_HIT_RADIUS }}` | The distance, in meters, around the player in which the thorns ability can deal damage.  |
| PORCUPINE_THORNS_CHECK_LOS | `{{ kits.porcupine.data.PORCUPINE_THORNS_CHECK_LOS }}` | Whether the thorns ability will check line of sight. |
| PORCUPINE_THORNS_DAMAGE_PERCENTAGE | `{{ kits.porcupine.data.PORCUPINE_THORNS_DAMAGE_PERCENTAGE }}` | The percentage of damage that the thorns ability will deal back to the enemy. |