const { prefix } = require('../config.json');

module.exports = {
	name: 'rot',
	aliases: ['encrypt','decrypt'],
	description: 'Encrypt or decrypt a message with rot13!',
	execute(message, args) {
		const lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
		const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const save = ` ,.?;'"-=_+!$%^&1234567890`;
		const rot = 13;
		const secret = message.content.slice(4).trim();
		var output = '';

		for (i = 0; i < secret.length; i++) {
			for(x = 0; x < 26; x++) {
				if(secret[i] == lower[x]) {
					var crypt = x + rot;
					output += lower[crypt];
				} else if (secret[i] == caps[x]) {
					var crypt = x + rot;
					output += caps[crypt];
				} else if (secret[i] == save[x]) {
					output += secret[i];
				}
			}
		}
		
		message.channel.send(`Result: ${output}`);
	},
};