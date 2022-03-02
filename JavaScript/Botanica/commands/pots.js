const {decreasePercentage, daisy, monstera, lavender, bamboo, aloe, sunflower, cactus, lotus, lily, venus, rafflesia, pitcher, mandrake, blotus, lumina, yggdrasil} = require('../plants.js')
const ms = require('pretty-ms')

module.exports = {
    name: 'pots',
    description: "you can see all your pots here",
    execute(message, data, client, Discord)
    {
        let i = 0;
        let plant = eval(data.allPots[0].plantName)
        let planted = data.allPots[0].content
        let thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png";
        let growth = plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[0].timePlanted);
        if (growth <= 0) {growth = "-"; thumbnail = plant.image}
        else {growth = ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[0].timePlanted), {unitCount: 2, secondsDecimalDigits: 0}); planted = "seedling 🌱"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652213313568799/planted.png"}
        if (!planted) {growth = "-"; planted = "-"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png"}

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00e367')
            .setThumbnail(thumbnail)
            .setDescription(
            '▛▘' +
            `\n ‎  ‎  ‎  ‎  ‎ **FLOWER POT 1**` +
            '\n ' +
            `\n**Content:** ${planted}` + 
            `\n**Grow time:** ${growth}` +
            '\n ' +
            '\n▙▖')
            message.channel.send(newEmbed).then(sentEmbed => {
                sentEmbed.react('⬅')
                sentEmbed.react('➡')
        
        client.on('messageReactionAdd', async (reaction, user) => { 
            if (reaction.message.partial) await reaction.message.fetch();     //PARTIALS!!!
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;

            if (reaction.emoji.name === '⬅' && user.id == message.author.id) {
                if (i > 0) i--;
                    else i = data.pots - 1;

                let plant = eval(data.allPots[i].plantName)
                let planted = data.allPots[i].content
                let thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png";
                let growth = plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[i].timePlanted);
                if (growth <= 0) {growth = "-"; thumbnail = plant.image}
                else {growth = ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[i].timePlanted), {unitCount: 2, secondsDecimalDigits: 0}); planted = "seedling 🌱"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652213313568799/planted.png"}
                if (!planted) {growth = "-"; planted = "-"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png"}

                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setThumbnail(thumbnail)
                .setDescription(
                '▛▘' +
                `\n ‎  ‎  ‎  ‎  ‎ **FLOWER POT ${i+1}**` +
                '\n ' +
                `\n**Content:** ${planted}` + 
                `\n**Grow time:** ${growth}` +
                '\n ' +
                '\n▙▖')

                sentEmbed.edit(newEmbed)}
            if (reaction.emoji.name === '➡' && user.id == message.author.id) {
                if (i < data.pots - 1) i++;
                    else i = 0;

                let plant = eval(data.allPots[i].plantName)
                let planted = data.allPots[i].content
                let thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png"
                let growth = plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[i].timePlanted);
                if (growth <= 0) {growth = "-"; thumbnail = plant.image}
                else {growth = ms(plant.growTime * decreasePercentage[data.fertilizerUpgrade] - (Date.now() - data.allPots[i].timePlanted), {unitCount: 2, secondsDecimalDigits: 0}); planted = "seedling 🌱"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652213313568799/planted.png"}
                if (growth == "-") {growth = "-"; planted = "-"; thumbnail = "https://cdn.discordapp.com/attachments/798253106222989352/825652210142543892/pot.png"}

                const newEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setThumbnail(thumbnail)
                .setDescription(
                '▛▘' +
                `\n ‎  ‎  ‎  ‎  ‎ **FLOWER POT ${i+1}**` +
                '\n ' +
                `\n**Content:** ${planted}` + 
                `\n**Grow time:** ${growth}` +
                '\n ' +
                '\n▙▖')
                
                sentEmbed.edit(newEmbed)}
            });
        }).catch();
    }
}