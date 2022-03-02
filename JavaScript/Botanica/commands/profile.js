
/*
 *    ██████╗ ██████╗  ██████╗ ███████╗██╗██╗     ███████╗
 *    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██║██║     ██╔════╝
 *    ██████╔╝██████╔╝██║   ██║█████╗  ██║██║     █████╗  
 *    ██╔═══╝ ██╔══██╗██║   ██║██╔══╝  ██║██║     ██╔══╝  
 *    ██║     ██║  ██║╚██████╔╝██║     ██║███████╗███████╗
 *    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚══════╝                                                        
 */
const Data = require("../schemas/data.js");

module.exports = {
    name: 'profile',
    description: "shows user info",
    execute(message, args, Discord)
    {
        if(!args[0]){
            var user = message.author
        } else {
            var user = message.mentions.users.first();
        }

        Data.findOne({userID: user.id}, (err, data) => {
            if (err) console.log(err);

            let xpNeeded = Math.round(0.04 * (data.level ** 3) + 0.8 * (data.level ** 2) + 2 * data.level)

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#00e367')
            .setTitle(user.username + "'s profile")
            .setThumbnail(user.displayAvatarURL())
            .setDescription(`**Level:** ${data.level} (${(data.xp / xpNeeded * 100).toFixed(2)} %)` +
            `\n**XP:** ${data.xp}/${xpNeeded}` +
            `\n**Rank:** ${data.rank}` + 
            `\n**Balance:** ${data.coins} <:BotaCoin:794621907617447956>`)
            .addField(`SEEDS:`, `**Common Seeds:** ${data.commonSeeds}` + 
            `\n**Uncommon Seeds:** ${data.uncommonSeeds}` +
            `\n**Rare Seeds:** ${data.rareSeeds}` + 
            `\n**Epic Seeds:** ${data.epicSeeds}` + 
            `\n**Legendary Seeds:** ${data.legendarySeeds}` + 
            `\n**Mythical Seeds:** ${data.mythicalSeeds}`)
            message.channel.send(newEmbed);
        })
    }
}


