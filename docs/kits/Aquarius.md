# Aquarius

***

#### ![aquarius-icon](../assets/icons/aquarius-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A support kit that uses the water element to heal allies.
- **Role:** Support
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Leather Leggings (Blue)
- Chainmail Boots
- Stone Sword
- Spell Wand
- {{ kits.aquarius.data.MAX_MANA_POTIONS }} Mana Potions
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
- Water Beam *(Left-Click)*
- Water Bomb *(Right-Click)*

### Spells
<!-- tabs:start -->
#### **Water Beam**
## Water Beam
The spell costs `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_MANA_COST }}` mana. Casting will summon a water bubble projectile in the direction the player is looking. The water bubble heals allies for `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_HEALING_POTENCY }}` health when it passes through them. The bubble will pop when it hits a block or reaches the maximum range of `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_MAX_RANGE }}` meters. When it pops, it will heal all allies (including the player) in a `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_POP_RADIUS }}` meter radius.

![Aquarius - Water Beam Travel](../assets/kits/aquarius/_image_1_.jpg_)

![Aquarius - Water Beam Pop](../assets/kits/aquarius/_image_1_.jpg_)

Water bubbles will stun enemy engineer blocks for `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_WET_DURATION }}` ticks.

![Aquarius - Water Beam Stun Engineer Blocks](../assets/kits/aquarius/_image_1_.jpg_)

#### **Water Bomb**
## Water Bomb
The spell costs `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_MANA_COST }}` mana. Casting will summon a water bomb projectile in the direction the player is looking. The water bomb will explode when it hits a block or hits an entity. When it explodes it will heal all allies and debuff all enemies in a `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_EXPLOSION_RADIUS }}` meter radius.

![Aquarius - Water Bomb Cast](../assets/kits/aquarius/_image_1_.jpg_)

When the water bomb affects allies, it will restore `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICK_POTENCY }}` health every `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICK_RATE }}` ticks `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICKS }}` times.

![Aquarius - Water Bomb Heal Ally](../assets/kits/aquarius/_image_1_.jpg_)

When the water bomb affects enemies, it will apply poison `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_POISON_LEVEL }}` for `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_POISON_DURATION }}` ticks and nausea `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_NAUSEA_LEVEL }}` for `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_NAUSEA_DURATION }}` ticks.

![Aquarius - Water Bomb Debuff Enemy](../assets/kits/aquarius/_image_1_.jpg_)

Water bombs will stun enemy engineer blocks for `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_WET_DURATION }}` ticks.

![Aquarius - Water Bomb Stun Engineer Blocks](../assets/kits/aquarius/_image_1_.jpg_)

<!-- tabs:end -->
<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Soothing Water**
## Soothing Water
When the player casts a spell, they will receive the "Soothing Water" effect. The "Soothing Water" effect restores `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_POTENCY }}` health every `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_TICK_RATE }}` ticks `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_TICKS }}` times.

![Aquarius - Soothing Water](../assets/kits/aquarius/_image_1_.jpg_)

<!-- tabs:end -->

### Resources
<!-- tabs:start -->
#### **Mana**
## Mana
Mana is a resource used to cast spells.

![Aquarius - Mana](../assets/kits/aquarius/_image_1_.jpg_)

The player's maximum mana is `{{ kits._shared.data.MANA_MAX }}` and it will regenerate slowly over time.

![Aquarius - Mana Regenerate](../assets/kits/aquarius/_image_1_.jpg_)

After the player earns a final blow, they will restore `{{ kits._shared.data.MANA_FINAL_BLOW_AMOUNT }}` mana and `{{ kits._shared.data.MANA_ASSIST_AMOUNT }}` mana after earning an assist.

![Aquarius - Mana Final Blow](../assets/kits/aquarius/_image_1_.jpg_)

![Aquarius - Mana Assist](../assets/kits/aquarius/_image_1_.jpg_)

Friendly engineer dispensers restore `{{ kits._shared.data.MANA_DISPENSER_DISPENSE_AMOUNT }}` mana.

![Aquarius - Mana Dispenser](../assets/kits/aquarius/_image_1_.jpg_)

