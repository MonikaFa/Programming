/*
        __
     .-/  \-.
    (  \__/  )
   /`-./;;\.-`\
   \ _.\;;/._ /
    (  /  \  )
     '-\__/-'.-,
    ,    \\ (-. )
    |\_   ||/.-`
    \'.\_ |;`
     '--,\||     ,
         `;|   _/|
          // _/.'/
         //_/,--'
        ||'-`

*/

// Import všetkých rastliniek (:
const {decreasePercentage, plantedEmote, daisy, monstera, lavender, bamboo, aloe, sunflower, cactus, lotus, lily, venus, rafflesia, pitcher, mandrake, blotus, lumina, yggdrasil} = require('../plants.js')
const ms = require('pretty-ms')

module.exports = {
    name: 'plant',
    description: "Plants seeds",
    execute(message, args, data, Discord)
    {
        for (j = 0; j < data.pots; j++)
        {
            if (!args.length)
            {
                message.channel.send("`You have to specify seed type (common, uncommon, rare, ...)`")
                break;
            }
            else if (args[0] == 'common')
            {
                if (data.commonSeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.commonSeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (determinePlant < 0.33)
                        {
                            data.allPots[j].content = "lavender";
                            data.allPots[j].plantName = "lavender"
                        }
                        else if (determinePlant < 0.66)
                        {
                            data.allPots[j].content = "monstera";
                            data.allPots[j].plantName = "monstera"
                        }
                        else if (determinePlant < 1)
                        {
                            data.allPots[j].content = "daisy flower";
                            data.allPots[j].plantName = "daisy"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") 
                    {
                        message.channel.send("`You don't have any empty pots.`")
                        break;
                    }
                } else {
                    message.channel.send("You don't have any `common seeds`!")
                    break;
                }
            }
            else if (args[0] == 'uncommon')
            {
                if (data.uncommonSeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.uncommonSeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (determinePlant < 0.33)
                        {
                            data.allPots[j].content = "bamboo";
                            data.allPots[j].plantName = "bamboo"
                        }
                        else if (determinePlant < 0.66)
                        {
                            data.allPots[j].content = "aloe vera";
                            data.allPots[j].plantName = "aloe"   
                        }
                        else if (determinePlant < 1)
                        {
                            data.allPots[j].content = "sunflower";
                            data.allPots[j].plantName = "sunflower"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") {
                        message.channel.send("You don't have any empty pots.")
                        break;
                    }
                } else {
                    message.channel.send("You don't have any `uncommon seeds`!")
                    break;
                }
            }
            else if (args[0] == 'rare')
            {
                if (data.rareSeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.rareSeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (determinePlant < 0.33)
                        {
                            data.allPots[j].content = "lily of the valley";
                            data.allPots[j].plantName = "lily"
                        }
                        else if (determinePlant < 0.66)
                        {
                            data.allPots[j].content = "cactus";
                            data.allPots[j].plantName = "cactus"
                        }
                        else if (determinePlant < 1)
                        {
                            data.allPots[j].content = "lotus";
                            data.allPots[j].plantName = "lotus"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") {
                        message.channel.send("You don't have any empty pots.")
                        break;
                    }
                } else {
                    message.channel.send("You don't have any `rare seeds`!")
                    break;
                }
            }
            else if (args[0] == 'epic')
            {
                if (data.epicSeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.epicSeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (determinePlant < 0.33)
                        {
                            data.allPots[j].content = "venus fly trap";
                            data.allPots[j].plantName = "venus"
                        }
                        else if (determinePlant < 0.66)
                        {
                            data.allPots[j].content = "rafflesia";
                            data.allPots[j].plantName = "rafflesia"
                        }
                        else if (determinePlant < 1)
                        {
                            data.allPots[j].content = "pitcher";
                            data.allPots[j].plantName = "pitcher"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") {
                        message.channel.send("You don't have any empty pots.")
                        break;
                    }
                } else {
                    message.channel.send("You don't have any `epic seeds`!")
                    break;
                }
            }
            else if (args[0] == 'legendary')
            {
                if (data.legendarySeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.legendarySeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (determinePlant < 0.5)
                        {
                            data.allPots[j].content = "mandrake";
                            data.allPots[j].plantName = "mandrake"
                        }
                        else if (determinePlant < 1)
                        {
                            data.allPots[j].content = "black lotus";
                            data.allPots[j].plantName = "blotus"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") {
                        message.channel.send("You don't have any empty pots.")
                        break;
                    }
                } else if ((j+1) == data.pots && data.allPots[j].content != "") 
                {
                    message.channel.send("You don't have any `epic seeds`!")
                }
            }
            else if (args[0] == 'mythical')
            {
                if (data.mythicalSeeds >= 1)
                {
                    if (data.allPots[j].content === "")
                    {
                        data.mythicalSeeds -= 1;

                        data.allPots[j].timePlanted = Date.now();
                        data.plantEmotes.splice(j, 1, plantedEmote)

                        var determinePlant = Math.random();
                        if (data.collectedPlants.length >= 7)
                        {
                            if (determinePlant < 0.5)
                            {
                                data.allPots[j].content = "lumina";
                                data.allPots[j].plantName = "lumina"
                            }
                            if (determinePlant < 1)
                            {
                                data.allPots[j].content = "yggdrasil";
                                data.allPots[j].plantName = "yggdrasil"
                            }
                        } else {
                            data.allPots[j].content = "lumina"; 
                            data.allPots[j].plantName = "lumina"
                        }

                        let plant = eval(data.allPots[j].plantName)

                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setTitle("Your seed has been planted! 🌱")
                        .setDescription('Your plant will be fully grown in `' + ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade], {unitCount: 2, secondsDecimalDigits: 0}) + "`.")
                        .setFooter(`Planted in pot ${j+1} of ${data.pots}`)
                        message.channel.send(newEmbed);
                        
                        break;
                    } else if ((j+1) == data.pots && data.allPots[j].content != "") 
                    {
                        message.channel.send("You don't have any empty pots.")
                        break;
                    }
                } else {
                    message.channel.send("You don't have any `mythical seeds`!")
                    break;
                }
            }
        }
        data.save().catch(err => console.log(err));
    }
}