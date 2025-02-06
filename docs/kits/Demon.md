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

- Homing Hemoglobin _(Left-Click or Right-Click)_

<!-- tabs:start -->

#### **Homing Hemoglobin**

## Homing Hemoglobin

The spell costs `2500` blood. Casting summons a projectile of blood that travels forward. The projectile locks onto a nearby target after traveling `3` meters. A [`Blood Bond`](#blood-bond) forms between the hit targets and the player.

![Demon - Homing Hemoglobin Cast](../assets/kits/demon/_image_1_.jpg_)

Blood projectiles target allies that don't have a blood bond with the player.

![Demon - HOming Hemoglobin Target Ally](../assets/kits/demon/_image_1_.jpg_)

Blood projectiles target enemies regardless of whether they have a blood bond with the player. The projectile deals `3` damage.

![Demon - Homing Hemoglobin Target Enemy](../assets/kits/demon/_image_1_.jpg_)

#### **Transfusion**

## Transfusion

![Demon - Health Transfusion](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Transfusion](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Hellfire**

## Hellfire

_description_1_

![Demon - Hellfire Ignite](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Effects

<!-- tabs:start -->

#### **Blood Bond**

## Blood Bond

![Demon - Blood Bond](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Bond Break](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Bond Transmission](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Bond Healing](../assets/kits/demon/_image_1_.jpg_)

<!-- tabs:end -->

### Resources

<!-- tabs:start -->

#### **Blood**

## Blood

![Demon - Blood](../assets/kits/demon/_image_1_.jpg_)

![Demon - Blood Consume](../assets/kits/demon/_image_1_.jpg_)

#### **Essence of the Afterlife**

## Essence of the Afterlife

![Demon - Essence of the Afterlife](../assets/kits/demon/_image_1_.jpg_)

![Demon - Essence of the Afterlife Drop](../assets/kits/demon/_image_1_.jpg_)

![Demon - Essence of the Afterlife Pickup](../assets/kits/demon/_image_1_.jpg_)

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

### Changelog
