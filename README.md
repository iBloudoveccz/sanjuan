# Music-bot

Codigo en desarrollo para un bot de musica

### Configuration

¡¡¡Importante!!! Para que funcione, debes poner tu token respectivo en `.env`

Abra el archivo de configuración ubicado en la carpeta principal `config.js`.

```js
const process = require('process');
module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'xxx',
        playing: '/play',
        global: false,
        guild: process.env.GUILD_ID || 'xxx',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
```

Configuración básica

- `app/token`, el token del bot disponible en la sección [Discord Developers](https://discordapp.com/developers/applications)
- `app/playing`, la actividad del bot
- `app/global`, si los comandos funcionarán en todos los servidores o solo en uno (si son globales, pueden tardar hasta una hora en aparecer)
- `app/guild`, el gremio en el que se cargará el comando de barra (esto solo se aplica si global está configurado como falso)
- `app/extraMessages` will increase the amount of bot spam, while you get more infomation (not recommended) 

- `app/lang` will change the bot client language [__**See below for supported language codes**__]

- `app/Translate_Timeout` will set the time limit the bot has to create the translation succesfully. If the time is out, only the original english version will be printed. Set to `none` if you want to disable it (No Timeout). 

- `app/enableEmojis` will change the player buttons with emojis if set to true. `false` will replace them by basic english words

- `opt/loopMessage`, if the message that a music is played should be sent when it is looped

DJ mode configuration

- `opt/DJ/enabled`, whether the DJ mode should be activated or not 
- `opt/DJ/roleName`, the name of the DJ role to be used
- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration (only change if you know what you are doing)

- `opt/maxVol`, the maximum volume that users can define
- `opt/spotifyBridge`, takes spotify songs/playlists and searches it on youtube and plays it (highly recommended)
- `opt/volume`, is the defaul volume the queue will start at
- `opt/leaveOnEmpty`, if the bot will leave when the queue is empty
- `opt/leaveOnEmptyCooldown`, the cooldown before the bot leaves when the queue is empty
- `opt/leaveOnEnd`,  if the bot will leave on finishing the queue
- `opt/leaveOnEndCooldown`, the cooldown before the bot leaves on finishing the queue
- `opt/discordPlayer`, options used by discord-player

### 📑 Installation
To use the project correctly you will need some tools.

WARNING: You MUST use Node.js version `v18.20.2`, otherwise, you will encounter major compatibility issues.

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (`v18.20.2`) for environment

[yarn](https://yarnpkg.com/getting-started/usage) for package management

Without forgetting of course the code editor, we recommend [visual studio code](https://code.visualstudio.com/) 

Now in your terminal run the following commands assuming you are in the same directory as the project.

`yarn install` (or `npm install` **not recommended** as it might not work)

`node .` (or `node main.js`)
