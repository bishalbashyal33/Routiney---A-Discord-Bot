module.exports = {
	name: 'homework',
	description: 'Homework!',
	execute(message) {
        let today = new Date();
        if(today.getDay()+1 === 4){
        message.channel.send('```Today is Wednesday. Following Homeworks are due today:\n\n\n|| 10 || - None       - ||XX||\n```');
        }
	},
};