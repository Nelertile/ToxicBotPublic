module.exports = {
    name: '!b',
    description: "Shows Info About the bot",
    execute(message, args){
        message.channel.send('**----|Bot Info|----**')
        message.channel.send('**Dev:** NotToxic')
        message.channel.send('__Coded in Discord.js with VS Code__')
        message.channel.send('__Ran by NTBE Core__')
        message.channel.send('Copyright NotToxicDev 2020 ©')
        message.channel.send('**----|Bot Info|----**')
    }
}
//// message.channel.send('')