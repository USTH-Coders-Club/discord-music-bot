require('dotenv').config();
const Discord =  require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const Handler = require('./handler/handle');

client.on('ready', () => {
    console.log("Bot logged in.");
})

client.on('messageCreate', (message) => {
    Handler.handle(client, message);
})

client.login(process.env.CLIENT_TOKEN);