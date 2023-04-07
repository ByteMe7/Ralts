const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const prefix = '?'
const reset = [
  "nigger"
];
module.exports = async (event) => {
  const guildId = event.guild_id;
  const message = event.content;
  let temp = await lib.utils.kv['@0.1.16'].get({
    key: `${guildId} censors`,
    defaultValue:[]
  });
    let censors = JSON.parse(temp);
  const ownerId = await lib.utils.kv['@0.1.16'].get({
    key: `${guildId} serverOwner`
  });
  const muteRole = await lib.utils.kv['@0.1.16'].get({
    key: `${guildId} muteRole`
  });
  const modRole = await lib.utils.kv['@0.1.16'].get({
    key: `${guildId} modRole`
  });
  let member = await lib.discord.guilds['@0.2.4'].members.retrieve({
    user_id: event.author.id,
    guild_id: event.guild_id
  });
  const isMod = member.roles.includes(modRole);
  if(!isMod && member.user.id != ownerId) return;
  if(!message.startsWith(prefix)) return;
  const command = message.slice(prefix.length).trim().split(' ')[0];
  const args = message.slice(prefix.length + command.length).trim().split(' ');
  switch(command){
    case 'censor':
    for (let i = 0; i < args.length; i++) {
      censors.push(args[i]);
    }
    await lib.utils.kv['@0.1.16'].set({
      key: `${guildId} censors`,
      value: JSON.stringify(censors)
    });
    break;
    case 'uncensor':
      for (let i = 0; i < args.length; i++) {
        censors.filter(args[i]);
      }
      await lib.utils.kv['@0.1.16'].set({
        key: `${guildId} censors`,
        value: JSON.stringify(censors)
      })
    break;
    case 'reset':
      await lib.utils.kv['@0.1.16'].set({
        key: `${guildId} censors`,
        value: JSON.stringify(reset)
      });
      break;
    case 'mute':
      await lib.discord.guilds['@0.2.4'].members.roles.update({
        role_id: muteRole,
        user_id: args[0],
        guild_id: event.guild_id
      });
    break;
    case 'unmute':
    await lib.discord.guilds['@0.2.4'].members.roles.destroy({
      role_id: muteRole,
      user_id: args[0],
      guild_id: event.guild_id
    });
    break;
  }
};