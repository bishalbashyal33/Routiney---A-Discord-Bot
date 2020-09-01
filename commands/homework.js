module.exports = {
	name: 'homework',
	description: 'Homework!',
	execute(message) {
        let today = new Date();
        if(today.getDay()+1 === 3){
        message.channel.send('```Today is Tuesday. Following Homeworks are due today:\n\n\n|| 10 || - DS And Algo       - ||BS||\n```');
        }
	},
};