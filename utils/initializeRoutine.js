//this file is only used while initilization of initial routine

const mongoose = require("mongoose");
const Routine = require("../models/routine");
const routine = require("../models/routine");

function getLecName(params) {
  const lecName = [
    "SG",
    "SKM",
    "BDM",
    "JRS",
    "BS",
    "MB",
    "JG",
    "SPP",
    "KBT",
    "XX",
    "DSB",
    "GG",
  ];
  return lecName[params];
}

function getSubs(param) {
  let subsName = [
    "Numerical Methods",
    "DS And Algo",
    "Instrumentation",
    "Applied Maths",
    "Electric Machines",
    "Discrete Struc",
    "Microprocessor",
    "Break",
    "No More Classes",
  ];

  return subsName[param];
}

function getDayVar(param) {
  let sun = [0, 0, 2, 2, 7, 7, 3, 0];
  let mon = [6, 6, 0, 7, 3, 7, 3, 2];
  let tue = [1, 1, 5, 5, 7, 7, 0, 7];
  let wed = [4, 4, 2, 2, 7, 7, 7, 7];
  let thu = [4, 4, 5, 7, 1, 7, 7, 7];
  let fri = [7, 6, 6, 6, 3, 7, 7, 7];
  let sir = [sun, mon, tue, wed, thu, fri];
  return sir[param];
}

function getLecVar(param) {
  let sun = [0, 0, 5, 5, 9, 9, 0, 3];
  let mon = [10, 10, 2, 9, 1, 9, 7, 5];
  let tue = [4, 4, 6, 6, 9, 9, 11, 9];
  let wed = [8, 8, 5, 5, 9, 4, 9, 9];
  let thu = [8, 8, 7, 9, 4, 9, 9, 9];
  let fri = [9, 10, 10, 9, 0, 9, 9];
  let sir = [sun, mon, tue, wed, thu, fri];
  return sir[param];
}

exports.getInitialRoutine = () => {
  let routin = [[]];
  for (i = 0; i < 6; i++) {
    let dayRoutine = [];
    for (j = 0; j <= 7; j++) {
      dayRoutine[j] = getSubs(getDayVar(i)[j]).concat(
        "||" + getLecName(getLecVar(i)[j])
      );
    }
    routine[i] = dayRoutine;
  }
  return routine;
};

exports.initializeRoutine = () => {
  let routine = this.getInitialRoutine();
  Routine.find().then((data) => {
    if (data.length == 0) {
      let routineData = new Routine({
        at: routine,
      });
      routineData.save();
    }
  });
};
