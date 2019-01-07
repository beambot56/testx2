const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '?ping') {

       message.reply('pong');

       }

    if (message.content === '?cookie') {
 
        message.reply('Here is a freshly baked cookie from me! <3")

       }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

//where BOT_TOKEN is the token of our bot, this is a template, the token is a random and not real
