//const { stderr } = require('process');
const fs = require('fs');
let jsonString = fs.readFileSync('./routine.json','utf-8');
let data = JSON.parse(jsonString);

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
		 if(args[0]==='cancel' || args[0] === 'not cancel')
		 {

		 jsonReader("./routine.json", (err,data ) => {
			if (err) {
			  console.log("Error reading file:", err);
			  return;
			}
			// increase customer order count by 1
			data.state = args[0];
			fs.writeFile("./routine.json", JSON.stringify(data), err => {
			  if (err) console.log("Error writing file:", err);
			});
		
		  });}
          
		  routiniser(message,today,args);






	},
		
};






function jsonReader(filePath, cb) {
	fs.readFile(filePath, (err, fileData) => {
	  if (err) {
		return cb && cb(err);
	  }
	  try {
		const object = JSON.parse(fileData);
		return cb && cb(null, object);
	  } catch (err) {
		return cb && cb(err);
	  }
	});
  }
  jsonReader("./routine.json", (err, data) => {
	if (err) {
	  console.log(err);
	  return;
	}
	console.log(data.state); // => "Infinity Loop Drive"
  });












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

function routiniser(message,today,args=['x','x','x','x']){
	console.log(args);
	console.log(args[0],args[1],args[2],args[3]);
	
	message.channel.send(` \`\`\` ${getDayName(today.getDay())}. And You Have Following Classes Today:\n\n|| ${timestamps(0)} || -  ${dynamicRoutine(today,args[1])[0]}      - ||${getLecVar(today.getDay()).map(getLecName)[0]}||\n|| ${timestamps(1)} || - ${dynamicRoutine(today,args[1])[1]}    - ||${getLecVar(today.getDay()).map(getLecName)[1]}|\n|| ${timestamps(2)} || - ${dynamicRoutine(today,args[1])[2]}             - ||${getLecVar(today.getDay()).map(getLecName)[2]}||\n|| ${timestamps(3)} || - ${dynamicRoutine(today,args[1])[3]} - ||${getLecVar(today.getDay()).map(getLecName)[3]}||\n|| ${timestamps(4)} || - ${dynamicRoutine(today,args[1])[4]}   - ||${getLecVar(today.getDay()).map(getLecName)[4]}||\n|| ${timestamps(5)} || - ${dynamicRoutine(today,args[1])[5]}   - ||${getLecVar(today.getDay()).map(getLecName)[5]}||\n|| ${timestamps(6)} || - ${dynamicRoutine(today,args[1])[6]}   - ||${getLecVar(today.getDay()).map(getLecName)[6]}||\n|| ${timestamps(7)} || - ${dynamicRoutine(today,args[1])[7]}   - ||${getLecVar(today.getDay()).map(getLecName)[7]}||\n
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

function dynamicRoutine(today,param){
	
	let arr = [getDayVar(today.getDay()).map(getSubs)[0],getDayVar(today.getDay()).map(getSubs)[1],getDayVar(today.getDay()).map(getSubs)[2],getDayVar(today.getDay()).map(getSubs)[3],getDayVar(today.getDay()).map(getSubs)[4],getDayVar(today.getDay()).map(getSubs)[5],getDayVar(today.getDay()).map(getSubs)[6],getDayVar(today.getDay()).map(getSubs)[7]];
	console.log(data.state);
	if(data.state === 'not cancel' && param === 'x'){
	
		console.log(param);
		console.log('No cancel loop 1 exe');
		return arr;
		
	}
	if(data.state === 'not cancel')
	{
		console.log(param);
		console.log('No cancel loop 2 exe');
		return arr;
	}

	else if(data.state === 'cancel'){
		console.log('cancel loop 3 exe');
		arr.splice(param-1, 1, "Class Cancelled");
		return arr;
	}
	
	else
	{
		console.log('else loop 4 exe');
	return arr;
	}


}
