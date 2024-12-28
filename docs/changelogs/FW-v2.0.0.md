_Release Date: TBD_

# v2.0.0

- Health Bars
- Discord Integration
- Kit Changes
- Map Updates
- Technical Changes
- Other Changes
- Bug Fixes

## Overview

This update reimplements 80% of the code base to primarily reimplement kits and database features. There are many new features and changes. This release also marks a large milestone for the Fortress Wars Project by improving maintainability and ease of future development.

## Health Bars

Health bars appear above allies. They show the player's kit, name, health bar, numeric health value, and number of potions. Absorption and other status effects are reflected on the health bar. Enemies only see the player's name and nothing else!

## Discord Integration

A new channel has been created that shows game events and player death messages.

- Configured via "killfeed" and "game" channels in the DiscordSRV config.

## Kit Changes

Aquaman

- Added new death message for trident melee kills in water
- Melee trident kills now count towards the trident kills stat
- Base trident melee damage reduced from **7** to **4**
- Base trident throw damage reduced from **6** to **5**
- Water synergy damage bonus now also applies to melee trident attacks

Aquarius

- Changed how the Water Beam spell heals the caster: Only the Water Beam pop heals the player.
- Water Beam and Water Bomb Spells no longer destroy jumper translocators.
- Removed the regeneration effect when casting the Water Beam.
- Added a new passive "Soothing Water". The caster slowly regenerates health when casting "Water Beam" and "Water Sphere" spells.
- The "Water Bomb" and "Soothing Water" healing effects now count towards the healing statistics.

Bomber

- Increased bomber knockback multiplier from **1.25** to **0.75**
- Bombs consider line-of-sight when damaging enemies.

Brute

- Berserk passive now stacks. Each time the health drops to or below **10.0**, **1** stack is obtained (max **2** stacks) and the speed level is determined by the number of berserk stacks
- Axe damage increased from **5.3** to **6**
- Axe swirl ability now considers line of sight when damaging enemies.

Buff Master

- Speed effect duration increased from **160** ticks to **320** ticks.
- The max cooldown for the buff ability is now **300** ticks.

Builder

- Increased bricks and ladders final blow and assist reward counts.

Crusher

- Anvil ability now considers line of sight when damaging enemies.
- Getting hit by an anvil stuns targets for **60** ticks.

Demolitionist

- Demolition Bombs explode all blocks in the radius instead of using Minecraft's TNT block logic.
- The Bombs now consider line-of-sight when damaging enemies.

Engineer

- Added sentry fire sound
- Updated repair sound
- Pickup block metal refund is now based on the percentage of current hp.
- Metal reward for a final blow and assist ("Metal Scrapper") are now **50** metal (was **75** and **25** respectively).
- Damage to engineer blocks (from abilities) now scales off the **base** damage they would do to an enemy.
- Dispenser refreshes cooldowns by **20%** per dispense.
- Sentry now shoots from the center of the block. This means it can shoot an enemy from any direction.

Fish

- Tropical Fish now heal only after hitting a target with it.
- Fishplosion and Fish Bow now summon tropical fish.
- OP fish keeps the Fish ability.
- Fish throw is now faster in OP fish mode.

Golem

- The Earth Wall is now made out of mud.
- Earth Shatter has been reworked. It now summons a shockwave in the direction the player is looking and spreads out as it travels.
- Increased Earth Shatter radius from **8** meters to **12** meters.
- Decreased Earth Shatter mana cost from **60** mana to **55** mana.
- Enemies affected by Earth Shatter receive the "Rooting" effect.
- Enemies with the "Rooting" effect can’t move and take increased fire damage.
- The "Rooting" effect lasts for **60** ticks.
- Earth Shatter no longer damages the caster.

Hitman:

- Bow now has infinity.
- Replaced the chainmail leggings with black leather leggings.
- Replaced the chainmail boots with black leather boots.
- Max bow damage is now set to **5**.
- Decreased weakness effect duration from **200** ticks to **150** ticks.
- Decreased glowing effect duration from **400** ticks to **300** ticks.
- Decreased darkness effect duration from **400** ticks to **300** ticks.
- Harming effect damage is now set to **4**.
- Harming effect ignores no damage ticks.

