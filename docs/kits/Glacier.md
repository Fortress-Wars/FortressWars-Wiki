# Glacier

---

#### ![glacier-icon](../assets/icons/maps/glacier-icon.jpg)

# Overview

---

- **Introduced:** v2.1.0
- **Description:** _description_
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Ice Ball
- {{ kits.glacier.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Ice Ball**

## Ice Ball

A throwable projectile, when it lands or collides with a enemy it produces a 'snow layer' beneath it or on the ground at the location. When the snowball hits a enemy it applies Slowness `{{ kits.glacier.data.GLACIER_ICE_BALL_SLOWNESS_LEVEL }}` for `{{ kits.glacier.data.GLACIER_ICE_BALL_SLOWNESS_DURATION }}` ticks.

![_image_1_](../assets/kits/glacier/_image_1_.jpg_)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Snowdrift**

## Snowdrift

When the player stands on a 'snow layer' they gain Speed `{{ kits.glacier.data.GLACIER_SNOWDRIFT_SPEED_LEVEL }}` for `{{ kits.glacier.data.GLACIER_SNOWDRIFT_DURATION }}` ticks.

![_image_1_](../assets/kits/glacier/_image_1_.jpg_)

<!-- tabs:end -->

<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.glacier.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| GLACIER_ICE_BALL_COOLDOWN | `{{ kits.glacier.data.GLACIER_ICE_BALL_COOLDOWN }}` | The ice ball's cooldown in ticks. |
| GLACIER_ICE_BALL_SLOWNESS_DURATION| `{{ kits.glacier.data.GLACIER_ICE_BALL_SLOWNESS_DURATION }}` | The duration, in ticks, of the slowness the target is effected by.|
| GLACIER_ICE_BALL_SLOWNESS_LEVEL| `{{ kits.glacier.data.GLACIER_ICE_BALL_SLOWNESS_LEVEL }}` | The level of the slowness the target is effected by.|
| GLACIER_ICE_BALL_SNOW_LAYER_DURATION| `{{ kits.glacier.data.GLACIER_ICE_BALL_SNOW_LAYER_DURATION }}` | The duration, in ticks, of the snow layer created by the ice ball. |
| GLACIER_SNOWDRIFT_DURATION| `{{ kits.glacier.data.GLACIER_SNOWDRIFT_DURATION }}` | The duration, in ticks, of the Snowdrift passive. |
| GLACIER_SNOWDRIFT_SPEED_LEVEL| `{{ kits.glacier.data.GLACIER_SNOWDRIFT_SPEED_LEVEL }}` | The level of speed the user gets from the Snowdrift passive. |

### Changelog
