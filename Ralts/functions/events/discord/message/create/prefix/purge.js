const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const  invEmbed = {
  title: "Invalid Permissons",
  description: "You do not have the correct level of permission",
  color: 0xff0000
};
module.exports = async (event) => {
  const message = event.content;
  const authorId = event.author.id;
  const guildId = event.guild_id;
  let member = await lib.discord.guilds['@0.2.4'].members.retrieve({
    user_id: event.author.id,
    guild_id: event.guild_id
  });
  const args = message.split(' ').slice(1);
  const numberOfMessages = parseInt(args[0]);
  let temp = await lib.utils.kv['@0.1.16'].get({
    key: `${guildId} serverOwner`,
  });
  const owner = JSON.parse(temp);
  const modRole = await lib.utils.kv.get({
    key: `${guildId} modRole`
  });
  const isMod = member.roles.includes(modRole);
if(authorId != owner && !isMod){
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content: '',
    embed: invEmbed
  });
  return;
}
  const messages = await lib.discord.channels['@0.3.4'].messages.list({
    channel_id: event.channel_id,
    limit: numberOfMessages + 1
  });
  const messageIds = messages.map(message => message.id);
  await lib.discord.channels['@0.3.4'].messages.bulkDelete({
    channel_id: event.channel_id,
    messages: messageIds
  });
};