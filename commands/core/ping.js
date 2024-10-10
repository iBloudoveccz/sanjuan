const ms = require('ms');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'ping',
    description:("Latencia actual!"),

    async execute({ client, inter }) {
        await inter.editReply("Ping?");
        inter.editReply(await Translate(`Pong! Latencia <${Math.round(client.ws.ping)}ms >, Ultimo ping <${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}>`));
    }
};