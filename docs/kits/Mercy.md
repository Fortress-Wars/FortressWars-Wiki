# Mercy

***

#### ![mercy-icon](../assets/icons/mercy-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A support kit that heals allies, damages enemies, increases ally damage, and decreases enemy damage.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Leather Chestplate (Magenta)
- Chainmail Leggings
- Chainmail Boots
- Staff
- Switch Mode
- {{ kits.mercy.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Staff**
## Staff
The staff ability is used to heal allies, increase ally damage, damage enemies, and decrease enemy damage. When the player right-clicks, a beam will shoot out `{{ kits.mercy.data.MERCY_STAFF_BEAM_RANGE }}` meters in front of the player. If the beam hits an ally or enemy, it will conenct to them.

![Mercy - Attach Beam](../assets/kits/mercy/Mercy%20-%20Attach%20Beam.gif)

The player can target themselves by right-clicking while sneaking.

![Mercy - Attach Beam Self](../assets/kits/mercy/Mercy%20-%20Attach%20Beam%20Self.gif)

The player can manually disconnect the beam by right-clicking off of the target.

![Mercy - Beam Disconnect 1](../assets/kits/mercy/Mercy%20-%20Beam%20Disconnect%201.gif)

If the player is out of range or out of line of sight for too long, the beam will disconnect.

![Mercy - Beam Disconnect 2](../assets/kits/mercy/Mercy%20-%20Beam%20Disconnect%202.gif)

<!-- tabs:start -->
#### **Health Mode**
## Health Mode
While in `Health Mode`, if the beam is connected to an ally, it will restore `{{ kits.mercy.data.MERCY_STAFF_HEAL_POTENCY }}` health every `{{ kits.mercy.data.MERCY_STAFF_HEAL_RATE }}` ticks. If the beam is conencted to an enemy, it will deal `{{ kits.mercy.data.MERCY_STAFF_DAMAGING_AMOUNT }}` damage every `{{ kits.mercy.data.MERCY_STAFF_DAMAGING_RATE }}` ticks.

![Mercy - Staff Heal Allies](../assets/kits/mercy/Mercy%20-%20Staff%20Heal%20Allies.gif)

![Mercy - Staff Damage Enemies](../assets/kits/mercy/Mercy%20-%20Staff%20Damage%20Enemies.gif)

#### **Damage Boost Mode**
## Damage Boost Mode
While in `Damage Boost Mode`, if the beam is connected to an ally, the connected ally will deal `{{ kits.mercy.data.MERCY_STAFF_DAMAGE_BUFF_PERCENTAGE }}%` more damage. If the beam is connected to an enemy, the connected enemy will deal `{{ kits.mercy.data.MERCY_STAFF_DAMAGE_NERF_PERCENTAGE }}%` less damage.

![Mercy - Staff Increase Ally Damage](../assets/kits/mercy/Mercy%20-%20Staff%20Increase%20Ally%20Damage.gif)

![Mercy - Staff Decrease Ally Damage](../assets/kits/mercy/Mercy%20-%20Staff%20Decrease%20Ally%20Damage.gif)

<!-- tabs:end -->

#### **Switch Mode**
## Switch Mode
Right-click or left-click to cycle the `Staff` between `Health Mode` and `Damage Boost Mode`.

![Mercy - Switch Staff Mode](../assets/kits/mercy/Mercy%20-%20Switch%20Staff%20Mode.gif)

<!-- tabs:end -->

<br />

# Achievements
***

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Fine, I'll do it myself... | Attach a mercy beam to yourself as mercy. | 20 Credits |
| You might not want to tell your friends about that. | Get a final blow as mercy | 20 Credits |
| Midwife Crisis | As mercy, heal an Engineer as he repairs his sentry gun. | 20 Credits |
| Battle Mercy | Get 1,000 kills as Mercy. | 250 Credits |

<br />  

# Kit Data
***

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.mercy.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| MERCY_STAFF_MELEE_DAMAGE | `{{ kits.mercy.data.MERCY_STAFF_MELEE_DAMAGE }}` | The base damage of the staff. |
| MERCY_STAFF_MELEE_SPEED | `{{ kits.mercy.data.MERCY_STAFF_MELEE_SPEED }}` | The base speed of the staff. |
| MERCY_STAFF_MELEE_KNOCKBACK | `{{ kits.mercy.data.MERCY_STAFF_MELEE_KNOCKBACK }}` | The knockback level of the staff. |
| MERCY_STAFF_BEAM_RANGE | `{{ kits.mercy.data.MERCY_STAFF_BEAM_RANGE }}` | The connection range, in meters, of the staff. |
| MERCY_STAFF_HEAL_POTENCY | `{{ kits.mercy.data.MERCY_STAFF_HEAL_POTENCY }}` | The amount of health that the staff heals to allies while in Health Mode. |
| MERCY_STAFF_HEAL_RATE | `{{ kits.mercy.data.MERCY_STAFF_HEAL_RATE }}` | The rate, in ticks, that the staff heals allies. |
| MERCY_STAFF_DAMAGING_AMOUNT | `{{ kits.mercy.data.MERCY_STAFF_DAMAGING_AMOUNT }}` | The amount of damage that the staff deals to enemies while in Health Mode.|
| MERCY_STAFF_DAMAGING_RATE | `{{ kits.mercy.data.MERCY_STAFF_DAMAGING_RATE }}` | The rate, in ticks, that the staff deals damage to enemies. |
| MERCY_STAFF_DAMAGE_BUFF_PERCENTAGE | `{{ kits.mercy.data.MERCY_STAFF_DAMAGE_BUFF_PERCENTAGE }}` | The damage increase percentage that the staff provides to allies while in Damage Boost Mode. |
| MERCY_STAFF_DAMAGE_NERF_PERCENTAGE | `{{ kits.mercy.data.MERCY_STAFF_DAMAGE_NERF_PERCENTAGE }}` | The damage decrease percentage that the staff inflicts to enemies while in Damage Boost Mode. |
| MERCY_SWITCH_MODE_COOLDOWN | `{{ kits.mercy.data.MERCY_SWITCH_MODE_COOLDOWN }}` | The cooldown, in ticks, of the Switch Mode Ability.  |
| MERCY_STAFF_LINE_OF_SIGHT_THRESHOLD | `{{ kits.mercy.data.MERCY_STAFF_LINE_OF_SIGHT_THRESHOLD }}` | The threshold, in ticks, that the beam will become disconnected for being out of line of sight. |
| MERCY_STAFF_ATTACH_CHECK_RANGE | `{{ kits.mercy.data.MERCY_STAFF_ATTACH_CHECK_RANGE }}` | The beam's initial connection range in meters. |
| MERCY_STAFF_ATTACH_CHECK_SIZE | `{{ kits.mercy.data.MERCY_STAFF_ATTACH_CHECK_SIZE }}` | The size of the hitbox that is used during the beam's initial connection. |
| MERCY_STAFF_USE_COOLDOWN | `{{ kits.mercy.data.MERCY_STAFF_USE_COOLDOWN }}` | The cooldown, in ticks, after using the staff ability. |
| MERCY_STAFF_ACTIONBAR_SIZE | `{{ kits.mercy.data.MERCY_STAFF_ACTIONBAR_SIZE }}` | The size of the connected ally's health bar that is displayed in the player's actionbar. |
