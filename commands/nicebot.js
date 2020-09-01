module.exports = {
	name: 'nicebot',
	description: 'Nicebot!',
	execute(message) {
		if(!message.author.bot)
		message.channel.send('Haha. Thanks!');
	},
};