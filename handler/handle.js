const {Player} = require('discord-player');

module.exports = {
    async handle(client, message) {
        console.log(message);
        const raw_message = message.content;
        if (!raw_message.startsWith(process.env.PREFIX) || message.author.bot){
            return;
        }
        const command =  raw_message.split(" ")[0].substring(process.env.PREFIX.length);
        const args = raw_message.split(" ").slice(1).join(" ");
        console.log(command);
        
    }
}