const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const { performance } = require('perf_hooks');


module.exports = async (event) => {
  var start = performance.now();
  var end = performance.now();
  var time = end - start;
  time = Math.round(time);
  await lib.discord.channels['@0.3.4'].messages.create({
    channel_id: event.channel_id,
    content: "",
    embed: {
      title: "Pong!",
      description: `It took me ${time}ms to respond`,
      color: 0x27ff26
    }
  });
};