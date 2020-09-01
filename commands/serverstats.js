module.exports = {
	name: 'serverstats',
	description: 'Serverstats!',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};







