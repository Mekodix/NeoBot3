const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = ("*");

bot.on('ready', function() {
    bot.user.setGame("*help pour plus d'informations");
    console.log("Connecté");
});

bot.login("process.env.TOKEN");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send(
            {embed: {
                color: 0x00FFFF,
                title: "Help",
                fields: [{
                name: "Aide: <:moi:510922618770030605>",
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

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length)
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Helper");
        if(!message.member.roles.has(modRole.id)) return message.reply("**Tu n'as pas les permissions suffisantes !**").catch(console.error);
        if (!message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) return message.reply("Désolé, je n'ai pas la permission d'effectuer cette commande. J'ai besoin de KICK_MEMBERS. :x:").catch(console.error);
        if(message.mentions.users.size < 1) return message.reply("**Merci de mentionner l'utilisateur à expulser !**").catch(console.error);
        let user = message.guild.member(message.mentions.users.first());
        if (user.highestRole.position >= message.member.highestRole.position) return message.reply("Je ne peux pas exclure cette personne. Elle a un rôle supérieur ou égal au votre. :x:");
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) return message.reply("**Cet utilisateur est introuvable ou il m'est impossible de l'expulser.**");
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("**Je n'ai pas la permission de KICK_MEMBERS.").catch(console.error);
        kickMember.kick().then(member => {
            message.reply(`**${member.user.username} a bien été expulsé du serveur !**`).catch(console.error);
        let modlog = message.guild.channels.find("name", "『💾』logs");
            if (!modlog) return;
            return bot.channels.get(modlog.id).send(`**${member.user.username} a été expulsé du serveur par ${message.author.username}**`);
        }).catch(console.error)
    
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "Modérateur");
        if(!message.member.roles.has(modRole.id)) {
           return message.reply("**Tu n'as pas les permissions suffisantes !**").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("**Merci de mentionner l'utilisateur à bannir !**");
        member.ban().then(member => {
            message.reply(`**${member.user.username} a bien été banni du serveur !**`).catch(console.error);
            message.guild.channels.find("name", "『💾』logs").send(`**${member.user.username} a été banni du serveur par ${message.author.username}**`)
        }).catch(console.error)
}})
