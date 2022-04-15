require('dotenv').config();
module.exports = {
    async handle(client, message, player) {
        const raw_message = message.content;
        if (!raw_message.startsWith(process.env.PREFIX) || message.author.bot){
            return;
        }
        const command =  raw_message.split(" ")[0].substring(process.env.PREFIX.length);
        const args = raw_message.split(" ").slice(1).join(" ");
        
        const queue = player.createQueue(message.guildId, {
            metadata: {
                channel: "964542085195767878"
            }
        });
        try {
            if (!queue.connection) await queue.connect('916687023253893140');
        } catch {
            queue.destroy();
            return await message.channel.send({ content: "Could not join your voice channel!", ephemeral: true });
        }

        const track = await player.search(args, {
            requestedBy: message.author.username
        }).then(x => x.tracks[0]);

        queue.play(track);

        //console.log(message);

    }
}