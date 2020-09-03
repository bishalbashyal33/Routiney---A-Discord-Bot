const mongoose = require("mongoose");
const { initializeRoutine } = require("./initializeRoutine");

module.exports = {
  init: () => {
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4,
    };
    const aayushUrl =
      "mongodb+srv://root:root123@cluster0-vy6ab.mongodb.net/RoutineyDiscord";
    mongoose.connect(aayushUrl, dbOptions).then(() => {
      console.log("conneted to mongoose sucessfully");
      initializeRoutine();
    });
    // mongoose.connect(
    //   `mongodb+srv://admin:${process.env.pass}@cluster0.sac2a.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    //   dbOptions
    // );
    mongoose.set("useFindAndModify", false);
    mongoose.Promise = global.Promise;
    //
    mongoose.connection.on("connected", () => {
      console.log("Mongoose has successfully connected!");
    });

    mongoose.connection.on("err", (err) => {
      console.error(`Mongoose connection error: \n${err.stack}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("Mongoose connection lost");
    });
  },
};
