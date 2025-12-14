# Simple Voice Chat

_Introduced: v2.2.0_

---

### Overview

Adds Simple Voice Chat support to Fortress Wars, making it easy for teammates to talk to each other in real time.

<br />

### Automatic Team Voice Channels

When a player joins a team, a corresponding team-based voice channel is automatically created if it doesn’t already exist, and the player is seamlessly added to that team’s voice chat. This ensures instant communication with teammates without any manual setup.

<br />

### Secure Communication

Each team chat is password protected, ensuring that players from one team cannot join the other’s channel. This maintains game fairness and prevents information leaks between opposing teams.

### Automatic Joining Preferences

Players can set preferences for automatically joining voice chat or team chat when joining a team.
This ensures seamless communication without the need to enter commands every time they switch or join a team.

<br />

### Group Lifecycle

Team groups are automatically destroyed when the game ends or when players return to the lobby.
This keeps the server clean and prevents leftover voice channels from previous matches.

<br />

### Gameplay

#### ![Voice Chat - Join](../assets/features/voicechat/Voice%20Chat%20-%20Join.png)

#### ![Voice Chat - Preference Enabled](../assets/features/voicechat/Voice%20Chat%20-%20Preference%20Enabled.png)

#### ![Voice Chat - Preference Disabled](../assets/features/voicechat/Voice%20Chat%20-%20Preference%20Disabled.png)

<br />

### Commands

`/vc` - Toggle voice chat.

`/vc join` - Join voice chat.

`/vc leave` - Leave voice chat.

`/vc help` - View help information for the voice chat command.

### Admin Commands

`/vc join <team>` - Join a specific team's voice chat.

Required Permissions:

- `fw.teamchat.admin`

### Links

- [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)
