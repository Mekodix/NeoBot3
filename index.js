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
        message.channel.sendMessage("**__Aide:__** \n \n -__help:__ afficher ce message \n -__youtube:__ afficher la chaîne youtube de NeoflasH");
    }
});
bot.on('message', message => {
    if (message.content === prefix + "youtube"){
        message.channel.send(
            {embed: {
    color: 0x00FF00,
    title "Youtube",
    fields: [{
        name: "Chaine De NeoflasH",
        value: ` https://www.youtube.com/channel/UCDBIzgcBjtlGjnj6jkbZsnA?`
    }
    ],
    timestamp: new Date(),
      footer: {
        text: "©NeoflasH"
      }
}});
