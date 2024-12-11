# Gamerules

> Documentation for Fortress Wars gamerules.

---

## Overview

The gamerule system allows server administrators to configure predefined rules for desired gameplay. Using gamerules, administrators can control enabled kits enabled, disabled kits, the default kit, and kit data.

The Fortress Wars plugin initializes 3 YAML files located in the plugin's /gamerule/ directory: `default.yml`, `example.yml`, and `tournament.yml`. The default.yml file is used for the default gamerule. If this default gamerule is unable to be parsed, the plugin will fallback to the plugin's hardcoded version of it. If any other gamerule configuration files can't be parsed, then they will not be loaded. Parsing errors are logged in the console.

---

## Configuration

The properties used by gamerule configuration files.

### id

`Required`

- This property is used to identify the gamerule. All gamerules must have unique ids.

```yml
name: example
```

### name

`Required`

- This property is the name of the gamerule that is displayed to players in game.

```yml
name: Example
```

### description

`Required`

- This property is used to describe the gamerule.

```yml
description: This is an example description for an example gamerule.
```

### default_kit

`Required`

- The default kit of the gamerule. All players will be allowed to use this kit regardless if they have the kit unlocked or not.

```yml
default_kit: default
```

### enabled_kits

`Optional`

- The kits that are enabled by this gamerule. If this property is set, the disabled_kits property will not have any effect. The default kit is always included in this list even if not explicitly specified.

```yml
enabled_kits:
  - brute
  - buff_master
  - crusher
  - soldier
  - sonic
  - master
```

### disabled_kits

`Optional`

- The kits that are disabled by this gamerule.

```yml
disabled_kits:
  - brute
  - fish
  - knight
```

### kit_data_overrides

`Optional`

- The kit data overrides this gamerule. Each kit data definition includes a `property`, the `=` delimiter, and a `value`. This value can be a double or a boolean. Refer to the [Kits Documentation](/kits/) for kit data properties used by kits.

```yml
kit_data_overrides:
  brute:
    - BRUTE_AXE_SWIRL_DAMAGE=5
  sonic:
    - SONIC_BOOM_KNOCKBACK_MULTIPLIER=2.5
```

```yml
kit_data_overrides:
  crusher:
    - CRUSHER_ANVIL_TARGET_ENEMIES=false
```

- The map can contain a special "shared" property which is applied to all kits.

```yml
kit_data_overrides:
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
name: Example
description: This is an example description for an example gamerule.
default_kit: default
enabled_kits:
  - default
  - soldier
  - potion_master
disabled_kits:
  - brute
  - fish
  - knight
kit_data_overrides:
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

## Settings

The active gamerule is specified in the `settings.yml` file as follows:

```yml
settings:
  gamerule: default
```

When the Fortress Wars plugin loads, it will automatically set the active gamerule to this one. If this isn't present or there is no gamerule configured with this id, then the plugin will use the default gamerule.

Administrators can use the `/fw config save` command to save the active gamerule so it persists throughout server restarts.
