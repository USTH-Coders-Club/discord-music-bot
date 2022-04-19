module.exports = {
    name: 'skip',
    description: 'Skip a song.',
    async execute(message, client, player) { 
        const queue = player.getQueue(message.guildId);
        queue.skip();
    }
}