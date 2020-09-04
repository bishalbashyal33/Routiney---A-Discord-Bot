const {
  getInitialRoutine,
  initializeRoutine,
} = require("../utils/initializeRoutine");

const routine = require("../commands/routine");
exports.getInitiaRoutineTest = () => {
  console.log("initial routine test vegin");
  let routine = getInitialRoutine()[5];
  console.log("routine>>>>>>>>>", routine);
  console.log("end---------------------------------");
};
exports.initializeRoutineTest = () => {
  console.log("initializeRoutine test begin----------------------------");

  initializeRoutine();
  console.log("end---------------------------------");
};

exports.undoTest = () => {
  console.log("und0 test begin-----------------------");
  routine.update("test", ["undo", "-t"]);
  routine.update("test", ["cancel", "3"]);
  routine.update("test", ["undo", "-a"]);
  console.log("undo test end");
};
