# Potion Master

***

#### ![potion-master-icon](../assets/icons/potion-master-icon.jpg)

# Overview
***
- **Introduced:** v1.7.0
- **Description:** A damage kit that uses various potions to debuff enemies.
- **Role:** Damage
- **How to Unlock:** Purchase for 500 Credits.

<br />  

# Gear
***
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Throwable Potion
- {{ kits.potion_master.data.MAX_HEALING_POTIONS }} Healing Potions

<br />  

# Abilities
***
### Actives
<!-- tabs:start -->
#### **Throwable Potion**
## Throwable Potion
Right-click to throw the potion. If the potion hits an enemy, it will affect them with its current potion effect. There are `4` diffect effects: Harming, Slowness, Poison, and Weakness. The ability will only cycle to the next potion effect after affecting an enemy with the current effect.

<!-- tabs:start -->
#### **Harming**
## Harming

Affects enemies with Instant Damage (Level: `1`)

![Potion Master - Harming](../assets/kits/potion_master)

#### **Slowness**
## Slowness

Affects enemies with Slowness (Level: `1` for `200` ticks)

![Potion Master - Slowness](../assets/kits/potion_master)

#### **Poison**
## Poison

Affects enemies with Poison (Level: `0` for `200` ticks)

![Potion Master - Poison](../assets/kits/potion_master)

#### **Weakness**
## Weakness

Affects enemies with Weakness (Level: `0` for `200` ticks)

![Potion Master - Weakness](../assets/kits/potion_master)

<!-- tabs:end -->
<!-- tabs:end -->

<br />

# Achievements
***

| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Damage? What Damage? | Kill a brute while they are in berserk and have weakness applied. | 20 Credits |
| Creeper Cocktail | Throw a potion on a creeper as potion master. | 20 Credits |
| Two to go please! | Get a double potion kill. | 20 Credits |
| Superb Cocktail | Get 1,000 potion kills. | 250 Credits |

<br />  

# Kit Data
***

| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.potion_master.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| POTION_MASTER_SWORD_DAMAGE | `{{ kits.potion_master.data.POTION_MASTER_SWORD_DAMAGE }}` | |
| POTION_MASTER_SWORD_SPEED | `{{ kits.potion_master.data.POTION_MASTER_SWORD_SPEED }}` | |
| POTION_MASTER_THROWABLE_POTION_COOLDOWN | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_COOLDOWN }}` | |
| POTION_MASTER_THROWABLE_POTION_VELOCITY_MULTIPLIER | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_VELOCITY_MULTIPLIER }}` | |
| POTION_MASTER_THROWABLE_POTION_HARMING_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_HARMING_LEVEL }}` | |
| POTION_MASTER_THROWABLE_POTION_HARMING_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_HARMING_DURATION }}` | |
| POTION_MASTER_THROWABLE_POTION_SLOWNESS_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_LEVEL }}` | |
| POTION_MASTER_THROWABLE_POTION_SLOWNESS_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_SLOWNESS_DURATION }}` | |
| POTION_MASTER_THROWABLE_POTION_POISON_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_LEVEL }}` | |
| POTION_MASTER_THROWABLE_POTION_POISON_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_POISON_DURATION }}` | |
| POTION_MASTER_THROWABLE_POTION_WEAKNESS_LEVEL | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_LEVEL }}` | |
| POTION_MASTER_THROWABLE_POTION_WEAKNESS_DURATION | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_WEAKNESS_DURATION }}` | |
| POTION_MASTER_THROWABLE_POTION_CYCLE_ON_HIT | `{{ kits.potion_master.data.POTION_MASTER_THROWABLE_POTION_CYCLE_ON_HIT }}` | |