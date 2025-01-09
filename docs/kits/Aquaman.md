# Aquaman

---

#### ![aquaman-icon](../assets/icons/aquaman-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A melee and ranged damage kit that excels in water environments.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Trident
- Water Bucket
- {{ kits.aquaman.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Trident**

## Trident

Use your trident to deal melee damage or use it as a ranged weapon.

![Aquaman - Trident Throw Pickup](../assets/kits/aquaman/Aquaman%20-%20Trident%20Throw%20&%20Pickup.gif)

The trident deals `{{ kits.aquaman.data.AQUAMAN_TRIDENT_FAR_MULTIPLIER }}x` more damage if the target is hit from `{{ kits.aquaman.data.AQUAMAN_TRIDENT_FAR_DISTANCE }}m` away.

![Aquaman - Trident Throw Far](../assets/kits/aquaman/Aquaman%20-%20Trident%20Throw%20Far.gif)

#### **Loyalty**

## Loyalty

Left click your fist after your trident lands to retrieve it quicker. You can also pick up the trident by walking over it. The trident will also automatically return after a certain amount of time.

![Aquaman - Loyalty](../assets/kits/aquaman/Aquaman%20-%20Loyalty.gif)

#### **Water Sphere**

## Water Sphere

Right click your water bucket to deploy a sphere of water. The water is stationary and will automatically disappear after a certain amount of time.

![Aquaman - Water Sphere](../assets/kits/aquaman/Aquaman%20-%20Water%20Sphere.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **One With The Sea**

## One With The Sea

Gain water breathing and regeneration while in water.

![Aquaman - One with the Sea](../assets/kits/aquaman/Aquaman%20-%20One%20with%20the%20Sea.gif)

#### **Water Synergy**

## Water Synergy

While in water, deal `+{{ kits.aquaman.data.AQUAMAN_TRIDENT_WATER_SYNERGY_DAMAGE_BONUS }}` trident damage.

![Aquaman - Water Synergy](../assets/kits/aquaman/Aquaman%20-%20Water%20Synergy.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Ask the sea for mercy! | Kill an enemy in water. | 20 Credits |
| Something something trident. | Hit a flying raven with your trident. | 20 Credits |
| It was up to me and I let them die. | Kill an enemy with your trident from a far distance. | 40 Credits |
| Where I come from...The sea carries our tears away. | Get 50 trident kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.aquaman.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| AQUAMAN_TRIDENT_MELEE_DAMAGE | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_MELEE_DAMAGE }}` | The base melee damage of the trident. |
| AQUAMAN_TRIDENT_MELEE_SPEED | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_MELEE_SPEED }}` | The base melee speed of the trident. |
| AQUAMAN_ONE_WITH_THE_SEA_REGENERATION_LEVEL | `{{ kits.aquaman.data.AQUAMAN_ONE_WITH_THE_SEA_REGENERATION_LEVEL }}` | The level of the regeneration potion effect that the One With The Sea passive gives. |
| AQUAMAN_ONE_WITH_THE_SEA_REGENERATION_DURATION | `{{ kits.aquaman.data.AQUAMAN_ONE_WITH_THE_SEA_REGENERATION_DURATION }}` | The duration, in ticks, of the regeneration effect that the One With the Sea passive gives. |
| AQUAMAN_ONE_WITH_THE_SEA_WATER_BREATHING_LEVEL | `{{ kits.aquaman.data.AQUAMAN_ONE_WITH_THE_SEA_WATER_BREATHING_LEVEL }}` | The level of the water breathing potion effect that the One With The Sea passive gives. |
| AQUAMAN_ONE_WITH_THE_SEA_WATER_BREATHING_DURATION | `{{ kits.aquaman.data.AQUAMAN_ONE_WITH_THE_SEA_WATER_BREATHING_DURATION }}` | The duration, in ticks, of the water breathing potion effect that the One With the Sea passive gives. |
| AQUAMAN_TRIDENT_FAR_DISTANCE | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_FAR_DISTANCE }}` | The distance from an enemy that is hit by the player's trident projectile that is required to be considered far trident damage. |
| AQUAMAN_TRIDENT_FAR_MULTIPLIER | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_FAR_MULTIPLIER }}` | The multiplicative damage bonus that is applied to far trident damage
| AQUAMAN_TRIDENT_LOYALTY_DELAY | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_LOYALTY_DELAY }}` | The delay, in ticks, between the loyalty sound effect and receiving the trident in the player's inventory.|
| AQUAMAN_TRIDENT_MISS_DELAY | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_MISS_DELAY }}` | The delay, in ticks, after throwing a trident to automatically trigger the loyalty passive. |
| AQUAMAN_TRIDENT_THROW_BASE_DAMAGE | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_THROW_BASE_DAMAGE }}` | The base damage of the throwing the trdent at an enemy. |
| AQUAMAN_TRIDENT_WATER_SYNERGY_DAMAGE_BONUS | `{{ kits.aquaman.data.AQUAMAN_TRIDENT_WATER_SYNERGY_DAMAGE_BONUS }}` | The addtitive damage bonus to all trident damage when water synergy is active.|
| AQUAMAN_WATER_SPHERE_COOLDOWN | `{{ kits.aquaman.data.AQUAMAN_WATER_SPHERE_COOLDOWN }}` | Cooldown, in ticks, of the Water Sphere ability. |
| AQUAMAN_WATER_SPHERE_DURATION | `{{ kits.aquaman.data.AQUAMAN_WATER_SPHERE_DURATION }}` | Duration, in ticks, of the Water Sphere ability. |
