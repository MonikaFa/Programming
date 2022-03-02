module.exports = {
  name: 'help',
  description: "Introduces all the commands to you.",
  execute(message, args, Discord){

    if (!args[0])
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Useful Commands**" +
      '\n ' +
      '\n ‎ **‎‏‏‎;plant -** Plant your seeds.' +
      '\n ‎ ‎‏‏‎**;sell -** Sell your plants.' + 
      '\n ‎ **;profile -** View all your stats.‏‏‎' + 
      "\n ‎ **;shop -** Check what's in store." +
      '\n ‎ **;buy -** Purchase something from the shop.' +
      '\n ‎ **;ranks -** View all the ranks and their perks.' +
      '\n ‎ **;herbarium -** View your collected plants.' +
      '\n ' +
      '\n▙▖')
      .setFooter('Type ;help [command name] to get detailed description.')
      message.channel.send(newEmbed);  
    }

    else if (args[0] == "plant" || args[0] == ";plant")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Plant Command**" +
      "\n " +
      "\n ‎ This command allows you to plant your seeds" +
      "\n ‎ in a flower pot. You need to have at least one" +        //how to get seeds ? (:
      "\n ‎ empty pot. You can plant multiple seeds at" + 
      "\n ‎ once if you have more pots. Pots can be" + 
      "\n ‎ purchased from `;shop`." +
      "\n " +
      "\n ‎ Each plant grows for specific amount of time" + 
      "\n ‎ but the grow time as well as `xp` you get after" + 
      "\n ‎ the plant is fully grown increases with rarity." +
      "\n " +
      "\n ‎ By typing in a text channel, you'll be" + 
      "\n ‎ notified when your plant is fully grown." +
      "\n " +
      '\n ‎ ‎‏‏‎**Usage:** `;plant [seed type]`' + 
      "\n " +
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "sell" || args[0] == ";sell")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Sell Command**" +
      "\n " +
      "\n ‎ Once your plants are fully grown, this" +
      "\n ‎ command allows you to sell them for <:BotaCoin:794621907617447956>." +
      "\n ‎ The selling price increases with plant rarity." +
      "\n ‎ You can use <:BotaCoin:794621907617447956> to purchase various seeds or" +
      "\n ‎ upgrades from `;shop`." +
      "\n " +
      '\n ‎ ‎‏‏‎**Usage:** `;sell [pot number]` or ‎`;sell all`' + 
      '\n ‎ ‎‏‏‎**Alias:** `;s`' +
      "\n " +
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "profile" || args[0] == ";profile")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Profile Command**" +
      '\n ' +
      "\n ‎ This command allows you to view your or" + 
      "\n ‎ someone else's profile. There you can check" +
      "\n ‎ your xp, level, rank, <:BotaCoin:794621907617447956> and your seeds." +
      '\n ' +
      '\n ‎ ‎‏‏‎**Usage:** `;profile [@player]`' + 
      '\n ‎ ‎‏‏‎**Alias:** `;p`' +
      '\n ' +
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "shop" || args[0] == ";shop")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Shop Command**" +
      '\n ' +
      "\n ‎ This command allows you to visit store. There" +
      "\n ‎ you can spend your <:BotaCoin:794621907617447956> and purchase various" +
      "\n ‎ goods and upgrades with `;buy` command." + 
      "\n ‎  ‎» __Pots__ - purchase more flower pots to plant" +
      "\n ‎ multiple seeds at once" + 
      "\n ‎  ‎» __Fertilizer Upgrade__ - upgrade your fertilizer" +
      "\n ‎ to reduce grow time of your plants" +
      '\n ' +
      '\n ‎ ‎‏‏‎**Usage:** `;shop`' +
      '\n ' + 
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "buy" || args[0] == ";buy")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Buy Command**" +
      '\n ' +
      "\n ‎ If you've saved enough <:BotaCoin:794621907617447956> and you want to" +
      "\n ‎ spend them, you can purchase something" +
      "\n ‎ from the `;shop` with this command." +
      '\n ' +
      '\n ‎ ‎‏‏‎**Usage:** `;buy [item name]`' + 
      '\n ' +
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "ranks" || args[0] == ";ranks")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Ranks Command**" +
      '\n ' +
      "\n ‎ This command allows you to check all the" +
      "\n ‎ ranks and their perks. Every 10 levels, you'll" +
      "\n ‎ rank. Ranks increase your chance to get seeds" +
      "\n ‎ of higher rarity." +
      '\n ' +
      '\n ‎ ‎‏‏‎**Usage:** `;ranks`' + 
      '\n ‎ ‎‏‏‎**Alias:** `;r`' +
      '\n ' +
      '\n▙▖')
      message.channel.send(newEmbed);
    }

    else if (args[0] == "herbarium" || args[0] == ";herbarium")
    {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#00e367')
      .setDescription(
        '▛▘' +
      "\n ‎  ‎  ‎  ‎  ‎ **Herbarium Command**" +
      '\n ' +
      "\n ‎ This command allows you to check your" +
      "\n ‎ herbarium. Each time you grow a new plant," +
      "\n ‎ you'll take a sample of it to your herbarium." +
      "\n ‎ There you can view all your collected plants" +
      "\n ‎ and a little info about them." + 
      "\n " +
      "\n ‎ The dream of every botanist is to fill their" +
      "\n ‎ herbarium with samples of every plant." +
      '\n ' +
      '\n ‎ ‎‏‏‎**Usage:** `;herbarium`' + 
      '\n ' +
      '\n▙▖')
      message.channel.send(newEmbed);
    }
  }
}