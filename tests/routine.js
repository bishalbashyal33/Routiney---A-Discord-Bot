const { getInitialRoutine } = require("../utils/initializeRoutine");
exports.getInitiaRoutineTest = () => {
  console.log("initial routine test vegin");
  let routine = getInitialRoutine();
  console.log(routine);
  console.log("end---------------------------------");
};
