// require modules and files
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// retrieve commands
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
};

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.once('ready', async () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const input = message.content.slice(prefix.length).trim();
	if (!input.length) return;
	const [, comm, commArgs] = input.match(/(\w+)\s*([\s\S]*)/);

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const taggedUser = message.mentions.users.first();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply(`Sorry, I couldn't execute that command!`);
	}
});

// login to Discord with your app's token
client.login(token);