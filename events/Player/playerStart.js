const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");
const { Translate } = require("../../process_tools");

module.exports = (queue, track) => {
  if (!client.config.app.loopMessage && queue.repeatMode !== 0) return;

  let EmojiState = client.config.app.enableEmojis;

  const emojis = client.config.emojis;

  emojis ? EmojiState = EmojiState : EmojiState = false;


  (async () => {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: await Translate(
          `<${track.title}>`
        ),
        iconURL: track.thumbnail,
      })
      .setColor("#2f3136");

    const back = new ButtonBuilder()
      .setLabel(EmojiState ? emojis.back : ('Back'))
      .setCustomId('back')
      .setStyle('Primary');

    const skip = new ButtonBuilder()
      .setLabel(EmojiState ? emojis.skip : ('Skip'))
      .setCustomId('skip')
      .setStyle('Primary');

    const resumepause = new ButtonBuilder()
      .setLabel(EmojiState ? emojis.ResumePause : ('Pause'))
      .setCustomId('resume&pause')
      .setStyle('Danger');

    
    const row1 = new ActionRowBuilder().addComponents(
      back,
      resumepause,
      skip
    );
    queue.metadata.channel.send({ embeds: [embed], components: [row1] });
  })();
};
