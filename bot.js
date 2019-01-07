const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTE5MjY4OTUyOTU0NjM0MjUy.DxRCjA.ngXmDTdP1-YDl61HqBYnoqrroG8);

//where BOT_TOKEN is the token of our bot, this is a template, the token is a random and not real
