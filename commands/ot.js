module.exports = {
    name: 'ot',
    description: "Displays Online Time",
    execute(message, args){
        message.channel.send('Online when @NotToxic is online :clock10:')
        message.channel.send('Offline when @NotToxic is offline :clock12:')
    }
}