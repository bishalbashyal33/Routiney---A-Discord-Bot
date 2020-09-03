//const { stderr } = require('process');

const Discord = require("discord.js");
const fs = require("fs");
let jsonString = fs.readFileSync("./routine.json", "utf-8");
let data = JSON.parse(jsonString);
const Routine = require("../models/routine");

/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
  name: "routine",
  description: "Routine!",
  execute(message) {
    let today = new Date();
    return routiniser(message, today);
  },
  execute2(message, args) {
    let today = new Date().getDay();
    let classIndexToCancel = args[1];
    message.channel.send(`Database Routine Updates are Only available to CRs `);
    if (args[0] === "cancel" || args[0] === "not cancel") {
      Routine.find().then((routineDataArr) => {
        let routineData = routineDataArr[0];

        routineData.at[today].forEach((lecture, index) => {
          if (index == classIndexToCancel) {
            routineData.at[today][classIndexToCancel] = "Class Cancelled";
          }
        });

        let displayMessege = generateMessegeFromRoutine(routineData.at[today]);
        routineData.markModified("at");
        routineData.save();


     const Embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('BamBoozling Routiney :smiling_face_with_3_hearts:')
        .setURL('https://discord.js.org/')
        .setAuthor('Your Class Feed Today', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription(`Hello ${message.author}, You have my service :receipt`)
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
          { name: 'First Period', value: `${displayMessege[0]}` },
          { name: 'Second Period', value: `${displayMessege[1]}`},
          { name: 'Second Period', value: `${displayMessege[2]}`},
          { name: 'First Period', value: `${displayMessege[3]}` },
          { name: 'First Period', value: `${displayMessege[4]}` },
          { name: 'First Period', value: `${displayMessege[5]}` },
          { name: 'First Period', value: `${displayMessege[6]}` },
          { name: 'First Period', value: `${displayMessege[7]}` },
         
          
//
        )
        .addField('Testing', 'Testing', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Sending Happy Routines ', 'https://i.imgur.com/wSTFkRM.png');
         message.channel.send(Embed);      

        message.channel.send(displayMessege)


      });
    }
  },
};

const timeInterval = [
  "10:15 - 11:05",
  "11:05 - 11:55",
  "11:55 - 12:45",
  "12:45 - 01:35",
  "01:35 - 02:25",
  "02:25 - 03:15",
  "03:15 - 04:05",
  "04:05 - 04:55",
];
function routiniser(message, today, args = ["x", "x", "x", "x"]) {
  today = today.getDay();
  Routine.find().then((routineDataArr) => {
    let routine = routineDataArr[0];

    let routineToday = [];
    routine.at.forEach((itemsArr, index) => {
      if (index == today) {
        routineToday = itemsArr;
      }
    });

    let displayMessege = generateMessegeFromRoutine(routineToday);

    message.channel.send(displayMessege);
    //for test
    return displayMessege;
  });
}

const generateMessegeFromRoutine = (routineToday) => {
  let displayMessege = [];

  routineToday.forEach((lecture, index) => {
    displayMessege.push(
      `${timeInterval[index] + " =>  " + lecture}`
    );
  });

  return displayMessege;
};
