# Soldier

---

#### ![soldier-icon](../assets/icons/soldier-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A kit with a throwable grenade and standard armor and weapons.
- **Role:** Damage
- **How to Unlock:** Unlocked by Default.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Chestplate
- Chainmail Leggings
- Iron Sword
- Grenade
- {{ kits.soldier.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Grenade**

## Grenade

Right click to launch a grenade forward. When the grenade explodes, it will deal `{{ kits.soldier.data.SOLDIER_GRENADE_DAMAGE }}` damage and also deal knockback.

![Grenade 1](../assets/kits/soldier/Soldier%20-%20Grenade%20Enemy.gif)

Grenades damage engineer blocks.

![Grenade 2](../assets/kits/soldier/Soldier%20-%20Grenade%20Sentry.gif)

Grenades destroy enemy builder bricks.

![Grenade 3](../assets/kits/soldier/Soldier%20-%20Grenade%20Bricks.gif)

Grenades destroy cobwebs.

![Grenade 4](../assets/kits/soldier/Soldier%20-%20Grenade%20Cobwebs.gif)

Grenades disable enemy player shields.

![Grenade 5](../assets/kits/soldier/Soldier%20-%20Grenade%20Shield.gif)

#### **Grenade Jump**

## Grenade Jump

Use your grenade to launch yourself up.

![Grenade Jump](../assets/kits/soldier/Soldier%20-%20Grenade%20Jump.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Block this! | Disable an enemy shield with your grenade. | 20 Credits |
| Maggots! | Get a double grenade kill. | 20 Credits |
| Mutually Assured Destruction | Kill an enemy with a grenade after he kills you. | 20 Credits |
| Oh no...your bricks...they're broken | Destroy builder bricks with soldier. | 20 Credits |
| That's where books get you, professor! | Destroy an engineer sentry with soldier's grenade." | 20 Credits |
| Take your lumps like a man, Private Twinkletoes. | Get 1,000 grenade kills. | 250 Credits |

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
| SOLDIER_GRENADE_RADIUS | `{{ kits.soldier.data.SOLDIER_GRENADE_RADIUS }}` | The impact radius of a grenade. |
| SOLDIER_GRENADE_COOLDOWN | `{{ kits.soldier.data.SOLDIER_GRENADE_COOLDOWN }}` | The cooldown, in ticks, of the Grenade ability. |
| SOLDIER_GRENADE_DAMAGE | `{{ kits.soldier.data.SOLDIER_GRENADE_DAMAGE }}` | The base damage of the grenade. |
| SOLDIER_GRENADE_VELOCITY_MULTIPLIER | `{{ kits.soldier.data.SOLDIER_GRENADE_VELOCITY_MULTIPLIER }}` | The velocity mutliplier when throwing the grenade. |
| SOLDIER_GRENADE_KNOCKBACK_MULTIPLIER | `{{ kits.soldier.data.SOLDIER_GRENADE_KNOCKBACK_MULTIPLIER }}` | The knockback multiplier of grenade ability when it hits enemies. |
| SOLDIER_GRENADE_SELF_DAMAGE_MULTIPLIER | `{{ kits.soldier.data.SOLDIER_GRENADE_SELF_DAMAGE_MULTIPLIER }}` | The self damage multiplier of a grenade when hitting the player. |
| SOLDIER_SWORD_DAMAGE | `{{ kits.soldier.data.SOLDIER_SWORD_DAMAGE }}` | The base damage of the sword. |
| SOLDIER_SWORD_SPEED | `{{ kits.soldier.data.SOLDIER_SWORD_SPEED }}` | The base speed of the sword. |
