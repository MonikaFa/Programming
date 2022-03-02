class Plant {
    constructor(name, growTime, xpMin, xpMax, price, image, emote){
        this.name = name;
        this.growTime = growTime;
        this.xpMin = xpMin;
        this.xpMax = xpMax;
        this.price = price;
        this.image = image;
        this.emote = emote;
    }
}

const potPrice = [50, 100, 1000, 3000, 6000, 10000, 15000, 25000, 50000]
const fertilizerPrice = [50, 100, 1000, 3000, 6000, 10000, 15000, 25000, 50000, 100000]
const decreasePercentage = [1, 0.99, 0.98, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.6, 0.5]
const emptyEmote = "<:empty:799302299515093022>"
const plantedEmote = "<:planted:799302791276658688>"

function getRandomXP(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTier(xp, xpMax)
{
    let quality = (xp / xpMax);
    if (quality <= 0.2)
    {
        return "a **«mediocre»**";
    }
    else if (quality <= 0.4)
    {
        return "a **«good»**"
    }
    else if (quality <= 0.6)
    {
        return "a **«very good»**"
    }
    else if (quality <= 0.8)
    {
        return "an **«excellent»**"
    }
    else if (quality <= 0.99)
    {
        return "an **«outstanding»**"
    }
    else if (quality == 1)
    {
        return "an ***«exceptional»***"
    }
}

module.exports = {
potPrice, fertilizerPrice, decreasePercentage, emptyEmote, plantedEmote, getRandomXP, getTier,
//Common - 10 min 600 000
daisy: new Plant("daisy flower", 600000, 2, 6, 10, "https://cdn.discordapp.com/attachments/798252604093628466/798958660130439218/daisy.png" , "<:daisy:799246951353942067>"),
lavender: new Plant("lavender", 600000, 2, 6, 10, "https://cdn.discordapp.com/attachments/798252604093628466/824585284628906025/lavender.png", "<:lavender:799247009897775156>"),
monstera: new Plant("monstera", 600000, 2, 6, 10, "https://cdn.discordapp.com/attachments/798252604093628466/824586163862896640/monstera.png"),
//Uncommon - 1 hod, bamboo - 30 min
bamboo: new Plant("bamboo", 1800000, 9, 27, 45, "https://cdn.discordapp.com/attachments/798252644783095871/824587362780577802/bamboo.png"),
aloe: new Plant("aloe", 3600000, 12, 36, 60, "https://cdn.discordapp.com/attachments/798252644783095871/824569810075123712/aloe_vera.png"),
sunflower: new Plant("sunflower", 3600000, 12, 36, 60, "https://cdn.discordapp.com/attachments/798252644783095871/824588046330626048/sunflower.png"),
//Rare - 4 hod
cactus: new Plant("cactus", 14400000, 48, 144, 240, "https://cdn.discordapp.com/attachments/798252686938996736/824571145633923122/cactus.png"),
lotus: new Plant("lotus", 14400000, 48, 144, 240, "https://cdn.discordapp.com/attachments/798252686938996736/824589274816053268/lotus.png"),
lily: new Plant("lily of the valley", 14400000, 48, 144, 240, "https://cdn.discordapp.com/attachments/798252686938996736/824572085505884170/bell.png"),
//Epic - 12 hod
rafflesia: new Plant("rafflesia", 43200000, 144, 432, 720, "https://cdn.discordapp.com/attachments/798252763313471578/824582339417473086/rafflesia.png"),
pitcher: new Plant("pitcher", 43200000, 144, 432, 720, "https://cdn.discordapp.com/attachments/798252763313471578/824581986177515530/pitcher.png"),
venus: new Plant("venus fly trap", 43200000, 144, 432, 720, "https://cdn.discordapp.com/attachments/798252763313471578/799664288150061066/venus.png"),
//Legendary - 1 d
blotus: new Plant("black lotus", 86400000, 288, 864, 1440, "https://cdn.discordapp.com/attachments/798252926413832193/804778863389048892/black_lotus.png"),
mandrake: new Plant("mandrake", 86400000, 288, 864, 1440, "https://cdn.discordapp.com/attachments/798252926413832193/799664884651655188/mandrake.png"),
//Mythical - 3 d
lumina: new Plant("lumina", 259200000, 864, 2592, 4320, "https://cdn.discordapp.com/attachments/798252963801595934/799664639733399603/lumina.png"),
yggdrasil: new Plant("yggdrasil", 259200000, 864, 2592, 4320, "https://cdn.discordapp.com/attachments/798252963801595934/802498402269003776/yggdrasil.gif")}