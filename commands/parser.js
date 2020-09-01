module.exports = {
	name: 'parser',
	description: 'Parser!',
	execute(message, args,command) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	},
};