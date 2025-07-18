# Master

---

#### ![master-icon](../assets/icons/kits/master-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that spawns creeper minions to fight along side the player.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Creeper Minion Egg
- {{ kits.master.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Creeper Minion Egg**

## Creeper Minion Egg

Right click a block to spawn a creeper minion. The spawn point becomes the minions anchor and prefer to stay within `{{ kits.master.data.MASTER_MINION_START_RETURN_TO_ANCHOR_DISTANCE }}` meters of this location. Creepers minons can be spawned every `{{ kits.master.data.MASTER_MINIONS_SPAWN_CREEPER_COOLDOWN }}` ticks.

![Master - Creeper Spawn](../assets/kits/master/Master%20-%20Creeper%20Spawn.gif)

The player can have a maximum of `{{ kits.master.data.MASTER_MINIONS_MAX_CREEPERS }}` creeper minions alive once.

![Master - Creeper Spawn at Max](../assets/kits/master/Master%20-%20Creeper%20Spawn%20at%20Max.gif)

#### **Creeper Minion**

## Creeper Minion

Creepers have `{{ kits.master.data.MASTER_MINIONS_CREEPER_MAX_HEALTH }}` health and will deal `{{ kits.master.data.MASTER_MINIONS_CREEPER_DAMAGE }}` damage when they explode. The explosion radius is `{{ kits.master.data.MASTER_MINIONS_CREEPER_EXPLOSION_RADIUS}}` meters.

![Master - Creeper Targeting & Explode](../assets/kits/master/Master%20-%20Creeper%20Targeting%20&%20Explode.gif)

If the creeper is struck by lightning, it will turn into a super charged creeper minion. Super charged creeper minions deal `{{ kits.master.data.MASTER_MINIONS_CHARGED_CREEPER_DAMAGE }}` damage when they explode.

![Master - Lightning Strike & Explode](../assets/kits/master/Master%20-%20Lightning%20Strike%20&%20Explode.gif)

When creeper minons explode, they will explode builder bricks, jumper translocators, cobwebs.

![Master - Explode Builder Bricks](../assets/kits/master/Master%20-%20Explode%20Builder%20Bricks.gif)

When creeper minions explode, they will damage engineer blocks.

![Master - Explode Engineer Blocks](../assets/kits/master/Master%20-%20Explode%20Engineer%20Blocks.gif)

If a creeper has a potion effect and it explodes, the potion effects will linger. Positive effects will affect allies, and negative effects will affect enemies.

![Master - Creeper Positive Effect](../assets/kits/master/Master%20-%20Creeper%20Positive%20Effect.gif)

![Master - Creeper Negative Effect](../assets/kits/master/Master%20-%20Creeper%20Negative%20Effect.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Come on kiddies, have some ice cream. | Get a double creeper kill. | 20 Credits |
| Oh no, you dropped your ice cream. | Get a triple creeper kill. | 20 Credits |
| Head Dropper | Get a super creeper kill. | 20 Credits |
| Creeper Army! | Get 50 creeper kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.master.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.master.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.master.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.master.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.master.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.master.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.master.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.master.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.master.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.master.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.master.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.master.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.master.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| MASTER_SWORD_DAMAGE | `{{ kits.master.data.MASTER_SWORD_DAMAGE }}` | The base damage of the sword. |
| MASTER_SWORD_SPEED | `{{ kits.master.data.MASTER_SWORD_SPEED }}` | The base speed of the sword. |
| MASTER_MINIONS_MAX_CREEPERS | `{{ kits.master.data.MASTER_MINIONS_MAX_CREEPERS }}` | The maximum number of creeper minions that can be alive at once. |
| MASTER_MINIONS_SPAWN_CREEPER_COOLDOWN | `{{ kits.master.data.MASTER_MINIONS_SPAWN_CREEPER_COOLDOWN }}` | The cooldown, in ticks, of the Creeper Minion Egg ability. |
| MASTER_MINIONS_SPAWN_CREEPER_AMOUNT | `{{kits.master.data.MASTER_MINIONS_SPAWN_CREEPER_AMOUNT }}` | The amount of creepers to spawn when using the Creeper Minion Egg. | 
| MASTER_MINIONS_CREEPER_DURATION | `{{ kits.master.data.MASTER_MINIONS_CREEPER_DURATION }}` | The life duration, in ticks, of creeper minions. |
| MASTER_MINIONS_CREEPER_DAMAGE | `{{ kits.master.data.MASTER_MINIONS_CREEPER_DAMAGE }}` | The explosion damage of creeper minions. |
| MASTER_MINIONS_CHARGED_CREEPER_DAMAGE | `{{ kits.master.data.MASTER_MINIONS_CHARGED_CREEPER_DAMAGE }}` | The explosion damage of super charged creeper minions. |
| MASTER_MINIONS_CREEPER_MAX_HEALTH | `{{ kits.master.data.MASTER_MINIONS_CREEPER_MAX_HEALTH }}` | The maximum health of creeper minions. |
| MASTER_MINIONS_CREEPER_EXPLOSION_RADIUS | `{{ kits.master.data.MASTER_MINIONS_CREEPER_EXPLOSION_RADIUS}}` | The explosion radius, in meters, of creeper minions. |
| MASTER_MINION_TARGET_RADIUS | `{{ kits.master.data.MASTER_MINION_TARGET_RADIUS }}` | The radius in which creepers target enemies. |
| MASTER_MINION_MEMORY | `{{ kits.master.data.MASTER_MINION_MEMORY }}` | The memory of creeper minions. |
| MASTER_MINION_START_RETURN_TO_ANCHOR_DISTANCE | `{{ kits.master.data.MASTER_MINION_START_RETURN_TO_ANCHOR_DISTANCE }}` | The distance, in meters, when creeper minions start pathfinding to the anchor location. |
| MASTER_MINION_END_RETURN_TO_ANCHOR_DISTANCE | `{{ kits.master.data.MASTER_MINION_END_RETURN_TO_ANCHOR_DISTANCE }}` | The distance, in meters, when creeper minions stop pathfinding to the anchor location. |
| MASTER_MINION_WALKING_BACK_SPEED | `{{ kits.master.data.MASTER_MINION_WALKING_BACK_SPEED }}` | The walking speed of creeper minions when pathfinding to the anchor location. |
| MASTER_MINION_START_FOLLOW_OWNER_DISTANCE | `{{ kits.master.data.MASTER_MINION_START_FOLLOW_OWNER_DISTANCE }}` | The distance, in meters, when creeper minions start following the player. |
| MASTER_MINION_END_FOLLOW_OWNER_DISTANCE | `{{ kits.master.data.MASTER_MINION_END_FOLLOW_OWNER_DISTANCE }}` | The distance, in meters, when creeper minions stop following the player. |
| MASTER_MINION_FOLLOW_OWNER_SPEED | `{{ kits.master.data.MASTER_MINION_FOLLOW_OWNER_SPEED }}` | The walking speed of creeper minions when following the player. |
