// Discord.js
var Discord = require("discord.js");
// Node-opus & opusscript sont pour l'audio, donc pour ce bot il n'est pas nécessaire de l'activer
//require("node-opus"); 
//require("opusscript");

// autoReconnect is enabed
var bot = new Discord.Client({autoReconnect: true});


// Set the prefix
let prefix = "/";

// Ready? Set? Go!
bot.on('ready', () => {

  bot.user.setStatus("dnd"); //dnd , online , ldle
  bot.user.setGame("<Your Game Here", "https://twitch.tv/tonusername"); // Pour les streamers , vous êtes obligé de mettre une URL Twitch sinon cela ne marchera pas.
  // Attention ! " bot.user.setGame " peux être utilisé qu'une seule fois, donc vérifiez si il y en a qu'un seul.
  //bot.user.setGame("In Dev");
  console.log("Houston ! Le bot est en ligne");
});


bot.on("message", msg => {

      // Command /help
     if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage("```List of commands : \n\n /version  | Version  \n /help | All Commands  \n    ```");
      console.log("Command executed: /help")
    }
    // Command /version
    if (msg.content.startsWith(prefix + "version")) {
      msg.channel.sendMessage("``` Bot Discord Basic - Version 1.0 \n Creator : Thomas Bnt | @Hyprimort#9520 \n GitHub :https://github.com/thomasbnt/bot-discord-basic-js  | ⚠  Please not erase the author name ```");
      console.log("Command executed : /version")
    }

});



//Login with TOKEN for Bot
bot.login(" VOTRE TOKEN ICI ");
