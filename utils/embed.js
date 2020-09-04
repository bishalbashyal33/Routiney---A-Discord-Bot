const Discord = require("discord.js");

exports.getEmbed = (displayMessege, message) => {
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("BamBoozling Routiney :smiling_face_with_3_hearts:")
    .setURL("https://discord.js.org/")
    .setAuthor(
      "Your Class Feed Today",
      "https://i.imgur.com/wSTFkRM.png",
      "https://discord.js.org"
    )
    .setDescription(`Hello ${message.author}, You have my service :receipt:`)
    .addFields(
      { name: "First Period", value: `${displayMessege[0]}` },
      { name: "Second Period", value: `${displayMessege[1]}` },
      { name: "Third Period", value: `${displayMessege[2]}` },
      { name: "Fourth Period", value: `${displayMessege[3]}` },
      { name: "Fifth Period", value: `${displayMessege[4]}` },
      { name: "Sixth Period", value: `${displayMessege[5]}` },
      { name: "Seventh Period", value: `${displayMessege[6]}` },
      { name: "Eighth Period", value: `${displayMessege[7]}` }
      //
    )

    .setTimestamp()
    .setFooter("Sending Happy Routines ");
  message.channel.send(Embed);
};
