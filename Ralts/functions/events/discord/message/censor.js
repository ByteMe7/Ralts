const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const prefix = '?';
const ignored = [
  `${prefix}censor`,
  `${prefix}uncensor`
];
module.exports = async (event) => {
  const message = event.content;
 let temp = await lib.utils.kv['@0.1.16'].get({
   key: `${guildId} censors`,
 });
  let censors = JSON.parse(temp);
  const words = event.content.split(' ');
  for (let i = 0; i < ignored.length; i++) {
    if (message.startsWith(ignored[i])) return;
  }
  for(let i = 0; i < words.length; i++){
    if(censors.includes(words[i])){
      await lib.discord.channels['@0.3.4'].messages.destroy({
        message_id: event.id,
        channel_id: event.channel_id
      });
      return;
    }
  }
};