const keepAlive = require('./server')
require("dotenv").config()
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
    
}


client.once('ready', () => {
    console.log('ToxicBot Is Online!')
    client.user.setActivity('NotToxic Bot Engine')
    console.log('Set Activity to "Playing NotToxic Bot Engine"')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    } else if (command == 'yt'){
        client.commands.get('yt').execute(message, args); 
    } else if (command == 've'){
        client.commands.get('ve').execute(message, args); 
    } else if (command == 'ot'){
        client.commands.get('ot').execute(message, args); 
    } else if (command == 'ffs'){
        client.commands.get('ffs').execute(message, args); 
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args); 
    }  else if (command == '!b'){
        client.commands.get('!b').execute(message, args); 
    } else if (command == 'beatso'){
        client.commands.get('botso').execute(message, args); 
    } else if (command == 'extractor'){
        client.commands.get('veext').execute(message, args); 
    }
});

keepAlive()
client.login(process.env.token);
//// all code in this bot was written by @NotToxic