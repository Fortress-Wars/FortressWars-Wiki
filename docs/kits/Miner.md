# Miner

---

#### ![miner-icon](../assets/icons/kits/miner-icon.jpg)

# Overview

---

- **Introduced:** v1.7.0
- **Description:** A utility kit excellent block breaking capabilities.
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
- {{ kits.miner.data.MAX_HEALING_POTIONS }} Healing Potions

<br />

# Abilities

---

### Actives

<!-- tabs:start -->

#### **Miner's Fervor**

## Miner's Fervor

Right click a tool to activate. Activating will upgrade the player's tools to netherite and give the player haste.

![Miner's Fervor 1](../assets/kits/miner/Miner%20-%20Miners%20Fervor%20Blocks.gif)

The upgraded axe can instantly break shields.

![Miner's Fervor 1](../assets/kits/miner/Miner%20-%20Miners%20Fervor%20Shield.gif)

<!-- tabs:end -->

### Passives

<!-- tabs:start -->

#### **Beacon Breaker**

## Beacon Breaker

Deal `+{{ kits.miner.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` damage to beacons.

![Beacon Breaker](../assets/kits/miner/Miner%20-%20Beacon%20Breaker.gif)

#### **Engineer Breaker**

## Engineer Breaker

Deal `+{{ kits.miner.data.MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE }}` damage to engineer blocks when using tools.

![Beacon Breaker](../assets/kits/miner/Miner%20-%20Engineer%20Breaker.gif)

<!-- tabs:end -->
<br />

# Achievements

---

<!-- prettier-ignore -->
| Achievement | Description | Reward |
| ----------- | ----------- | ------ |
| Construction Assistant | Give gobblestone to a friendly builder | 20 Credits |
| Efficiently Mining | As miner, mine over 100 blocks in one life. | 20 Credits |
| Efficiently Scrapping | Destroy an engineer's dispenser, sentry, and teleporter pads in one life. | 20 Credits|
| Rock Lobber | Get a gobblestone kill | 20 Credits |
| Shield Smasher | Break an enemy shield while using Miner's fervor. | 20 Credits |
| Wall Breaker | Dig an entire earth golem wall | 20 Credits |
| Two Birds, One Stone | Get a double gobblestone kill | 30 Credits |
| Rockslide | Get a triple gobblestone kill | 50 Credits |
| Mole Rat | Break 10,000 blocks as miner. | 500 Credits |
| Rock Legend | Get 50 gobblestone kills | 1000 Credits |

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
| MINER_MINERS_FERVOR_DURATION | `{{ kits.miner.data.MINER_MINERS_FERVOR_DURATION }}` | The duration, in ticks, of the Miner's Fervor ability. |
| MINER_MINERS_FERVOR_COOLDOWN | `{{ kits.miner.data.MINER_MINERS_FERVOR_COOLDOWN }}` | The cooldown, in ticks, of the Miner's Fervor ability. |
| MINER_MINERS_FERVOR_HASTE_LEVEL | `{{ kits.miner.data.MINER_MINERS_FERVOR_HASTE_LEVEL }}` | The level of the haste effect provided by the Miner's Fervor ability. |
| BEACON_BREAKER_DAMAGE_ADDITIVE | `{{ kits.miner.data.BEACON_BREAKER_DAMAGE_ADDITIVE }}` | The additive damage bonus when damaging beacons. |
| MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE | `{{ kits.miner.data.MINER_ENGINEER_BLOCK_DAMAGE_ADDITIVE }}` | The additive damage bonus when damaging engineer blocks. |
| MINER_PICKAXE_DAMAGE | `{{ kits.miner.data.MINER_PICKAXE_DAMAGE }}` | The base damage of the pickaxe. |
| MINER_PICKAXE_SPEED | `{{ kits.miner.data.MINER_PICKAXE_SPEED }}` | The base speed of the pickaxe. |
| MINER_UPGRADED_PICKAXE_EFFICIENCY_LEVEL | `{{ kits.miner.data.MINER_UPGRADED_PICKAXE_EFFICIENCY_LEVEL }}` | The efficiency level of the upgraded pickaxe. |
| MINER_AXE_DAMAGE | `{{ kits.miner.data.MINER_AXE_DAMAGE }}` | The base damage of the axe. |
| MINER_AXE_SPEED | `{{ kits.miner.data.MINER_AXE_SPEED }}` |  The base speed of the axe. |
| MINER_UPGRADED_AXE_EFFICIENCY_LEVEL | `{{ kits.miner.data.MINER_UPGRADED_AXE_EFFICIENCY_LEVEL }}` | The efficiency level of the upgraded axe. |
| MINER_SHOVEL_DAMAGE | `{{ kits.miner.data.MINER_SHOVEL_DAMAGE }}` | The base damage of the shovel. |
| MINER_SHOVEL_SPEED | `{{ kits.miner.data.MINER_SHOVEL_SPEED }}` | The base speed of the shovel. |
| MINER_UPGRADED_SHOVEL_EFFICIENCY_LEVEL | `{{ kits.miner.data.MINER_UPGRADED_SHOVEL_EFFICIENCY_LEVEL }}` | The efficiency level of the upgraded shovel. |
