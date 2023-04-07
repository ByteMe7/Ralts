const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


const prefix = "?";
const guildId = event.guild_id;
module.exports = async (event) => {
const message = event.content.slice(prefix.length).trim();
const command = message.split(' ')[0];
let ownerId = await lib.utils.kv['@0.1.16'].get({
  key: `${guildId} severOwner`
});
switch(command){
    case 'serverowner':
      await lib.discord.channels['@0.3.4'].messages.create({
        channel_id: event.channel_id,
        content: `<@${ownerId}>`
      });
      break;
}
}
  