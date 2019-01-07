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
 
        message.reply('Here is a freshly baked cookie from me! <3')

       }
  
    if (message.content === '?anthem') {

        message.reply('United forever in friendship and labour, our mighty republics will ever endure. The Great Soviet Union will live through the ages. The dream of a people their fortress secure. Long live our Soviet motherland, built by the peoples mighty hand. Long live our people, united and free. Strong in our friendship tried by fire. Long may our crimson flag inspire, shining in glory for all men to see. Through days dark and stormy where Great Lenin lead us our eyes saw the bright sun of freedom above and Stalin our leader with faith in the people, inspired us to build up the land that we love. Long live our Soviet motherland, built by the peoples mighty hand. Long live our people, united and free. Strong in our friendship tried by fire. Long may our crimson flag inspire, shining in glory for all men to see. We fought for the future, destroyed the invaders, and brought to our homeland the laurels of fame. Our glory will live in the memory of nations and all generations will honour her name. Long live our Soviet motherland, built by the peoples mighty hand. Long live our people, united and free. Strong in our friendship tried by fire. Long may our crimson flag inspire, shining in glory for all men to see.')
       }

    if (message.content === '?doctor') {
    
      message.say('The number for Dr.Nibba is 1-800-Not-Real !')
       
       }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);

//where BOT_TOKEN is the token of our bot, this is a template, the token is a random and not real
