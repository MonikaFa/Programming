module.exports = {
    name: 'herbarium',
    description: "collected plants",
    execute(message, data, Discord)
    {
        // COMMON PLANTS   COMMON PLANTS   COMMON PLANTS   COMMON PLANTS   COMMON PLANTS   COMMON PLANTS   COMMON PLANTS   
        let lavender = "\n ‎ ???? ‎ "
        let daisy = "\n ‎ ???? ‎ "
        let monstera = "\n ‎ ???? ‎ "

        if (data.collectedPlants.includes("lavender") === true)
        {
            lavender = "\n ‎ `Lavender`"
        }

        if (data.collectedPlants.includes("daisy") === true)
        {
            daisy = "\n ‎ `Daisy Flower`"
        }

        if (data.collectedPlants.includes("monstera") === true)
        {
            monstera = "\n ‎ `Monstera`"
        }

        // UNCOMMON PLANTS   UNCOMMON PLANTS   UNCOMMON PLANTS   UNCOMMON PLANTS   UNCOMMON PLANTS   UNCOMMON PLANTS   
        let bamboo = "\n ‎ ???? ‎ "
        let sunflower = "\n ‎ ???? ‎ "
        let aloe = "\n ‎ ???? ‎ "

        if (data.collectedPlants.includes("bamboo") === true)
        {
            bamboo = "\n ‎ `Bamboo`"
        }

        if (data.collectedPlants.includes("sunflower") === true)
        {
            sunflower = "\n ‎ `Sunflower`"
        }

        if (data.collectedPlants.includes("aloe") === true)
        {
            aloe = "\n ‎ `Aloe Vera`"
        }

        // RARE PLANTS   RARE PLANTS   RARE PLANTS   RARE PLANTS   RARE PLANTS   RARE PLANTS   RARE PLANTS   RARE PLANTS   
        let lotus = "\n ‎ ???? ‎ "
        let cactus = "\n ‎ ???? ‎ "
        let lily = "\n ‎ ???? ‎ "

        if (data.collectedPlants.includes("lotus") === true)
        {
            lotus = "\n ‎ `Lotus`"
        }

        if (data.collectedPlants.includes("cactus") === true)
        {
            cactus = "\n ‎ `Cactus`"
        }

        if (data.collectedPlants.includes("lily") === true)
        {
            lily = "\n ‎ `Lily of the Valley`"
        }

        // EPIC PLANTS   EPIC PLANTS   EPIC PLANTS   EPIC PLANTS   EPIC PLANTS   EPIC PLANTS   EPIC PLANTS   EPIC PLANTS 
        let venus = "\n ‎ ???? ‎ "
        let pitcher = "\n ‎ ???? ‎ "
        let rafflesia = "\n ‎ ???? ‎ "

        if (data.collectedPlants.includes("venus") === true)
        {
            venus = "\n ‎ `Venus Fly Trap`"
        }

        if (data.collectedPlants.includes("pitcher") === true)
        {
            pitcher = "\n ‎ `Pitcher`"
        }
        
        if (data.collectedPlants.includes("rafflesia") === true)
        {
            rafflesia = "\n ‎ `Rafflesia`"
        }

        // LEGENDARY PLANTS   LEGENDARY PLANTS   LEGENDARY PLANTS   LEGENDARY PLANTS   LEGENDARY PLANTS   LEGENDARY PLANTS 
        let mandrake = "\n ‎ ???? ‎ " 
        let blotus = "\n ‎ ???? ‎ " 

        if (data.collectedPlants.includes("mandrake") === true)
        {
            mandrake = "\n ‎ `Mandrake`"
        }

        if (data.collectedPlants.includes("blotus") === true)
        {
            blotus = "\n ‎ `Black Lotus`"
        }

        // MYTHICAL PLANTS   MYTHICAL PLANTS   MYTHICAL PLANTS   MYTHICAL PLANTS   MYTHICAL PLANTS   MYTHICAL PLANTS
        let lumina = "\n ‎ ???? ‎ "
        let yggdrasil = "\n ‎ ???? ‎ "

        if (data.collectedPlants.includes("lumina") === true)
        {
            lumina = "\n ‎ `Lumina`"
        }
        
        else if (data.collectedPlants.includes("yggdrasil") === true)
        {
            yggdrasil = "\n ‎ `Yggdrasil`"
        }

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00e367')
            .setDescription(
              '▛▘' +
            `\n ‎  ‎  ‎  ‎  ‎ **‏‏‎‏‏‎${message.author.username.toUpperCase()}'s HERBARIUM**  📖` +
            '\n' +
            "\n ‎ **Common Plants** ‎ " +
                lavender +
                daisy +
                monstera +
            "\n ‎ **Uncommon Plants** ‎ " +
                bamboo +
                sunflower +
                aloe +
            "\n ‎ **Rare Plants** ‎ " +
                lotus +
                lily +
                cactus +
            "\n ‎ **Epic Plants** ‎ " +
                venus +
                pitcher +
                rafflesia +
            "\n ‎ **Legendary Plants** ‎ " + 
                mandrake +
                blotus +
            "\n ‎ **Mythical Plants** ‎ " +
                lumina +
                yggdrasil +
            '\n' +
            '\n▙▖')
              message.channel.send(newEmbed);
    }
}