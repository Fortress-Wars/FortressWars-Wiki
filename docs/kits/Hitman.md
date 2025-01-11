# Hitman

---

#### ![hitman-icon](../assets/icons/kits/hitman-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A utility kit that shoots darts which can apply debuffs to enemies.
- **Role:** Utility
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Leather Chestplate
- Leather Leggings
- Leather Boots
- Stone Sword
- Dart Shooter
- Select Potion
- {{ kits.hitman.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Dart Shooter**

## Dart Shooter

Shoot enemies with your Dark Shooter to deal damage. When enemies take damage from hitman darts, they will be tagged. Tags are used to trigger debuffs.

![Dart Shooter - Tag](../assets/kits/hitman/Hitman%20-%20Dart%20Shooter.gif)

Left click your Dart Shooter to trigger a debuff. The debuff applied is determined by the currently selected effect. The player can have up to `{{ kits.hitman.data.HITMAN_MAX_TAGS }}` tags and trigger debuffs up to `{{ kits.hitman.data.HITMAN_MAX_TAG_TRIGGERS }}` times. Tags will disappear when the player or the enemy dies.

![Dart Shooter - Trigger](../assets/kits/hitman/Hitman%20-%20Dart%20Shooter%20Activate.gif)

#### **Select Debuff**

## Select Debuff

Right click or left click to cycle between debuffs.

![Select Debuff](../assets/kits/hitman/Hitman%20-%20Select%20Debuff.gif)

The debuffs are as follows:

<!-- tabs:start -->

#### **Darkness**

## Darkness

Gives the darkness effect for `{{ kits.hitman.data.HITMAN_DARKNESS_DURATION }}` ticks.

![Darkness](../assets/kits/hitman/Hitman%20-%20Darkness.gif)

#### **Glowing**

## Glowing

Gives the glowing effect for `{{ kits.hitman.data.HITMAN_GLOWING_DURATION }}` ticks and stuns enemies for `{{ kits.hitman.data.HITMAN_STUN_DURATION }}` ticks.

![Glowing](../assets/kits/hitman/Hitman%20-%20Glowing.gif)

#### **Weakness**

## Weakness

Gives the weakness effect for `{{ kits.hitman.data.HITMAN_WEAKNESS_DURATION }}` ticks.

![Weakness](../assets/kits/hitman/Hitman%20-%20Weakness.gif)

#### **Harming**

## Harming

Damages the enemy for `{{ kits.hitman.data.HITMAN_INSTANT_DAMAGE_DAMAGE }}` HP.

![Harming](../assets/kits/hitman/Hitman%20-%20Harming.gif)

<!-- tabs:end -->

<!-- tabs:end -->

<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Names Are For Friends, So I Don't Need One | Affect 4 enemies at the same time as hitman. | 20 Credits |
| Name's Dennis. I've been hired to exterminate you. | As hitman, kill an aquaman. | 20 Credits |
| Agent 47's hair-loss program | Affect an enemy with glowing while they are invisible. | 20 Credits |
| One Day, I Will Think Of This As Just Another Job | Get 50 damage dart kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.hitman.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| HITMAN_SWORD_DAMAGE | `{{ kits.hitman.data.HITMAN_SWORD_DAMAGE }}` | The base damage of the sword. |
| HITMAN_SWORD_SPEED | `{{ kits.hitman.data.HITMAN_SWORD_SPEED }}` | The base speed of the sword. |
| HITMAN_BOW_MAX_DAMAGE | `{{ kits.hitman.data.HITMAN_BOW_MAX_DAMAGE }}` | The max damage of the Dart Shooter projectile. |
| HITMAN_MAX_TAG_TRIGGERS | `{{ kits.hitman.data.HITMAN_MAX_TAG_TRIGGERS }}` | The number of times the player can trigger debuffs from a tag. |
| HITMAN_MAX_TAGS | `{{ kits.hitman.data.HITMAN_MAX_TAGS }}` | The maximum number of tags the player can have active at once. |
| HITMAN_GLOWING_DURATION | `{{ kits.hitman.data.HITMAN_GLOWING_DURATION }}` | The duration, in ticks, of the glowing effect. |
| HITMAN_GLOWING_LEVEL | `{{ kits.hitman.data.HITMAN_GLOWING_LEVEL }}` | The level of the glowing effect. |
| HITMAN_STUN_DURATION | `{{ kits.hitman.data.HITMAN_STUN_DURATION }}` | The duration, in ticks, of the stun effect. |
| HITMAN_DARKNESS_DURATION | `{{ kits.hitman.data.HITMAN_DARKNESS_DURATION }}` | The duration, in ticks, of the darkness effect. |
| HITMAN_DARKNESS_LEVEL | `{{ kits.hitman.data.HITMAN_DARKNESS_LEVEL }}` | The level of the darkness effect. |
| HITMAN_WEAKNESS_DURATION | `{{ kits.hitman.data.HITMAN_WEAKNESS_DURATION }}` | The duration, in ticks, of the weakness effect. |
| HITMAN_WEAKNESS_LEVEL | `{{ kits.hitman.data.HITMAN_WEAKNESS_LEVEL }}` | The level of the weakness effect. |
| HITMAN_INSTANT_DAMAGE_DAMAGE | `{{ kits.hitman.data.HITMAN_INSTANT_DAMAGE_DAMAGE }}` | The base damage of the harming effect. |
| HITMAN_ROTATE_EFFECT_COOLDOWN | `{{ kits.hitman.data.HITMAN_ROTATE_EFFECT_COOLDOWN }}` | The cooldown, in ticks, of the Select Debuff ability. |
| HITMAN_ACTIVATE_EFFECT_COOLDOOWN | `{{ kits.hitman.data.HITMAN_ACTIVATE_EFFECT_COOLDOOWN }}` | The cooldown, in ticks, of triggering debuffs. |
