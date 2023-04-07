const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const helpEmbed = {
  title: "My prefix is ?",
  description:"***Commands:***",
  color: 0x27ff26,
  fields:[
    {
      name: "help",
      value:"This command displays this lovely help screen",
      inline: false,
    },
    {
      name:  "ping",
      value: "This command pings the bot and it returns a Pong!",
      inline: false,
    },
    {
      name: "purge",
      value: "This command bulk deletes messages (requires number)",
      inline: false,
    },
    {
      name: "massnick",
      value: "This command names everyone in the server \n(requires you to be the identified severowner)",
      inline: false,
    },
    {
      name: "setstatus",
      value: "This commands sets the bot's game (bot owner only)",
      inline: false,
    },
    {
      name: "embed",
      value: "Creates an embed with a color title and description",
      inline: false,
    },
    {
      name: "set modrole",
      value: "Sets the mod role with the role id",
      inline: false,
    },
    {
      name: "set muterole",
      value: "Sets the mute role using id",
      inline: false,
    },
    {
      name: "censor",
      value: "Adds words to the censor list (no phrases)",
      inline: false,
    }
  ]
}
module.exports = async (event) => {
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content:" ",
    embed: helpEmbed
  });
  };