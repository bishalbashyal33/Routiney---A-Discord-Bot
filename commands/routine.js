//const { stderr } = require('process');
const Discord = require("discord.js");
const fs = require("fs");
const Routine = require("../models/routine");
const {
  initialRoutine,
  initializeRoutine,
  getEmbed,
} = require("../utils/initializeRoutine");

/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
  name: "routine",
  description: "Routine!",
  execute(message) {
    let today = new Date();
    return routiniser(message, today);
  },
  update(message, args) {
    let today = new Date().getDay();
    let classIndexToCancel = args[1];
    message.channel.send(`Database Routine Updates are Only available to CRs `);
    if (args[0] === "cancel") {
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

        getEmbed(displayMessege);

        //message.channel.send(displayMessege)
      });
    }
    if (args[0] == "undo") {
      let flag = arg[1];
      switch (flag) {
        case "-t":
          let today = new Date.now().getDay();
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            routineData.at[today] = initialialRoutine[today];

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            routineData.save();
          });
          break;
        case "-a":
          let today = new Date.now().getDay();
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            routineData.at[today] = initialialRoutine;

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            getEmbed(displayMessege);
            routineData.save();
          });
          break;
        case "-d":
          let indexToUndo = args[2];
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            routineData.at[indexToUndo] = initialialRoutine[indexToUndo];

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            getEmbed(displayMessege);
            routineData.save();
          });
          break;
      }
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
    displayMessege.push(`${timeInterval[index] + " =>  " + lecture}`);
  });

  return displayMessege;
};
