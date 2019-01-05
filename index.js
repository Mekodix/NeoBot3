const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("*");

client.on('ready', function() {
    client.user.setGame("*help pour plus d'informations");
    console.log("Connecté");
});

client.login(process.env.TOKEN);

client.on('message', message => {

    if (message.content === prefix + "help") {
        var help_embed = new Discord.RichEmbed()
        .setColor("#33FFCC")
        .setTitle("Aide <:moi:510922618770030605>")
        .setDescription("Voici toutes mes commandes disponibles :")
        .addField("Help", "Affiche les commandes du bot")
        .addField("Infos", "Affiche les informations sur le bot et le serveur")
        .setFooter("Menu d'aide")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")
    }

    if(message.content === prefix + "infos") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#33FFCC")
        .setTitle("Voici les informations sur moi et le serveur :")
        .addField("Nom :", `${client.user.tag}`, true)
        .addField("Tag du bot :", `#${client.user.discriminator}`)
        .addField("ID :", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Informations")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'infos")

    }

    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas les permissions siffisantes !");
        
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur !")
        }

        var kick = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas les permissions suffisantes !")
        }

        kick.kick().then(member => {
            message.channel.send(`**${member.user.username} a bien été kick du serveur par ${message.author.username} !**`);
        });

    }

});
