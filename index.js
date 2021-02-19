require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith(',')) {
    const message = msg.content.substring(1);
    console.log(bot.users);
    msg.reply(message);
  }
});

const http = require('http');
const server = http.createServer((req, res) => {
  console.log("test");
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
