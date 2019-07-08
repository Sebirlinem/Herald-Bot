const { prefix } = require('../config.json');

module.exports = {
	name: 'roll',
	description: 'Roll X number of Y sided dice [X]d[Y]!',
	execute(message, args) {
		const input = message.content.slice(prefix.length).split(/ +/)[1];
		const count = input.split('d')[0];
		const die = input.split('d')[1];
		var each = [];
		var result = 0;

		for (var a = 0; a < count; a++) {
			var roll = Math.floor((Math.random() * die) + 1);
			each.push(roll);
			result += roll;
		}
		message.channel.send('[' + each + '] ' + result);
	},
};