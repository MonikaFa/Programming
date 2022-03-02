
/*
 *    ███████╗██╗  ██╗ ██████╗ ██████╗ 
 *    ██╔════╝██║  ██║██╔═══██╗██╔══██╗
 *    ███████╗███████║██║   ██║██████╔╝
 *    ╚════██║██╔══██║██║   ██║██╔═══╝ 
 *    ███████║██║  ██║╚██████╔╝██║     
 *    ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝                                         
 */

const {potPrice} = require('../plants.js');
const {fertilizerPrice, decreasePercentage} = require('../plants.js');

module.exports = {
    name: 'shop',
    description: "here you can view what's in store",
    execute(message, data, Discord)
    {
        const full = "■"
        const empty = "□"
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00e367')
        .setTitle('Shop')
        .setDescription('Your balance: **' + data.coins + '** <:BotaCoin:794621907617447956>')
        .addFields(
            {name: "Seeds", value: "**Common seed** - 30 <:BotaCoin:794621907617447956>" + 
            "\n**Uncommon seed** - 50 <:BotaCoin:794621907617447956>" +
            "\n**Rare seed** - 90 <:BotaCoin:794621907617447956>" + 
            "\n**Epic seed** - 200 <:BotaCoin:794621907617447956>" + 
            "\n**Legendary seed** - 500 <:BotaCoin:794621907617447956>" + 
            "\n**Mythical seed** - 1000 <:BotaCoin:794621907617447956>"},
            {name: "<:Pot:794644086568255500> Pots", value: `${data.pots}/10 | ${full.repeat(data.pots)}${empty.repeat(10 - data.pots)}\nAllows you to plant more seeds | ${potPrice[data.pots-1]} <:BotaCoin:794621907617447956>`},
            {name: "<:Fertilizer:794621986126168114> Fertilizer Upgrade", value: `${data.fertilizerUpgrade}/10 | ${full.repeat(data.fertilizerUpgrade)}${empty.repeat(10 - data.fertilizerUpgrade)}\n${Math.round((1 - decreasePercentage[data.fertilizerUpgrade+1])*100)}% faster growth | ${fertilizerPrice[data.fertilizerUpgrade]} <:BotaCoin:794621907617447956>`}
        )
        .setFooter("Type ・;buy [item name]・ to purchase something.")
        message.channel.send(newEmbed); 
    }
}