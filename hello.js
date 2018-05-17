module.exports = {
	name: 'hello',
	aliases: ['hi','hey','sup','holla','ello','yo'],
	description: 'Replies to the author with a greeting!',
	execute(message, args) {
		message.channel.send(`Hello ${message.author}`);
	},
};