const fs = require("fs");
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.mongoose = require("./utils/mongoose.js");
// client.commands = new Discord.Collection();
// const commandFiles = fs
//   .readdirSync("./commands")
//   .filter((file) => file.endsWith(".js"));

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);

//   // set a new item in the Collection
//   // with the key as the command name and the value as the exported module
//   client.commands.set(command.name, command);
// }

// client.login(process.env.token);
// client.on("message", (message) => {
//   if (message.content.includes("nice bot")) {
//     client.commands.get("nicebot").execute(message);
//   }

//   if (!message.content.startsWith(config.prefix) || message.author.bot) return;
//   const args = message.content.slice(config.prefix.length).trim().split(" ");
//   const command = args.shift().toLowerCase();

//   if (message.content.startsWith("!updateroutine")) {
//     client.commands.get("routine").execute2(message, args);
//   }

//   if (!client.commands.has(command)) return;
//   try {
//     client.commands
//       .get(command)
//       .execute(message, args, message.author.username);
//   } catch (error) {
//     console.error(error);
//     message.reply("there was an error trying to execute that command!");
//   }
// });
client.mongoose.init();
console.log("test begins--------------");
const routine = require("./commands/routine");

let messege = routine.execute2("test", ["cancel", 2]);
console.log("messege=", messege);
console.log("test ends -------------");
