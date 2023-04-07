const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event) => {
  const message = event.content;
  const args = message.split(' ').slice(1);
  const title = args[1];
  const color =  parseInt(args[0]); //parseInt(args[0])
  const description = args.slice(2).join(' ');
  const embed = {
    title: title,
    description: description,
    color: color // Set your desired color here 0x0099ff
  };
  
  // Send the custom embed back to the Discord channel
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content: "here you go",
    embed: embed
  });
};