Illusionist

- Divination Star damage bonus multiplier now only triggers when the owner of the Divination Star is the source of the damage.
- If the player attacks an enemy to uncloak while invisible, the player also hacks them for **60** ticks.

Jumper

- Added the ability to recover the translocator manually with **left click**.
- The cooldown for recovering the translocator is **80** ticks.
- Reduced cooldown of translocator after picking it up off the ground from **300** ticks to **40** ticks.
- Life duration of translocator increased from **6000** ticks to **24000** ticks.

Kangaroo

- The Stomp ability considers line-of-sight when damaging enemies.
- Increased stomp cooldown from **180** ticks to **210** ticks.
- Decreased stomp impact radius from **5** meters to **3** meters.
- Decreased max stomp damage from **25** to **20**
- Properly implemented ramp-up damage for the stomp ability. It starts at **5** meters (5 damage) and ends at **50** meters (20 damage).

Knight

- Removed Pull ability
- New Fortify Ability: Increases shield strength, refreshes shield durability, and converts all damage types that normally break or ignore the shield to damage the shield instead.
- Royal Guard is now effective for all allies and only triggers when Fortify is active and the player is blocking.
- The "Damage Deflect" ability is only active during Fortify's duration.
- Removed the "Where do you think you're going?" achievement, because knight no longer has the Pull ability.

Mathematician

- Changed wooden sword to stone sword.
- Changed how math worksheets are distributed; The player now holds a max of **20** worksheets that regenerate **1** every **15** ticks. Worksheets can be dispensed by dispensers and rewarded for eliminations. Allies and enemies can hold a maximum of **15** worksheets. For every problem answered, one worksheet is removed from all affected players.
- Increased the duration that allies and enemies hold practice problems from **600** ticks to **12000** ticks.
- Decreased cooldown for generating math problems from **600** ticks to **100** ticks.
- A random buff is given to the player after earning an elimination.

Medic

- The Healing rate decreased from **5** ticks to **2** ticks.
- The Healing Stone capacity resource is renamed “Electrolytes” and is displayed on the player's action bar.
- Medic's potions are now visually different from normal healing potions.

Mercy

- The mercy staff no longer casts a fishing line, instead, it is particle-based.
- Players can target themselves by sneaking.
- The staff beam now disconnects if it is not in line-of-sight for too long.
- Removed left-click to attach the beam.

Miner

- Decreased Miner's Fervor ability cooldown from **400** ticks to **200** ticks

Musketeer

- Added a second firing mode to the rifle: "Burst Mode".
- Burst mode rapidly shoots **3** bullets that ignore no damage ticks.
- Burst mode bullets have a travel distance unlike "Sniper Mode" bullets.
- Added damage falloff: Starts at **75** meters for "Sniper Mode" and **5** meters for "Burst Mode".
- Bullets no longer apply the glowing effect when hitting enemies.
- "Sniper Mode" bullets now pierce up to **2** times

Necromancer

- Changed to a tank kit.
- Now has a shield.
- Changed iron sword to stone sword.
- Explosions no longer destroy “Essence of the Afterlife.”
- Max Essence of the afterlife reduced from **30** to **15**.
- Max number of skeletons reduced from **3** to **1**.
- Essence to spawn a skeleton reduced from **3** to **1**.
- The skeleton can now be upgraded by right-clicking them. There are **5** levels:
  - Level 1: 20 health, 10 armor points, stone sword, and extra speed.
  - Level 2: More defense points (15 total).
  - Level 3: 20 additional health (40 total).
  - Level 4: More defense (20 total).
  - Level 5: +75% knockback resistance.
