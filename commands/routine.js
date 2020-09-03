//const { stderr } = require('process');

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
          if (index == classIndexToCancel - 1) {
            routineData.at[today][classIndexToCancel - 1] = "Class Cancelled";
          }
        });

        let displayMessege = generateMessegeFromRoutine(routineData.at[today]);
        routineData.markModified("at");
        routineData.save();
        message.channel.send(` \`\`\`${displayMessage}\`\`\` `);
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

    message.channel.send(` \`\`\`${displayMessage}\`\`\` `);
    //for test
    return displayMessege;
  });
}

const generateMessegeFromRoutine = (routineToday) => {
  let displayMessege = "";

  routineToday.forEach((lecture, index) => {
    displayMessege = displayMessege.concat(
      ` ${timeInterval[index] + " =>  " + lecture + "   "}  ' \n' `
    );
  });

  return displayMessege;
};
