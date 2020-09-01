/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	name: 'routine',
	description: 'Routine!',
	execute(message) {
		let today = new Date();
		console.log(today.getDay());
		
			routiniser(message,today);
		
	},
	execute2(message,args){
		let today = new Date();

         message.channel.send(`Database Routine Updates are Only available to CRs `);
		 // eslint-disable-next-line no-mixed-spaces-and-tabs
		 // eslint-disable-next-line no-mixed-spaces-and-tabs
		if(args[2] === 'cancel' && args[3]==='1')
		getDayVar(today.getDay()).map(getSubs)[3]="Class Cancelled";
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
	let subsName = ["Numerical Methods","DS And Algo","Instrumentation","Applied Maths","Electric Machines","Discrete Struc","Microprocessor","Break","No More Classes"];
	return subsName[param];

}

function routiniser(message,today){
	message.channel.send(` \`\`\` ${getDayName(today.getDay())}. And You Have Following Classes Today:\n\n|| ${timestamps(0)} || -  ${getDayVar(today.getDay()).map(getSubs)[0]}      - ||${getLecVar(today.getDay()).map(getLecName)[0]}||\n|| ${timestamps(1)} || - ${getDayVar(today.getDay()).map(getSubs)[1]}    - ||${getLecVar(today.getDay()).map(getLecName)[1]}|\n|| ${timestamps(2)} || - ${getDayVar(today.getDay()).map(getSubs)[2]}             - ||${getLecVar(today.getDay()).map(getLecName)[2]}||\n|| ${timestamps(3)} || - ${getDayVar(today.getDay()).map(getSubs)[3]} - ||${getLecVar(today.getDay()).map(getLecName)[3]}||\n|| ${timestamps(4)} || - ${getDayVar(today.getDay()).map(getSubs)[4]}   - ||${getLecVar(today.getDay()).map(getLecName)[4]}||\n|| ${timestamps(5)} || - ${getDayVar(today.getDay()).map(getSubs)[5]}   - ||${getLecVar(today.getDay()).map(getLecName)[5]}||\n|| ${timestamps(6)} || - ${getDayVar(today.getDay()).map(getSubs)[6]}   - ||${getLecVar(today.getDay()).map(getLecName)[6]}||\n|| ${timestamps(7)} || - ${getDayVar(today.getDay()).map(getSubs)[7]}   - ||${getLecVar(today.getDay()).map(getLecName)[7]}||\n
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

function getLecVar(param){
let sun = [0,0,5,5,9,9,0,3];
let mon = [10,10,2,9,1,9,7,5];
let tue = [4,4,6,6,9,9,11,9];
let wed = [8,8,5,5,9,4,9,9];
let thu = [8,8,7,9,4,9,9,9];
let fri = [9,10,10,9,0,9,9];
let sir= [sun,mon,tue,wed,thu,fri];
return sir[param];
}

function getLecName(params){
	const lecName = ["SG","SKM","BDM","JRS","BS","MB","JG","SPP","KBT","XX","DSB","GG"]
	return  lecName[params];
}
