# Priest

***

#### ![priest-icon](../assets/icons/priest-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A kit that uses the light element to heal and cleanse allies.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Leather Leggings (Yellow)
- Chainmail Boots
- Stone Sword
- Spell Wand
- {{ kits.priest.data.MAX_MANA_POTIONS }} Mana Potions
- {{ kits._shared.data.MANA_MAX }} Mana

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Spell Wand**
## Spell Wand
A weapon that is used to cast spells. Casting spells costs mana and each spell has a cooldown.

### Casting
- Light Beam *(Left-Click)*
- Light Release *(Right-Click)*

<!-- tabs:start -->
#### **Light Beam**
## Light Beam
The spell requires `12` mana to cast. Casting will summon a beam of light in the direction the player is looking. When the beam passes through an ally, it will give them absorption `1` for `40` ticks and increase [sun power](#sun-power) by `1`. When the beam passies through an enemy, it will affect them with glowing for `40` ticks. 

![Priest - Light Beam Ally](../assets/kits/priest/_image_1_.jpg_)

![Priest - Light Beam Enemy](../assets/kits/priest/_image_1_.jpg_)

#### **Light Release**
## Light Release
The spell requires `20` mana and `1` sun power to cast. Casting will release accumulated sun power to heal allies in a `10` meter radius. The spell has additional effects when more sun power is released.

![Priest - Light Release Cast](../assets/kits/priest/_image_1_.jpg_)

#### Cleansing Effects 
When at least `10` sun power is released, potion, status, burning, and freezing effects that negatively affect the entity are removed.

![Priest - Light Release Cleanse Effects](../assets/kits/priest/_image_1_.jpg_)

#### Igniting Enemies

When at least `20` sun power is released, enemies are targeted and ignited for `100` ticks. The radius is also increased to `15` meters.

![Priest - Light Release Ignite Enemies](../assets/kits/priest/_image_1_.jpg_)

#### Cleansing Kit Debuffs

When at least `30` sun power is released, all kit debuffs are removed.

![Priest - Light Release Cleanse Mercy Beam](../assets/kits/priest/_image_1_.jpg_)

All targeted allies and friendly engineer blocks will no longer be stunned.

![Priest - Light Release No Longer Stunned](../assets/kits/priest/_image_1_.jpg_)

#### Enemy Knockback

When at least `40` sun power is released, enemies are knocked back. The radius is also increased to `20` meters.

![Priest - Light Release Knock Enemies Back](../assets/kits/priest/_image_1_.jpg_)

#### Sun Barrier

When `50` sun power is released, all allies receive absorption `5` for `200` ticks.

![Priest - Light Release Sun Barrier](../assets/kits/priest/_image_1_.jpg_)

All targeted allies and friendly engineer blocks will no longer be hacked.

![Priest - Light Release No Longer Hacked](../assets/kits/priest/_image_1_.jpg_)

<!-- tabs:end -->
<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Soothing Light**
## Soothing Light
When the player casts a light spell, they will receive the "Soothing Light" effect. The "Soothing Light" effect restores `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_POTENCY }}` health every `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE }}` ticks `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICKS }}` times.

![Priest - Soothing Light](../assets/kits/priest/_image_1_.jpg_)

<!-- tabs:end -->

### Resources
<!-- tabs:start -->
#### **Mana**
## Mana
Mana is a resource used to cast spells.

![Priest - Mana](../assets/kits/priest/_image_1_.jpg_)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it will regenerate slowly over time.

![Priest - Mana Regenerate](../assets/kits/priest/_image_1_.jpg_)

After the player earns a final blow, they will restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana. After earning an assist, they will restore `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana.

![Priest - Mana Final Blow](../assets/kits/priest/_image_1_.jpg_)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Priest - Mana Dispenser](../assets/kits/priest/_image_1_.jpg_)

#### **Sun Power**
## Sun Power

<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Bask in the Sunlight! | Cast a level 5 Release spell. | 20 Credits |
| The Tome of Warmth! | As Priest, heal a total of 100,000. | 20 Credits |
| Sunbathing Rays | Hit 20,000 players with light beam. | 100 Credits |
| The Sun God! | Gain 10,000 Sun Power. | 100 Credits |
| The True Sun God! | Cast 1,000 Level 5 Release spells. | 500 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_MANA_POTIONS | `{{ kits.priest.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
| MANA_POTION_CLICK_POTENCY | `{{ kits._shared.data.MANA_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_CLICK_POTENCY }} |
| MANA_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_POTENCY }} |
| MANA_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.MANA_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_THRESHOLD }} |
| MANA_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.MANA_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.MANA_POTION_AUTOPOT_HOTBAR_ONLY }} |
| MANA_MAX | `{{ kits._shared.data.MANA_MAX }}` | {{ kitDataSharedDescriptions.MANA_MAX }} |
| MANA_REGENERATION_RATE | `{{ kits._shared.data.MANA_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_RATE }} |
| MANA_REGENERATION_AMOUNT | `{{ kits._shared.data.MANA_REGENERATION_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_REGENERATION_AMOUNT }} |
| MANA_FINAL_BLOW_AMOUNT | `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_FINAL_BLOW_AMOUNT }} |
| MANA_ASSIST_AMOUNT | `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_ASSIST_AMOUNT }} |
| MANA_DISPENSER_DISPENSE_AMOUNT | `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` | {{ kitDataSharedDescriptions.MANA_DISPENSER_DISPENSE_AMOUNT }} |
| PRIEST_SWORD_DAMAGE | `{{ kits.priest.data.PRIEST_SWORD_DAMAGE }}` | |
| PRIEST_SWORD_SPEED | `{{ kits.priest.data.PRIEST_SWORD_SPEED }}` | |
| PRIEST_WAND_KNOCKBACK | `{{ kits.priest.data.PRIEST_WAND_KNOCKBACK }}` | |
| PRIEST_LIGHT_BEAM_MANA_COST | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_MANA_COST }}` | |
| PRIEST_LIGHT_BEAM_CAST_COOLDOWN | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_CAST_COOLDOWN }}` | |
| PRIEST_LIGHT_BEAM_MAX_RANGE | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_MAX_RANGE }}` | |
| PRIEST_LIGHT_BEAM_SPEED | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_SPEED }}` | |
| PRIEST_LIGHT_BEAM_SIZE | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_SIZE }}` | |
| PRIEST_LIGHT_BEAM_ABSORPTION_LEVEL | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_LEVEL }}` | |
| PRIEST_LIGHT_BEAM_ABSORPTION_DURATION | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_DURATION }}` | |
| PRIEST_LIGHT_BEAM_GLOWING_LEVEL | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_GLOWING_LEVEL }}` | |
| PRIEST_LIGHT_BEAM_GLOWING_DURATION | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_GLOWING_DURATION }}` | |
| PRIEST_SOOTHING_LIGHT_HEALING_TICKS | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICKS }}` | |
| PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE }}` | |
| PRIEST_SOOTHING_LIGHT_HEALING_POTENCY | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_POTENCY }}` | |
| PRIEST_RELEASE_MANA_COST | `{{ kits.priest.data.PRIEST_RELEASE_MANA_COST }}` | |
| PRIEST_RELEASE_CAST_COOLDOWN | `{{ kits.priest.data.PRIEST_RELEASE_CAST_COOLDOWN }}` | |
| PRIEST_RELEASE_HEALING_MIN | `{{ kits.priest.data.PRIEST_RELEASE_HEALING_MIN }}` | |
| PRIEST_RELEASE_HEALING_PER_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_HEALING_PER_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_1_SUN_POWER| `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_1_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_2_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_3_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_3_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_4_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_5_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_SUN_POWER }}` | |
| PRIEST_RELEASE_LEVEL_0_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_0_RADIUS }}` | |
| PRIEST_RELEASE_LEVEL_2_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_RADIUS }}` | |
| PRIEST_RELEASE_LEVEL_2_BURN_DURATION | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_BURN_DURATION }}` | |
| PRIEST_RELEASE_LEVEL_4_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_RADIUS }}` | |
| PRIEST_RELEASE_LEVEL_4_KNOCKBACK_MULTIPLIER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_KNOCKBACK_MULTIPLIER }}` | |
| PRIEST_RELEASE_LEVEL_5_ABSORPTION_LEVEL | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_LEVEL }}` | |
| PRIEST_RELEASE_LEVEL_5_ABSORPTION_DURATION | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_DURATION }}` | |
| PRIEST_SUN_POWER_MAX | `{{ kits.priest.data.PRIEST_SUN_POWER_MAX }}` | |
| PRIEST_SUN_POWER_FINAL_BLOW_REWARD | `{{ kits.priest.data.PRIEST_SUN_POWER_FINAL_BLOW_REWARD }}` | |
| PRIEST_SUN_POWER_ASSIST_REWARD | `{{ kits.priest.data.PRIEST_SUN_POWER_ASSIST_REWARD }}` | |
| PRIEST_SUN_POWER_PER_LIGHT_BEAM_HIT | `{{ kits.priest.data.PRIEST_SUN_POWER_PER_LIGHT_BEAM_HIT }}` | |

### Changelog