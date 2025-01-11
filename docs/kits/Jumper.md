# Jumper

---

#### ![jumper-icon](../assets/icons/kits/jumper-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that can teleport.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.
  <br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Diamond Sword
- Translocator
- {{ kits.jumper.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Translocator**

## Translocator

Right click to throw a translocator in the direction the player is looking. After `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_THROW_COOLDOWN }}` ticks, the player can right click again to teleport to it. The player must be within `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_TELEPORT_DISTANCE }}` meters of the translocator to teleport to it. If `JUMPER_TRANSLOCATOR_SILENT_TELEPORT` is set to `true`, then the player will be silent when teleporting.

![Translocator - Teleport](../assets/kits/jumper/Jumper%20-%20Translocator%20Teleport.gif)

The player can left click to retrieve the translocator from any location.

![Translocator - Recover (Left Click)](../assets/kits/jumper/Jumper%20-%20Translocator%20Recover%20Remotely.gif)

The player can walk over the translocator to pick it up.

![Translocator - Recover (Pickup)](../assets/kits/jumper/Jumper%20-%20Translocator%20Recover%20Pickup.gif)

Enemies can break translocators by picking them up or using certain abilities to break them.

![Translocator - Detroy (Pickup)](../assets/kits/jumper/Jumper%20-%20Translocator%20Destroyed%20Pickup.gif)

![Translocator - Destroy (Ability Damage)](../assets/kits/jumper/Jumper%20-%20Translocator%20Destroyed%20Damage.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Oh how convenient? | Teleport into an enemy beacon room from outside the base. | 20 Credits |
| Just in time! | Stop an enemy from breaking the beacon by teleporting to them. | 20 Credits |
| Run That Back | Teleport back to your base while in combat. | 20 Credits  |
| What am I, an Enderman? | Teleport a total distance of 2,500 blocks. | 250 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.jumper.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| JUMPER_SWORD_DAMAGE | `{{ kits.jumper.data.JUMPER_SWORD_DAMAGE }}` | The base damage of the swrod. |
| JUMPER_SWORD_SPEED | `{{ kits.jumper.data.JUMPER_SWORD_SPEED }}` | The base speed of the sword. |
| JUMPER_TRANSLOCATOR_PICKUP_DELAY | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_PICKUP_DELAY }}` | The delay, in ticks, for picking up the translocator. |
| JUMPER_TRANSLOCATOR_THROW_MULTIPLIER | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_THROW_MULTIPLIER }}` | The multiplier when throwing the translocator. |
| JUMPER_TRANSLOCATOR_TELEPORT_DISTANCE | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_TELEPORT_DISTANCE }}` | The maximum distance that the player is able to teleport to the translocator from. |
| JUMPER_TRANSLOCATOR_LIFE_DURATION | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_LIFE_DURATION }}` | Determines how long, in ticks, the translocator item will live. |
| JUMPER_TRANSLOCATOR_SILENT_TELEPORT | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_SILENT_TELEPORT }}` | Determines if player will be silent when teleporting to their translocator. |
| JUMPER_TRANSLOCATOR_AFTER_THROW_COOLDOWN | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_THROW_COOLDOWN }}` | The cooldown, in ticks, after throwing the translocator. |
| JUMPER_TRANSLOCATOR_AFTER_PICKUP_COOLDOWN | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_PICKUP_COOLDOWN }}` | The cooldown, in ticks, after the player picks up the translocator. |
| JUMPER_TRANSLOCATOR_AFTER_RECOVER_COOLDOWN | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_RECOVER_COOLDOWN }}` | The cooldown, in ticks, after the player recovers their translocator. |
| JUMPER_TRANSLOCATOR_AFTER_USE_COOLDOWN | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_USE_COOLDOWN }}` | The cooldown, in ticks, after the player teleports to their translocator. |
| JUMPER_TRANSLOCATOR_AFTER_DESTROY_COOLDOWN | `{{ kits.jumper.data.JUMPER_TRANSLOCATOR_AFTER_DESTROY_COOLDOWN }}` | The cooldown, in ticks, after an enemy picks up or destroys the player's translocator. |
