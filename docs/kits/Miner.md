# Miner

---

#### ![miner-icon](../assets/icons/kits/miner-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A utility kit with excellent block-breaking and damage capabilities.
- **Role:** Utility
- **How to Unlock:** Unlocked by Default.

<br />

# Gear

---

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Diamond Axe
- Diamond Pickaxe
- Diamond Shovel
- `{{ kits.miner.data.MAX_HEALING_POTIONS }}` Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Paxel**

## Paxel

A powerful **multi-tool** combining a diamond pickaxe, axe, and shovel into one.
Right-click to activate **Miner’s Fervor**, temporarily enhancing your mining and combat efficiency.

![Miner - Paxel Use](../assets/kits/miner/_image_1_.jpg_)

## Miner's Fervor

When activated, Miner's Fervor provides the following effects:

- Upgrades the paxel’s material to **Netherite**.
- Increases efficiency to level `{{ kits.miner.data.MINER_UPGRADED_PAXEL_EFFICIENCY_LEVEL }}`.
- Grants **Haste** level `{{ kits.miner.data.MINER_MINERS_FERVOR_HASTE_LEVEL }}`.
- Enables the paxel to **instantly break enemy shields**.
- Causes melee damage to generate [Gobblestone](#gobblestone) based on the damage dealt.

![Miner - Fervor Upgrade Tool](../assets/kits/miner/fervor-upgrade.jpg "Upgrade Tool")

![Miner - Fervor Break Shields](../assets/kits/miner/fervor-shield-break.jpg "Break Shields")

![Miner - Fervor Damage Enemies](../assets/kits/miner/fervor-damage.jpg "Damage Enemies")

#### **Gobblestone Bag**

## Gobblestone Bag

A bag used to hurl chunks of [Gobblestone](#gobblestone) at enemies.

- **Left-click:** Throw `{{ kits.miner.data.MINER_GOBBLESTONE_THROW_COUNT }}` gobblestone to deal **area damage**.
- **Right-click:** Burst throw up to `{{ kits.miner.data.MINER_GOBBLESTONE_BURST_COUNT }}` gobblestone for **high close-range area damage**.

![Miner - Gobblestone Bag Throw](../assets/kits/miner/gobblestone-throw.jpg)

![Miner - Gobblestone Bag Burst](../assets/kits/miner/gobblestone-burst.jpg)

You can also give stored Gobblestone to friendly Builders to assist construction efforts.

![Miner - Gobblestone Bag Give](../assets/kits/miner/gobblestone-give.jpg)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Beacon Breaker**

## Beacon Breaker

Deal an additional `+{{ kits.miner.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` damage to **beacons**, making you exceptionally effective at destroying enemy objectives.

![Beacon Breaker](../assets/kits/miner/beacon-breaker.jpg)

#### **Engineer Breaker**

## Engineer Breaker

Deal an additional `+{{ kits.miner.data.MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE }}` damage to **Engineer blocks** (such as dispensers or sentries) when using the Paxel.

![Engineer Breaker](../assets/kits/miner/engineer-breaker.jpg)

<!-- tabs:end -->

## Resources

<!-- tabs:start -->

#### **Gobblestone**

## Gobblestone

Gobblestone is the Miner’s unique resource, used by the **Gobblestone Bag** ability to launch explosive stones at enemies.

![Miner - Gobblestone](../assets/kits/miner/gobblestone.jpg)

**How to Obtain Gobblestone:**

- Breaking regular blocks
- Breaking beacons
- Damaging enemies while **Miner’s Fervor** is active

![Miner - Gobblestone Collect](../assets/kits/miner/gobblestone-collect.jpg)

<!-- tabs:end -->

<br />

# Achievements

---

| Achievement            | Description                                                               | Reward        |
| ---------------------- | ------------------------------------------------------------------------- | ------------- |
| Construction Assistant | Give Gobblestone to a friendly Builder.                                   | 20 Credits    |
| Efficiently Mining     | As Miner, mine over 100 blocks in one life.                               | 20 Credits    |
| Efficiently Scrapping  | Destroy an Engineer’s dispenser, sentry, and teleporter pads in one life. | 20 Credits    |
| Rock Lobber            | Get a Gobblestone kill.                                                   | 20 Credits    |
| Shield Smasher         | Break an enemy shield while using Miner's Fervor.                         | 20 Credits    |
| Wall Breaker           | Dig through an entire Earth Golem wall.                                   | 20 Credits    |
| Two Birds, One Stone   | Get a double Gobblestone kill.                                            | 30 Credits    |
| Rockslide              | Get a triple Gobblestone kill.                                            | 50 Credits    |
| Mole Rat               | Break 10,000 blocks as Miner.                                             | 500 Credits   |
| Rock Legend            | Get 50 Gobblestone kills.                                                 | 1,000 Credits |

<br />

# Kit Data

---

<!-- prettier-ignore -->
| Property | Value | Description |
|----------|-------|-------------|
| MAX_HEALING_POTIONS | `{{ kits.miner.data.MAX_HEALING_POTIONS }}` | {{ kitDataSharedDescriptions.MAX_HEALING_POTIONS }} |
| HEALING_POTION_CLICK_POTENCY | `{{ kits._shared.data.HEALING_POTION_CLICK_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_CLICK_POTENCY }} |
| HEALING_POTION_AUTOPOT_POTENCY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_POTENCY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_POTENCY }} |
| HEALING_POTION_AUTOPOT_THRESHOLD | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_THRESHOLD }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_THRESHOLD }} |
| HEALING_POTION_AUTOPOT_HOTBAR_ONLY | `{{ kits._shared.data.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }}` | {{ kitDataSharedDescriptions.HEALING_POTION_AUTOPOT_HOTBAR_ONLY }} |
| POTION_IN_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_IN_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_IN_COMBAT_REGENERATION_RATE }} |
| POTION_OUT_OF_COMBAT_REGENERATION_RATE | `{{ kits._shared.data.POTION_OUT_OF_COMBAT_REGENERATION_RATE }}` | {{ kitDataSharedDescriptions.POTION_OUT_OF_COMBAT_REGENERATION_RATE }} |
| CHESTPLATE_ARMOR | `{{ kits.miner.data.CHESTPLATE_ARMOR }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR }} |
| CHESTPLATE_ARMOR_TOUGHNESS | `{{ kits.miner.data.CHESTPLATE_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.CHESTPLATE_ARMOR_TOUGHNESS }} |
| CHESTPLATE_PROTECTION_LEVEL | `{{ kits.miner.data.CHESTPLATE_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.CHESTPLATE_PROTECTION_LEVEL }} |
| CHESTPLATE_KNOCKBACK_RESISTANCE | `{{ kits.miner.data.CHESTPLATE_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.CHESTPLATE_KNOCKBACK_RESISTANCE }} |
| LEGGINGS_ARMOR | `{{ kits.miner.data.LEGGINGS_ARMOR }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR }} |
| LEGGINGS_ARMOR_TOUGHNESS | `{{ kits.miner.data.LEGGINGS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.LEGGINGS_ARMOR_TOUGHNESS }} |
| LEGGINGS_PROTECTION_LEVEL | `{{ kits.miner.data.LEGGINGS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.LEGGINGS_PROTECTION_LEVEL }} |
| LEGGINGS_KNOCKBACK_RESISTANCE | `{{ kits.miner.data.LEGGINGS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.LEGGINGS_KNOCKBACK_RESISTANCE }} |
| BOOTS_ARMOR | `{{ kits.miner.data.BOOTS_ARMOR }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR }} |
| BOOTS_ARMOR_TOUGHNESS | `{{ kits.miner.data.BOOTS_ARMOR_TOUGHNESS }}` | {{ kitDataSharedDescriptions.BOOTS_ARMOR_TOUGHNESS }} |
| BOOTS_PROTECTION_LEVEL | `{{ kits.miner.data.BOOTS_PROTECTION_LEVEL }}` | {{ kitDataSharedDescriptions.BOOTS_PROTECTION_LEVEL }} |
| BOOTS_KNOCKBACK_RESISTANCE | `{{ kits.miner.data.BOOTS_KNOCKBACK_RESISTANCE }}` | {{ kitDataSharedDescriptions.BOOTS_KNOCKBACK_RESISTANCE }} |
| BEACON_BREAKER_DAMAGE_ADDITIVE | `{{ kits.miner.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` | Extra damage dealt to beacons. |
| MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE | `{{ kits.miner.data.MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE }}` | Extra damage dealt to Engineer blocks. |
| MINER_MINERS_FERVOR_DURATION | `{{ kits.miner.data.MINER_MINERS_FERVOR_DURATION }}` | Duration (in ticks) of Miner's Fervor. |
| MINER_MINERS_FERVOR_COOLDOWN | `{{ kits.miner.data.MINER_MINERS_FERVOR_COOLDOWN }}` | Cooldown (in ticks) of Miner's Fervor. |
| MINER_MINERS_FERVOR_HASTE_LEVEL | `{{ kits.miner.data.MINER_MINERS_FERVOR_HASTE_LEVEL }}` | Level of Haste provided by Miner's Fervor. |
| MINER_MINERS_FERVOR_GOBBLESTONE_PER_MELEE_HIT_MULTIPLIER | `{{ kits.miner.data.MINER_MINERS_FERVOR_GOBBLESTONE_PER_MELEE_HIT_MULTIPLIER }}` | Gobblestone generated per melee hit multiplier. |
| MINER_PAXEL_DAMAGE | `{{ kits.miner.data.MINER_PAXEL_DAMAGE }}` | The base damage of the Paxel. |
| MINER_PAXEL_SPEED | `{{ kits.miner.data.MINER_PAXEL_SPEED }}` | The base attack speed of the Paxel. |
| MINER_UPGRADED_PAXEL_EFFICIENCY_LEVEL | `{{ kits.miner.data.MINER_UPGRADED_PAXEL_EFFICIENCY_LEVEL }}` | The efficiency level of the upgraded paxel. |
| MINER_GOBBLESTONE_MAX | `{{ kits.miner.data.MINER_GOBBLESTONE_MAX }}` | Maximum Gobblestone storage. |
| MINER_GOBBLESTONE_PER_BLOCK_BREAK | `{{ kits.miner.data.MINER_GOBBLESTONE_PER_BLOCK_BREAK }}` | Gobblestone gained per block broken. |
| MINER_GOBBLESTONE_PER_ENGINEER_BLOCK_HIT | `{{ kits.miner.data.MINER_GOBBLESTONE_PER_ENGINEER_BLOCK_HIT }}` | Gobblestone gained from hitting Engineer blocks. |
| MINER_GOBBLESTONE_PER_BEACON_HIT | `{{ kits.miner.data.MINER_GOBBLESTONE_PER_BEACON_HIT }}` | Gobblestone gained from hitting beacons. |
| MINER_GOBBLESTONE_GIVE_COOLDOWN | `{{ kits.miner.data.MINER_GOBBLESTONE_GIVE_COOLDOWN }}` | The cooldown (in ticks) for giving Gobblestone to allies. |
| MINER_GOBBLESTONE_THROW_COOLDOWN | `{{ kits.miner.data.MINER_GOBBLESTONE_THROW_COOLDOWN }}` | The cooldown (in ticks) between Gobblestone throws. |
| MINER_GOBBLESTONE_THROW_COUNT | `{{ kits.miner.data.MINER_GOBBLESTONE_THROW_COUNT }}` | The number of stones thrown per attack. |
| MINER_GOBBLESTONE_THROW_SPEED | `{{ kits.miner.data.MINER_GOBBLESTONE_THROW_SPEED }}` | The throwing speed for Gobblestone. |
| MINER_GOBBLESTONE_THROW_SPREAD | `{{ kits.miner.data.MINER_GOBBLESTONE_THROW_SPREAD }}` | The spread angle for Gobblestone throws. |
| MINER_GOBBLESTONE_BURST_COOLDOWN | `{{ kits.miner.data.MINER_GOBBLESTONE_BURST_COOLDOWN }}` | The cooldown (in ticks) between burst throws. |
| MINER_GOBBLESTONE_BURST_COUNT | `{{ kits.miner.data.MINER_GOBBLESTONE_BURST_COUNT }}` | The number of stones thrown in a burst. |
| MINER_GOBBLESTONE_BURST_SPEED | `{{ kits.miner.data.MINER_GOBBLESTONE_BURST_SPEED }}` | The speed of burst-thrown Gobblestone. |
| MINER_GOBBLESTONE_BURST_RATE | `{{ kits.miner.data.MINER_GOBBLESTONE_BURST_RATE }}` | The delay (in ticks) between burst throws. |
| MINER_GOBBLESTONE_SELF_DAMAGE_MULTIPLIER | `{{ kits.miner.data.MINER_GOBBLESTONE_SELF_DAMAGE_MULTIPLIER }}` | The self-damage multiplier for Gobblestone explosions. |
| MINER_GOBBLESTONE_DAMAGE | `{{ kits.miner.data.MINER_GOBBLESTONE_DAMAGE }}` | The Gobblestone damage. |
| MINER_GOBBLESTONE_EXPLODE_RADIUS | `{{ kits.miner.data.MINER_GOBBLESTONE_EXPLODE_RADIUS }}` | The explosion radius for Gobblestone impacts. |
| MINER_GOBBLESTONE_IGNORE_NO_DAMAGE_TICKS | `{{ kits.miner.data.MINER_GOBBLESTONE_IGNORE_NO_DAMAGE_TICKS }}` | Whether to ignore invulnerability frames. |
| MINER_GOBBLESTONE_SIZE | `{{ kits.miner.data.MINER_GOBBLESTONE_SIZE }}` | The size Gobblestone projectiles. |
