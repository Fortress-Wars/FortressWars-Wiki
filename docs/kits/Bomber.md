
# Bomber

***

#### ![bomber-icon](../assets/icons/bomber-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A damage kit that places and detonates bombs.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- {{ kits.bomber.data.BOMBER_BOMB_COUNT }} Bombs
- Detonator
- {{ kits.bomber.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Bombs**
## Bombs
Bombs are used to deal large area damage. Bombs can't be placed too close to others and only `{{ kits.bomber.data.BOMBER_BOMB_COUNT }}` can be placed at any one time. If there are `{{ kits.bomber.data.BOMBER_BOMB_COUNT }}` bombs set and another bomb is placed, then the oldest will be destroyed.

![Bombs](../assets/kits/bomber/Bomber%20-%20Bombs.gif)

#### **Detonator**
## Detonator
Right click to detonate all of the player's bombs dealing `{{ kits.bomber.data.BOMBER_BOMB_DAMAGE }}` damage to enemies. Bombs will deal `{{ kits.bomber.data.BOMBER_BOMB_SELF_DAMAGE_MULTIPLIER }}` self damage to the player. Bombs will ignore invulnerability frames. The player can also detonate bombs while respawning.

![Detonator 1](../assets/kits/bomber/Bomber%20-%20Detonate.gif)

Bombs destroy enemy builder bricks, enemy builder ladders, cobwebs and jumper translocators and damage engineer blocks.

![Detonator 2](../assets/kits/bomber/Bomber%20-%20Detonate%20Bricks.gif)

![Detonator 3](../assets/kits/bomber/Bomber%20-%20Detonate%20Engineer%20Blocks.gif)

Bombs will disable shields if the bomb hits a player that is blocking.

![Detonator 4](../assets/kits/bomber/Bomber%20-%20Detonate%20Shield.gif)

<!-- tabs:end -->
<br />  

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Aye, what just happened? | Blow up an enemy from far away. | 20 Credits |
| Couldn't ya see the bloody bombs! | Blow up a invisible enemy. | 20 Credits |
| The Destruction of Fort Knox! | Blow up enemy builder bricks as bomber! | 20 Credits |
| Ka-boooom! | Get a double bomb kill. | 30 Credits |
| Kablooie! | Get a triple bomb kill. | 50 Credits |
| And that's what ya get for touching that! | Get 1,000 bomb kills. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.bomber.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| BOMBER_SWORD_DAMAGE | `{{ kits.bomber.data.BOMBER_SWORD_DAMAGE }}` | The base damage of the sword. |
| BOMBER_SWORD_SPEED | `{{ kits.bomber.data.BOMBER_SWORD_SPEED }}` | The base speed of the sword. |
| BOMBER_BOMB_PLACE_ICD | `{{ kits.bomber.data.BOMBER_BOMB_PLACE_ICD }}` | The internal cooldown, in ticks, for placing bombs. |
| BOMBER_BOMB_PLACE_MIN_DISTANCE | `{{ kits.bomber.data.BOMBER_BOMB_PLACE_MIN_DISTANCE }}` | The minimum distance, in meters, for placing bomb near an already placed bomb. |
| BOMBER_BOMB_COUNT | `{{ kits.bomber.data.BOMBER_BOMB_COUNT }}` | The maximum number of placed and held bombs a player can have a once. |
| BOMBER_BOMB_DAMAGE | `{{ kits.bomber.data.BOMBER_BOMB_DAMAGE }}` | The damage that a single bomb does. |
| BOMBER_BOMB_SELF_DAMAGE_MULTIPLIER | `{{ kits.bomber.data.BOMBER_BOMB_SELF_DAMAGE_MULTIPLIER }}` | The damage multiplier of bomb damage from the player's own bombs.|
| BOMBER_BOMB_RADIUS | `{{ kits.bomber.data.BOMBER_BOMB_RADIUS }}` | The radius of the explosion effect. |
| BOMBER_BOMB_YIELD | `{{ kits.bomber.data.BOMBER_BOMB_YIELD }}` | The minecraft bomb yield value. (this isn't measured in meters/blocks) |
| BOMBER_BOMB_KNOCKBACK_MULTIPLIER | `{{ kits.bomber.data.BOMBER_BOMB_KNOCKBACK_MULTIPLIER }}` | The multiplier of the knockback that is applied to entities after a bomb explosion. |
| BOMBER_BOMB_REGENERATION_TICKS | `{{ kits.bomber.data.BOMBER_BOMB_REGENERATION_TICKS }}` | The interval, in ticks, for regenerating bombs. |
| BOMBER_BOMB_DISPENSER_NUM | `{{ kits.bomber.data.BOMBER_BOMB_DISPENSER_NUM }}` | The amount of bombs to receive from each engineer dispenser tick. |
| BOMBER_DETONATE_FUSE_TICKS | `{{ kits.bomber.data.BOMBER_DETONATE_FUSE_TICKS }}` | The duration, in ticks, it takes for bombs to explode. This is also sets the cooldown for the detonator ability. |
