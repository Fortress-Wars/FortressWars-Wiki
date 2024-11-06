
# Fish

***

#### ![fish-icon](../assets/icons/fish-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A damage kit that uses fish to attack.
- **Role:** Damage
- **How to Unlock:** Completing the "Fishy Business!" achievement.

<br />  

# Gear
***
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Fish
- Fish Bow
- {{ kits.fish.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Fish**
## Fish
A powerful fishy melee weapon. Left click to use [Fish Throw](#fish-throw). Right click to use [Fishplosion](#fishplosion). If `FISH_CAN_ACTIVATE_OP_FISH` is set to `true`, then the player can eat the fish to activate [OP Fish mode](#op-fish-mode).

![Fish - Fish Melee](../assets/kits/fish/Fish%20-%20Fish%20Melee.gif)

#### **Fish Throw**
## Fish Throw

Left click to use. Summon a fish and throw it.
        
![Fish - Fish Throw](../assets/kits/fish/Fish%20-%20Fish%20Throw.gif)

All fish from the player can be blocked by a shield.

![Fish - Fish Block](../assets/kits/fish/Fish%20-%20Fish%20Block.gif)

#### **Fishplosion**
## Fishplosion

Right click to use. Summon an explosion of fish.

![Fish - Fishplosion](../assets/kits/fish/Fish%20-%20Fishplosion.gif)

#### **Fish Bow**
## Fish Bow

Shoot fish at enemies. The fish can ricochet off blocks.

![Fish - Fish Bow](../assets/kits/fish/Fish%20-%20Fish%20Bow.gif)

#### **OP Fish Mode**
## OP Fish Mode
Turn into an overpowered fish! OP fish mode **enables** the following abilities: [Suffocate](#suffocate), [Beacon Breaker](#beacon-breaker), and [Fish Trail](#fish-trail). Activating OP fish mode will trigger [Fishplosion](#fishplosion). When the player dies, it will also trigger Fishplosion. In addition, the Fish Throw ability's internal cooldown decreases from `{{ kits.fish.data.FISH_THROW_ICD }}` ticks to `{{ kits.fish.data.FISH_THROW_OP_ICD }}` ticks and the Fish Bow shoots `{{ kits.fish.data.FISH_BOW_OP_FISH_PER_SHOT }}` fish instead of `{{ kits.fish.data.FISH_BOW_FISH_PER_SHOT }}` fish.

![Fish - OP Fish Mode](../assets/kits/fish/Fish%20-%20OP%20Fish%20Mode.gif)

<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Bountiful Fish**
## Bountiful Fish
When a fish is summoned, it will be one of `6` fish: Cod, Cooked Cod, Salmon, Cooked Salmon, Tropical Fish, or Pufferfish. Each fish has a different effect and different chance of spawning.

<!-- tabs:start -->
#### **Cod**
### Cod
Deals `{{ kits.fish.data.FISH_COD_DAMAGE }}` damage to the enemy. *(Summon weight: `{{ kits.fish.data.FISH_COD_WEIGHT }}`*)

![Cod](../assets/kits/fish/Fish%20-%20Cod.gif)

#### **Cooked Cod**
### Cooked Cod
Deals `{{ kits.fish.data.FISH_COOKED_COD_DAMAGE }}` damage to the enemy. *(Summon weight: `{{ kits.fish.data.FISH_COOKED_COD_WEIGHT }}`*)

![Cooked Cod](../assets/kits/fish/Fish%20-%20Cooked%20Cod.gif)

#### **Salmon**
### Salmon
Gives the blindness effect for `{{ kits.fish.data.FISH_SALMON_BLINDNESS_DURATION_TICKS }}` ticks to the enemy. *(Summon weight: `{{ kits.fish.data.FISH_SALMON_WEIGHT }}`*)

![Salmon](../assets/kits/fish/Fish%20-%20Salmon.gif)

#### **Cooked Salmon**
### Cooked Salmon
Gives the blindness effect for `{{ kits.fish.data.FISH_COOKED_SALMON_BLINDNESS_DURATION_TICKS }}` ticks to the enemy. *(Summon weight: `{{ kits.fish.data.FISH_COOKED_SALMON_WEIGHT }}`*)

![Cooked Salmon](../assets/kits/fish/Fish%20-%20Cooked%20Salmon.gif)

#### **Tropical Fish**
### Tropical Fish
Heals `{{ kits.fish.data.FISH_TROPICAL_FISH_HEALING }}` HP to the player. *(Summon weight: `{{ kits.fish.data.FISH_TROPICAL_FISH_WEIGHT }}`*)

![Tropcial Fish](../assets/kits/fish/Fish%20-%20Tropical%20Fish.gif)

#### **Pufferfish**
### Pufferfish
*(OP Fish Mode)*
Deals `{{ kits.fish.data.FISH_PUFFERFISH_DAMAGE }}` damage to the enemy. *(Summon weight: `{{ kits.fish.data.FISH_PUFFERFISH_WEIGHT }}`*)

![Pufferfish](../assets/kits/fish/Fish%20-%20Pufferfish.gif)

![Pufferfish Kill](../assets/kits/fish/Fish%20-%20Pufferfish%20Kill.gif)

<!-- tabs:end -->

#### **Suffocate**
## Suffocate
*(OP Fish Mode)*
Take `{{ kits.fish.data.FISH_OP_FISH_OUT_OF_WATER_DAMAGE }}` damage every `{{ kits.fish.data.FISH_OP_FISH_OUT_OF_WATER_DAMAGE_RATE }}` ticks while out of water.

![Fish - Suffocate](../assets/kits/fish/Fish%20-%20Suffocate.gif)

#### **Fish Trail**
# Fish Trail
*(OP Fish Mode)*
Summons fish at the player's feet every `{{ kits.fish.data.FISH_TRAIL_INTERVAL }}` ticks.

![Fish - Fish Trail](../assets/kits/fish/Fish%20-%20Fish%20Trail.gif)

The player also receives the following potion effects: Haste, Speed, and Water Breathing.

![Fish - Fish Trail Effects](../assets/kits/fish/Fish%20-%20Fish%20Trail%20Effects.gif)

#### **Beacon Breaker**
# Beacon Breaker
*(OP Fish Mode)*
Deal `+{{ kits.fish.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` damage to beacons.

![Fish - Beacon Breaker](../assets/kits/fish/Fish%20-%20Beacon%20Breaker.gif)

<!-- tabs:end -->
<br /> 

# Achievements
***

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Fishy Business! | Fish up and eat a cod! | Kit Fish |
| Fish Repellent | Block a fish attack. | 20 Credits |
| I PRAY TO RNG | Get a pufferfish kill.  | 20 credits |
| Anchovies! | Get 1,000 fish kills. | 250 Credits |

<br />  

# Kit Data
***

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.fish.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| BEACON_BREAKER_DAMAGE_ADDITIVE | `{{ kits.fish.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` | The bonus beacon damage provided by the Beacon Breaker ability. |
| FISH_CAN_ACTIVATE_OP_FISH | `{{ kits.fish.data.FISH_CAN_ACTIVATE_OP_FISH }}` | Determines if OP Fish Mode can be activated. |
| FISH_COD_WEIGHT | `{{ kits.fish.data.FISH_COD_WEIGHT }}` | The weight for summoning cod. |
| FISH_COD_DAMAGE | `{{ kits.fish.data.FISH_COD_DAMAGE }}` | The damage dealt to enemies that pick up cod. |
| FISH_COOKED_COD_WEIGHT | `{{ kits.fish.data.FISH_COOKED_COD_WEIGHT }}` | The weight for summoning cooked cod.  |
| FISH_COOKED_COD_DAMAGE | `{{ kits.fish.data.FISH_COOKED_COD_DAMAGE }}` | The damage dealt to enemies that pick up cooked cod. |
| FISH_SALMON_WEIGHT | `{{ kits.fish.data.FISH_SALMON_WEIGHT }}` | The weight for summoning salmon. |
| FISH_SALMON_BLINDNESS_DURATION_TICKS | `{{ kits.fish.data.FISH_SALMON_BLINDNESS_DURATION_TICKS }}` | The duration, in ticks, of the blindness effect that salmon gives to enemies that pick it up. |
| FISH_COOKED_SALMON_WEIGHT | `{{ kits.fish.data.FISH_COOKED_SALMON_WEIGHT }}` | The weight for summoning cooked salmon. |
| FISH_COOKED_SALMON_BLINDNESS_DURATION_TICKS | `{{ kits.fish.data.FISH_COOKED_SALMON_BLINDNESS_DURATION_TICKS }}` | The duration, in ticks, of the blindness effect that cooked salmon gives to enemies that pick it up. |
| FISH_TROPICAL_FISH_WEIGHT | `{{ kits.fish.data.FISH_TROPICAL_FISH_WEIGHT }}` | The weight for summoning tropical fish. |
| FISH_TROPICAL_FISH_HEALING | `{{ kits.fish.data.FISH_TROPICAL_FISH_HEALING }}` | The amount of HP to the player that the tropical fish heals after enemies pick it up. |
| FISH_PUFFERFISH_WEIGHT | `{{ kits.fish.data.FISH_PUFFERFISH_WEIGHT }}` | The weight for summoning pufferfish. |
| FISH_PUFFERFISH_DAMAGE | `{{ kits.fish.data.FISH_PUFFERFISH_DAMAGE }}` | The damage dealt to enemies that pick up pufferfish. |
| FISH_THROW_ICD | `{{ kits.fish.data.FISH_THROW_ICD }}` | The cooldown, in ticks, for throwing fish. |
| FISH_THROW_OP_ICD | `{{ kits.fish.data.FISH_THROW_OP_ICD }}` | The cooldown, in ticks, for throwing fish while in OP Fish Mode. |
| FISH_THROW_MULTIPLIER | `{{ kits.fish.data.FISH_THROW_MULTIPLIER }}` | The velocity multiplier for throwing fish. |
| FISH_FISHPLOSION_COOLDOWN | `{{ kits.fish.data.FISH_FISHPLOSION_COOLDOWN }}` | The cooldown, in ticks, for the Fishplosion ability. |
| FISH_FISHPLOSION_FISH_PER_LAYER | `{{ kits.fish.data.FISH_FISHPLOSION_FISH_PER_LAYER }}` | The number of fish per layer if the Fishplosion ability. |
| FISH_FISHPLOSION_NUM_LAYERS | `{{ kits.fish.data.FISH_FISHPLOSION_NUM_LAYERS }}` | The number of fish layers in the Fishplosion ability. |
| FISH_FISHPLOSION_SPREAD | `{{ kits.fish.data.FISH_FISHPLOSION_SPREAD }}` | The random spread when summoning fish in the Fishplosion ability. |
| FISH_FISHPLOSION_VELOCITY_MULTIPLIER | `{{ kits.fish.data.FISH_FISHPLOSION_VELOCITY_MULTIPLIER }}` | The velocity multiplier for the summoned fish in the Fishplosion ability. |
| FISH_TRAIL_INTERVAL | `{{ kits.fish.data.FISH_TRAIL_INTERVAL }}` | The interval, in ticks, at which fish spawn from the Fish Trail ability |
| FISH_TRAIL_HASTE_DURATION | `{{ kits.fish.data.FISH_TRAIL_HASTE_DURATION }}` | The duration, in ticks, of the haste effect from the Fish Trail ability. |
| FISH_TRAIL_HASTE_LEVEL | `{{ kits.fish.data.FISH_TRAIL_HASTE_LEVEL }}` | The level of the haste effect from the Fish Trail ability. |
| FISH_TRAIL_SPEED_DURATION | `{{ kits.fish.data.FISH_TRAIL_SPEED_DURATION }}` | The duration, in ticks, of the speed effect from the Fish Trail ability. |
| FISH_TRAIL_SPEED_LEVEL | `{{ kits.fish.data.FISH_TRAIL_SPEED_LEVEL }}` | The level of the speed effect from the Fish Trail ability. |
| FISH_TRAIL_WATER_BREATHING_DURATION | `{{ kits.fish.data.FISH_TRAIL_WATER_BREATHING_DURATION }}` | The duration, in ticks, of the water breathing effect from the Fish Trail ability. |
| FISH_TRAIL_WATER_BREATHING_LEVEL | `{{ kits.fish.data.FISH_TRAIL_WATER_BREATHING_LEVEL }}` | The level the water breathing effect from the Fish Trail ability. |
| FISH_OP_FISH_OUT_OF_WATER_DAMAGE | `{{ kits.fish.data.FISH_OP_FISH_OUT_OF_WATER_DAMAGE }}` | The damage from the Suffcate passive. |
| FISH_OP_FISH_OUT_OF_WATER_DAMAGE_RATE | `{{ kits.fish.data.FISH_OP_FISH_OUT_OF_WATER_DAMAGE_RATE }}` | The rate, in ticks, at which Suffocate damage occurs. |
| FISH_BOW_FISH_PER_SHOT | `{{ kits.fish.data.FISH_BOW_FISH_PER_SHOT }}` | The number of fish shot from the fish bow. |
| FISH_BOW_OP_FISH_PER_SHOT | `{{ kits.fish.data.FISH_BOW_OP_FISH_PER_SHOT }}` | The number of fish shot from the fish bow while in OP Fish Mode. |
| FISH_MELEE_DAMAGE | `{{ kits.fish.data.FISH_MELEE_DAMAGE }}` | The base melee damage of the Fish item. |
| FISH_MELEE_SPEED | `{{ kits.fish.data.FISH_MELEE_SPEED }}` | The base melee speed of the Fish item. |
| FISH_MELEE_SHARPNESS_LEVEL | `{{ kits.fish.data.FISH_MELEE_SHARPNESS_LEVEL }}` | The sharpness level of the Fish item. |
