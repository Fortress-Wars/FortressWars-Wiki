# Hulk

***

#### ![hulk-icon](../assets/icons/hulk-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A defensive damage kit with weaker armor that can rage and get much stronger.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Leather Chestplate
- Leather Leggings
- Leather Boots
- Bow
- Arrow
- Rage/Relax
- {{ kits.hulk.data.MAX_HEALING_POTIONS }} Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Rage**
## Rage
Right click to enter rage mode for `{{ kits.hulk.data.HULK_RAGE_FORM_DURATION }}` ticks. When entering rage mode, all armor will be replaced with diamond armor. The bow be replaced with a sword. The player will exit rage mode automatically when the duration ends.

![Rage](../assets/kits/hulk/Hulk%20-%20Rage.gif)

#### **Relax**
## Relax
Right click to enter relax mode. The diamond armor will be placed with leather armor and the sword will be replaced with a bow.

![Relax](../assets/kits/hulk/Hulk%20-%20Relax.gif)

<!-- tabs:end -->

### Passives
<!-- tabs:start -->
#### **Kill Chain**
## Kill Chain
While the player is in rage mode, every elimination extends the duration of rage. *(Final Blow: `{{ kits.hulk.data.HULK_RAGE_FORM_KILL_EXTENSION }}` ticks, Assist: `{{ kits.hulk.data.HULK_RAGE_FORM_ASSIST_EXTENSION }}` ticks)*

![Kill Chain](../assets/kits/hulk/Hulk%20-%20Kill%20Chain.gif)
<!-- tabs:end -->
<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Quit yapping! | Kill an enemy with your hulk bow. | 20 Credits |
| Get 3 kills during one rage mode activation! | Get 3 kills during one rage mode activation! | 50 Credits |
| HULK SMASH | Hulk out and destroy a sentry, bomb and a cobweb. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.hulk.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| HULK_RAGE_FORM_DURATION | `{{ kits.hulk.data.HULK_RAGE_FORM_DURATION }}` | The duration, in ticks, of the Rage ability. |
| HULK_RAGE_FORM_COOLDOWN | `{{ kits.hulk.data.HULK_RAGE_FORM_COOLDOWN }}` | The cooldown, in ticks, of the Rage ability. |
| HULK_RAGE_FORM_KILL_EXTENSION | `{{ kits.hulk.data.HULK_RAGE_FORM_KILL_EXTENSION }}` | The duration extention, in ticks, of the Rage ability that final blows will reward. |
| HULK_RAGE_FORM_ASSIST_EXTENSION | `{{ kits.hulk.data.HULK_RAGE_FORM_ASSIST_EXTENSION }}` | The duration extention, in ticks, of the Rage ability that assists will reward. |
| HULK_RAGE_FORM_ACTIVATION_COOLDOWN | `{{ kits.hulk.data.HULK_RAGE_FORM_ACTIVATION_COOLDOWN }}` | The cooldown, in ticks, after using the rage ability before the player can use the relax ability. |
| HULK_RAGE_SWORD_DAMAGE | `{{ kits.hulk.data.HULK_RAGE_SWORD_DAMAGE }}` | The base damage of the rage mode sword. |
| HULK_RAGE_SWORD_SPEED | `{{ kits.hulk.data.HULK_RAGE_SWORD_SPEED }}` | The base speed of the rage mode sword. |