- Cost to upgrade skeleton is **1** essence per level.
- Right-clicking the player's skeleton restores **10** health to the skeleton. This consumes **1** essence.
- The skeleton can now be picked up by right-clicking it while sneaking. This action remembers its current health and level.
- The spawn skeleton item and shield become enchanted to indicate that a skeleton is being held.
- Essence now drops for every entity death (previously only player-caused deaths).

Porcupine

- Increased quills spread from **0.1** to **0.2**.
- Reduced quill damage from **11** to **9**.
- Porcupine quills stun enemies for **30** ticks upon damaging them.

Potion Master

- Increased slowness level from **1** to **2**

Priest

- Release healing increased from **0.14** to **0.34** health per sun power stack.
- Moved the burning effect of the release spell from level **5** to level **2**.
- Moved the knockback effect of the release spell from level **5** to level **4**.
- The release spell knockback multiplier increased from **0.5** to **1**.
- Level **3** release spells unstun allies.
- The release spell now unhacks allies and friendly engineer blocks at level **5**.
- The regeneration potion effect after casting spells was replaced with the "Soothing Light" custom regeneration effect.

Prometheus

- The flame spell no longer travels through full blocks of water.
- Fireball no longer knocks back allies.
- Fireball can now damage and ignite the caster.
- Fireball now deals **4** damage on impact.
- Fireball now ignores invulnerability frames.
- Fireball explosion damage reduced from **12** to **10**

Pyrotechnic

- Added knockback to rockets.
- When the barrage ability is activated and the crossbow is already loaded, the crossbow loads the additional barrage rockets.
- Players can now use the rocket launcher to rocket jump.
- Added recoil to the rocket launcher.

Raven

- The flight spell is now canceled from:
  - being stunned
  - being hacked
  - Taking "Piercing", "Impact", "Impaling", "Electric", "Fire", "Ice" damage
- The wind gust spell now deals **1** damage to enemies.
- Removed the stunning requirement from the `Bird Squ-”watcher”` achievement.

Slime

- Slime armor no longer mitigates anvil damage.
- Slime armor mitigates piercing damage by **50%** (Arrows, Bullets, and Thorns).
- Slime armor no longer breaks if the fall damage is too high.
- Slime armor now breaks if the slime armor takes blast damage above a certain threshold.
- Reduced slime minion spawn cooldown from **90** ticks to **75** ticks.

Sniper

- Increased headshot hitbox.
- Decreased headshot damage from **x1.50** to **x1.25**.
- Powerbow damage increase is now **x1.25** of the base bow damage.

Snowman

- Added a third spell called "Imbue" which imbues the player's sword with ice.
- Increased snowstorm ticks from **2** to **3**.
- The snowball's "Frozen" effect is now canceled by fire damage.

Soldier

- Grenade radius increased from **2** to **3**
- Grenades now consider line-of-sight when damaging enemies.

Sonic

- Reduced engineer block stun duration from **200** to **40** ticks
- Sonic Boom now stuns nearby enemies for **40** ticks.
- Sonic Boom’s collision knockback and collision recoil add to the hit target’s velocity.

Spider

- There is now a cooldown if a cobweb trap item is destroyed for whatever reason.
- Deployed cobwebs no longer stack.
- The cobweb cooldown starts when the cobweb trap is triggered instead of when the duration ends.
- Cobweb traps items now last **1200** ticks before despawning.

Spy

- Any melee attack while the player is cloaked now is considered a "Sneak Attack" (Previously it was just if the player attacked with the sneak attack sword)
- If the player gets a sneak attack kill while invisible, the cloak ability cooldown is refreshed by **50%**.
- Spy's "Didn't see you there" achievement now only requires the player to kill an enemy-cloaked spy instead of requiring the damage type to be a sneak attack.

Vitalist

- Reduced crossbow magazine size from **7** to **4**.
- Reduced projectile size from **0.4** to **0.1**.
- Reduced projectile speed from **32** from **16**.
- Reduced total healing instances from **5** to **3**.
- Reduced healing rate from from **5** to **3**.
- Increased healing potency increased from **1** to **1.5**.
- Increased healing tick rate from **4** to **10**
- The crossbow projectile now has a max travel distance of **150** meters.
- Added spread to the crossbow projectile.

