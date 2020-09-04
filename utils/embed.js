exports.getEmbed = (displayMessege, message) => {
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("BamBoozling Routiney :smiling_face_with_3_hearts:")
    .setURL("https://discord.js.org/")
    .setAuthor(
      "Your Class Feed Today",
      "./img/logo.png",
      "https://discord.js.org"
    )
    .setDescription(`Hello ${message.author}, You have my service :receipt`)
    .setThumbnail("./img/logo.png")
    .addFields(
      { name: "First Period", value: `${displayMessege[0]}` },
      { name: "Second Period", value: `${displayMessege[1]}` },
      { name: "Second Period", value: `${displayMessege[2]}` },
      { name: "First Period", value: `${displayMessege[3]}` },
      { name: "First Period", value: `${displayMessege[4]}` },
      { name: "First Period", value: `${displayMessege[5]}` },
      { name: "First Period", value: `${displayMessege[6]}` },
      { name: "First Period", value: `${displayMessege[7]}` }

      //
    )
    .addField("Testing", "Testing", true)
    .setImage("https://i.imgur.com/wSTFkRM.png")
    .setTimestamp()
    .setFooter("Sending Happy Routines ", "./img/logo.png");
  message.channel.send(Embed);
};
