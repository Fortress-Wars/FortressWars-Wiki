# Snow Golem

---

#### ![snow-golem-icon](../assets/icons/kits/snow-golem-icon.jpg)

# Overview

---

- **Introduced:** v2.2.0
- **Description:** A snow support kit that summons snow golems and heals allies.
- **Role:** support
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Leather Chestplate
- Leather Leggings
- Leather Boots
- Icicle Staff
- {{ kits.snow_golem.data.SNOW_GOLEM_MINION_MAX_GOLEMS }} Snow Golem Minions
- {{ kits.snow_golem.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Icicle Staff**

## Icicle Staff

An ice infused elemental weapon used to shoot icicles. Icicles heal allies and damage enemies. Icicles leave patches of snow on the ground when hitting entities.

![Snow Golem - Icicle Staff Heal Ally](../assets/kits/snow_golem/Snow%20Golem%20-%20Icicle%20Staff%20Heal%20Ally.gif)

![Snow Golem - Icicle Staff Attack Enemy](../assets/kits/snow_golem/Snow%20Golem%20-%20Icicle%20Staff%20Attack%20Enemy.gif)

#### **Snow Golem Minion**

## Snow Golem Minion

Summon `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_MAX_GOLEMS }}` snow golem minions to fight by your side. Minions shoot icicles that heal allies and damage enemies. Icicles leave patches of snow on the ground upon hitting entities and snow golems spread snow as they roam. Snow golems are weak to fire damage and resistance to ice damage.

![Snow Golem - Minion Summon](../assets/kits/snow_golem/Snow%20Golem%20-%20Minion%20Summon.gif "Summon")

#### AI Priority

1. Heal Allies
2. Follow Owner
3. Attack Enemies
4. Roam Around

![Snow Golem - Minion Heal Allies](../assets/kits/snow_golem/Snow%20Golem%20-%20Minion%20Heal%20Allies.gif "Heal Allies")

![Snow Golem - Minion Follow Owner](../assets/kits/snow_golem/Snow%20Golem%20-%20Minion%20Follow%20Owner.gif "Follow Owner")

![Snow Golem - Minion Damage Enemies](../assets/kits/snow_golem/Snow%20Golem%20-%20Minion%20Damage%20Enemies.gif "Attack Enemies")

![Snow Golem - Minion Roam Around](../assets/kits/snow_golem/Snow%20Golem%20-%20Minion%20Roam%20Around.gif "Roam Around")

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Snow Trail Support**

## Snow Trail Support

When allies walk over snow layers created by the player, they gain the `Snow Trail Support` effect. Allies with the effect regain `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_TRAIL_SUPPORT_HEALING_PER_SECOND }}` health per second.

![Snow Golem - Snow Trail Support](../assets/kits/snow_golem/Snow%20Golem%20-%20Snow%20Trail%20Support.gif)

<!-- tabs:end -->

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Cryo-Goop | Attack an enemy slime minion with an icicle projectile. | 20 Credits |
| Frost Friends Forever | Have both your snow golem minions heal each other. | 20 Credits |
| Glacial Smash | Kill an enemy golem as kit snow golem. | 20 Credits |
| Instant Ice Pack | Heal an ally together with your snow golem minions. | 20 Credits |
| Putting the Flame Out | Kill an enemy prometheus as kit snow golem. | 20 Credits |
| Seasonal Flurry | Get a snow golem kill. | 20 Credits |
| Frost Aid Kit | Restore a total of 5,000 health as kit snow golem. | 250 Credits |
| Breaking the Ice | Get 50 icicle kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.snow_golem.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.snow_golem.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.snow_golem.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.snow_golem.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.snow_golem.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.snow_golem.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.snow_golem.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.snow_golem.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.snow_golem.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.snow_golem.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.snow_golem.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.snow_golem.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.snow_golem.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| SNOW_GOLEM_ICICLE_STAFF_MELEE_DAMAGE | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_MELEE_DAMAGE }}` | The base melee damage of the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_MELEE_SPEED | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_MELEE_SPEED }}` | The base melee speed of the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_SPEED | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_SPEED }}` | The speed of icicles from the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_SIZE | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_SIZE }}` | The size of icicles from the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_MAX_RANGE | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_MAX_RANGE }}` | The maximum distance, in meters, icicles from the icicle staff travel. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_PIERCING_LEVEL | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_PIERCING_LEVEL }}` | The number of entities icicles from the icicle staff pierce. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_DAMAGE | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_DAMAGE }}` | The amount of damage dealt by icicles from the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_HEALING | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_HEALING }}` | The amount of health restored by icicles from the icicle staff. |
| SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_COOLDOWN | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_STAFF_PROJECTILE_COOLDOWN }}` | The cooldown, in ticks, of the icicle staff. |
| SNOW_GOLEM_MINION_SPAWN_COOLDOWN | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_SPAWN_COOLDOWN }}` | The cooldown, in ticks, for spawning snow golem minions. |
| SNOW_GOLEM_MINION_MAX_GOLEMS | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_MAX_GOLEMS }}` | The maximum number of snow golem minions that can be alive at once. |
| SNOW_GOLEM_MINION_SPAWN_GOLEM_AMOUNT | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_SPAWN_GOLEM_AMOUNT }}` | The amount of snow golem minions the player can spawn at once. |
| SNOW_GOLEM_MINION_GOLEMS_DURATION | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_GOLEMS_DURATION }}` | The life duration, in ticks, of snow golem minions. |
| SNOW_GOLEM_MINION_GOLEMS_MAX_HEALTH | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_GOLEMS_MAX_HEALTH }}` | The maximum health of snow golem minions. |
| SNOW_GOLEM_MINION_TARGET_RADIUS | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_TARGET_RADIUS }}` | The radius, in meters, in which snow golems look for targets. |
| SNOW_GOLEM_MINION_MEMORY | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_MEMORY }}` | The memory of snow golem minions. |
| SNOW_GOLEM_MINION_START_FOLLOW_OWNER_DISTANCE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_START_FOLLOW_OWNER_DISTANCE }}` | The distance, in meters, when snow golem minions start following the player. |
| SNOW_GOLEM_MINION_END_FOLLOW_OWNER_DISTANCE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_END_FOLLOW_OWNER_DISTANCE }}` | The distance, in meters, when snow golem minions stop following the player. |
| SNOW_GOLEM_MINION_FOLLOW_OWNER_SPEED | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_FOLLOW_OWNER_SPEED }}` | The walking speed of snow golem minions when following the player. |
| SNOW_GOLEM_MINION_ICICLE_ATTACK_COOLDOWN | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_ATTACK_COOLDOWN }}` | The cooldown, in ticks, for snow golem minions after shooting icicle projectiles. |
| SNOW_GOLEM_MINION_ICICLE_PREFERRED_ATTACK_DISTANCE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_PREFERRED_ATTACK_DISTANCE }}` | The distance, in meters, from which snow golem minions prefer to shoot icicles. |
| SNOW_GOLEM_MINION_MINIMUM_TARGET_DURATION | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_MINIMUM_TARGET_DURATION }}` | The duration, in ticks, snow golem minions stay on target. |
| SNOW_GOLEM_SNOW_LAYER_DURATION | `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_LAYER_DURATION }}` | The duration, in ticks, that snow layers created by snow golem minions and icicle entity hits last. |
| SNOW_GOLEM_MAX_SNOW_LAYERS | `{{ kits.snow_golem.data.SNOW_GOLEM_MAX_SNOW_LAYERS }}` | The maximum number of layers snow layers stack up to. |
| SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_SPEED | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_SPEED }}` | The speed of icicles from snow golem minions. |
| SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_SIZE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_SIZE }}` | The size of icicles from snow golem minions. |
| SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_MAX_RANGE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_MAX_RANGE }}` | The maximum distance, in meters, icicles from snow golem minions travel. |
| SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_PIERCING_LEVEL | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_STAFF_PROJECTILE_PIERCING_LEVEL }}` | The number of entities icicles from snow golem minions pierce. |
| SNOW_GOLEM_MINION_ICICLE_PROJECTILE_DAMAGE | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_PROJECTILE_DAMAGE }}` | The amount of damage dealt by icicles from snow golem minions. |
| SNOW_GOLEM_MINION_ICICLE_PROJECTILE_HEALING | `{{ kits.snow_golem.data.SNOW_GOLEM_MINION_ICICLE_PROJECTILE_HEALING }}` | The amount of health restored by icicles from snow golem minions. |
| SNOW_GOLEM_SNOW_MINION_FIRE_DAMAGE_WEAKNESS_PERCENTAGE | `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_MINION_FIRE_DAMAGE_WEAKNESS_PERCENTAGE }}` | The percentage of increased damage taken by snow golem minions from fire damage. |
| SNOW_GOLEM_SNOW_MINION_ICE_DAMAGE_RESISTANCE_PERCENTAGE | `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_MINION_ICE_DAMAGE_RESISTANCE_PERCENTAGE }}` | The percentage of decreased damage taken by snow golem minions from ice damage. |
| SNOW_GOLEM_SNOW_TRAIL_SUPPORT_DURATION | `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_TRAIL_SUPPORT_DURATION }}` | The duration, in ticks, of the snow trail support healing effect. |
| SNOW_GOLEM_SNOW_TRAIL_SUPPORT_HEALING_PER_SECOND | `{{ kits.snow_golem.data.SNOW_GOLEM_SNOW_TRAIL_SUPPORT_HEALING_PER_SECOND }}` | The healing per second of the snow trail support healing effect. |
| SNOW_GOLEM_ICICLE_SHOULD_CREATE_SNOW_LAYER_ON_ENTITY_HIT | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_SHOULD_CREATE_SNOW_LAYER_ON_ENTITY_HIT }}` | If snow layers should be created upon hitting targets with icicles. |
| SNOW_GOLEM_ICICLE_SHOULD_IGNORE_NO_DAMAGE_TICKS | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_SHOULD_IGNORE_NO_DAMAGE_TICKS }}` | If icicle projectile attacks should ignore no damage ticks. |
| SNOW_GOLEM_ICICLE_SHOULD_RESET_NO_DAMAGE_TICKS | `{{ kits.snow_golem.data.SNOW_GOLEM_ICICLE_SHOULD_RESET_NO_DAMAGE_TICKS }}` | If icicle projectile attacks should reset no damage ticks. |