Wizard

- Lightning Spell now stuns damaged targets for **20** ticks.
- Lightning Spell now deals **x0.5** damage to the caster.
- Lightning Spell stun duration decreased from **200** ticks to **40** ticks.
- Zap Spell stun duration decreased from **200** ticks to **10** ticks.
- Zap Spell's chain lightning now chains to jumper translocators.

## Map Updates

Caverns

- Fixed respawn locations.

Forest

- Fixed mobs from spawning.

Lazarus

- Extended seaside cliff near the beacon.
- Added an explorable temple at the top in the middle of the map.

Lobby

- Added birch trees.
- Added a swamp hut.
- Added more secrets.

Oasis

- Added signs to help guide players to the beacon.
- Added ice to the tunnels underneath the beacon.

River

- Fixed beacons not appearing correctly upon loading the map.

Urban

- Fixed mobs from spawning.

## Technical Changes

- Reimplemented all kits
- Players can now be hacked. Hacked players are not able to use their abilities (active and passive) and any active abilities are terminated.
- Players can now be stunned. Stunned players are not able to use their abilities.
- Added an interface to refresh ability cooldowns.
- Normalized shields taking damage based on the incoming damage.
- Added line-of-sight checks for explosions and other area-of-effect abilities.
- Refactored healing and mana potions. (Auto-pot no triggers in the same game tick (faster))
- Absorption hearts count towards "Damage Dealt" statistics and "Damage Taken" statistics.
- Shield block delay decreased from **5** ticks to **0** ticks.
- Standardized all armor pieces to all have protection level **1**.
- Standardized all **physical** damage types to include armor in the damage calculation.
- Liquid blocks are restored to their original state after a player-placed block in their place breaks.
- Database architecture reimplemented.
  - Reduced number of tables from 114 to 11.
  - Database now stores game and map data.
  - Database is now easier to maintain.
  - Created a database migration framework that automatically migrates the previous database version to the newest one.
  - Implemented a V_183 to V_200 database migration script.

## Other Changes

- Minions can now use sponge launchers.
- Regeneration rate for potions while **in** combat reduced from **420** ticks to **200** ticks.
- Regeneration rate for potions while **out of** combat reduced from **140** ticks to **100** ticks.
- Tanks now have a **50%** knockback resistance when blocking.
- King of the Hill respawn times are now the same if both teams have 99% and it is overtime.
- Players can quick-build over vegetation.
- Gamerules can no longer be updated while a game is active.
- The FW+ rank color is now only yellow.
- Leaderboards now update after a game ends.
- Updated format of time-related statistics on the leaderboards.
- Added a “Total Achievements Unlocked” leaderboard on the same hologram as the ”Most Time Played” leaderboard.
- Added a “Damage Ratio” (Damage Dealt / Damage Taken) leaderboard on the same hologram as the “EDR” leaderboard.

## Bug Fixes

- Aquaman trident now returns to the item slot the user is on if it's empty.
- Bomber no longer blocks redstone events.
- Fixed an issue where the sentry would do more damage if an engineer died.
- Fixed issue where engineer teleporters are unable to be used if they are on soul sand or any other partially lowered blocks.
- Fixed issue where a player could get stuck in spectator mode if there is a 1v1 classic game in progress, a player dies, and overtime triggers.
- Fixed bug where the auto-balance timer would not properly reset for all players when a game ends or is canceled
- Fixed bug where damage achievements' progress would display when damaging self even though self-damage doesn't count towards the statistic/achievement.
- Fixed issue where the classic overtime sudden-death scoreboard would not update properly for dead players.
- Fixed The Engineer "Doc Holiday" achievement including enemies.
- Fixed issue where Earth Walls could regenerate from the "Demolish" ability and would linger permanently.
- Fixed bug where super vanish would break if the vanished player logged back in after being deop-ed while offline.
