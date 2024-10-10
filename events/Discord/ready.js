const { Translate } = require('../../process_tools');

module.exports = async (client) => {
    console.log(await Translate(`Iniciando con <${client.user.username}>.`));
    console.log(await Translate("Iniciado"));
    
    client.user.setActivity(client.config.app.playing);
}