const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event) => {

  const message = event.content;
  const args = message.split(' ').slice(1);
  const authorId = event.author.id;
  const owner = await lib.utils.kv.get({
    key: 'serverOwner'
  });
 if(authorId != owner){
    console.log(`not owner`);
    return;
  }
  let members = await lib.discord.guilds['@0.2.4'].members.list({
    guild_id: event.guild_id,
  });
  const nick = args.join(' ');
      for (let i = 0; i < members.length; i++){
        if (owner == members[i].user.id) {
          // If the member's user ID is in the ignore array, skip the current iteration of the loop using the `continue` statement
          continue;
        }
        await lib.discord.guilds['@0.2.4'].members.update({
          user_id: members[i].user.id,
          guild_id: event.guild_id,
          nick: nick
        });
  }
  
};