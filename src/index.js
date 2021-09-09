const Discord = require("discord.js");
const { Intents } = require("./variables.json");
class ApacheClient extends Discord.Client {
  constructor(options) {
    options.intents =
      typeof options.intents == "string" &&
      options.intents.toLowerCase() == "all"
        ? Intents
        : options.intents;
    super(options);
    this.prefix = options.defaultPrefix;
    this.commandPath = options.commandPath || "./commands";
    this.eventPath = options.eventPath || "./events";
  }
  login(token) {
    if (!typeof token == "string") {
      throw new Error("Token must be a string");
    }
    try {
      super.login(token);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = ApacheClient;
