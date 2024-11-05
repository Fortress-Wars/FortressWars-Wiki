# Prometheus

***

#### ![prometheus-icon](../assets/icons/prometheus-icon.jpg)

# Overview
***
- **Introduced:** v1.8.0
- **Description:** A kit that uses the element of fire to deal damage.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Leather Leggings (Orange)
- Chainmail Boots
- Stone Sword
- Spell Wand
- {{ kits.prometheus.data.MAX_MANA_POTIONS }} Mana Potions
- {{ kits._shared.data.MANA_MAX }} Mana

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Spell Wand**
## Spell Wand
A weapon that is used to cast spells. Casting spells costs mana and each spell has a cooldown.

### Casting
- Fireball *(Left-Click)*
- Flame *(Right-Click)*
- Imbue *(Sneak + Right-Click)*

<!-- tabs:start -->
#### **Fireball**
## Fireball
The spell costs `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_MANA_COST }}` mana. Casting summons a fireball in the direction the player is looking. The fireball deals `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_HIT_DAMAGE }}` damage on impact and explodes to deal and an additional `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_DAMAGE }}` damage. The fireball ignites enemies for `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_FIRE_DURATION }}` ticks and deals knockback. The caster is also affected by the fireball if caught in the explosion.

![Prometheus - Fireball Cast](../assets/kits/prometheus/_image_1_.jpg_)

Fireballs destroy builder bricks.

![Prometheus - Fireball Bricks](../assets/kits/prometheus/_image_1_.jpg_)

Fireballs damage engineer blocks.

![Prometheus - Fireball Engineer Blocks](../assets/kits/prometheus/_image_1_.jpg_)

#### **Flame**
## Flame
The spell costs `{{ kits.prometheus.data.PROMETHEUS_FLAME_MANA_COST }}` mana. Casting summons flames that travel forward in front of the player. Enemies that are caught in the are ignited for `{{ kits.prometheus.data.PROMETHEUS_FLAME_BURN_DURATION }}` ticks.

![Prometheus - Flame Cast](../assets/kits/prometheus/_image_1_.jpg_)

The flame spell burns cobwebs.

![Prometheus - Flame Burn Cobwebs](../assets/kits/prometheus/_image_1_.jpg_)

#### **Imbue**
## Imbue

The spell costs `{{ kits.prometheus.data.PROMETHEUS_IMBUE_MANA_COST }}` mana. Casting imbues the player's sword with flames. The player also receives the fire resistance potion effect.

![Prometheus - Imbue Cast](../assets/kits/prometheus/_image_1_.jpg_)

![Prometheus - Imbue Sword Hit](../assets/kits/prometheus/_image_1_.jpg_)

![Prometheus - Imbue Fire Resistance](../assets/kits/prometheus/_image_1_.jpg_)

If the spell is casted again while the effects are active, then the player incinerates.

![Prometheus - Imbue Incinerate](../assets/kits/prometheus/_image_1_.jpg_)

<!-- tabs:end -->

<!-- tabs:end -->

### Resources
<!-- tabs:start -->
#### **Mana**
## Mana
Mana is a resource used to cast spells.

![Prometheus - Mana](../assets/kits/prometheus/_image_1_.jpg_)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it regenerates slowly over time.

![Prometheus - Mana Regenerate](../assets/kits/prometheus/_image_1_.jpg_)

After the player earns a final blow, they restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Prometheus - Mana Final Blow](../assets/kits/prometheus/_image_1_.jpg_)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Prometheus - Mana Dispenser](../assets/kits/prometheus/_image_1_.jpg_)

