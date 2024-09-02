_Release Date: TBD_

# v2.0.0
- Health Bars
- Discord Killfeed
- Kit Changes
- Technical Changes
- Other Changes
- Bug Fixes

### Health Bars
Health bars appear above ally player models. They show the player's Kit, Name, Health Bar, Numeric Health Value, and number of potions. Absorption and other status effects will also be reflected in the health bar. Enemies only see the player's name and nothing else!

### Discord Killfeed
A new channel has been created that will show all in game eliminations.

### Kit Changes

Aquaman
- Added new death message for trident melee kills in water
- Melee trident kills now count towards the trident kills stat
- Base trident melee damage reduced from **7** to **4**
- Base trident throw damage reduced from **6** to **5**
- Water synergy damage bonus now also applies to melee trident attacks

Bomber
- Increased bomber knockback multiplier from **1.25** to **0.75**
- Bombs now consider line of sight when damaging enemies.

Brute
- Berserk passive now stacks. Each time the health drops to or below **10.0**, **1** stack will be gained (max **2** stacks) the speed level is determined by the number of berserk stacks
- Axe damage increased from **5.3** to **6**
- Axe swirl ability now considers line of sight when damaging enemies.

Buff Master
- Speed effect duration increased from **160** ticks to **320** ticks.
- Max cooldown for buff ability is now **300** ticks.

Builder
- Increased bricks and ladders final blow and assist reward counts.

Crusher
- Anvil ability now considers line of sight when damaging enemies.
- Getting hit by an anvil will stun targets for **60** ticks.

Demolitionist
- Demolition Bombs explode all blocks in the radius instead of using Minecraft's TNT block logic.
- Bombs now consider line of sight when damaging enemies.

Engineer
- Added sentry fire sound
- Updated repair sound
- Pickup block metal refund is now based on the percentage of current hp.
- Metal reward for a final blow and assist ("Metal Scrapper") are now **50** metal (was **75** and **25** respectively).
- Damage to engineer blocks (from abilities) now scale off of the **base** damage they would do to an enemy.
- Dispenser refreshes cooldowns by **20%** per dispense.
- Sentry now shoots from the center of the block. This means it can shoot an enemy from any direction.
- Dispenser no longer dispenses mana potions for Kit Priest and Kit Aquarius.

Fish
- Tropical Fish now heals only after hitting a target with it.
- Fishplosion and Fish Bow now summon tropical fish.
- OP fish now keeps the fish ability.
- Fish throw is now faster in OP fish mode.

Hitman:
- Bow now has infinity, but the max tags a hitman can have at once is still 6.
- Replaced chainmail leggings with black leather leggings.
- Replaced chainmail boots with black leather boots.
- Bow damage is now set to **5**.
- Decreased weakness effect duration from **200** ticks to **150** ticks.
- Decreased glowing effect duration from **400** ticks to **300** ticks.
- Decreased darkness effect duration from **400** ticks to **300** ticks.
- Harming effect damage is now set to **4**.
- Harming effect ignores no damage ticks.

Illusionist
- Divination Star damage bonus multiplier now only triggers when the owner of the Divination Star is the source of the damage.
- If the player attacks an enemy to uncloak from fake death, they will also hack them for **60** ticks.

Jumper
- Added ability to destroy the translocator manually with **left click**.
- Cooldown for scenario above is **80** ticks.
- Reduced cooldown of translocator after picking it up off the ground from **300** ticks to **40** ticks.
- Life duration of translocator increased from **6000** ticks to **24000** ticks.

Kangaroo
- Stomp ability now considers line of sight when damaging enemies.
- Increased stomp cooldown from **180** ticks to **210** ticks.
- Decreased stomp impact radius from **5** meters to **3** meters.
- Decreased max stomp damage from **25** to **20**
- Properly implemented ramp up damage fro the stomp ability. It start at **5** meters (5 damage) and end at **50** meters (20 damage).

Knight
- Removed Pull ability
- New Fortify Ability: Increases shield strength, refreshes shield durability, and converts all damage types that would normally break or ignore the shield to damage the shield.
- Royal guard is now effective for all allies and only triggers when fortify is active and when the player is blocking.
- "Damage Deflect" ability is now only active during Fortify's duration.

Mathematician:
- Changed wooden sword to stone sword.
- Changed how math worksheets are distributed; The player now holds a max of **20** worksheets that regenerate **1** every **15** ticks. Worksheets can be dispensed by dispensers and rewarded for eliminations. Allies and enemies can hold a maximum of **15** worksheets. For every problem answered by the mathematician, one worksheet will be removed from all affected players.
- Increased the duration that allies and enemies hold practice problems from **600** ticks to **12000** ticks.
- Decreased cooldown for generating math problems from **600** ticks to **100** ticks.
- A random buff will now also be given after getting an elimination.

