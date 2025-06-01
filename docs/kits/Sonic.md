# Sonic

---

#### ![sonic-icon](../assets/icons/kits/sonic-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit with incredible speed.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Chestplate
- Chainmail Leggings
- Iron Sword
- Sonic Speed
- {{ kits.sonic.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Sonic Speed**

## Sonic Speed

Right click to gain speed. The player's speed level is level `{{ kits.sonic.data.SONIC_SPEED_LEVEL }}` and the duration lasts for `{{ kits.sonic.data.SONIC_SPEED_DURATION }}` ticks or until a `Sonic Boom` occurs.

![Sonic - Sonic Speed Activate](../assets/kits/sonic/Sonic%20-%20Sonic%20Speed%20Activate.gif)

#### **Sonic Boom**

## Sonic Boom

Colliding with an enemy while `Sonic Speed` is active will trigger a `Sonic Boom`. A Sonic Boom will deal `{{ kits.sonic.data.SONIC_BOOM_DAMAGE }}` damage to all hit enemies and unleash a shockwave.

![Sonic - Sonic Boom](../assets/kits/sonic/Sonic%20-%20Sonic%20Boom.gif)

![Sonic - Sonic Boom Kill](../assets/kits/sonic/Sonic%20-%20Sonic%20Boom%20Kill.gif)

The shockwave will stun all nearby enemies and engineer blocks within `{{ kits.sonic.data.SONIC_BOOM_RADIUS }}` meters for `{{ kits.sonic.data.SONIC_BOOM_STUN_DURATION }}` ticks.

![Sonic - Sonic Boom Stun Effect](../assets/kits/sonic/Sonic%20-%20Sonic%20Boom%20Stun%20Effect.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Goomba Stomp | Goomba stomp on someone to activate your sonic boom. | 20 Credits |
| I'm a hedgehog | Get a double sonic boom kill! | 100 Credits |
| Gotta Go Fast | Get a triple sonic boom kill! | 100 Credits |
| Escape From The City | Use your sonic speed to travel 10,000 meters. | 250 Credits |
| Through the Sound Barrier | Get 50 sonic boom kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.sonic.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| CHESTPLATE_ARMOR | `{{ kits.sonic.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.sonic.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.sonic.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.sonic.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.sonic.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.sonic.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.sonic.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.sonic.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.sonic.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.sonic.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.sonic.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.sonic.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| SONIC_SWORD_DAMAGE | `{{ kits.sonic.data.SONIC_SWORD_DAMAGE }}` | The base damage of the sword. |
| SONIC_SWORD_SPEED | `{{ kits.sonic.data.SONIC_SWORD_SPEED }}` | The base speed of the sword. |
| SONIC_SPEED_DURATION | `{{ kits.sonic.data.SONIC_SPEED_DURATION }}` | The duration, in ticks, of the sonic speed ability. |
| SONIC_SPEED_COOLDOWN | `{{ kits.sonic.data.SONIC_SPEED_COOLDOWN }}` | The cooldown, in ticks, of the sonic speed ability. |
| SONIC_SPEED_LEVEL | `{{ kits.sonic.data.SONIC_SPEED_LEVEL }}` | The sonic speed potion effect level. |
| SONIC_BOOM_DAMAGE | `{{ kits.sonic.data.SONIC_BOOM_DAMAGE }}` | The amount of damage dealt to enemies who are involved in a sonic boom. |
| SONIC_BOOM_KNOCKBACK_MULTIPLIER | `{{ kits.sonic.data.SONIC_BOOM_KNOCKBACK_MULTIPLIER }}` | The knockback dealt to enemies who are involved in a sonic boom. |
| SONIC_BOOM_RECOIL_MULTIPLIER | `{{ kits.sonic.data.SONIC_BOOM_RECOIL_MULTIPLIER }}` | The recoil knockback applied to the player when a sonic boom occurs. |
| SONIC_BOOM_COLLISION_CHECK_RADIUS | `{{ kits.sonic.data.SONIC_BOOM_COLLISION_CHECK_RADIUS }}` | The radius, in meters, to check for a sonic boom. |
| SONIC_BOOM_COLLISION_HITBOX_EXPANSION | `{{ kits.sonic.data.SONIC_BOOM_COLLISION_HITBOX_EXPANSION }}` | The size increase of the player's hitbox for detecting a sonic boom collision. |
| SONIC_BOOM_RADIUS | `{{ kits.sonic.data.SONIC_BOOM_RADIUS }}` | The radius, in meters, of the sonic boom shockwave. |
| SONIC_BOOM_STUN_DURATION | `{{ kits.sonic.data.SONIC_BOOM_STUN_DURATION }}` | The duration, in ticks, of the sonic boom shockwave's stun effect. |
