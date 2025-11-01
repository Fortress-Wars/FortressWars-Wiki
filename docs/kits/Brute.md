# Brute

---

#### ![brute-icon](../assets/icons/kits/brute-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** An aggressive kit with an axe.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Axe
- {{ kits.brute.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Axe Swirl**

## Axe Swirl

Right click the iron axe to unleash an attack in a `{{ kits.brute.data.BRUTE_AXE_SWIRL_RADIUS }}` meter radius. This ability will deal `{{ kits.brute.data.BRUTE_AXE_SWIRL_DAMAGE }}` damage all enemies in range. If `BRUTE_AXE_SWIRL_IGNORE_I_FRAMES` is set to `true`, then the attack will ignore invulnerability frames.

![Axe Swirl 1](../assets/kits/brute/Brute%20-%20Axe%20Swirl%201.gif)

![Axe Swirl 2](../assets/kits/brute/Brute%20-%20Axe%20Swirl%202.gif)

Axe swirl will disable shields and damage enemy engineer blocks.

![Axe Swirl 3](../assets/kits/brute/Brute%20-%20Axe%20Swirl%20Break%20Shields.gif)

![Axe Swirl 4](../assets/kits/brute/Brute%20-%20Axe%20Swirl%20Break%20Engineer%20Blocks.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Berserk**

## Berserk

When the player's health drops to or below `{{ kits.brute.data.BRUTE_BERSERK_ACTIVATION_THRESHOLD }}` HP, they will receive a berserk stack and activate berserk. While berserk is active, the player will gain speed that scales with the number of berserk stacks. The player can have up to `{{ kits.brute.data.BRUTE_BERSERK_MAX_STACKS }}` berserk stacks.

![Berserk 1](../assets/kits/brute/Brute%20-%20Berserk%20Speed.gif)

Additionally, dealing melee damage with the axe will instantly break shields.

![Berserk 2](../assets/kits/brute/Brute%20-%20Berserk%20Break%20Shield.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Pumpkin Carving | Decapitate a snow golem minion. | 20 Credits |
| A clean cut | Get a double axe swirl kill. | 50 Credits |
| Skull splitter | Get 2 final blows within one berserk. | 50 Credits |
| Passive Aggressive Negotiator | Activate the berserk passive 100 times. | 100 Credits |
| Head Collector | Get 50 axe swirl kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.brute.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.brute.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.brute.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.brute.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.brute.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.brute.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.brute.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.brute.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.brute.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.brute.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.brute.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.brute.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.brute.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| BRUTE_AXE_MELEE_DAMAGE | `{{ kits.brute.data.BRUTE_AXE_MELEE_DAMAGE }}` | The base melee damage of the axe. |
| BRUTE_AXE_MELEE_SPEED | `{{ kits.brute.data.BRUTE_AXE_MELEE_SPEED }}` | The base melee speed of the axe. |
| BRUTE_BERSERK_ACTIVATION_THRESHOLD | `{{ kits.brute.data.BRUTE_BERSERK_ACTIVATION_THRESHOLD }}` | The threshold at which the Berserk ability will trigger. (1hp = 0.5 hearts) |
| BRUTE_BERSERK_COOLDOWN | `{{ kits.brute.data.BRUTE_BERSERK_COOLDOWN }}` | The cooldown, in ticks, of the Berserk ability. |
| BRUTE_BERSERK_DURATION | `{{ kits.brute.data.BRUTE_BERSERK_DURATION }}` | The duration, in ticks, of the Berserk ability. |
| BRUTE_BERSERK_MAX_STACKS | `{{ kits.brute.data.BRUTE_BERSERK_MAX_STACKS }}` | The maximum number of Berserk ability stacks. |
| BRUTE_AXE_SWIRL_COOLDOWN | `{{ kits.brute.data.BRUTE_AXE_SWIRL_COOLDOWN }}` | The cooldown, in ticks, of the Axe Swirl ability. |
| BRUTE_AXE_SWIRL_DAMAGE | `{{ kits.brute.data.BRUTE_AXE_SWIRL_DAMAGE }}` | The damage of the Axe Swirl ability. |
| BRUTE_AXE_SWIRL_RADIUS | `{{ kits.brute.data.BRUTE_AXE_SWIRL_RADIUS }}` | The radius of the Axe Swirl ability. |
| BRUTE_AXE_SWIRL_DELAY | `{{ kits.brute.data.BRUTE_AXE_SWIRL_DELAY }}` | The delay, in ticks, between activating the Axe Swirl ability and the ability dealing damage. |
| BRUTE_AXE_SWIRL_IGNORE_I_FRAMES | `{{ kits.brute.data.BRUTE_AXE_SWIRL_IGNORE_I_FRAMES }}` | Determines if the Axe Swirl ability should ignore invulnerability frames. |
