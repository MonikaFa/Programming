/*
        ▓▓▓▓▓▓▓▓▓▓      
      ▓▓          ▓▓    
    ▓▓    ░░▓▓░░░░░░▓▓  
  ▓▓    ░░▓▓▓▓▓▓░░░░░░▓▓
  ▓▓  ░░░░▓▓░░░░░░░░░░▓▓
  ▓▓  ░░░░░░▓▓░░░░░░░░▓▓
  ▓▓  ░░░░░░░░▓▓░░░░░░▓▓
  ▓▓  ░░░░▓▓▓▓▓▓░░░░░░▓▓
    ▓▓  ░░░░▓▓░░░░░░▓▓  
      ▓▓░░░░░░░░░░▓▓    
        ▓▓▓▓▓▓▓▓▓▓
*/
const {emptyEmote, daisy, monstera, lavender, bamboo, aloe, sunflower, cactus, lotus, lily, venus, rafflesia, pitcher, mandrake, blotus, lumina, yggdrasil} = require('../plants.js')

module.exports = {
    name: 'sell',
    description: "this way you can sell your plants",
    execute(message, args, data, Discord)
    {
        if (!args.length)
        {
            message.channel.send("You have to specify a pot number (e.g.: `;sell 1`) or you can `;sell all`")
        }
        else if (args[0] == 'all')
        {
            for (i = 0; i < data.pots; i++)
            {
                let plant = eval(data.allPots[i].plantName)

                if(data.allPots[i].content != "" && data.allPots[i].sent === true && plant.growTime - (Date.now() - data.allPots[i].timePlanted) <= 0)
                {
                    data.coins += plant.price;
    
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#00e367')
                    .setDescription(`${message.author.username}, you sold your ` + "`" + data.allPots[i].content + "`" + ` and gained ${plant.price} <:BotaCoin:794621907617447956>. \nYou now have ${data.coins} <:BotaCoin:794621907617447956>.`)
                    message.channel.send(newEmbed);
                    
                    data.plantEmotes.splice(i, 1, emptyEmote)
                    data.allPots[i].content = "";
                    data.allPots[i].sent = false;
                } else {message.channel.send("You don't have anything to sell."); break}
            }
        }

        for (j = 0; j < 10; j++) 
        {
            if (args[0] == (j+1))
            {
                let plant = eval(data.allPots[j].plantName)

                if(data.allPots[j].content != "" && data.allPots[j].sent === true && plant.growTime - (Date.now() - data.allPots[j].timePlanted) <= 0)
                {
                    data.coins += plant.price;
    
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#00e367')
                    .setDescription(`${message.author.username}, you sold your ` + "`" + data.allPots[j].content + "`" + ` and gained ${plant.price} <:BotaCoin:794621907617447956>. \nYou now have ${data.coins} <:BotaCoin:794621907617447956>.`)
                    message.channel.send(newEmbed);

                    data.plantEmotes.splice(j, 1, emptyEmote)
                    data.allPots[j].content = "";
                    data.allPots[j].sent = false;
                    break;
                } else {message.channel.send("You don't have anything to sell.")}
            }
        }
        data.save().catch(err => console.log(err));
    }
}