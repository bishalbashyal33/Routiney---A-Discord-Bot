module.exports = {
	name: 'bulkdelete',
	description: 'Bulkdelete!',
	execute(message, args,author) {
      if(author==='bishalbashyal'){
		const amount = parseInt(args[0]);
    
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        }

        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount < 2 || amount > 100) {
            return message.reply('you need to input a number between 2 and 100.');
        }
        else{
           
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('there was an error trying to prune messages in this channel!');
              
                
            });
            message.channel.send(` \`\`\`Succesfully deleted ${amount} messages\`\`\` `);
            
        }
    }
        
    },

};
