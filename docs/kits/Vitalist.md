# Vitalist

---

#### ![vitalist-icon](../assets/icons/kits/vitalist-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A kit that uses a crossbow to heal allies and damage enemies.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Leather Chestplate (Purple)
- Leather Leggings (Purple)
- Leather Boots (Purple)
- Stone Sword
- Crusader's Crossbow
- {{ kits.vitalist.data.VITALIST_MAX_AMMO }} Reserve Ammo
- {{ kits.vitalist.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Crusader's Crossbow**

## Crusader's Crossbow

A crossbow that shoots projectiles that heal allies and damage enemies.

<!-- tabs:start -->

#### **Shooting**

## Shooting

The player can shoot by right-clicking. The crossbow must be loaded to fire a projectile.

![Vitalist - Crossbow Shoot](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Shoot.gif)

When a crossbow projectile hits an ally, it heals them over time. The projectile has `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICKS }}` healing ticks. One healing tick is equivalent to `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICK_RATE }}` ticks and restores `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICK_POTENCY }}` health.

![Vitalist - Crossbow Projectile Hit Ally](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Projectile%20Hit%20Ally.gif)

When a crossbow projectile hits an enemy, it deals `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_DAMAGE }}` damage.

![Vitalist - Crossbow Projectile Hit Enemy](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Projectile%20Hit%20Enemy.gif)

Crossbow projectiles pierce up to `{{ kits.vitalist.data.VITALIST_CROSSBOW_PIERCING_LEVEL }}` times.

![Vitalist - Crossbow Projectile Piercing](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Projectile%20Piercing.gif)

#### **Reloading**

## Reloading

The player can reload by left-clicking. The reload duration depends on how empty the crossbow's magazine is. It takes `{{ kits.vitalist.data.VITALIST_CROSSBOW_RELOAD_DURATION_PER_1_AMMO }}` ticks to reload `1` ammo..

![Vitalist - Crossbow Reload](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Reload.gif)

If the crossbow's magazine is empty and the player has reserve ammo, the crossbow reloads automatically.

![Vitalist - Crossbow Auto Reload](../assets/kits/vitalist/Vitalist%20-%20Crossbow%20Auto%20Reload.gif)

<!-- tabs:end -->
<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Ammo**

## Ammo

Ammo is a resource that is used by the [Crusader's Crossbow](#crusaders-crossbow). The maximum amount of reserve ammo the player can hold is `{{ kits.vitalist.data.VITALIST_MAX_AMMO }}`.

![Vitalist - Ammo](../assets/kits/vitalist/Vitalist%20-%20Ammo.png)

Ammo automatically regenerates at a rate of `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_REGENERATION_AMOUNT }}` ammo every `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_REGENERATION_RATE }}` ticks.

![Vitalist - Ammo Regenerate](../assets/kits/vitalist/Vitalist%20-%20Ammo%20Regenerate.gif)

The player receives `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_FINAL_BLOW_REWARD }}` ammo after earning a file blow and `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_ASSIST_REWARD }}` ammo after earning an assist.

![Vitalist - Ammo Final Blow](../assets/kits/vitalist/Vitalist%20-%20Ammo%20Final%20Blow.gif)

Friendly engineer dispensers dispense `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_DISPENSE_COUNT }}` ammo to the player if they are in range.

![Vitalist - Ammo Dispenser](../assets/kits/vitalist/Vitalist%20-%20Ammo%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Crusader² | Heal a crusader as vitalist | 20 Credits |
| Value from a Distance | Heal a teammate from over 100 blocks away as vitalist | 20 Credits |
| Unbending Support | Heal 5,000 health with crossbow shots as vitalist | 500 Credits |
| Blessed Rebuttal | Get 50 kills with the crossbow as vitalist | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.vitalist.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.vitalist.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.vitalist.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.vitalist.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.vitalist.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.vitalist.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.vitalist.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.vitalist.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.vitalist.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.vitalist.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.vitalist.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.vitalist.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.vitalist.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| VITALIST_SWORD_DAMAGE | `{{ kits.vitalist.data.VITALIST_SWORD_DAMAGE }}` | The base damage of the sword. |
| VITALIST_SWORD_SPEED | `{{ kits.vitalist.data.VITALIST_SWORD_SPEED }}` | The base speed of the sword. |
| VITALIST_MAX_AMMO | `{{ kits.vitalist.data.VITALIST_MAX_AMMO }}` | The maximum amount of ammo the player can hold. |
| VITALIST_CROSSBOW_AMMO_FINAL_BLOW_REWARD | `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_FINAL_BLOW_REWARD }}` | The amount of ammo that the player receives after earning a final blow. |
| VITALIST_CROSSBOW_AMMO_ASSIST_REWARD | `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_ASSIST_REWARD }}` | The amount of ammo that the player receives after earning an assist. |
| VITALIST_CROSSBOW_AMMO_DISPENSE_COUNT | `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_DISPENSE_COUNT }}` | The amount of ammo dispensed from a dispenser to the player. |
| VITALIST_CROSSBOW_AMMO_REGENERATION_RATE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_REGENERATION_RATE }}` | The rate at which ammo passively regenerates. |
| VITALIST_CROSSBOW_AMMO_REGENERATION_AMOUNT | `{{ kits.vitalist.data.VITALIST_CROSSBOW_AMMO_REGENERATION_AMOUNT }}` | The amount of ammo to regenerate at a time. |
| VITALIST_CROSSBOW_MAGAZINE_SIZE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_MAGAZINE_SIZE }}` | The size of the crossbow's magazine. |
| VITALIST_CROSSBOW_SHOOT_COOLDOWN | `{{ kits.vitalist.data.VITALIST_CROSSBOW_SHOOT_COOLDOWN }}` | The cooldown, in ticks, after firing a projectile from the crossbow. |
| VITALIST_CROSSBOW_RELOAD_DURATION_PER_1_AMMO | `{{ kits.vitalist.data.VITALIST_CROSSBOW_RELOAD_DURATION_PER_1_AMMO }}` | The duration, in ticks, to reload one ammo into the crossbow's magazine. |
| VITALIST_CROSSBOW_PROJECTILE_SPEED | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_SPEED }}` | The speed of crossbow projectiles. (0 = no travel time) |
| VITALIST_CROSSBOW_PROJECTILE_SIZE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_SIZE }}` | The size of crossbow projectiles. |
| VITALIST_CROSSBOW_PROJECTILE_MAX_DISTANCE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_MAX_DISTANCE }}` | The maxiumum distance of crossbow projectiles. |
| VITALIST_CROSSBOW_PIERCING_LEVEL | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PIERCING_LEVEL }}` | The number of allies and enemies that crossbow projectiles pierce. |
| VITALIST_CROSSBOW_PROJECTILE_SPREAD | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_SPREAD }}` | The random spread of crossbow projectiles. |
| VITALIST_CROSSBOW_PROJECTILE_DAMAGE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_PROJECTILE_DAMAGE }}` | The amount of damage that crossbow projectiles deal to enemies. |
| VITALIST_CROSSBOW_HEALING_TICKS | `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICKS }}` | The amount of healing instances one crossbow projectile has. |
| VITALIST_CROSSBOW_HEALING_TICK_RATE | `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICK_RATE }}` | The time, in ticks, between each healing tick. |
| VITALIST_CROSSBOW_HEALING_TICK_POTENCY | `{{ kits.vitalist.data.VITALIST_CROSSBOW_HEALING_TICK_POTENCY }}` | The amount of health to restore per healing tick. |
| VITALIST_CROSSBOW_LEFT_CLICK_ICD | `{{ kits.vitalist.data.VITALIST_CROSSBOW_LEFT_CLICK_ICD }}` | The internal cooldown, in ticks, when left-clicking the crossbow. |
