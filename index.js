const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("*help pour plus d'informations");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send(
            {embed: {
                color: 0x00FFFF,
                title: "Help",
                fields: [{
                name: "Aide: <:moi:495880658103828480>",
                value: `-help: affiche cette page \n -youtube: affiche la chaîne youtube de NeoflasH`
                }
                ],
                timestamp: new Date(),
                footer: {
                text: "©NeoflasH"
            }
        }
    });
}})

bot.on('message', message => {
    if (message.content === prefix + "youtube"){
        message.channel.send(
            {embed: {
                color: 0x00FF00,
                title: "Youtube",
                fields: [{
                name: "Chaine De NeoflasH",
                value: ` https://www.youtube.com/channel/UCDBIzgcBjtlGjnj6jkbZsnA?`
                }
                ],
                timestamp: new Date(),
                footer: {
                text: "©NeoflasH"
            }
        }
    });
}})
