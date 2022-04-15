require('dotenv').config();
const Discord =  require('discord.js');
const { Client, Intents } = require('discord.js');
const { Player } = require('discord-player');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const Handler = require('./handler/handle');
const player = new Player(client);

client.on('ready', () => {
    console.log("Bot logged in.");
})

client.on('messageCreate', (message) => {
    Handler.handle(client, message, player);
})

client.login(process.env.CLIENT_TOKEN);