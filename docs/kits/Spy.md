# Spy

---

#### ![spy-icon](../assets/icons/kits/spy-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that can go invisible to sneak up and deal damage to enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Leather Chestplate (Brown)
- Chain Leggings
- Chain Boots
- Iron Sword
- Sneak Attack Sword
- Cloak
- {{ kits.spy.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Cloak**

## Cloak

Right-click to become completely invisible for `{{ kits.spy.data.SPY_CLOAK_DURATION }}` ticks.

![Spy - Cloak Activate](../assets/kits/spy/Spy%20-%20Cloak%20Activate.gif)

The player's invisibility will end early if the player attacks an enemy or attempts to break a block.

![Spy - Cloak Attack Enemy](../assets/kits/spy/Spy%20-%20Cloak%20Attack%20Enemy.gif)

![Spy - Clock Break Block](../assets/kits/spy/Spy%20-%20Clock%20Break%20Block.gif)

Earning a final blow while invisible will reduce the cloak's cooldown by `{{ kits.spy.data.SPY_CLOAK_REFRESH_PERCENTAGE_AFTER_SNEAK_ATTACK_ELIMINATION }}%`.

![Spy - Clock Sneak Attack Final Blow](../assets/kits/spy/Spy%20-%20Clock%20Sneak%20Attack%20Final%20Blow.gif)

#### **Sneak Attack Sword**

## Sneak Attack Sword

A sword with a base damage of `{{ kits.spy.data.SPY_SNEAK_ATTACK_SWORD_DAMAGE }}`. The player equips this sword when they use the cloak ability.

![Spy - Sneak Attack Sword](../assets/kits/spy/Spy%20-%20Sneak%20Attack%20Sword.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Electro Sapper**

## Electro Sapper

Enemy engineer sentries will not target the player.

![Spy - Electro Sapper Sentry](../assets/kits/spy/Spy%20-%20Electro%20Sapper%20Sentry.gif)

The player can use enemy engineer teleporters.

![Spy - Electro Sapper Teleporter](../assets/kits/spy/Spy%20-%20Electro%20Sapper%20Teleporter.gif)

Enemy engineer dispensers will dispense to the player.

![Spy - Electro Sapper Dispenser](../assets/kits/spy/Spy%20-%20Electro%20Sapper%20Dispenser.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Didn't see you there | Kill an invisible spy. | 20 Credits |
| Happy trails, laborer! | Use an enemy dispenser as a spy! | 20 Credits |
| Sorry to 'pop-in' unannounced! | Take an enemy teleporter as a spy! | 20 Credits |
| You got blood on my suit! | Earn a sneak attack kill as spy! | 20 Credits |
| Oh dear, I've made quite a mess. | Get 50 sneak attack kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.spy.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.spy.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.spy.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.spy.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.spy.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.spy.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.spy.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.spy.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.spy.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.spy.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.spy.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.spy.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.spy.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| SPY_SWORD_DAMAGE | `{{ kits.spy.data.SPY_SWORD_DAMAGE }}` | The base damage of the sword. |
| SPY_SWORD_SPEED | `{{ kits.spy.data.SPY_SWORD_SPEED }}` | The base speed of the sword. |
| SPY_SNEAK_ATTACK_SWORD_DAMAGE | `{{ kits.spy.data.SPY_SNEAK_ATTACK_SWORD_DAMAGE }}` | The base damage of the sneak attack sword. |
| SPY_SNEAK_ATTACK_SWORD_SPEED | `{{ kits.spy.data.SPY_SNEAK_ATTACK_SWORD_SPEED }}` | The base speed of the sneak attack sword. |
| SPY_CLOAK_DURATION | `{{ kits.spy.data.SPY_CLOAK_DURATION }}` | The duration, in ticks, of the cloak ability. |
| SPY_CLOAK_COOLDOWN | `{{ kits.spy.data.SPY_CLOAK_COOLDOWN }}` | The cooldown, in ticks, of the cloak ability. |
| SPY_SWIFT_SNEAK_LEVEL | `{{ kits.spy.data.SPY_SWIFT_SNEAK_LEVEL }}` | The level of the swift sneak enchantment on the leggings. |
| SPY_CLOAK_RECLOAK_AFTER_SNEAK_ATTACK_ELIMINATION | `{{ kits.spy.data.SPY_CLOAK_RECLOAK_AFTER_SNEAK_ATTACK_ELIMINATION }}` | If earning a sneak attack kill should automatically recloak the player.
| SPY_CLOAK_REFRESH_PERCENTAGE_AFTER_SNEAK_ATTACK_ELIMINATION | `{{ kits.spy.data.SPY_CLOAK_REFRESH_PERCENTAGE_AFTER_SNEAK_ATTACK_ELIMINATION }}` | The percentage to reduce the cloak ability after earning a sneak attack kill. |
