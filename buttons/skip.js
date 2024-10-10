const { Translate } = require("../process_tools");

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Lista vacia`) });

    const success = queue.node.skip();

    return inter.editReply({ content: success ? await Translate(`Skipeando <${queue.currentTrack.title}>`) : await Translate(`Algo salio mal <${inter.member}> :( )`) });
}