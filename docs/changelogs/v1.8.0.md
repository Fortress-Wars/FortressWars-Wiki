_Release Date: December 12, 2023_

# v1.8.0

- New Kits!
- New Maps!
- New Cosmetics!
- Auto-pot Feature!
- Achievement Progress Feature!
- Damage Indicator Feature!
- New Preferences Menu!
- Parkour Overhaul!

## Kit Crusher

- A damage kit that summons anvils to crush your enemies.

### Role

- Damage

### Cost

- 500 credits

### Gear

- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Iron Sword
- Crusher
  7 Healing Potions

### Abilities

##### Crusher

- Summon an anvil where the player is looking. The anvil will prioritize targeting enemies over blocks. In the case of no valid summon locations the ability will fail entirely with no cooldown penalty.

## Kit Prometheus

-A damage kit that uses the element of fire to deal damage.

### Role:

- Damage

### Cost

- 500 credits

### Gear

- Chainmail Chestplate
- Leather Leggings (Orange)
- Chainmail Boots
- Iron Sword
- Wand
- 7 Healing Potions

### Abilities

##### Flame (5 mana)

- Summon a flame in front of a player that will light all players on fire in its range.

##### Fireball (75 mana):

- Summon a fireball that will deal explosion damage on impact. This will deal damage and set enemies on fire.

##### Imbue (100 mana):

- Gives the player fire aspect II and fire resistance for an extended duration. Casting it again while active will incinerate the player.

## Kit Slime

- A tank kit that summons slimes and provides fall and anvil damage immunity to teammates.

### Role

- Tank

### Cost

- 500 credits

### Gear

- Iron Chestplate
- Leather Leggings (Lime Green)
- Iron Boots
- Shield
- Stone Sword
- Slime Armor
- 5 Healing Potions

### Abilities

##### Slime Minion:

- Blocking damage will summon a slime that will fight for you. When this slime minion dies, if the owner is nearby, it will give them absorption 1 for 20 seconds. The player can have a max of 3 slimes.

##### Slime Armor:

- All allies in a certain radius around the player will receive the Slime Armor and be immune to fall and anvil damage for 10 seconds. Taking fall damage from more than 7 blocks will break the slime armor. Fire, ice, and anvil damage will also break the slime armor.

## Map Ashlands

##### Description

- A small nether themed basalt biome map with a flowing lava and ashy air.

##### Game Mode

- King of the Hill

##### Map Type

- No Build

##### Contributors

- alfredodan
- LinkFD

## Map Lazarus

##### Description

- A medium sized map based on the Team Fortress 2 map "Lazarus"

##### Game Mode

- King of the Hill

##### Map Type

- No Build

##### Contributors

- alfredodan

## Cosmetics

##### Overview

- New cosmetic types have been added!
- New Death Animations

##### Arrow Trails

- Particles that follow arrows and do an animation on hitting a block or entity.

##### Block Place Effects

- Animation when placing blocks.

##### Block Break Effects

- Animation when breaking blocks.

## Auto-pot

##### Overview

- Players can now toggle between using potions automatically and using potions manually. Auto-pot is enabled by default and is toggleable with the /autopot command.

##### Healing Potions

- Heal **6** health when consumed **automatically**
- Heal **7.5** health when consumed **manually**

##### Mana Potions

- Restore **40** mana when consumed **automatically**
- Restore **50** mana when consumed **manually**

##### Damage Indicator Command

- Use /damageindicator toggle to toggle damage indicators locally.

## Achievement Progress

##### Overview

- A new feature has been added to view your achievement progress. You can view the progress live and later in the achievement menu. When you make progress on an achievement, an achievement bar will display on your screen for a short duration. This bar is toggleable with the /achievements bar enable/disable command. You can also view your progress at any time in the achievements menu with the /achievements command.

## Damage Indicators

##### Overview

- Damage taken and health restored now displays as numbers above players and mobs.

## Preferences Menu

##### Overview

- Use the /preferences command to easily view and toggle preferences. The current preferences in this menu are auto-pot, achievement bars, and damage indicator visibility.

## Parkour Overhaul

##### Overview

- Parkour has been reimagined and improved! New features include new parkour items, parkour statistics, a parkour menu and parkour commands.

##### Parkour Items

- Checkpoint, restart, and cancel items have been added to the player's inventory when joining a parkour. Players can use the checkpoint item to teleport to the last checkpoint, restart item to restart, and cancel item to exit the parkour session and teleport back to the lobby spawn.

##### Parkour Statistics

- Every time a player completes a parkour, their time is saved. Players can view their parkour statistics in the parkour menu. Player's can also view the parkour records in the menu and parkour leaderboards in the server lobby.

##### Parkour Menu

- Easily open the parkour menu with /parkour or navigate to the parkour button in the lobby menu. View available parkour courses, your parkour statistics, and server record.

##### Parkour Command

- Use the /parkour command to open the menu. Players can also use the parkour command to do the same actions as the parkour items stated above.

# Kit Changes

#### Aquarius

- Water beam and water bomb spells now extinguish fire.

#### Aquaman

- Water sphere no longer spawns water inside teams’ spawn boxes

#### Buff Master

- Reduced base cooldown from **8** seconds to **7** seconds

#### Illusionist

- Replaced diamond sword with iron sword.

#### Medic

- Healing stone will self heal every **10** ticks at normal healing instead of a healing multiplier of **0.7** with no cooldown.

#### Miner

- Removed stone tools from the kit.

#### Musketeer

- Increased projectile size from **0.25** blocks to **0.5** blocks.
- Rifle now auto-reloads after shooting the last shot.

#### Potion Master

- Potions now only cycle after hitting an enemy.

#### Spider

- Web trap longer spawns cobwebs inside teams’ spawn boxes

#### Vitalist

- Increased arrow hitbox.
- Arrow now pierces up to 4 times.
- Increased arrow impact damage from **0.5** damage to **1.0** damage.
- Arrow impact damage type changed from the normal arrow to the vitalist arrow damage.

# Bug Fixes

- Fixed vitalist being able to shoot themselves with their own arrows.
- Fixed Kit Aquarius and Kit Priest earning 2 mana potions from 1 final blow.
- Fixed suicides counting damage dealt for the enemy that the player was fighting.
- Fixed equipped cosmetic information being lost after fw+ rank expired.
- Fixed Attack & Defend game end reason was not set properly when a game ended by time.
- Fixed Kit Gunner’s rev state walk speed not being reset when the game ended.
- Fixed status effects retaining after a game ends (i.e fire, freeze, potion effects).
- Fixed health not being reset after a game ends.
- Fixed spider cobwebs not returning if hitting a cactus.
- Fixed pyrotechnic rockets not damaging shields correctly
- Fixed Necromancer able to farm “Essence of the Afterlife” by continuously suiciding
- Fixed Illusionist bug where the illusionist could fake their death multiple times before the future sight took effect.
