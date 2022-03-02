module.exports = {
    name: 'mutate',
    description: "modify a specific plant",
    execute(message, args, data, Discord)
    {
        if (!args.length)
        {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#00e367')
            .setDescription("▛▘" + 
                            '\n ‎  ‎  ‎  ‎  ‎ **Mutation**' +
                            "\n " +
                            "\n You can use genetical engineering to enhance your plants. Make a specific plant grow faster or make it more valuable." +
                            "\n " +
                            "\n Type `;mutate [plant name]`" +
                            "\n " +
                            `\n **Mutagen:** ${data.mutagen}🌀` +
                            "\n " +
                            "\n▙▖")
            message.channel.send(newEmbed)
        }
        
            if (args[0] === "daisy" || args[0] === "monstera" || args[0] === "lavender" || args[0] === "bamboo" || args[0] === "cactus" || args[0] === "aloe"  || args[0] === "sunflower" || args[0] === "lotus"  || args[0] === "lily" || args[0] === "venus" || args[0] === "rafflesia" || args[0] === "pitcher" || args[0] === "mandrake" || args[0] === "black lotus" || args[0] === "lumina" || args[0] === "yggdrasil") 
            {
                const mutateEmbed = new Discord.MessageEmbed()
                .setColor('#00e367')
                .setDescription("▛▘" + 
                                `\n ‎  ‎  ‎  ‎  ‎ **${args[0]} Mutations**` +
                                "\n " +
                                `\n **Mutagen:** ${data.mutagen}🌀` +
                                "\n " +
                                "\n▙▖")
                message.channel.send(mutateEmbed)
            }
    }
}