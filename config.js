module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || '',
        playing: '/play',
        global: false,
        guild: process.env.GUILD_ID || '',
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
        leaveOnEmptyCooldown: 3600000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 3600000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
