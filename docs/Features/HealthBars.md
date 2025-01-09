# Health Bars

_Introduced: v2.0.0_

---

### Overview

Health Bars show how much health a player has. They are shown below the player's name and are only shown to other allies. The health bar includes two numbers. The number on the left (`20.00` in the image below), shows the numerical value of health. The number of the right (`7` in the image below), shows how many healing potions the player has.

#### ![Health Bars - Overview](../assets/features/healthbars/Health%20Bars%20-%20Overview.png)

<br />

### Low Health

When a player's health is below **50%**, the health bar will turn red.

#### ![Health Bars - Low Health 1](../assets/features/healthbars/Health%20Bars%20-%20Low%20Health%201.png)

<br />

### Absorption

When a player's is affected with Absorption, a yellow overlay will display on the health bar. A yellow number will also appear between the health bar and health number. This value represents the numerical value of absorption.

#### ![Health Bars - Absorption 1](../assets/features/healthbars/Health%20Bars%20-%20Absorption%201.png)

#### ![Health Bars - Absorption 2](../assets/features/healthbars/Health%20Bars%20-%20Absorption%202.png)

<br />

### Status Effects

The health bar will change color depending on the status effect that the player currently has.

<!-- tabs:start -->

#### **Burning**

## Burning

If the player is on fire, the health bar will turn orange.

![Health Bars - Burning 1](../assets/features/healthbars/Health%20Bars%20-%20Burning%202.png)

#### **Freezing**

## Freezing

If the player is freezing, the health bar will turn light blue.

![Health Bars - Freezing 1](../assets/features/healthbars/Health%20Bars%20-%20Freezing%202.png)

#### **Poison**

## Poison

If the player has the poison effect, the health bar will turn dark green.

![Health Bars - Poison 1](../assets/features/healthbars/Health%20Bars%20-%20Poison%202.png)

#### **Wither**

## Wither

If the player has the wither effect, the health bar will turn black.

![Health Bars - Wither 1](../assets/features/healthbars/Health%20Bars%20-%20Wither%202.png)

<!-- tabs:end -->

<br />

<br />

### Configuration

Health bars are enabled by default. However, they can be disabled in the settings.yml plugin configuration file.

```yaml
settings:
  healthbars:
    enabled: true
```

### Changelog

- 2.0.0 - First Introduced
