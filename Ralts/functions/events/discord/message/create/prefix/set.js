const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const prefix = "?set";
module.exports = async (event) => {
  const guildId = event.guild_id;
  const message = event.content.slice(prefix.length).trim();
  const command = message.split(' ')[0];
  const args = message.split(' ').slice(1);
  
  switch(command){
    case 'serverowner':
    await lib.utils.kv['@0.1.16'].set({
      key: `${guildId} serverOwner`,
      value: args[0]
    });
    break;
    case 'modrole':
    await lib.utils.kv['@0.1.16'].set({
      key: `${guildId} modRole`,
      value: args[0]
    });
    break;
    case 'muterole':
    await lib.utils.kv['@0.1.16'].set({
      key: `${guildId} muteRole`,
      value: args[0]
    });
    break;
  }
};