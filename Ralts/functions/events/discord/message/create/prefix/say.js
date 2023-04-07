const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const prefix ='?say';
module.exports = async (event) => {
  const message = event.content.slice(prefix.length).trim();
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content: message
  });
  };
 