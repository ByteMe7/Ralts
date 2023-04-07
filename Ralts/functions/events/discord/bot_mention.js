// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const prefix = '?'
module.exports = async (event) => {
  const user = event.author.id;
  const embed = {
    title: "",
    description: `Hey there <@${user}> you mentioned me\nand here I am.\nYou may be wondering who I am:\nI am Ralts a discord bot made to moderate\nservers and make fun stuff happen`,
    image: {
      url: 'https://media.discordapp.net/attachments/1016804625900384307/1016804661363212389/4b6e9cc36c1e5a7109ac8f021fd6825ec060cba6r1-653-1222v2_hq.jpg',
    },
    color: 0x27ff26
  }
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content: '',
    embed: embed
  });
}