Medic
- Healing rate decreased from **5** ticks to **2** ticks.
- Healing Stone Capacity resource renamed to Electrolytes and is now displayed on the player's action bar.
- Medic's potions are now visually different from normal healing potions.

Mercy
- Mercy staff no longer casts a fishing line, instead it is now particle based.
- Players can target themselves by sneaking.
- Staff beam will now disconnect if out of line of sight for too long.
- Removed left-click to attach the beam.

Miner
- Decreased Miner's Fervor ability cooldown from **400** ticks to **200** ticks

Musketeer
- Added a a second "Burst Mode" firing mode for the rifle.
- Burst mode shoots **3** shots quickly that will ignore no damage ticks.
- Burst mode bullets have a travel distance unlike "Sniper Mode" bullets.
- Added damage falloff: Starts at **75** meters for "Sniper Mode" and **5** meters for "Burst Mode".
- Bullets will no longer apply glowing when hitting an enemy.
- "Sniper Mode" bullets now pierce up to **2** times

Necromancer
- Changed to a tank kit.
- Now has a shield.
- Changed iron sword to stone sword.
- Essence of the Afterlife can no longer be destroyed by explosions.
- Max Essence of the afterlife reduced from **30** to **15**.
- Max number of skeletons reduced from **3** to **1**.
- Essnece to spawn a skeleton reduced from **3** to **1**.
- Skeleton can now be upgraded by right-clicking them. There are **5** levels: Level 1: 20 health, 10 armor points, stone sword, and extra speed. Level 2: More defense points (15 total). Level 3: 20 addition health (40 total). Level 4: More defense (20 total). Level 5: +75% knockback resistance.
- Cost to upgrade skeleton is **1** essence per level.
- Right clicking the player's skeleton will restore **10** health. This will consume **1** essence.
- Skeleton can not be picked up by right clicking it while sneaking. This will remember its current health and level.
- The spawn skeleton item and shield will become enchanted to indicate that a skeleton is being held.
- Essence now drops for every entity death (was previously only player deaths caused by another player). 

Porcupine
- Increased quills spread from **0.1** to **0.2**.
- Reduced quill damage from **11** to **9**.
- Porcupine quills will stun enemies for **30** ticks upon damaging them.

Potion Master
- Increased slowness level from **1** to **2**

Pyrotechnic
- Added knockback to the rockets.
- When the barrage ability is activated and the crossbow is already loaded, the crossbow will instantly load the additional barrage rockets.

Slime
- Slime armor no longer mitigates anvil damage.
- Slime armor no mitigates piercing damage by **50%** (Arrows, Bullets, and Thorns).
- Slime armor will no longer break if the fall damage is too high
- Slime armor will now also break if the slime armor takes blast damage above a certain threshold.
- Reduced slime minion spawn cooldown from **90** ticks to **75** ticks.

Soldier
- Grenade radius increased from **2** to **3** 
- Grenades now consider line of sight when damaging enemies.

## Technical Changes
- Reimplemented all kits
- Players can now be hacked. Hacked players will not be able to use their abilities (active and passive) and any active abilities will be terminated.
- Players can now be stunned. Stunned players will not be able to use their abilities.
- Added an interface to refresh ability cooldowns.
- Normalized shields taking damage based on the incoming damage.
- Added Line of sight checks for explosions and other AOE abilities.
- Refactor healing and mana potions. (Auto-pot no triggers in the same game tick (faster))
- Absorption hearts now count towards "Damage Dealt" stats and "Damage Taken" stats.
- Shield block delay decreased from **5** ticks to **0** ticks.
- Standardized all armor pieces to all have protection level **1**.
- Standardized all **physical** damage types to include armor into the damage calculation.

## Other Changes
- Tanks now have a **50%** knockback resistance blocking.
- King of the Hill respawn times will now be even if both teams have 99% and it is overtime.

## Bug Fixes
- Aquaman trident now returns to the item slot the user is on if it's empty.
- Bomber no longer blocks redstone events.
- Fixed issue where if an engineer died, the sentry would do more damage.
- Fixed engineer teleporter not able to be used if on soul sand and other partially lowered blocks moved.
- Fixed issue where a player could get stuck in spectator mode if there is a 1v1 classic game going on, a player dies and overtime triggers.
- Fixed bug where the auto-balance timer would not properly reset for all players when a game ends or is canceled