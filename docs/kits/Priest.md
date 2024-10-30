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
The spell requires `{{ kits.priest.data.PRIEST_LIGHT_BEAM_MANA_COST }}` mana to cast. Casting will summon a beam of light in the direction the player is looking. When the beam passes through an ally, it will give them absorption `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_LEVEL }}` for `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_DURATION }}` ticks and increase [sun power](#sun-power) by `{{ kits.priest.data.PRIEST_SUN_POWER_PER_LIGHT_BEAM_HIT }}`. When the beam passes through an enemy, it will affect them with glowing for `{{ kits.priest.data.PRIEST_LIGHT_BEAM_GLOWING_DURATION }}` ticks. 

![Priest - Light Beam Ally](../assets/kits/priest/_image_1_.jpg_)

![Priest - Light Beam Enemy](../assets/kits/priest/_image_1_.jpg_)

#### **Light Release**
## Light Release
The spell requires `{{ kits.priest.data.PRIEST_RELEASE_MANA_COST }}` mana and `1` sun power to cast. Casting will consume all sun power to heal allies in a `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_0_RADIUS }}` meter radius. The spell has additional effects when more sun power is consumed.

![Priest - Light Release Cast](../assets/kits/priest/_image_1_.jpg_)

#### Cleansing Effects 
When at least `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_1_SUN_POWER }}` sun power is released, the spell removes potion, status, burning, and freezing effects that negatively affect allies.

![Priest - Light Release Cleanse Effects](../assets/kits/priest/_image_1_.jpg_)

#### Igniting Enemies

When at least `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_SUN_POWER }}` sun power is released, the spell targets and ignites enemies for `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_BURN_DURATION }}` ticks. Additinally the spell's radius increases to `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_RADIUS }}` meters.

![Priest - Light Release Ignite Enemies](../assets/kits/priest/_image_1_.jpg_)

#### Cleansing Kit Debuffs

When at least `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_3_SUN_POWER }}` sun power is released, the spell removes all kit debuffs.

![Priest - Light Release Cleanse Mercy Beam](../assets/kits/priest/_image_1_.jpg_)

The spell also removes the stun effect from allies and friendly engineer blocks.

![Priest - Light Release No Longer Stunned](../assets/kits/priest/_image_1_.jpg_)

#### Enemy Knockback

When at least `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_SUN_POWER }}` sun power is released, the spell knocks enemies back. Additinally the spell's radius increases to `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_RADIUS }}` meters.

![Priest - Light Release Knock Enemies Back](../assets/kits/priest/_image_1_.jpg_)

#### Sun Barrier

When `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_SUN_POWER }}` sun power is released, the spell affects allies with absorption level `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_LEVEL }}` for `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_DURATION }}` ticks.

![Priest - Light Release Sun Barrier](../assets/kits/priest/_image_1_.jpg_)

The spell also removes the hack effect from allies and friendly engineer blocks.

![Priest - Light Release No Longer Hacked](../assets/kits/priest/_image_1_.jpg_)

<!-- tabs:end -->
<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Soothing Light**
## Soothing Light
When the player casts a light spell, they receive the "Soothing Light" effect. The "Soothing Light" effect restores `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_POTENCY }}` health every `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE }}` ticks `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICKS }}` times.

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
Sun power is a resource used to cast the "Light Release" spell. The maximum sun power is `{{ kits.priest.data.PRIEST_SUN_POWER_MAX }}`.

![Priest - Sun Power](../assets/kits/priest/_image_1_.jpg_)

Sun power increases by `{{ kits.priest.data.PRIEST_SUN_POWER_FINAL_BLOW_REWARD }}` after earning a final blow and increases by `{{ kits.priest.data.PRIEST_SUN_POWER_ASSIST_REWARD }}` after earning an assist.

![Priest - Sun Power Elimination](../assets/kits/priest/_image_1_.jpg_)

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
| PRIEST_SWORD_DAMAGE | `{{ kits.priest.data.PRIEST_SWORD_DAMAGE }}` | The base damage of the sword. |
| PRIEST_SWORD_SPEED | `{{ kits.priest.data.PRIEST_SWORD_SPEED }}` | The base speed of the sword. |
| PRIEST_WAND_KNOCKBACK | `{{ kits.priest.data.PRIEST_WAND_KNOCKBACK }}` | The level of the knockback enchantment on the spell wand. |
| PRIEST_LIGHT_BEAM_MANA_COST | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_MANA_COST }}` | The cost of mana in order to cast the light beam spell. |
| PRIEST_LIGHT_BEAM_CAST_COOLDOWN | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_CAST_COOLDOWN }}` | The light beam spell cooldown in ticks. |
| PRIEST_LIGHT_BEAM_MAX_RANGE | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_MAX_RANGE }}` | The maximum distance, in meters, of the light beam. |
| PRIEST_LIGHT_BEAM_SPEED | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_SPEED }}` | The speed at which the light beam travels. (0 = no travel time) |
| PRIEST_LIGHT_BEAM_SIZE | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_SIZE }}` | The size of the light beam hitbox. |
| PRIEST_LIGHT_BEAM_ABSORPTION_LEVEL | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_LEVEL }}` | The level of the light beam absorption effect. |
| PRIEST_LIGHT_BEAM_ABSORPTION_DURATION | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_ABSORPTION_DURATION }}` | The duration, in ticks, of light beam absorption effect. |
| PRIEST_LIGHT_BEAM_GLOWING_LEVEL | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_GLOWING_LEVEL }}` | The level of the light beam glowing effect. |
| PRIEST_LIGHT_BEAM_GLOWING_DURATION | `{{ kits.priest.data.PRIEST_LIGHT_BEAM_GLOWING_DURATION }}` |  The duration, in ticks, of light beam glowing effect. |
| PRIEST_SOOTHING_LIGHT_HEALING_TICKS | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICKS }}` | The amount of soothing light healing ticks. |
| PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_TICK_RATE }}` | The duration, in ticks, of one soothing light healing tick. |
| PRIEST_SOOTHING_LIGHT_HEALING_POTENCY | `{{ kits.priest.data.PRIEST_SOOTHING_LIGHT_HEALING_POTENCY }}` | The amount of health to restore during one soothing light healing tick. |
| PRIEST_RELEASE_MANA_COST | `{{ kits.priest.data.PRIEST_RELEASE_MANA_COST }}` | The cost of mana in order to cast the light release spell. |
| PRIEST_RELEASE_CAST_COOLDOWN | `{{ kits.priest.data.PRIEST_RELEASE_CAST_COOLDOWN }}` | The light release spell cooldown in ticks. |
| PRIEST_RELEASE_HEALING_MIN | `{{ kits.priest.data.PRIEST_RELEASE_HEALING_MIN }}` | The minimum health that light releases restores. |
| PRIEST_RELEASE_HEALING_PER_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_HEALING_PER_SUN_POWER }}` | The light release healing increase per sun power. |
| PRIEST_RELEASE_LEVEL_1_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_1_SUN_POWER }}` | The sun power required to cast a level 1 light release spell. |
| PRIEST_RELEASE_LEVEL_2_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_SUN_POWER }}` | The sun power required to cast a level 2 light release spell. |
| PRIEST_RELEASE_LEVEL_3_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_3_SUN_POWER }}` | The sun power required to cast a level 3 light release spell. |
| PRIEST_RELEASE_LEVEL_4_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_SUN_POWER }}` | The sun power required to cast a level 4 light release spell. |
| PRIEST_RELEASE_LEVEL_5_SUN_POWER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_SUN_POWER }}` | The sun power required to cast a level 5 light release spell. |
| PRIEST_RELEASE_LEVEL_0_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_0_RADIUS }}` | The base radius, in meters, of light release spells. |
| PRIEST_RELEASE_LEVEL_2_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_RADIUS }}` | The radius, in meters, of level 2 light release spells. |
| PRIEST_RELEASE_LEVEL_2_BURN_DURATION | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_2_BURN_DURATION }}` | The enemy burn duration, in ticks, of level 2 light release spells. |
| PRIEST_RELEASE_LEVEL_4_RADIUS | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_RADIUS }}` | The radius, in meters, of level 4 light release spells. |
| PRIEST_RELEASE_LEVEL_4_KNOCKBACK_MULTIPLIER | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_4_KNOCKBACK_MULTIPLIER }}` | The enemy knockback multiplier of level 4 light release spells. |
| PRIEST_RELEASE_LEVEL_5_ABSORPTION_LEVEL | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_LEVEL }}` | The level of the absorption effect from level 5 light release spells. |
| PRIEST_RELEASE_LEVEL_5_ABSORPTION_DURATION | `{{ kits.priest.data.PRIEST_RELEASE_LEVEL_5_ABSORPTION_DURATION }}` | The duration, ticks, of the absorption effect from level 5 light release spells. |
| PRIEST_SUN_POWER_MAX | `{{ kits.priest.data.PRIEST_SUN_POWER_MAX }}` | The player's maximum sun power. |
| PRIEST_SUN_POWER_FINAL_BLOW_REWARD | `{{ kits.priest.data.PRIEST_SUN_POWER_FINAL_BLOW_REWARD }}` | The sun power increase after earning a final blow. |
| PRIEST_SUN_POWER_ASSIST_REWARD | `{{ kits.priest.data.PRIEST_SUN_POWER_ASSIST_REWARD }}` | The sun power increase after earning an assist. |
| PRIEST_SUN_POWER_PER_LIGHT_BEAM_HIT | `{{ kits.priest.data.PRIEST_SUN_POWER_PER_LIGHT_BEAM_HIT }}` | The sun power increase after a light beam passes through an ally. |