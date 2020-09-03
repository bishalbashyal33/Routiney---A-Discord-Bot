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
        .setDescription(`Hello ${message.author}, You have my service :receipt:`)
        .addFields(
          { name: 'First Period', value: `${displayMessege[0]}` },
          { name: 'Second Period', value: `${displayMessege[1]}`},
          { name: 'Third Period', value: `${displayMessege[2]}`},
          { name: 'Fourth Period', value: `${displayMessege[3]}` },
          { name: 'Fifth Period', value: `${displayMessege[4]}` },
          { name: 'Sixth Period', value: `${displayMessege[5]}` },
          { name: 'Seventh Period', value: `${displayMessege[6]}` },
          { name: 'Eighth Period', value: `${displayMessege[7]}` },       
//
        )
        
        .setTimestamp()
        .setFooter('Sending Happy Routines ');
         message.channel.send(Embed);      

      //  message.channel.send(displayMessege)


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

///This is redundant tara paxi improve garxu

    const Embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('BamBoozling Routiney :smiling_face_with_3_hearts:')
    .setURL('https://discord.js.org/')
    .setAuthor('Your Class Feed Today', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription(`Hello ${message.author}, You have my service :receipt:`)
    .addFields(
      { name: 'First Period', value: `${displayMessege[0]}` },
      { name: 'Second Period', value: `${displayMessege[1]}`},
      { name: 'Third Period', value: `${displayMessege[2]}`},
      { name: 'Fourth Period', value: `${displayMessege[3]}` },
      { name: 'Fifth Period', value: `${displayMessege[4]}` },
      { name: 'Sixth Period', value: `${displayMessege[5]}` },
      { name: 'Seventh Period', value: `${displayMessege[6]}` },
      { name: 'Eighth Period', value: `${displayMessege[7]}` },       
//
    )
    message.channel.send(Embed); 
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
