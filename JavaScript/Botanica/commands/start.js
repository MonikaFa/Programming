
/*
 *    ███████╗████████╗ █████╗ ██████╗ ████████╗
 *    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝
 *    ███████╗   ██║   ███████║██████╔╝   ██║   
 *    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   
 *    ███████║   ██║   ██║  ██║██║  ██║   ██║   
 *    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝                                                 
 */
const Data = require("../schemas/data.js");
const Server = require("../schemas/server.js");
const {emptyEmote} = require('../plants.js');

module.exports = {
    name: 'start',
    description: "this is the start of your journey!",
    execute(message, Discord)
    {
        Server.findOne({serverID: message.guild.id}, (err, server) => {   
            if (err) console.log(err); 
            if (!server) {
                const newServer = new Server({
                    serverName: message.guild.name,
                    serverID: message.guild.id,
                    prefix: ";",
                    redirectName: "",
                    redirectID: ""
                })
                newServer.save().catch(err => console.log(err));
            }
        })

        Data.findOne({userID: message.author.id}, (err, data) => {
            if (err) console.log(err);
            if (!data) {
                const newData = new Data({
                    username: message.author.username,
                    userID: message.author.id,
                   
                    level: 1,
                    rank: "Newbie",
                    xp: 0,
                    coins: 0,
                    fertilizerUpgrade: 0,
                    commonSeeds: 3,
                    uncommonSeeds: 0,
                    rareSeeds: 0,
                    epicSeeds: 0,
                    legendarySeeds: 0,
                    mythicalSeeds: 0,
                    pots: 1,
                    collectedPlants: [],
                    plantEmotes: [emptyEmote],
                    allPots: [{plantName: "", content: "", timePlanted: 0, sent: false}]
                })
                newData.save().catch(err => console.log(err));
                
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("▛▘" + 
                                `\n ‎  ‎  ‎  ‎  ‎ **Welcome to Botanica, ${message.author.username}!**` +
                                "\n " +
                                "\nYou are an upcoming botanist. Here in Botanica, you can collect various plants ranging from common ones to the most exotic species. Thanks to the special fertile kind of soil here, you can collect plants from all over the world." +
                                "\n " +
                                "\nPlant seeds, grow plants and take samples into your herbarium. Gather seeds by typing in a text channel. Buy upgrades, level up, progress through ranks and complete your herbarium." +
                                "\n " +
                                "\nYou'll get 3 `common seeds` and a flower pot to start." +
                                "\n " +
                                "\n▙▖")
                .setImage('https://cdn.discordapp.com/attachments/798253106222989352/801183765837250570/Banner.png')
                .setFooter('Enjoy your stay!')
                message.channel.send(newEmbed);

            } else message.channel.send(`You already have a profile, ${message.author.username}!`)
        })
    }
}