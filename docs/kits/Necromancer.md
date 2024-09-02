# Necromancer

***

#### ![necromancer-icon](../assets/icons/necromancer-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A tank kit that summons a wither skeleton to fight for the player.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Leather Leggings (Black)
- Chainmail Boots
- Stone Sword
- Shield
- Wither Skeleton Minion
- {{ kits.necromancer.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Wither Skeleton Minion**
## Wither Skeleton Minion
Summon a wither skeleton minion to fight for the player. The player can summon the skeleton by right-clicking a block. This will cost `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_PER_SKELETON }}` "Essence of the Afterlife". The wither skeleton will target and attack enemies.

![Necromancer - Wither Skeleton Summon](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Summon.gif)

When the wither skeleton dies, the player will receive a cooldown that lasts `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_DEATH_COOLDOWN }}` ticks.

<!-- tabs:start -->

#### **Upgrade Skeleton**
## Upgrade Skeleton

Right-click the wither skeleton minion when it is at `100%` health to upgrade it. The wither skeleton starts at level `1` and can be upgraded to level `5`. Upgrading a wither skeleton will cost `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_UPGRADE_COST }}` "Essence of the Afterlife".

![Necromancer - Wither Skeleton Upgrade](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Upgrade.gif)

#### **Heal Skeleton**
## Heal Skeleton

Right-click the wither skeleton minion to heal it for `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_HEAL_SKELETON_POTENCY }}` health. This will cost `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_HEAL_COST }}` "Essence of the Afterlife".

![Necromancer - Wither Skeleton Heal](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Heal.gif)

#### **Pick up Skeleton**
## Pick up Skeleton

Sneak and right-click the wither skeleton minion to pick it up. The player can only pick up their minion when it is **not** in combat. Picking up the skeleton will remember its current level and health.

![Necromancer - Wither Skeleton Pick up](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Pick%20up.gif)

The player's ability item and shield will become visually enchanted when the player is holding their skeleton. Deploying the wither skeleton again will cost `0` "Essence of the Afterlife".

![Necromancer - Wither Skeleton Redeploy](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Redeploy.gif)

<!-- tabs:end -->

Skeletons have `5` levels. The higher the level, the stronger the skeleton.

<!-- tabs:start -->

#### **Level 1**
## Level 1

![Necromancer - Wither Skeleton Level 1](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Level%201.gif)

The wither skeleton minion is equipped with a stone sword that deals `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_STONE_SWORD_DAMAGE }}` damage and applies the wither effect for `{{ kits.necromancer.data.NECROMANCER_SWORD_WITHER_EFFECT_DURATION }}` ticks. It is also equipped with a shield. The skeleton has `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_HEALTH }}` health, `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_DEFENSE_POINTS }}` defense points and a permanent `+{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_SPEED_INCREASE_PERCENTAGE }}%` speed boost.

#### **Level 2**
## Level 2

![Necromancer - Wither Skeleton Level 2](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Level%202.gif)

The wither skeleton minion gains armor that provides more defense.
- Chainmail chestplate: `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_CHESTPLATE_DEFENSE_POINTS }}` defense points.
- Leather leggings (Black): `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_LEGGINGS_DEFENSE_POINTS }}` defense points.
- Chainmail boots: `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_BOOTS_DEFENSE_POINTS }}` defense points.

#### **Level 3**
## Level 3

![Necromancer - Wither Skeleton Level 3](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Level%203.gif)

The wither skeleton minion gains an **additional** `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_3_HEALTH_INCREASE }}` health. The leather leggings also change color (Gray).

#### **Level 4**
## Level 4

![Necromancer - Wither Skeleton Level 4](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Level%204.gif)

The wither skeleton minion gains **stronger** armor that provides more defense.
- Iron chestplate: `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_CHESTPLATE_DEFENSE_POINTS }}` defense points.
- Leather leggings (Light Gray): `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_LEGGINGS_DEFENSE_POINTS }}` defense points.
- Iron boots: `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_BOOTS_DEFENSE_POINTS }}` defense points.

#### **Level 5**
## Level 5

![Necromancer - Wither Skeleton Level 5](../assets/kits/necromancer/Necromancer%20-%20Wither%20Skeleton%20Level%205.gif)

The wither skeleton minion gains `+{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_5_KNOCK_BACK_RESISTANCE_PERCENTAGE }}%` knockback resistance. The leather leggings also change color (White).

<!-- tabs:end -->

#### **Necromancer Sword**
## Necromancer Sword
A stone sword that applies the wither effect when hitting enemies. The wither effect lasts for `{{ kits.necromancer.data.NECROMANCER_SWORD_WITHER_EFFECT_DURATION }}` ticks.

![Necromancer - Necromancer Sword](../assets/kits/necromancer/Necromancer%20-%20Necromancer%20Sword.gif)

<!-- tabs:end -->

### Resources
<!-- tabs:start -->
#### **Essence of the Afterlife**
## Essence of the Afterlife
The resource to summon, heal, and upgrade wither skeletons. The player can hold a maximum of `{{ kits.necromancer.data.NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_MAX }}` essence. 

![Necromancer - Essence of the Afterlife](../assets/kits/necromancer/Necromancer%20-%20Essence%20of%20the%20Afterlife.gif)

Essence of the Afterlife will drop from any player or minion that dies.

![Necromancer - Essence of the Afterlife Drop](../assets/kits/necromancer/Necromancer%20-%20Essence%20of%20the%20Afterlife%20Drop.gif)

When the player dies, they will drop `{{ kits.necromancer.data.NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_PLAYER_DROP_COUNT_PERCENTAGE }}%` of their current essence.

![Necromancer - Essence of the Afterlife Player Drop](../assets/kits/necromancer/Necromancer%20-%20Essence%20of%20the%20Afterlife%20Player%20Drop.gif)

<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Wither Roses are black, Creepers are green | Have your wither skeleton minion kill an enemy creeper. | 20 Credits |
| Dead Man Tell No Tales | Get 1,000 skeleton kills. | 250 Credits |
| Undead Alchemy | Gather a total of 50,000 Essence of the Afterlife. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.necromancer.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| TANK_ROLE_KNOCKBACK_PERCENTAGE | `{{ kits._shared.data.TANK_ROLE_KNOCKBACK_PERCENTAGE }}` | {{ kitDataSharedDescriptions.TANK_ROLE_KNOCKBACK_PERCENTAGE }} |
| SHIELD_REGENERATION_DELAY | `{{ kits._shared.data.SHIELD_REGENERATION_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_DELAY }} |
| SHIELD_REGENERATION_RATE | `{{ kits._shared.data.SHIELD_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_RATE }} |
| SHIELD_REGENERATION_AMOUNT | `{{ kits._shared.data.SHIELD_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_AMOUNT }} |
| SHIELD_BREAK_COOLDOWN | `{{ kits._shared.data.SHIELD_BREAK_COOLDOWN }}` | {{ kitDataSharedDescriptions.SHIELD_BREAK_COOLDOWN }} |
| NECROMANCER_SWORD_DAMAGE | `{{ kits.necromancer.data.NECROMANCER_SWORD_DAMAGE }}` | The base damage of the sword. |
| NECROMANCER_SWORD_SPEED | `{{ kits.necromancer.data.NECROMANCER_SWORD_SPEED }}` | The base speed of the sword. |
| NECROMANCER_SWORD_WITHER_EFFECT_LEVEL | `{{ kits.necromancer.data.NECROMANCER_SWORD_WITHER_EFFECT_LEVEL }}` | The level of the sword's wither effect. |
| NECROMANCER_SWORD_WITHER_EFFECT_DURATION | `{{ kits.necromancer.data.NECROMANCER_SWORD_WITHER_EFFECT_DURATION }}` | The duration, in ticks, of the sword's wither effect. |
| NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_MAX | `{{ kits.necromancer.data.NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_MAX }}` | The maximum number of essense the player can have at once. |
| NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_FINAL_BLOW_DROP_BONUS | `{{ kits.necromancer.data.NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_FINAL_BLOW_DROP_BONUS }}` | The number of extra essence to drop when the player kills an enemy. |
| NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_PLAYER_DROP_COUNT_PERCENTAGE | `{{ kits.necromancer.data.NECROMANCER_ESSENCE_OF_THE_AFTER_LIFE_PLAYER_DROP_COUNT_PERCENTAGE }}` | The percentage of essence of the after to drop when the player dies. |
| NECROMANCER_WITHER_SKELETON_ESSENCE_PER_SKELETON | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_PER_SKELETON }}` | The amount of essence required to spawn a skeleton. |
| NECROMANCER_WITHER_SKELETON_DURATION | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_DURATION }}` | The duration, in ticks, that the wither skeleton lives for. |
| NECROMANCER_WITHER_SKELETON_STONE_SWORD_DAMAGE | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_STONE_SWORD_DAMAGE }}` | The base damage of the wither skeleton's sword. |
| NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_HEALTH | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_HEALTH }}` | The base health of the wither skeleton. |
| NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_BASE_DEFENSE_POINTS }}` | The base defense of the wither skeleton. |
| NECROMANCER_WITHER_SKELETON_LEVEL_1_SPEED_INCREASE_PERCENTAGE | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_1_SPEED_INCREASE_PERCENTAGE }}` | The speed bonus percentage of the wither skeleton. |
| NECROMANCER_WITHER_SKELETON_LEVEL_2_CHESTPLATE_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_CHESTPLATE_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 2 chestplate. |
| NECROMANCER_WITHER_SKELETON_LEVEL_2_LEGGINGS_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_LEGGINGS_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 2 leggings. |
| NECROMANCER_WITHER_SKELETON_LEVEL_2_BOOTS_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_2_BOOTS_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 2 boots. |
| NECROMANCER_WITHER_SKELETON_LEVEL_3_HEALTH_INCREASE | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_3_HEALTH_INCREASE }}` | The maximum health increase for a level 3 wither skeleton. |
| NECROMANCER_WITHER_SKELETON_LEVEL_4_CHESTPLATE_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_CHESTPLATE_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 4 chestplate. |
| NECROMANCER_WITHER_SKELETON_LEVEL_4_LEGGINGS_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_LEGGINGS_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 4 leggings. |
| NECROMANCER_WITHER_SKELETON_LEVEL_4_BOOTS_DEFENSE_POINTS | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_4_BOOTS_DEFENSE_POINTS }}` | The defense points of the wither skeleton's level 4 boots. |
| NECROMANCER_WITHER_SKELETON_LEVEL_5_KNOCK_BACK_RESISTANCE_PERCENTAGE | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_LEVEL_5_KNOCK_BACK_RESISTANCE_PERCENTAGE }}` | The knockback resistance increase (percentage) for a level 5 wither skeleton. |
| NECROMANCER_WITHER_SKELETON_ESSENCE_DROP_COUNT | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_DROP_COUNT }}` | The amount of essence the wither skeleton should drop when it dies. |
| NECROMANCER_WITHER_SKELETON_ESSENCE_HEAL_COST | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_HEAL_COST }}` | The amount of essence required to health a wither skeleton. |
| NECROMANCER_WITHER_SKELETON_ESSENCE_UPGRADE_COST | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_ESSENCE_UPGRADE_COST }}` | The amount of essence required to upgrade a wither skeleton. |
| NECROMANCER_WITHER_SKELETON_HEAL_SKELETON_POTENCY | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_HEAL_SKELETON_POTENCY }}` | The amount of health to restore when healing a wither skeleton with essence. |
| NECROMANCER_WITHER_SKELETON_HEAL_SKELETON_COOLDOWN | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_HEAL_SKELETON_COOLDOWN }}` | The cooldown, in ticks, after healing a wither skeleton. |
| NECROMANCER_WITHER_SKELETON_UPGRADE_SKELETON_COOLDOWN | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_UPGRADE_SKELETON_COOLDOWN }}` | The cooldown, in ticks, after upgrading a wither skeleton |
| NECROMANCER_WITHER_SKELETON_PICKUP_SKELETON_COOLDOWN | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_PICKUP_SKELETON_COOLDOWN }}` | The cooldown, in ticks, after picking up a wither skeleton. |
| NECROMANCER_WITHER_SKELETON_SPAWN_SKELETON_COOLDOWN | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_SPAWN_SKELETON_COOLDOWN }}` | The cooldownn, in ticks, after spawning a witehr skeleton. |
| NECROMANCER_WITHER_SKELETON_DEATH_COOLDOWN | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_DEATH_COOLDOWN }}` | The cooldown, in ticks, given when the player's wither skeleton dies. |
| NECROMANCER_WITHER_SKELETON_WITHER_EFFECT_LEVEL | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_WITHER_EFFECT_LEVEL }}` | The level of the wither skeleton's witehr effect. |
| NECROMANCER_WITHER_SKELETON_WITHER_EFFECT_DURATION | `{{ kits.necromancer.data.NECROMANCER_WITHER_SKELETON_WITHER_EFFECT_DURATION }}` | The duration, in ticks, of the wither skeleton's wither effect. |
