const {
  getInitialRoutine,
  initializeRoutine,
} = require("../utils/initializeRoutine");
exports.getInitiaRoutineTest = () => {
  console.log("initial routine test vegin");
  let routine = getInitialRoutine();
  console.log(routine);
  console.log("end---------------------------------");
};
exports.initializeRoutineTest = () => {
  console.log("initializeRoutine test begin----------------------------");

  initializeRoutine();
  console.log("end---------------------------------");
};
