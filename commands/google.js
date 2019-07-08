module.exports = {
	name: 'google',
	aliases: ['lmgtfy','search'],
	description: 'Links to Google search results for provided search terms.',
	execute(message, args) {
		var searchString = [];

		if (args.length === 0) {
			message.channel.send('please provide something to search for.');
		} else {
			for (s = 0; s < args.length; s++) {
				searchString.push(args[s]);
			}

			searchString = searchString.join('+');

			message.channel.send(`https://www.google.com.au/search?q=${searchString}`);
		}
	},
};