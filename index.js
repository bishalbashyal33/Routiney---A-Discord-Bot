console.log("HelLo World");
//Hello
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NzQ5ODk3NzMzODM3NTUzNzM1.X0yqsA.VqHpUi-_8wu3v8xoGoK2_Jid9Ck');
client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Hi');
    }
    if (message.content === '!routine') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Your Routines will be updated on the BOT server soon. Please check back later. :)');
    }
});
