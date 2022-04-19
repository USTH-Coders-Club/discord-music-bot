module.exports = {
    name: 'play',
    description: 'Play a song.',
    async execute(message, client, player, args) { 
        const guild = await client.guilds.fetch(message.guildId);
        const author = await guild.members.fetch(message.author.id);
        if (author.voice.channelId == null) {
            message.channel.send("Bạn chưa ở trong kênh voice.");
            return;
        }
        const queue = player.createQueue(message.guildId, {
            metadata: {
                channel: message
            }
        });
        try {
            if (!queue.connection) await queue.connect(author.voice.channelId);
        } catch {
            queue.destroy();
            return await message.channel.send({ content: "Could not join your voice channel!", ephemeral: true });
        }

        const track = await player.search(args, {
            requestedBy: message.author.username
        }).then(x => x.tracks[0]);

        
        queue.play(track);
        console.log(queue.tracks);
    }
}