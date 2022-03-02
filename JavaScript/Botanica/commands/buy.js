const {fertilizerPrice, potPrice, emptyEmote} = require('../plants.js');

module.exports = {
    name: 'buy',
    description: "buy things from shop",
    execute(message, args, data, Discord)
    {  
        if (!args.length)
        {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#00e367')
            .setDescription(
              '▛▘' +
            '\n ‎  ‎  ‎  ‎  ‎ **Usage**' +
            '\n ' +
            "\n ‎ You must specify what you want to buy." +
            '\n ‎ **‎‏‏‎Command:** `;buy [item name]`' + 
            '\n ‎ ‎‏‏‎**Example:** `;buy common` or `;buy pot`' +
            '\n ' +
            '\n▙▖')
            message.channel.send(newEmbed);
        } //SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS
        else if ( args[0] == 'common')
        {
            if (!args[1])
            {
                if (data.coins >= 30)
                {
                    data.coins -= 30;
                    data.commonSeeds += 1;
                    message.channel.send("1 `Common seed` was successfully bought for 30 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 30) 
                {
                    data.coins -= parseInt(args[1]) * 30;
                    data.commonSeeds += parseInt(args[1]);
                    message.channel.send(parseInt(args[1]) + " `Common seed` successfully bought for " + parseInt(args[1]) * 30 + " <:BotaCoin:794621907617447956>");
                }
                else message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")
            }
        }
        else if ( args[0] == 'uncommon')
        {
            if (!args[1])
            {
                if (data.coins >= 50) 
                {
                    data.coins -= 50;
                    data.uncommonSeeds += 1;
                    message.channel.send("1 `Uncommon seed` was successfully bought for 50 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 50) 
                {
                    data.coins -= parseInt(args[1]) * 50;
                    data.uncommonSeeds += parseInt(args[1]);
                    message.channel.send(parseInt(args[1]) + " `Uncommon seed` successfully bought for " + parseInt(args[1]) * 50 + " <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
        }
        else if ( args[0] == 'rare')
        {
            if (!args[1])
            {
                if (data.coins >= 90) 
                {
                    data.coins -= 90;
                    data.rareSeeds += 1;
                    message.channel.send("1 `Rare seed` was successfully bought for 90 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 90) 
                {
                    data.coins -= parseInt(args[1]) * 90;
                    data.rareSeeds += parseInt(args[1]);
                    message.channel.send(parseInt(args[1]) + " `Rare seed` successfully bought for " + parseInt(args[1]) * 90 + " <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
        }
        else if ( args[0] == 'epic')
        {
            if (!args[1])
            {
                if (data.coins >= 200) 
                {
                    data.coins -= 200;
                    data.epicSeeds += 1;
                    message.channel.send("1 `Epic seed` was successfully bought for 200 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 200) 
                {
                    data.coins -= parseInt(args[1]) * 200;
                    data.epicSeeds += parseInt(args[1]);
                    message.channel.send(parseInt(args[1]) + " `Epic seed` successfully bought for " + parseInt(args[1]) * 200 + " <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
        }
        else if ( args[0] == 'legendary')
        {
            if (!args[1])
            {
                if (data.coins >= 500) 
                {
                    data.coins -= 500;
                    data.legendarySeeds += 1;
                    message.channel.send("1 `Legendary seed` was successfully bought for 500 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 500) 
                {
                    data.coins -= parseInt(args[1]) * 500;
                    data.legendarySeeds += parseInt(args[1]);
                    message.channel.send(args[1] + " `Legendary seed` successfully bought for " + args[1] * 500 + " <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
        }
        else if ( args[0] == 'mythical')
        {
            if (!args[1])
            {
                if (data.coins >= 1000) 
                {
                    data.coins -= 1000;
                    data.mythicalSeeds += 1;
                    message.channel.send("1 `Mythical seed` was successfully bought for 1000 <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }

            if (parseInt(args[1]) >= 1)
            {
                if (data.coins >= parseInt(args[1]) * 1000) 
                {
                    data.coins -= parseInt(args[1]) * 1000;
                    data.mythicalSeeds += parseInt(args[1]);
                    message.channel.send(parseInt(args[1]) + " `Mythical seed` successfully bought for " + parseInt(args[1]) * 1000 + " <:BotaCoin:794621907617447956>");
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
        } //POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POTS POSTS POTS POTS POTS POTS POTS POTS POTS
        else if (args[0] == "pot" || args[0] == "pots")
        {
            if (data.pots < 10)
            {
                if (data.coins >= potPrice[data.pots-1])
                {
                    data.coins -= potPrice[data.pots-1];
                    data.pots += 1;
                    data.allPots.push({plantName: "", content: "", timePlanted: 0, sent: false})
                    data.plantEmotes.push(emptyEmote);
                    message.channel.send("One pot added.")
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
            else {message.channel.send("There's not enough room for more pots in your greenhouse.")}
        }
        // FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER FERTILIZER
        else if (args[0] == "fertilizer" || args[0] == "fertilizer upgrade")
        {
            if (data.fertilizerUpgrade < 10)
            {   
                if (data.coins >= fertilizerPrice[data.fertilizerUpgrade])
                {
                    data.coins -= fertilizerPrice[data.fertilizerUpgrade];
                    data.fertilizerUpgrade += 1;
                    message.channel.send("Fertilizer successfully upgraded.")
                }
                else {message.channel.send("You don't have enough <:BotaCoin:794621907617447956>")}
            }
            else {message.channel.send("Your fertilizer is already fully upgraded.")}
        }
        data.save().catch(err => console.log(err));
    }
}