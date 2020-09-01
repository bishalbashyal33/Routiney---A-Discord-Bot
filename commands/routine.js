module.exports = {
	name: 'routine',
	description: 'Routine!',
	execute(message) {
		let today = new Date();
		console.log(today.getDay());
		
			routiniser(message,today);
		
	},
};

function timestamps(param){
	const timeInterval = ["10:15 - 11:05","11:05 - 11:55","11:55 - 12:45","12:45 - 01:35", "01:35 - 02:25","02:25 - 03:15","03:15 - 04:05","04:05 - 04:55"]
	return timeInterval[param];
}


function getDayName(params) {
    const dayName = ["Sunday","Monday","Tuesday","Wednesay","Thursday","Friday"];

    return dayName[params];
}



function getSubs(param){
	const subsName = ["Numerical Methods","DS And Algo","Instrumentation","Applied Maths","Electric Machines","Discrete Struc","Microprocessor","Break","No More Classes"];
	return subsName[param];

}

function routiniser(message,today){
	message.channel.send(` \`\`\` ${getDayName(today.getDay())}. And You Have Following Classes Today:\n\n|| ${timestamps(0)} || -  ${getDayVar(today.getDay()).map(getSubs)[0]}      - ||BS||\n|| ${timestamps(1)} || - ${getDayVar(today.getDay()).map(getSubs)[1]}    - ||SPP|\n|| ${timestamps(2)} || - ${getDayVar(today.getDay()).map(getSubs)[2]}             - ||XX||\n|| ${timestamps(3)} || - ${getDayVar(today.getDay()).map(getSubs)[3]} - ||GG||\n|| ${timestamps(4)} || - ${getDayVar(today.getDay()).map(getSubs)[4]}   - ||XX||\n|| ${timestamps(5)} || - ${getDayVar(today.getDay()).map(getSubs)[5]}   - ||XX||\n|| ${timestamps(6)} || - ${getDayVar(today.getDay()).map(getSubs)[6]}   - ||XX||\n|| ${timestamps(7)} || - ${getDayVar(today.getDay()).map(getSubs)[7]}   - ||XX||\n
		~Routine Under Maintenance~
		 \`\`\``);
	
}

function getDayVar(param){
let sun = [0,0,2,2,7,7,3,0];
let mon = [6,6,0,7,3,7,3,2];
let tue = [1,1,5,5,7,7,0,7];
let wed = [4,4,2,2,7,7,7,7];
let thu = [4,4,5,7,1,7,7,7];
let fri = [7,6,6,6,3,7,7,7];
let sir= [sun,mon,tue,wed,thu,fri];

return sir[param];

}