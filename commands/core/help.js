const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'help',
    description:("Comandos:"),
    showHelp: false,

    async execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
            .setDescription(await Translate('El codigo sera subido a github, aun esta en desarrollo'))
            .addFields([{ name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') }])
            .setTimestamp()
            .setFooter({ text: await Translate(''), iconURL: inter.member.avatarURL({ dynamic: true }) });

        inter.editReply({ embeds: [embed] });
    }
};