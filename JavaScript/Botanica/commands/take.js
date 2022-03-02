const {emptyEmote} = require('../plants.js');

module.exports = {
    name: 'take',
    execute(message, data, Discord)    // unstable, energy, beam of ligma cicka gently(preferably no teeth involved), lost consciousness, enlightenment, 
    {
        for (i = 0; i < data.pots; i++)
        {
            if (data.allPots[i].content == "yggdrasil")
            {
                const storyEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("*You made a decision against your better judgement. The Yggdrasil seemed highly unstable and full of energy. It emitted a blinding beam of light and you lost consciousness. When you woke up, you didn't remember anything. However, it seems like you've been enlightened. You've seen all the matter at the molecular level and learned how to genetically modify your plants.* \n \nYou've unlocked `;mutate`.")
                message.channel.send(storyEmbed)

                data.level = 1,
                data.rank = "Newbie",
                data.resets = 1,
                data.xp = 0,
                data.coins = 0,
                data.fertilizerUpgrade = 0,
                data.commonSeeds = 3,
                data.uncommonSeeds = 0,
                data.rareSeeds = 0,
                data.epicSeeds = 0,
                data.legendarySeeds = 0,
                data.mythicalSeeds = 0,
                data.mutagen = 1,
                data.pots = 1,
                data.collectedPlants = [],
                data.plantEmotes = [emptyEmote],
                data.allPots = [{plantName: "", content: "", timePlanted: 0, sent: false}]

                data.mutagen++;
            } else {
                const noEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription('This command is unlocked when you make a certain decision.')
                message.channel.send(noEmbed)
                break;
            }
        } data.save().catch(err => console.log(err));
    }
}