<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Deflected…but at what cost? | Deflect an enemy fireball and kill an ally. | 20 Credits |
| Frost fire | Ignite an enemy that has the frozen effect. | 20 Credits |
| That was heated. | Use the imbue spell to save yourself from burning. | 20 Credits |
| That’s not fire. | Use the imbue spell again after already casting it. | 20 Credits |
| Grab the ember-ella! | Get a double fireball kill. | 50 Credits |
| Burn down the em-fire! | Get a triple fireball kill. | 50 Credits |
| I’ll have a blazed doughnut | Get 1,000 Fire Kills. | 250 Credits |
| In the Hall of Flame. | Get 1,000 fireball kills. | 250 Credits |
| It’s lit! | Ignite 10,000 enemies. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.prometheus.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MAX_MANA_POTIONS | `{{ kits.prometheus.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
| MANA_POTION_CLICK_POTENCY | `{{ kits._shared.data.MANA_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_CLICK_POTENCY }} |
| MANA_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_POTENCY }} |
| MANA_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.MANA_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_THRESHOLD }} |
| MANA_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_HOTBAR_ONLY }} |
| MANA_MAX | `{{ kits._shared.data.MANA_MAX }}` | {{ kitDataSharedDescriptions.MANA_MAX }} |
| MANA_REGENERATION_RATE | `{{ kits._shared.data.MANA_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_RATE }} |
| MANA_REGENERATION_AMOUNT | `{{ kits._shared.data.MANA_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_AMOUNT }} |
| MANA_FINAL_BLOW_AMOUNT | `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_FINAL_BLOW_AMOUNT }} |
| MANA_ASSIST_AMOUNT | `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_ASSIST_AMOUNT }} |
| MANA_DISPENSER_DISPENSE_AMOUNT | `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_DISPENSER_DISPENSE_AMOUNT }} |
| PROMETHEUS_SWORD_DAMAGE | `{{ kits.prometheus.data.PROMETHEUS_SWORD_DAMAGE }}` | The base damage of the sword. |
| PROMETHEUS_SWORD_SPEED | `{{ kits.prometheus.data.PROMETHEUS_SWORD_SPEED }}` | The base speed of the sword. |
| PROMETHEUS_WAND_KNOCKBACK | `{{ kits.prometheus.data.PROMETHEUS_WAND_KNOCKBACK }}` | The level of the knockback enchantment on the spell wand. |
| PROMETHEUS_FLAME_MANA_COST | `{{ kits.prometheus.data.PROMETHEUS_FLAME_MANA_COST }}` | The cost of mana in order to cast the flame spell. |
| PROMETHEUS_FLAME_CAST_COOLDOWN | `{{ kits.prometheus.data.PROMETHEUS_FLAME_CAST_COOLDOWN }}` | The flame spell's cooldown in ticks. |
| PROMETHEUS_FLAME_RANGE | `{{ kits.prometheus.data.PROMETHEUS_FLAME_RANGE }}` | The maximum travel distance, in meters, of the flames from the flame spell. |
| PROMETHEUS_FLAME_SPEED | `{{ kits.prometheus.data.PROMETHEUS_FLAME_SPEED }}` | The travel speed of the flames from the flame spell. (0 = no travel time) |
| PROMETHEUS_FLAME_BLOCK_HITBOX_SIZE | `{{ kits.prometheus.data.PROMETHEUS_FLAME_BLOCK_HITBOX_SIZE }}` | The hitbox size of the flame spell that is used to detect block collision. |
| PROMETHEUS_FLAME_ENTITY_HITBOX_SIZE | `{{ kits.prometheus.data.PROMETHEUS_FLAME_ENTITY_HITBOX_SIZE }}` | The hitbox size of the flame spell that is used to detect entity collision. |
| PROMETHEUS_FLAME_BURN_DURATION | `{{ kits.prometheus.data.PROMETHEUS_FLAME_BURN_DURATION }}` | The flame spell burn duration, in ticks. |
| PROMETHEUS_FIREBALL_MANA_COST | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_MANA_COST }}` | The cost of mana in order to cast the fireball spell. |
| PROMETHEUS_FIREBALL_CAST_COOLDOWN | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_CAST_COOLDOWN }}` | The fireball spell's cooldown in ticks. |
| PROMETHEUS_FIREBALL_HIT_DAMAGE | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_HIT_DAMAGE }}` | The damage dealt by the fireball projectile upon hitting an enemy. |
| PROMETHEUS_FIREBALL_EXPLOSION_RADIUS | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_RADIUS }}` | The radius, in meters, of the fireball. |
| PROMETHEUS_FIREBALL_EXPLOSION_DAMAGE | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_DAMAGE }}` | The damage dealt by the fireball explosion. |
| PROMETHEUS_FIREBALL_EXPLOSION_IGNORE_I_FRAMES | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_IGNORE_I_FRAMES }}` | If the fireball explosion damage should ignore invulnerability frames. |
| PROMETHEUS_FIREBALL_EXPLOSION_SELF_DAMAGE_MULTIPLIER | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_SELF_DAMAGE_MULTIPLIER }}` | The damage multiplier when the fireball explosion deals damage to the player.|
| PROMETHEUS_FIREBALL_EXPLOSION_FIRE_DURATION | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_FIRE_DURATION }}` | The fireball burn duration, in ticks. |
| PROMETHEUS_FIREBALL_EXPLOSION_KNOCKBACK_MULTIPLIER | `{{ kits.prometheus.data.PROMETHEUS_FIREBALL_EXPLOSION_KNOCKBACK_MULTIPLIER }}` | The multiplier of the fireballs knockback. |
| PROMETHEUS_IMBUE_MANA_COST | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_MANA_COST }}` | The cost of mana in order to cast the imbue spell. |
| PROMETHEUS_IMBUE_CAST_COOLDOWN | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_CAST_COOLDOWN }}` | The imbue spell's cooldown in ticks. |
| PROMETHEUS_IMBUE_FIRE_ASPECT_LEVEL | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_FIRE_ASPECT_LEVEL }}` | The level of the fire aspect enchantment applied to the sword when imbue is casted. |
| PROMETHEUS_IMBUE_FIRE_RESISTANCE_LEVEL | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_FIRE_RESISTANCE_LEVEL }}` | The level of the fire resistance potion effect given to the player when imbue is casted. |
| PROMETHEUS_IMBUE_DURATION | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_DURATION }}` | The duration, in ticks, of the imbue spell's effects. |
| PROMETHEUS_IMBUE_SELF_DAMAGE | `{{ kits.prometheus.data.PROMETHEUS_IMBUE_SELF_DAMAGE }}` | The damage dealt to the player after casting the imbue spell while its effects are already active. |