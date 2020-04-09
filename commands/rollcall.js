const { prefix } = require('../config.json');

module.exports = {
	name: 'rollcall',
	description: 'Roll of Arms lookup. ".rollcall Your Name"',
	aliases: ['lookup','search','find'],
	execute(message, args) {
		var name = message.content.slice(prefix.length).split(/ +/);
		var trim = name.slice(1);
		var call = trim.join('_');
		var echo = trim.join(' ');
		var search = trim.join('%20')

		message.channel.send({
			embed: {
				color: 0xffffff,
				title: 'Lochac Roll of Arms',
				url: 'http://roll.lochac.sca.org/index.php',
				thumbnail:{
					url: 'http://roll.lochac.sca.org/Emblazons/LochacArms.gif',
				},
				fields: [
					{
						name: 'Name',
						value: echo,
						inline: true,
					},
					{
						name: 'Awards',
						value: '[Canon Lore](http://lochac.sca.org/canon/lroa-incoming.php?id=1361&name=' + search + ')',
					},
				],
				image: {
					url: 'http://roll.lochac.sca.org/Emblazons/' + call + '.gif',
				},
			},
		});
	},
};