
/*
 *    ██████╗  ██████╗ ████████╗ █████╗ ███╗   ██╗██╗ ██████╗ █████╗ 
 *    ██╔══██╗██╔═══██╗╚══██╔══╝██╔══██╗████╗  ██║██║██╔════╝██╔══██╗
 *    ██████╔╝██║   ██║   ██║   ███████║██╔██╗ ██║██║██║     ███████║
 *    ██╔══██╗██║   ██║   ██║   ██╔══██║██║╚██╗██║██║██║     ██╔══██║
 *    ██████╔╝╚██████╔╝   ██║   ██║  ██║██║ ╚████║██║╚██████╗██║  ██║
 *    ╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝
 *                                                                   
 */ 
const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require("mongoose");
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const guild = new Discord.Guild();
const Data = require("./schemas/data.js");
const Server = require("./schemas/server.js");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

let prefix = ";"

client.on('ready', () => {
    console.log('Bebe is awake!');
    client.user.setActivity('with plants ;3');
    mongoose.connect("mongodb+srv://Botanica_user:fDrqg8D4p4OV8lim@cluster0.z5ljv.mongodb.net/Botanica?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true,});
})


/*
 *     ██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗
 *    ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝
 *    ██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║███████╗
 *    ██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║╚════██║
 *    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████║
 *     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝                                                                                                                                                                                                                                                                                                                  
 */


client.on('message', message => {

    Data.findOne({userID: message.author.id}, (err, data) => {
        if (err) console.log(err);

        Server.findOne({serverID: message.guild.id}, (err, server) => {    
            if (err) console.log(err);

            if(!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            if(!data)
            {
                if(command == 'start'){
                    client.commands.get('start').execute(message, Discord);
                } else message.channel.send('Type `;start` to start your adventure! 🌱')

            } else {
                if(command == 'start')
                {
                    client.commands.get('start').execute(message, Discord);
                }

                if(command == 'ping')
                {
                    client.commands.get('ping').execute(message, Discord);
                }

                if (command == 'help' || command == 'h')
                {
                    client.commands.get('help').execute(message, args, Discord);
                }

                if (command == 'profile' || command == 'p')
                {
                    client.commands.get('profile').execute(message, args, Discord);
                }

                if (command == 'plant')
                {
                    client.commands.get('plant').execute(message, args, data, Discord);
                }

                if (command == 'sell' || command == 's')
                {
                    client.commands.get('sell').execute(message, args, data, Discord);
                }

                if (command == 'shop')
                {
                    client.commands.get('shop').execute(message, data, Discord);
                }

                if (command == 'buy' || command == 'b')
                {
                    client.commands.get('buy').execute(message, args, data, Discord);
                }

                if (command == 'ranks' || command == 'rank' || command == 'r')
                {
                    client.commands.get('ranks').execute(message, data, Discord);
                }

                if (command == 'herbarium' || command == 'h')
                {
                    client.commands.get('herbarium').execute(message, data, Discord);
                }

                if (command == 'pots')
                {
                    client.commands.get('pots').execute(message, data, client, Discord);
                }

                if (command == 'mutate')
                {
                    client.commands.get('mutate').execute(message, args, data, Discord);
                }

                if (command == 'take')
                {
                    client.commands.get('take').execute(message, data, Discord);
                }
            }
        })
    })
})

    /*
    *     ██████╗ ██████╗  ██████╗ ██╗    ██╗████████╗██╗  ██╗
    *    ██╔════╝ ██╔══██╗██╔═══██╗██║    ██║╚══██╔══╝██║  ██║
    *    ██║  ███╗██████╔╝██║   ██║██║ █╗ ██║   ██║   ███████║
    *    ██║   ██║██╔══██╗██║   ██║██║███╗██║   ██║   ██╔══██║
    *    ╚██████╔╝██║  ██║╚██████╔╝╚███╔███╔╝   ██║   ██║  ██║
    *     ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝    ╚═╝   ╚═╝  ╚═╝                                                        
    */


const {getRandomXP, getTier, decreasePercentage, daisy, monstera, lavender, bamboo, aloe, sunflower, cactus, lotus, lily, venus, rafflesia, pitcher, mandrake, blotus, lumina, yggdrasil} = require('./plants.js');

client.on('message', randomMessage =>
{
    Data.findOne({userID: randomMessage.author.id}, (err, data) => {
        if (err) console.log(err);

        Server.findOne({serverID: randomMessage.guild.id}, (err, server) => {
            if (err) console.log(err);
    
            if(!data || randomMessage.author.bot) return;

            for (i = 0; i < data.pots; i++)
            {
                let plant = eval(data.allPots[i].plantName)

                if (data.allPots[i].content != "" && data.allPots[i].sent === false && (plant.growTime * decreasePercentage[data.fertilizerUpgrade]) - (Date.now() - data.allPots[i].timePlanted) <= 0)
                {
                    let XP = getRandomXP(plant.xpMin, plant.xpMax)

                        randomMessage.channel.send(randomMessage.author.toString())
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setDescription("**Your `" + data.allPots[i].content + "` is fully grown!**" + 
                        "\nIt's " + getTier(XP, plant.xpMax) + " sample." +
                        "\nYou've gained `" + XP + " xp`." + 
                        "\nType `;sell " + (i + 1) + "` to sell it.")
                        .setThumbnail(plant.image)
                        .setFooter('Displaying pot ' + (i + 1) + ' of ' + data.pots)
                    if(server.redirectID === "") {
                        randomMessage.channel.send(newEmbed);
                    } else {client.channels.cache.get(server.redirectID).send(newEmbed)}
    
                    if (data.allPots[i].content == "yggdrasil")
                    {
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#00e367')
                        .setDescription("What a magnificent specimen! You are tempted to take a sample of it but feel like you shouldn't hurt this extraordinary sapling. It's on you to decide. \nType `;take` to take a sample of it anyway.")
                        randomMessage.channel.send(newEmbed)
                    }
                    
                    data.plantEmotes.splice(i, 1, plant.emote)
                    data.allPots[i].sent = true;        
                    data.xp += XP;

                    for (j = 0; j < 99; j++)
                    {
                        let xpNeeded = Math.round(0.04 * (data.level ** 3) + 0.8 * (data.level ** 2) + 2 * data.level)
                        
                        if (data.xp >= xpNeeded)
                        {
                            data.xp -= xpNeeded;
                            data.level += 1;
                            
                            const newEmbed = new Discord.MessageEmbed()
                            .setColor('#00e367')
                            .setTitle(data.username + ", you've reached level " + data.level + "!")

                            if(server.redirectID === "") {
                                randomMessage.channel.send(newEmbed);
                            } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

                        } else {break}
                    }

                    const ranks = ["Newbie", "Plant Enthusiast", "Botanist", "Pro Botanist", "Expert Botanist", "Elite Botanist"]

                    for (j = 0; j <= ranks.length; j++)
                    {
                        if (Math.floor(data.level / 10) === j)
                        {
                            data.rank = ranks[j];
                            break;
                        }
                    }
                    
                    if (data.collectedPlants.includes(data.allPots[i].plantName) == false)
                    {
                        data.collectedPlants.push(data.allPots[i].plantName)
                    }
                }
            }
            data.save().catch(err => console.log(err));

        /*
        *    ███████╗███████╗███████╗██████╗ ███████╗
        *    ██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝
        *    ███████╗█████╗  █████╗  ██║  ██║███████╗
        *    ╚════██║██╔══╝  ██╔══╝  ██║  ██║╚════██║
        *    ███████║███████╗███████╗██████╔╝███████║
        *    ╚══════╝╚══════╝╚══════╝╚═════╝ ╚══════╝                                           
        */

            const increasedRate = [1, 1.25, 1.5, 2, 3, 5]
            
            var spawnSeed = Math.random();
            if (spawnSeed < 0.0001 * increasedRate[Math.floor(data.level / 10)]) // 0,01 % | 1 in 10 000 messages
            {
                data.mythicalSeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found a `**Mythical seed**`!")

                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

            } else if (spawnSeed < 0.00135 * increasedRate[Math.floor(data.level / 10)]) // 0,125 %  |  1 in 800 messages
            {
                data.legendarySeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found a `Legendary seed`!")

                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

            } else if (spawnSeed < 0.00385 * increasedRate[Math.floor(data.level / 10)]) // 0,25 %  |  1 in 400 messages    
            {
                data.epicSeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found an `Epic seed`!")
                
                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

            } else if (spawnSeed < 0.00885 * increasedRate[Math.floor(data.level / 10)]) // 0,5 %  |  1 in 200 messages
            {
                data.rareSeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found a `Rare seed`!")
                
                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

            } else if (spawnSeed < 0.01885 * increasedRate[Math.floor(data.level / 10)]) // 1 %  |  1 in 100 messages
            {
                data.uncommonSeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found an `Uncommon seed`!")

                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}

            } else if (spawnSeed < 0.04885 * increasedRate[Math.floor(data.level / 10)]) // 3 %  |  1 in 33 messages    
            {
                data.commonSeeds += 1;
                randomMessage.channel.send(randomMessage.author.toString())
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("You've found a `Common seed`!")
                
                if(server.redirectID === "") {
                    randomMessage.channel.send(newEmbed);
                } else {client.channels.cache.get(server.redirectID).send(newEmbed)}
            }
        })
    })
})

client.login("NzgzMDIzMTY2NjI0NjI4NzQ3.X8UtJg.IQPdNNCbAYlhQ8eXrrmVoNtQ13A");

/*       _     _   
 *      (c).-.(c)  
 *       / ._. \   
 *     __\( Y )/__ 
 *    (_.-/'-'\-._)
 *       || ♥ ||   
 *     _.' `-' '._ 
 *    (.-./`-'\.-.)
 *     `-'     `-' 
 */