module.exports = {
    name: 'help',
    description: "Shows you all commands",
    execute(message, args){
        message.channel.send('**----|Help Menu|----**\nPrefix - &\nhelp - Shows you all commands\not - Displays Online Time\nve - Sends you to the Vannila Extract Page!\nping - Pong!\nyt - My Youtube\nffs - Disabled by bot owner\nbeatso - Showes info about @Beatso\nextractor - Showes source code to Extractor\n!b - Showes info about the bot\n**----|Help Menu|----**')
    }
}
//// message.channel.send('[COMMAND] - [DESCRIPTION]')