# Crusher

---

#### ![crusher-icon](../assets/icons/kits/crusher-icon.jpg)

# Overview

---

- **Introduced:** v1.8.0
- **Description:** A damage kit that summons anvils to crush your enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Crusher
- {{ kits.crusher.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Crusher**

## Crusher

Right click to use. Upon using, the ability will target a block in the player's line of sight. If `CRUSHER_ANVIL_TARGET_ENEMIES` is set to `true`, then the crusher ability will prioritize targeting players. An anvil will spawn `{{ kits.crusher.data.CRUSHER_ANVIL_SUMMON_HEIGHT }}` meters above the target. The anvil deals damage when it lands. It deals more damage to targets closer to the point of impact.

![Crusher 1](../assets/kits/crusher/Crusher%20-%20Crush%201.gif)

Falling anvils stun enemies for `{{ kits.crusher.data.CRUSHER_ANVIL_STUN_DURATION }}` ticks.

![Crusher 2](../assets/kits/crusher/Crusher%20-%20Crush%20Raven.gif)

![Crusher 3](../assets/kits/crusher/Crusher%20-%20Crush%20Gunner.gif)

Anvils will damage engineer blocks.

![Crusher 4](../assets/kits/crusher/Crusher%20-%20Crush%20Engineer%20Blocks.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Bird Squ-”watcher” | Eliminate a raven with an anvil. | 20 Credits |
| Bowling Ball vs Trampoline! | Kill a slime minion with an anvil. | 20 Credits |
| Heavy Metal | Get a direct anvil kill. | 20 Credits |
| Pixar Lamp | Crush an engineer sentry and destroy it. | 20 Credits |
| Anvil Inc. | Hit 100 enemies with summoned anvils. | 50 Credits |
| Splat! | Get a double anvil kill! | 50 Credits |
| Blacksmith's Graveyard | Get a triple anvil kill! | 50 Credits |
| “Kilogramme o' steel” | Get 50 anvil kills! | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.crusher.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.crusher.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.crusher.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.crusher.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.crusher.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.crusher.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.crusher.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.crusher.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.crusher.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.crusher.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.crusher.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.crusher.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.crusher.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| CRUSHER_ANVIL_DIRECT_DAMAGE | `{{ kits.crusher.data.CRUSHER_ANVIL_DIRECT_DAMAGE }}` | The damage dealt by a direct anvil hit. |
| CRUSHER_ANVIL_INDIRECT_DAMAGE | `{{ kits.crusher.data.CRUSHER_ANVIL_INDIRECT_DAMAGE }}` | The damage dealt by an indirect anvil hit. |
| CRUSHER_ANVIL_SUMMON_HEIGHT | `{{ kits.crusher.data.CRUSHER_ANVIL_SUMMON_HEIGHT }}` | The distance above the target to determine the actual anvil summon location.  |
| CRUSHER_ANVIL_SUMMON_RANGE | `{{ kits.crusher.data.CRUSHER_ANVIL_SUMMON_RANGE }}` | The maximum distance, in meters, that anvils can be summoned from the player. |
| CRUSHER_ANVIL_IMPACT_RADIUS | `{{ kits.crusher.data.CRUSHER_ANVIL_IMPACT_RADIUS }}` | The radius of an indirect anvil hit. |
| CRUSHER_ANVIL_DIRECT_IMPACT_RADIUS | `{{ kits.crusher.data.CRUSHER_ANVIL_DIRECT_IMPACT_RADIUS }}` | The radius of a direct anvil hit. |
| CRUSHER_ANVIL_STUN_RADIUS | `{{ kits.crusher.data.CRUSHER_ANVIL_STUN_RADIUS }}` | The radius around a falling anvil to stun targets. |
| CRUSHER_ANVIL_STUN_DURATION | `{{ kits.crusher.data.CRUSHER_ANVIL_STUN_DURATION }}` | The duration, in ticks, of the falling anvil stun. |
| CRUSHER_ANVIL_COOLDOWN | `{{ kits.crusher.data.CRUSHER_ANVIL_COOLDOWN }}` | The cooldown, in ticks, for the Crusher ability. |
| CRUSHER_ANVIL_SUMMONING_BLOCK_HITBOX_SIZE | `{{ kits.crusher.data.CRUSHER_ANVIL_SUMMONING_BLOCK_HITBOX_SIZE }}` | The size of the hitbox that is used to detect block collision when summoning the anvil. |
| CRUSHER_ANVIL_SUMMONING_ENTITY_HITBOX_SIZE | `{{ kits.crusher.data.CRUSHER_ANVIL_SUMMONING_ENTITY_HITBOX_SIZE }}` | The size of the hitbox that is used to detect entity collision when summoning the anvil. |
| CRUSHER_ANVIL_SELF_DAMAGE_MULTIPLIER | `{{ kits.crusher.data.CRUSHER_ANVIL_SELF_DAMAGE_MULTIPLIER }}` | The self damage multiplier of an anvil when hitting the player. |
| CRUSHER_ANVIL_IGNORE_DAMAGE_TICKS | `{{ kits.crusher.data.CRUSHER_ANVIL_IGNORE_DAMAGE_TICKS }}` | Determines if the anvil should ignore invulnerability frames. |
| CRUSHER_ANVIL_TARGET_ENEMIES | `{{ kits.crusher.data.CRUSHER_ANVIL_TARGET_ENEMIES }}` | Determines if the Crusher ability should target enemies. |
| CRUSHER_SWORD_DAMAGE | `{{ kits.crusher.data.CRUSHER_SWORD_DAMAGE }}` | The base damage of the sword. |
| CRUSHER_SWORD_SPEED | `{{ kits.crusher.data.CRUSHER_SWORD_SPEED }}` | The base speed of the sword. |
