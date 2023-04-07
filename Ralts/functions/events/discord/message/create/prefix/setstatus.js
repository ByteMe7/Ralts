const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const botOwner =  '522898384097640458';
module.exports = async (event) => {
  if(event.author.id != botOwner){
    await lib.discord.channels['@0.3.4'].messages.create({
      channel_id: event.channel_id,
      content: "",
      embed: {
        title: "Oops!",
        description: "You don't have permision permission to do that",
        color: 0xff0000
      }
    });
    return;
  }
  const message = event.content;
  const args = message.split(' ').slice(1);
   const game = args.slice(2).join(' ');  
   let activity; 
   switch(args[1].toLowerCase()){
     case 'playing':
        activity = "GAME";
        break;
      case 'game':
        activity = "GAME";
        break;
   }
    await lib.discord.users['@0.2.1'].me.status.update({
      activity_name: game,
      activity_type: activity,
      status: args[0]
    });
};