<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Water Sniper | Cast your water bomb spell and successfully hit an enemy or ally from 50 blocks away. | 20 Credits |
| Fun at the water park! | Affect 10 Entities at once with your water bomb spell. | 50 Credits |
| Soothing Water | Heal a total of 100,000 with your water beam spell. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_MANA_POTIONS | `{{ kits.aquarius.data.MAX_MANA_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_MANA_POTIONS }} |
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
| AQUARIUS_SWORD_DAMAGE | `{{ kits.aquarius.data.AQUARIUS_SWORD_DAMAGE }}` | The base damage of the sword. |
| AQUARIUS_SWORD_SPEED | `{{ kits.aquarius.data.AQUARIUS_SWORD_SPEED }}` | The base speed of the sword. |
| AQUARIUS_WAND_KNOCKBACK_LEVEL | `{{ kits.aquarius.data.AQUARIUS_WAND_KNOCKBACK_LEVEL }}` | The level of the knockback enchantment on the spell wand. |
| AQUARIUS_WATER_BEAM_MANA_COST | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_MANA_COST }}` | The cost of mana in order to cast the water beam spell. |
| AQUARIUS_WATER_BEAM_CAST_COOLDOWN | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_CAST_COOLDOWN }}` | The water beam spell cooldown in ticks. |
| AQUARIUS_WATER_BEAM_HEALING_POTENCY | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_HEALING_POTENCY }}` | The amount of healing that the water beam spell restores. |
| AQUARIUS_WATER_BEAM_POP_RADIUS | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_POP_RADIUS }}` | The radius, in meters, of the water bubble pops. |
| AQUARIUS_WATER_BEAM_WET_DURATION | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_WET_DURATION }}` | The duration, in ticks, of the water bubble's wet status. (Used for stunning engineer blocks) |
| AQUARIUS_WATER_BEAM_MAX_RANGE | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_MAX_RANGE }}` | The maximum distance, in meters, that the water bubble will travel before popping. |
| AQUARIUS_WATER_BEAM_SIZE | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_SIZE }}` | The size of the water bubble hitbox. |
| AQUARIUS_WATER_BEAM_SPEED | `{{ kits.aquarius.data.AQUARIUS_WATER_BEAM_SPEED }}` | The speed at which the water bubble travels. (0 = no travel time) |
| AQUARIUS_WATER_BOMB_CAST_COOLDOWN | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_CAST_COOLDOWN }}` | The water bomb spell cooldown in ticks. |
| AQUARIUS_WATER_BOMB_MANA_COST | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_MANA_COST }}` | The cost of mana in order to cast the water bomb spell. |
| AQUARIUS_WATER_BOMB_EXPLOSION_RADIUS | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_EXPLOSION_RADIUS }}` | The radius, in meters, of the water bomb explosion. |
| AQUARIUS_WATER_BOMB_HEALING_TICKS | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICKS }}` | The amount of water bomb healing ticks. |
| AQUARIUS_WATER_BOMB_HEALING_TICK_RATE | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICK_RATE }}` | The duration, in ticks, of one water bomb healing tick. |
| AQUARIUS_WATER_BOMB_HEALING_TICK_POTENCY | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_HEALING_TICK_POTENCY }}` | The amount of health to restore in one water bomb healing tick. |
| AQUARIUS_WATER_BOMB_POISON_DURATION | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_POISON_DURATION }}` | The duration, in ticks, of the water bomb's poison effect. |
| AQUARIUS_WATER_BOMB_POISON_LEVEL | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_POISON_LEVEL }}` |The level of the water bomb's poison effect. |
| AQUARIUS_WATER_BOMB_NAUSEA_DURATION | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_NAUSEA_DURATION }}` | The duration, in ticks, of the water bomb's nausea effect. |
| AQUARIUS_WATER_BOMB_NAUSEA_LEVEL | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_NAUSEA_LEVEL }}` | The level of the water bomb's nausea effect. |
| AQUARIUS_WATER_BOMB_WET_DURATION | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_WET_DURATION }}` | The duration, of ticks, of the water bomb wet status. (Used for stunning engineer blocks) |
| AQUARIUS_WATER_BOMB_VELOCITY_MULTIPLIER | `{{ kits.aquarius.data.AQUARIUS_WATER_BOMB_VELOCITY_MULTIPLIER }}` | The velocity multiplier of the water bomb when it is summoned and launched. |
| AQUARIUS_SOOTHING_WATER_HEALING_TICKS | `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_TICKS }}` | The amount of soothing water healing ticks. |
| AQUARIUS_SOOTHING_WATER_HEALING_TICK_RATE | `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_TICK_RATE }}` | The duration, in ticks, of one soothing water healing tick. |
| AQUARIUS_SOOTHING_WATER_HEALING_POTENCY | `{{ kits.aquarius.data.AQUARIUS_SOOTHING_WATER_HEALING_POTENCY }}` | The amount of health to restore in one soothing weater healing tick. |