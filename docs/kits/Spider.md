# Spider

---

#### ![spider-icon](../assets/icons/kits/spider-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A kit that deploys cobwebs to trap enemies.
- **Role:** Tank
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Netherite Chestplate
- Leather Leggings (Dark Gray)
- Leather Boots (Dark Gray)
- Stone Sword
- Shield
- Cobweb Traps
- {{ kits.spider.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Cobweb Traps**

## Cobweb Traps

Deploy cobwebs to trap enemies. Cobweb traps are activated when enemy players walk over them. When activated, deployed traps will turn into a blob of cobweb blocks. Activated traps last for `{{ kits.spider.data.SPIDER_COBWEB_TRAP_DURATION }}` ticks.

![Spider - Cobweb Trap Deploy](../assets/kits/spider/Spider%20-%20Cobweb%20Trap%20Deploy.gif)

![Spider - Cobweb Trap Activate](../assets/kits/spider/Spider%20-%20Cobweb%20Trap%20Activate.gif)

The player can collect cobweb traps by picking them up.

![Spider - Cobweb Trap Collect](../assets/kits/spider/Spider%20-%20Cobweb%20Trap%20Collect.gif)

Cobwebs can be destroyed by enemies and the environment.

![Spider - Cobweb Trap Enemy Destroyed](../assets/kits/spider/Spider%20-%20Cobweb%20Trap%20Enemy%20Destroyed.gif)

![Spider - Cobweb Trap Environment Destroyed](../assets/kits/spider/Spider%20-%20Cobweb%20Trap%20Environment%20Destroyed.gif)

#### **Spider Sword**

## Spider Sword

A stone sword that applies poison level `{{ kits.spider.data.SPIDER_SWORD_POISON_LEVEL }}` when hitting enemies. The poison effect lasts for `{{ kits.spider.data.SPIDER_SWORD_POISON_DURATION }}` ticks.

![Spider - Spider Sword](../assets/kits/spider/Spider%20-%20Spider%20Sword.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Weaving**

## Weaving

The player moves faster through cobwebs.

![Spider - Weaving Moving Through Cobwebs](../assets/kits/spider/)

On death, the player creates several `Cobweb Traps` nearby.

![Spider - Weaving Cobweb Traps](../assets/kits/spider/)

#### **Poison Immunity**

## Poison Immunity

The player is immune to the poison potion effect.

![Spider - Poison Immunity](../assets/kits/spider/Spider%20-%20Poison%20Immunity.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Sticky circumstance | Trap an invisible spy with a web trap. | 20 Credits |
| Web Master | Activate 250 web traps. | 250 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.spider.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.spider.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.spider.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.spider.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.spider.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.spider.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.spider.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.spider.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.spider.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.spider.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.spider.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.spider.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.spider.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| TANK_ROLE_KNOCKBACK_PERCENTAGE | `{{ kits._shared.data.TANK_ROLE_KNOCKBACK_PERCENTAGE }}` | {{ kitDataSharedDescriptions.TANK_ROLE_KNOCKBACK_PERCENTAGE }} |
| SHIELD_REGENERATION_DELAY | `{{ kits._shared.data.SHIELD_REGENERATION_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_DELAY }} |
| SHIELD_REGENERATION_RATE | `{{ kits._shared.data.SHIELD_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_RATE }} |
| SHIELD_REGENERATION_AMOUNT | `{{ kits._shared.data.SHIELD_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.SHIELD_REGENERATION_AMOUNT }} |
| SHIELD_BREAK_COOLDOWN | `{{ kits._shared.data.SHIELD_BREAK_COOLDOWN }}` | {{ kitDataSharedDescriptions.SHIELD_BREAK_COOLDOWN }} |
| SHIELD_DAMAGE_FACTOR | `{{ kits._shared.data.SHIELD_DAMAGE_FACTOR }}` | {{ kitDataSharedDescriptions.SHIELD_DAMAGE_FACTOR }} | 
| SHIELD_BLOCKING_DELAY | `{{ kits._shared.data.SHIELD_BLOCKING_DELAY }}` | {{ kitDataSharedDescriptions.SHIELD_BLOCKING_DELAY }} | 
| SHIELD_MAX_HEALTH | `{{ kits._shared.data.SHIELD_MAX_HEALTH }}` | {{ kitDataSharedDescriptions.SHIELD_MAX_HEALTH }} | 
| SPIDER_SWORD_DAMAGE | `{{ kits.spider.data.SPIDER_SWORD_DAMAGE }}` | The base damage of the sword. |
| SPIDER_SWORD_SPEED | `{{ kits.spider.data.SPIDER_SWORD_SPEED }}` | The base speed of the sword. |
| SPIDER_SWORD_POISON_DURATION | `{{ kits.spider.data.SPIDER_SWORD_POISON_DURATION }}` | The duration, in ticks, of the sword's poison effect. |
| SPIDER_SWORD_POISON_LEVEL | `{{ kits.spider.data.SPIDER_SWORD_POISON_LEVEL }}` | The level of the sword's poison effect. |
| SPIDER_COBWEB_TRAP_SIZE | `{{ kits.spider.data.SPIDER_COBWEB_TRAP_SIZE }}` | The size of spider cobweb traps. |
| SPIDER_COBWEB_TRAP_DURATION | `{{ kits.spider.data.SPIDER_COBWEB_TRAP_DURATION }}` | The duration, in ticks, of active cobweb traps. |
| SPIDER_COBWEB_TRAP_COOLDOWN | `{{ kits.spider.data.SPIDER_COBWEB_TRAP_COOLDOWN }}` | The cooldown, in ticks, after a cobweb trap is activated before receiving a new one. |
| SPIDER_COBWEB_MAX_COUNT | `{{ kits.spider.data.SPIDER_COBWEB_MAX_COUNT }}` | The maximum number of cobweb traps the player can have. |
| SPIDER_COBWEB_THROW_MULTIPLIER | `{{ kits.spider.data.SPIDER_COBWEB_THROW_MULTIPLIER }}` | How far the player can throw (deploy) cobweb traps. |
| SPIDER_COBWEB_ITEM_DURATION | `{{ kits.spider.data.SPIDER_COBWEB_ITEM_DURATION }}` | The duration, in ticks, of the cobweb trap item before despawning. |
| SPIDER_COBWEB_THROW_COOLDOWN | `{{ kits.spider.data.SPIDER_COBWEB_THROW_COOLDOWN }}` | The cooldown, in ticks, after deploying a cobweb trap. |
| SPIDER_COBWEB_PICKUP_DELAY | `{{ kits.spider.data.SPIDER_COBWEB_PICKUP_DELAY }}` | The delay, in ticks, before the player can collect cobweb traps after deploying them. |
| SPIDER_WEAVING_LEVEL | `{{ kits.spider.data.SPIDER_WEAVING_LEVEL }}` | The level of the weaving potion effect. |
| SPIDER_WEAVING_WEBS_ON_DEATH | `{{ kits.spider.data.SPIDER_WEAVING_WEBS_ON_DEATH }}` | If the player should create cobweb traps upon death. |
