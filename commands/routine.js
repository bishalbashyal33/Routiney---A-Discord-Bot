const Discord = require("discord.js");

const fs = require("fs");
const Routine = require("../models/routine");
const { getInitialRoutine } = require("../utils/initializeRoutine");

const { getEmbed } = require("../utils/embed");

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
    let classIndexToCancel = args[1] - 1;

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
        getEmbed(displayMessege, message);

        //message.channel.send(displayMessege)
      });
    }
    if (args[0] === "undo") {
      let flag = arg[1];
      switch (flag) {
        case "-t":
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            //initial routine is array which stores initial routine
            routineData.at[today] = getInitialRoutine[today];

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            getEmbed(displayMessege, message);
            routineData.save();
          });
          break;
        case "-a":
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            routineData.at[today] = getInitialRoutine();

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            getEmbed(displayMessege, message);
            routineData.save();
          });
          break;
        case "-d":
          let indexToUndo = args[2];
          Routine.find().then((routineDataArr) => {
            let routineData = routineDataArr[0];

            routineData.at[indexToUndo] = getInitialRoutine[indexToUndo];

            let displayMessege = generateMessegeFromRoutine(
              routineData.at[today]
            );
            routineData.markModified("at");
            getEmbed(displayMessege, message);
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

    ///This is redundant tara paxi improve garxu
    getEmbed(displayMessege, message);
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
