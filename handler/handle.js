require('dotenv').config();
module.exports = {
    async handle(client, message, player) {
        const raw_message = message.content;
        if (!raw_message.startsWith(process.env.PREFIX) || message.author.bot){
            return;
        }
        const command =  raw_message.split(" ")[0].substring(process.env.PREFIX.length);
        const args = raw_message.split(" ").slice(1).join(" ");
        if (command == "play") {
            const Play = require('../commands/play');
            Play.execute(message, client, player, args);
            return;
        }
        if (command == "skip") {
            const Skip = require('../commands/skip');
            Skip.execute(message, client, player);
        }

        //console.log(message);

    }
}