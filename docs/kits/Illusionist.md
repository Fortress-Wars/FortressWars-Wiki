# Illusionist

---

#### ![illusionist-icon](../assets/icons/illusionist-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A damage kit that uses abilities to fool enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />

# Gear

---

- Chain Chestplate
- Chain Leggings
- Chain Boots
- Iron Sword
- Divination Star
- {{ kits.illusionist.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Divination Star**

## Divination Star

Right click to throw a star. When it hits an enemy, it will tag them with [Future Sight](#future-sight). If `ILLUSIONIST_DIVINATION_STAR_DO_DISORIENTATION` is set to `true`, then tagging an enemy will also make them look in a random direction.

![Divination Star - Tag](../assets/kits/illusionist/Illusionist%20-%20Divination%20Star%20Tag.gif)

Divination stars will hack [Engineer Blocks](Engineer#sentries) for `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_BLOCK_HACK_DURATION }}` ticks.

![Divination Star - Hack 1](../assets/kits/illusionist/Illusionist%20-%20Divination%20Star%20Hack.gif)

![Divination Star - Hack 2](../assets/kits/illusionist/Illusionist%20-%20Divination%20Star%20Hack%202.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Future Sight**

## Future Sight

An enemy tagged with futue sight will take `x{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_DAMAGE_MULTIPLIER_ADDITIVE }}` more damage if the damage source is from the player that tagged them. When future sight expires, it will also deal `{{ kits.illusionist.data.ILLUSIONIST_FUTURE_SIGHT_DAMAGE }}` damage.

![Future Sight](../assets/kits/illusionist/Illusionist%20-%20Future%20Sight.gif)

#### **Fake Death**

## Fake Death

When the player takes a fatal attack from the enemy tagged with [Future Sight](#future-sight), they will fake their death. When the player fakes their death, they will heal `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_HEALING }}` HP, cloak and turn invisible for `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_INVISIBILITY_DURATION }}` ticks, be pushed back, and lose all of their healing potions. A death message will also appear in the chat.

![Fake Death](../assets/kits/illusionist/Illusionist%20-%20Fake%20Death.gif)

The player will uncloak if the duration expires or if they left click a block, or damage an enemy.

![Fake Death - Uncloak](../assets/kits/illusionist/Illusionist%20-%20Fake%20Death%20Unlock%20Hit%20Block.gif)

If the player damages an enemy to uncloak, they will also hack them for `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_UNCLOAK_HACK_DURATION }}` ticks.

![Fake Death - Uncloak Hack](../assets/kits/illusionist/Illusionist%20-%20Fake%20Death%20Uncloak%20Hack.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Haha...your plan Z failed! | Kill an illusionist while they are invisible. | 20 Credits |
| I murdered your toys as well. | Hack an enemy sentry as illusionist. | 20 Credits |
| Plan Z is working perfectly! | Fake your death as illusionist and kill the opponent that you faked your death against. | 20 Credits |
| Plan Z, I love ya! | Fake your death as illusionist. | 20 Credits |
| Pure Divination | Get 50 future sight kills. | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.illusionist.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| ILLUSIONIST_SWORD_DAMAGE | `{{ kits.illusionist.data.ILLUSIONIST_SWORD_DAMAGE }}` | The base damage of the sword. |
| ILLUSIONIST_SWORD_SPEED | `{{ kits.illusionist.data.ILLUSIONIST_SWORD_SPEED }}` | The base speed of the sword. |
| ILLUSIONIST_DIVINATION_STAR_DAMAGE_PERCENTAGE_INCREASE | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_DAMAGE_PERCENTAGE_INCREASE }}` | The damage increase provided when an enemy is tagged with Future Sight. |
| ILLUSIONIST_DIVINATION_STAR_BLOCK_HACK_DURATION | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_BLOCK_HACK_DURATION }}` | The duration, in ticks, that the Divination Star will hack Engineer Blocks by. |
| ILLUSIONIST_DIVINATION_STAR_BLOCK_HACK_RADIUS | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_BLOCK_HACK_RADIUS }}` | The radius of the Divination Star hack. |
| ILLUSIONIST_DIVINATION_STAR_COOLDOWN | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_COOLDOWN }}` | The cooldown, in ticks, of the Divination Star ability. |
| ILLUSIONIST_DIVINATION_STAR_TAG_DURATION | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_TAG_DURATION }}` | The duration, in ticks, of the Future Sight tag. |
| ILLUSIONIST_DIVINATION_STAR_THROW_MULTIPLIER | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_THROW_MULTIPLIER }}` | The throw multiplier of the Divination Star. |
| ILLUSIONIST_FUTURE_SIGHT_DAMAGE | `{{ kits.illusionist.data.ILLUSIONIST_FUTURE_SIGHT_DAMAGE }}` | The base damage of the Future Sight ability. |
| ILLUSIONIST_DIVINATION_STAR_DO_DISORIENTATION | `{{ kits.illusionist.data.ILLUSIONIST_DIVINATION_STAR_DO_DISORIENTATION }}` | Determine if the Divination Star should also cause the hit enemy to look in a random direction. |
| ILLUSIONIST_FAKE_DEATH_COOLDOWN | `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_COOLDOWN }}` | The cooldown, in ticks, of the Fake Death ability. |
| ILLUSIONIST_FAKE_DEATH_INVISIBILITY_DURATION | `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_INVISIBILITY_DURATION }}` | The duration, in ticks, of the Fake Death invisibility |
| ILLUSIONIST_FAKE_DEATH_INITIAL_PUSH_BACK_MULTIPLIER | `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_INITIAL_PUSH_BACK_MULTIPLIER }}` | The multiplier of the knockback applied to the player when they fake their death. |
| ILLUSIONIST_FAKE_DEATH_HEALING | `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_HEALING }}` | The healing given to the player when they fake their death. |
| ILLUSIONIST_FAKE_DEATH_UNCLOAK_HACK_DURATION | `{{ kits.illusionist.data.ILLUSIONIST_FAKE_DEATH_UNCLOAK_HACK_DURATION }}` | The duration, in ticks, of the uncloak hack. |
