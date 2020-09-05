module.exports = {
    name: 'help',
    description: "Shows you all commands",
    execute(message, args){
        message.channel.send('**----|Help Menu|----**')
        message.channel.send('Prefix - &')
        message.channel.send('help - Shows you all commands')
        message.channel.send('ot - Displays Online Time')
        message.channel.send('ve - Sends you to the Vannila Extract Page!')
        message.channel.send('ping - Pong!')
        message.channel.send('yt - My Youtube')
        message.channel.send('ffs - Disabled by bot owner')
        message.channel.send('!b - Showes info about the bot')
        message.channel.send('**----|Help Menu|----**')
    }
}
//// message.channel.send('[COMMAND] - [DESCRIPTION]')