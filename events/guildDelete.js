const Discord = require("discord.js");

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (guild) {

        let inviter = null;

        // Wait 2 seconds to be sure that a request have been sent to the dashboard
        await this.client.wait(2000);
        let knownGuild = this.client.knownGuilds.find((g) => g.id === guild.id);
        if(knownGuild){
            inviter = await this.client.users.fetch(knownGuild.user);
        } else {
            inviter = await this.client.users.fetch(guild.ownerID);
        }

        const guildDelete = JSON.stringify(new Discord.MessageEmbed()
        .setTitle(`${emoji.leave} Left a Guild | ${guild.name}`)
    .setDescription(`${emoji.members} **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("<:emoji_44:885169331976163328>**__Server Owner__**", `> ${guild.owner}`)
    .addField("<:emoji_44:885169331976163328>**__Member Total__**", `> ${guild.memberCount}`)
    .addField("<:emoji_44:885169331976163328>**__Member Human__**", `> ${guild.members.cache.reduce((acc, member) => acc + !member.user.bot, 0)}`)
    .addField("<:emoji_44:885169331976163328>**__Server Bot Is In__**", `> ${client.guilds.cache.size}`)
    .setColor("3A871F")
    .setTimestamp()
        let { removeLogs } = this.client.config;
        this.client.shard.broadcastEval(`
            let rLogs = this.channels.cache.get('${removeLogs}');
            if(rLogs) rLogs.send({ embed: JSON.parse('${guildDelete}')});
        `);
        
    }
};




      

      
