# Demon

---

#### ![demon-icon](../assets/icons/kits/demon-icon.jpg)

# Overview

---

- **Introduced:** v2.1.0
- **Description:** A mage kit that uses blood to damage enemies and heal allies.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chainmail Chestplate
- Leather Leggings
- Chainmail Boots
- Stone Sword
- Blood Staff
- Transfusion
- {{ kits.demon.data.MAX_BLOOD_POTIONS }} Blood Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Blood Staff**

## Blood Staff

A weapon that is used to cast spells. Casting spells costs blood and each spell has a cooldown.

### Casting

- Homing Hemoglobin _(Left-Click)_
- Break Blood Bonds _(Right-Click)_

<!-- tabs:start -->

#### **Homing Hemoglobin**

## Homing Hemoglobin

The spell costs `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_COST }}ml` of blood. Casting summons a projectile of blood that travels forward. The projectile locks onto a nearby entity after traveling `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_START_HOMING_AFTER_DISTANCE }}` meters. When a projectile hits an entity, a [`Blood Bond`](#blood-bond) forms.

![Demon - Homing Hemoglobin Cast](../assets/kits/demon/_image_1_.jpg_)

Blood projectiles target allies that don't have a blood bond.

![Demon - Homing Hemoglobin Target Ally](../assets/kits/demon/_image_1_.jpg_)

Blood projectiles always target enemies. The projectile deals `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_DAMAGE }}` damage.

![Demon - Homing Hemoglobin Target Enemy](../assets/kits/demon/_image_1_.jpg_)

#### **Break Blood Bonds**

## Break Blood Bonds

A spell that costs `{{ kits.demon.data.DEMON_BREAK_BLOOD_BONDS_COST }}ml` of blood. Casting breaks all of the [`Blood Bonds`](#blood-bond) that the player formed. The player does not take damage when a bond breaks this way.

![Demon - Break Blood Bonds Cast](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

#### **Transfusion**

## Transfusion

An item used to convert blood into health and health into blood. When holding right-click, it transfuses `{{ kits.demon.data.DEMON_TRANSFUSION_BLOOD_AMOUNT }}ml` blood every `{{ kits.demon.data.DEMON_TRANSFUSION_CONVERSION_RATE }}` ticks. The player can left-click to between switch modes.

![Demon - Health Transfusion](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Transfusion](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Demon's Curse**

## Demon's Curse

The player's magic damage is increased by `5%` for every active blood bond.

![Demon - Demon's Curse Magic Damage Increase](../assets/kits/demon/_image_1_.jpg_)

The player's physical damage is decreased by `10%` for every active blood bond.

![Demon - Demon's Curse Physical Damage Decrease](../assets/kits/demon/_image_1_.jpg_)

#### **Hellfire**

## Hellfire

The [`Light Beam`](./Priest#light-beam) spell from kit priest ignites the player.

![Demon - Hellfire Ignite](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Effects

<!-- tabs:start -->

#### **Blood Bond**

## Blood Bond

A special bond between the player and an entity. The bond forms when the player hits an entity with the [`Homing Hemoglobin`](#homing-hemoglobin) spell. The bond lasts `forever`.

![Demon - Blood Bond One](../assets/kits/demon/_image_1_.jpg_)

The number of active bonds is indicated by the number of orbiting blood spheres.

![Demon - Blood Bond Multiple](../assets/kits/demon/_image_1_.jpg_)

After enemies that have a bond with the player take damage, `{{ kits.demon.data.DEMON_BLOOD_BOND_BLOOD_TRANSMISSION_EFFICIENCY }}%` of the blood lost is transmitted through the bond. If there are multiple bonds, then the amount of blood is split and transmitted evenly.

![Demon - Blood Bond Transmission](../assets/kits/demon/_image_1_.jpg_)

Allies that have a bond with the player restore `{{ kits.demon.data.DEMON_BLOOD_BOND_HEALING_POTENCY }}` health every `{{ kits.demon.data.DEMON_BLOOD_BOND_HEALING_RATE }}` ticks. This consumes player's blood resource.

![Demon - Blood Bond Healing](../assets/kits/demon/_image_1_.jpg_)

A blood bond breaks if the distance between the entity and the player is greater than `{{ kits.demon.data.DEMON_BLOOD_BOND_BREAK_DISTANCE }}` meters. It also breaks if the entity is ignited or the entity is cleansed. The player takes `{{ kits.demon.data.DEMONS_CURSE_BLOOD_BOND_BREAK_DAMAGE }}` damage when a bond breaks.

![Demon - Blood Bond Break](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Blood**

## Blood

The primary resource for blood related spells and items. The conversion for blood to health is `{{ kits.demon.data.DEMON_BLOOD_TO_HEALTH_CONVERSION }}ml` to `1` respectively. The player can hold a maximum of `{{ kits.demon.data.DEMON_BLOOD_MAX }}ml` of blood.

![Demon - Blood](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Consume](../assets/kits/demon/_image_1_.jpg_)

#### **Blood Potions**

## Blood Potions

A potion used to restore blood. It restores `{{ kits.demon.data.BLOOD_POTION_CLICK_POTENCY }}ml` of blood when using the potion manually and `{{ kits.demon.data.BLOOD_POTION_AUTOPOT_POTENCY }}ml` of blood when using auto-pot. The player can hold a maximum of `{{ kits.demon.data.MAX_BLOOD_POTIONS }}` potions.

![Demon - Blood Potion Use](../assets/kits/demon/_image_1_.jpg_)

Potions regenerate over time.

![Demon - Blood Potion Regenerate](../assets/kits/demon/_image_1_.jpg_)

#### **Essence of the Afterlife**

## Essence of the Afterlife

A resource used to restore blood.

![Demon - Essence of the Afterlife](../assets/kits/demon/_image_1_.jpg_)

Picking up an Essence of the Afterlife restores `{{ kits.demon.data.DEMON_BLOOD_PER_ESSENCE }}ml` blood.

![Demon - Essence of the Afterlife Pickup](../assets/kits/demon/_image_1_.jpg_)

Essence of the Afterlife drops upon the death of players and necromancer skeletons.

![Demon - Essence of the Afterlife Drop](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Hemokinesis | Maintain 4 blood bonds at once. | 20 Credits |
| Perish | Eliminate a priest as demon. | 20 Credits |
| Satan's little helper | Form a blood bond with a wither skeleton. | 20 Credits |
| Archdemon | Consume 5,000,000ml of blood as demon. | 250 Credits |
| The Devil's Advocate | Restore a total of 5,000 health as demon. | 250 Credits |
| Satan's Wrath | Get 50 homing hemoglobin kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_BLOOD_POTIONS | `{{ kits.demon.data.MAX_BLOOD_POTIONS }}` | |
| BLOOD_POTION_CLICK_POTENCY | `{{ kits.demon.data.BLOOD_POTION_CLICK_POTENCY }}` | |
| BLOOD_POTION_AUTOPOT_POTENCY | `{{ kits.demon.data.BLOOD_POTION_AUTOPOT_POTENCY }}` | |
| BLOOD_POTION_AUTOPOT_THRESHOLD | `{{ kits.demon.data.BLOOD_POTION_AUTOPOT_THRESHOLD }}` | |
| BLOOD_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits.demon.data.BLOOD_POTION_AUTOPOT_HOTBAR_ONLY }}` | |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | |
| DEMON_BLOOD_MAX | `{{ kits.demon.data.DEMON_BLOOD_MAX }}` | |
| DEMON_BLOOD_TO_HEALTH_CONVERSION | `{{ kits.demon.data.DEMON_BLOOD_TO_HEALTH_CONVERSION }}` | |
| DEMON_SWORD_DAMAGE | `{{ kits.demon.data.DEMON_SWORD_DAMAGE }}` | |
| DEMON_SWORD_SPEED | `{{ kits.demon.data.DEMON_SWORD_SPEED }}` | |
| DEMON_ESSENCE_OF_THE_AFTER_LIFE_MAX | `{{ kits.demon.data.DEMON_ESSENCE_OF_THE_AFTER_LIFE_MAX }}` | |
| DEMON_BLOOD_PER_ESSENCE | `{{ kits.demon.data.DEMON_BLOOD_PER_ESSENCE }}` | |
| DEMON_TRANSFUSION_SWITCH_MODE_COOLDOWN | `{{ kits.demon.data.DEMON_TRANSFUSION_SWITCH_MODE_COOLDOWN }}` | |
| DEMON_TRANSFUSION_BLOOD_AMOUNT | `{{ kits.demon.data.DEMON_TRANSFUSION_BLOOD_AMOUNT }}` | |
| DEMON_TRANSFUSION_CONVERSION_RATE | `{{ kits.demon.data.DEMON_TRANSFUSION_CONVERSION_RATE }}` | |
| DEMON_HOMING_HEMOGLOBIN_COOLDOWN | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_COOLDOWN }}` | |
| DEMON_HOMING_HEMOGLOBIN_COST | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_COST }}` | |
| DEMON_HOMING_HEMOGLOBIN_SPEED | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_SPEED }}` | |
| DEMON_HOMING_HEMOGLOBIN_SIZE | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_SIZE }}` | |
| DEMON_HOMING_HEMOGLOBIN_HOMING_FACTOR | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_HOMING_FACTOR }}` | |
| DEMON_HOMING_HEMOGLOBIN_MAX_TRAVEL_DISTANCE | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_MAX_TRAVEL_DISTANCE }}` | |
| DEMON_HOMING_HEMOGLOBIN_START_HOMING_AFTER_DISTANCE | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_START_HOMING_AFTER_DISTANCE }}` | |
| DEMON_HOMING_HEMOGLOBIN_START_HOMING_RADIUS | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_START_HOMING_RADIUS }}` | |
| DEMON_HOMING_HEMOGLOBIN_DAMAGE | `{{ kits.demon.data.DEMON_HOMING_HEMOGLOBIN_DAMAGE }}` | |
| DEMON_BLOOD_BOND_HEALING_RATE | `{{ kits.demon.data.DEMON_BLOOD_BOND_HEALING_RATE }}` | |
| DEMON_BLOOD_BOND_HEALING_POTENCY | `{{ kits.demon.data.DEMON_BLOOD_BOND_HEALING_POTENCY }}` | |
| DEMON_BLOOD_BOND_BREAK_DISTANCE | `{{ kits.demon.data.DEMON_BLOOD_BOND_BREAK_DISTANCE }}` | |
| DEMON_BLOOD_BOND_BLOOD_TRANSMISSION_EFFICIENCY | `{{ kits.demon.data.DEMON_BLOOD_BOND_BLOOD_TRANSMISSION_EFFICIENCY }}` | |
| DEMON_HELLFIRE_BURN_DURATION | `{{ kits.demon.data.DEMON_HELLFIRE_BURN_DURATION }}` | |
| DEMONS_CURSE_MAX_EFFECTIVE_BONDS | `{{ kits.demon.data.DEMONS_CURSE_MAX_EFFECTIVE_BONDS }}` | |
| DEMONS_CURSE_MAGIC_DAMAGE_INCREASE_PER_BLOOD_BOND | `{{ kits.demon.data.DEMONS_CURSE_MAGIC_DAMAGE_INCREASE_PER_BLOOD_BOND }}` | |
| DEMONS_CURSE_PHYSICAL_DAMAGE_DECREASE_PER_BLOOD_BOND | `{{ kits.demon.data.DEMONS_CURSE_PHYSICAL_DAMAGE_DECREASE_PER_BLOOD_BOND }}` | |
| DEMON_BREAK_BLOOD_BONDS_COST | `{{ kits.demon.data.DEMON_BREAK_BLOOD_BONDS_COST }}` | |
| DEMON_BREAK_BLOOD_BONDS_COOLDOWN | `{{ kits.demon.data.DEMON_BREAK_BLOOD_BONDS_COOLDOWN }}` | |
| DEMONS_CURSE_BLOOD_BOND_BREAK_DAMAGE | `{{ kits.demon.data.DEMONS_CURSE_BLOOD_BOND_BREAK_DAMAGE }}` | |

### Changelog
