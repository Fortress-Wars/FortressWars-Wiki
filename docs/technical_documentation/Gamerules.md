# Gamerules

> Documentation for Fortress Wars gamerules.

---

## Overview

The gamerule system allows server administrators to configure predefined rules for desired gameplay. Using gamerules, administrators can control enabled kits enabled, disabled kits, the default kit, and kit data.

The Fortress Wars plugin initializes 3 YAML files in the plugin's /gamerule/ directory: `default.yml`, `example.yml`, and `tournament.yml`. The default.yml file is used for the default gamerule. The plugin fallbacks to a hardcoded default if this default gamerule can’t be parsed, t. If any other gamerule configuration files can't be parsed, they are not loaded. Parsing errors are logged in the console.

---

## Configuration

The properties used by gamerule configuration files.

### id

`Required`

- This property is used to identify the gamerule. All gamerules must have unique IDs.

```yml
name: example
```

### enabled

`Required`

- This property is used to enable or disable the kit.

```yml
enabled: true
```

### name

`Required`

- This property is the name of the gamerule.

```yml
name: Example
```

### description

`Required`

- This property is used to describe the gamerule.

```yml
description: This is an example description for an example gamerule.
```

### defaultKit

`Required`

- The default kit of the gamerule. All players are allowed to use this kit.

```yml
defaultKit: default
```

### kitLimit

`Optional`

- The kit limit for each team of this gamerule. This property specifies how many players can use a specific kit at once. The kit limit is team-specific. This value must be at least 1.

```yml
kitLimit: 1
```

### playerLimit

`Optional`

- The player limit for each team of this gamerule. This property specifies how players can exist on one team.

```yml
playerLimit: 4
```

### roleLimit

`Optional`

- The role limit for each team of this gamerule. This property specifies how much of each role can be in-game per team. The available roles are: Damage, Tank, Support, and Utility. If a role is not specified, the role does not have a limit.

```yml
roleLimit:
  damage: 3
  tank: 1
  support: 1
  utility: 0
```

### allowPremiumKits

`Optional`

- The property that specifies if players can use premium kits that they do not have unlocked.

```yml
allowPremiumKits: true
```

### enabledKits

`Optional`

- The kits that are enabled by this gamerule. If this property is set, the disabledKits property doesn't have any effect. The default kit is always included in this list even if not explicitly specified.

```yml
enabledKits:
  - brute
  - buff_master
  - crusher
  - soldier
  - sonic
  - master
```

### disabledKits

`Optional`

- The kits that are disabled by this gamerule.

```yml
disabledKits:
  - brute
  - fish
  - knight
```

### kitDataOverrides

`Optional`

- The kit data overrides this gamerule. Each kit data definition includes a `property`, the `=` delimiter, and a `value`. This value can be a double or a boolean. Refer to the [Kits Documentation](/kits/) for kit data properties used by kits.

```yml
kitDataOverrides:
  brute:
    - BRUTE_AXE_SWIRL_DAMAGE=5
  sonic:
    - SONIC_BOOM_KNOCKBACK_MULTIPLIER=2.5
```

```yml
kitDataOverrides:
  crusher:
    - CRUSHER_ANVIL_TARGET_ENEMIES=false
```

- The map can contain a special "shared" property. Overrides defined in this property are applied to all kits. If the same property is overridden for a specific kit and in "shared", then the value for the kit is prioritized.

```yml
kitDataOverrides:
  shared:
    - MAX_HEALING_POTIONS=7
  buff_master:
    - BUFF_MASTER_BUFF_RADIUS=5
  master:
    - MASTER_MINIONS_MAX_CREEPERS=4
```

### Example

```yml
id: example
enabled: true
name: Example
description: This is an example description for an example gamerule.
defaultKit: default
kitLimit: 1
playerLimit: 4
roleLimit:
  damage: 3
  tank: 1
  support: 1
  utility: 0
allowPremiumKits: true
enabledKits:
  - default
  - soldier
  - potion_master
disabledKits:
  - brute
  - fish
  - knight
kitDataOverrides:
  shared:
    - MAX_HEALING_POTIONS=7
  buff_master:
    - BUFF_MASTER_BUFF_RADIUS=5
  master:
    - MASTER_MINIONS_MAX_CREEPERS=4
```

## Commands

### /game rule

View the active gamerule.

- Permissions:
  - fw.game.rule.get

### /game rule list

List the available gamerules.

- Permissions:
  - fw.game.rule.list

### /game rule set \<gamerule\>

Change the active gamerule.

- Arguments:
  - gamerule: _The gamerule to set._
- Permissions:
  - fw.game.rule.set
