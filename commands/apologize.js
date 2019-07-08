module.exports = {
	name: 'apologize',
	description: 'Apologize to the channel or a specific user!',
	execute(message, args) {
		const taggedUser = message.mentions.users.first();

		if (!message.mentions.users.size) {
			return message.channel.send(`Sorry, it won't happen again!`);
		}

		message.channel.send(`Sorry ${taggedUser}`);
	},
};