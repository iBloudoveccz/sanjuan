const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../../process_tools');

module.exports = (queue) => {

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate('Lista vacia')})
        .setColor('#2f3136');

        queue.metadata.channel.send({ embeds: [embed] });
    })()
}
