module.exports = {
	name: 'time',
	description: 'Time!',
	execute(message) {
        let today = new Date();
		message.channel.send(` \`\`\` ${today.getFullYear()} ||  ${getMonthName(today.getMonth())} ${today.getDate()} || ${getDayName(today.getDay())} ||  ${today.getHours()} : ${today.getMinutes()}   \`\`\``);
    },
    
    
};

function getMonthName(params) {
    const monthName = ["Januray","February","March","April","May","June","July","August","September","October","November","December"];

    return monthName[params];
}

function getDayName(params) {
    const dayName = ["Sunday","Monday","Tuesday","Wednesay","Thursday","Friday"];

    return dayName[params];
}