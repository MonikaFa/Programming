module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, Discord){
        message.channel.send("https://cdn.discordapp.com/attachments/783039134641553438/806184399996715008/RULES.png")
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00e367')
        .setDescription("▛▘" + 
                        "\n " +
                        "\n To achieve healthy and growing community for Botanica, please consider following these rules:" +
                        "\n " +
                        "\n **I.** Follow [Discord Terms of Service](https://discord.com/terms) and [Discord Community Guidelines](https://discord.com/guidelines)" +
                        "\n **II.** Be respectful and tolerant towards others, avoid posting offensive messages or material." +
                        "\n **III.** Keep all discussions SFW. Any NSFW content is strictly forbidden." +
                        "\n **IV.** No spamming." +
                        "\n **V.** Abstain from advertising unrelated content - only with a moderator's approval." +
                        "\n **VI.** Keep discussion relevant to the channel's topic." +
                        "\n **VII.** Try to keep all the discussions in English languge or use non-english channel." +
                        "\n " +
                        "\n By breaking any of these rules, you will be warned or punished depending on the seriousness of the case." +
                        "\n " +
                        "\n▙▖")
        message.channel.send(newEmbed);
    }
}