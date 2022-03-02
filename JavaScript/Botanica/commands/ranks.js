
/*
 *    ██████╗  █████╗ ███╗   ██╗██╗  ██╗███████╗
 *    ██╔══██╗██╔══██╗████╗  ██║██║ ██╔╝██╔════╝
 *    ██████╔╝███████║██╔██╗ ██║█████╔╝ ███████╗
 *    ██╔══██╗██╔══██║██║╚██╗██║██╔═██╗ ╚════██║
 *    ██║  ██║██║  ██║██║ ╚████║██║  ██╗███████║
 *    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝                                              
 */

let lock = ["🔒", "🔒", "🔒", "🔒", "🔒"];

module.exports = {
    name: 'ranks',
    description: "rank info",
    execute(message, data, Discord)
    {

        for (i = 1; i <= lock.length; i++)
        {
            if (Math.floor(data.level / 10) === i) 
            {
                lock[i - 1] = ""
                lock[i - 2] = ""
                lock[i - 3] = ""
                lock[i - 4] = ""
                lock[i - 5] = ""
                break;
            }
            if (data.level > 25) 
            {
                lock = ["", "", "", "", ""]
                break;
            }
        }

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00e367')
        .setDescription('▛▘' +
                      '\n ‎  ‎  ‎  ‎  ‎ **RANKS**‎‏‏‎' +
                      '\n ')
        .addFields(
            {name: ' ‎ Newbie', value: " ‎ +1 Pot <:Pot:794644086568255500> \n3 `Common seeds`"},
            {name: ` ‎ ${lock[0]} Plant enthusiast [Unlocked at level 10]`, value: '1.25x chance to find seeds of higher rarity \n`Uncommon seed`'},
            {name: ` ‎ ${lock[1]} Botanist [Unlocked at level 20]`, value: '1.5x chance to find seeds of higher rarity \n`Rare seed`'},
            {name: ` ‎ ${lock[2]} Pro Botanist [Unlocked at level 30]`, value: '2x chance to find seeds of higher rarity \n`Epic seed`'},
            {name: ` ‎ ${lock[3]} Expert Botanist [Unlocked at level 40]`, value: '3x chance to find seeds of higher rarity \n`Legendary seed`'},
            {name: ` ‎ ${lock[4]} Elite Botanist [Unlocked at level 50]`, value: '5x chance to find seeds of higher rarity \n`Mythical seed`' + 
                      '\n ' +
                      '\n▙▖'})

        message.channel.send(newEmbed);
    }
}