const { prefix } = require('../config.json');

module.exports = {
	name: 'flip',
	description: 'Flip a coin or add a number to flip X coins!',
	execute(message, args) {
		var count = 1;
		const input = message.content.slice(prefix.length).split(/ +/);
		const repeat = Number(input[1]);
		
		if (typeof input[1] === 'undefined') {
			count = 1;
		} else if (isNaN(repeat)) {
			message.channel.send('Instruction provided is not a number.');
			return;
		} else {
			count = repeat;
		}
		const sides = ['heads','tails'];
		var results = [];

		for (a = 0; a < count; a++) {
			var coin = Math.floor(Math.random() * 2);
			results.push(sides[coin]);
		}

		message.channel.send(results);
	},
};