const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const prefix = '?'
module.exports = async (event) => {
  count = Math.min(Math.max(1, count), 100);
  return {
    messages: Array(count).fill(`Hello ${name}, welcome to Autocode ${count} times!`)
  };
};