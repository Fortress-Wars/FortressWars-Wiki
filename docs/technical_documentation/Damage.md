# Damage System

### Overview

## Damage Categories & Types

### Elemental

_Damage from elements._

- `Air`
  - _Air related damage._
- `Earth`
  - _Earth related damage._
- `Electric`
  - _Electric related damage._
- `Fire`
  - _Fire related damage._
- `Ice`
  - _Ice related damage._
- `Water`
  - _Water related damage._

### Magic

_Damage from magic._

- `Arcane`
  - _Mana related damage._
- `Blood`
  - _Blood related damage._
- `Necrotic`
  - _Decay and withering related damage._
- `Poison`
  - _Poison related damage._
- `Psychic`
  - _Mind related dmage._

### Physical

_Damage from physical sources._

- `Blast`
  - _Something explodes._
- `Cramming`
  - _Something is forced into a tight space._
- `Impact`
  - _Something big collides into something._
- `Impaling`
  - _Something sharp goes into something and stays there._
- `Piercing`
  - _Something sharp goes into something and goes out the other side._
- `Redistribution`
  - _Damage that is redirected from one thing to another._
- `Slashing`
  - _Something sharp slashes something; does't go in._
- `Stabbing`
  - _Something sharp goes in and comes out._

### System

_Damage caused by the system and not by entities or game objects._

- `Other`
  - _Damage that doesn't fall into a damage other type category._
- `Static`
  - _Damage that can't be adjusted with damage modifiers_

## Shield Damage Types

- `Break`
  - Blocking: _Break the shield and no damage to the target._
  - Not Blocking: _Damage to the target._
- `Damage`
  - Blocking: _Damage to the shield and no damage to the target._
  - Not Blocking: _Damage to the target_.
- `Ignore`
  - Blocking: _No damage to the shield and damage to the target_.
  - Not Blocking: _Damage to the target_.
- `Immune`
  - Blocking: _No damage to the shield or the target_.
  - Not Blocking: _No damage to the target_.
- `Respect`
  - Blocking: _No damage to the shield or the target_.
  - Not Blocking: _Damage to the target_.
- `Only Break`
  - Blocking: _Break the shield and no damage to the target_.
  - Not Blocking: _No damage to the target_.
- `Only Damage`
  - Blocking: _Damage to the shield and no damage to the target_.
  - Not Blocking: _No damage to the target_.
- `Pierce`
  - Blocking: _Damage to the shield and damage to the target_.
  - Not Blocking: _Damage to the target_.

## Damage Causes

- `Air Gust`
  - Shield Damage Type: _Respect_
  - Damage Types: _Arcane_, _Air_
- `Aquaman Trident`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impaling_
- `Aquaman Trident Far`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impaling_
- `Aquaman Trident Melee`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impaling_ _Slashing_
- `Aquaman Trident Water Melee`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impaling_ _Slashing_
- `Axe Swirl`
  - Shield Damage Type: _Break_
  - Damage Types: _Slashing_
- `Blood Bond Break`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Blood_
- `Blood Transfusion`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Blood_, _Redistribution_, _Static_
- `Bomber Bomb`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_
- `Builder Melee`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Combat Log`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Static_
- `Creeper Minion`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_
- `Crusher Anvil Direct`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Crusher Anvil Indirect`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Death Plane`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Static_
- `Demolitionist Bomb`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_
- `Demolitionist Bomb Instant`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_
- `Earth Shatter`
  - Shield Damage Type: _Break_
  - Damage Types: _Arcane_, _Earth_, _Impact_
- `Environmental`
  - Shield Damage Type: _Ignore_
  - Damage Types: (None)
- `Explosion`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_
- `Fish`
  - Shield Damage Type: _Respect_
  - Damage Types: _Impact_
- `Future Sight`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Psychic_
- `Grappling Hook`
  - Shield Damage Type: _Pierce_
  - Damage Types: _Piercing_
- `Gunner Shot`
  - Shield Damage Type: _Pierce_
  - Damage Types: _Piercing_
- `Hacked Sentry Projectile`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Hitman Dart`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Hitman Harm Dart`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_
- `Homing Hemoglobin`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Blood_
- `Icicle`
  - Shield Damage Type: _Damage_
  - Damage Types: _Ice_, _Piercing_
- `Icicle Minion`
  - Shield Damage Type: _Damage_
  - Damage Types: _Ice_, _Piercing_
- `Kangaroo Stomp`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Katana Parry`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Redistribution_, _Slashing_
- `Knight Damage Deflect`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Impact_, _Redistribution_
- `Lightning`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_, _Electric_, _Impact_
- `Math Worksheet`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Psychic_
- `Math Worksheet Self`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Psychic_
- `Melee`
  - Shield Damage Type: _Damage_
  - Damage Types: _Slashing_
- `Mercy Damaging`
  - Shield Damage Type: _Damage_
  - Damage Types: _Arcane_
- `Minion`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Musketeer Burst Shot`
  - Shield Damage Type: _Pierce_
  - Damage Types: _Piercing_
- `Musketeer Sniper Shot`
  - Shield Damage Type: _Pierce_
  - Damage Types: _Piercing_
- `No Mana Flight`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_
- `Non-Combat Log`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Static_
- `Normal Shot`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `OP Fish Suffocate`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Air_
- `Porcupine Quill`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Potion Master Potion`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_
- `Projectile`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Prometheus Fireball`
  - Shield Damage Type: _Break_
  - Damage Types: _Arcane_, _Blast_, _Fire_, _Impact_
- `Prometheus Fireball Impact`
  - Shield Damage Type: _Damage_
  - Damage Types: _Arcane_, _Fire_, _Impact_
- `Prometheus Imbue`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_, _Fire_
- `Pufferfish`
  - Shield Damage Type: _Respect_
  - Damage Types: _Impact_, _Piercing_
- `Pyrotechnic Rocket`
  - Shield Damage Type: _Damage_
  - Damage Types: _Blast_, _Impact_
- `Royal Guard`
  - Shield Damage Type: _Damage_
  - Damage Types: _Redistribution_
- `Self`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Static_
- `Sentry Projectile`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Shield Bash`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Slime Minion`
  - Shield Damage Type: _Damage_
  - Damage Types: _Impact_
- `Sneak Attack`
  - Shield Damage Type: _Damage_
  - Damage Types: _Stabbing_
- `Sniper Headshot`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Sniper Kneeshot`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Snowball`
  - Shield Damage Type: _Damage_
  - Damage Types: _Arcane_, _Ice_
- `Soldier Grenade`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_, _Impact_
- `Sonic Boom`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_, _Impact_
- `Super Creeper Minion`
  - Shield Damage Type: _Break_
  - Damage Types: _Blast_, _Electric_
- `Thorns`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Impact_, _Piercing_, _Redistribution_
- `Vitalist Shot`
  - Shield Damage Type: _Damage_
  - Damage Types: _Piercing_
- `Wither Skeleton Minion`
  - Shield Damage Type: _Damage_
  - Damage Types: _Necrotic_, _Slashing_
- `Zap`
  - Shield Damage Type: _Ignore_
  - Damage Types: _Arcane_, _Electric_
