module.exports = {
	name: 'roa',
	description: 'Roll of Arms lookup.',
	aliases: ['lookup','search','find'],
	execute(message, args) {
		message.channel.send({
			embed: {
				color: 0xffffff,
				title: 'Lochac Roll of Arms',
				url: 'http://lochac.sca.org/LRoA/index.php',
				thumbnail:{
					url: 'http://lochac.sca.org/LRoA/Emblazons/LochacArms.gif',
				},
				fields: [
					{
						name: 'Name',
						value: 'Sebastian Tockler',
						inline: true,
					},
					{
						name: 'Registered',
						value: '2015-09-20',
						inline: true,
					},
					{
						name: 'Awards',
						value: '[Canon Lore](http://www.sca.org.au/canon/person.php?show=index&id=3737)',
					},
					{
						name: 'Blazon',
						value: 'Azure, in pale three annulets conjoined throughout and issuant from base argent.',
					},
					{
						name: 'Registered',
						value: 'Jun-2015',
					},
				],
				image: {
					url: 'http://lochac.sca.org/LRoA/Emblazons/Sebastian_Tockler.gif',
				},
			},
		});
	},
};