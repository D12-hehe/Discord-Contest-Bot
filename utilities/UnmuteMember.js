var Discord = require(`discord.js`)
var client

module.exports.run = async (member, Client) => {
    client = Client
    try{
      await UnmuteMember(member)
    }catch(err){
        return 
        /*
      console.log(err)
      let botlogschannel = await client.channels.get("676874892850757642");
      let DevErrorEmbed =  new Discord.RichEmbed()
      .setTitle("**An error has occurred! ❌**")
      .setDescription("**"+ err + "**\n\n" + err.stack)
      .setAuthor(client.user.username)
      .setColor(0xFF0000)
      .setTimestamp(new Date())
      await botlogschannel.send(DevErrorEmbed)*/
    }
}
module.exports.help = {
    name: "UnmuteUtil"
}


async function UnmuteMember(member){
  console.log("Unmuted one")
    await member.setMute(false, "[Event auto mute]");
}