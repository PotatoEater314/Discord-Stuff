const config = require("../util/config.json")
module.exports = (client) => {
 

  console.log(`Bot has started`)

  client.user.setStatus("Online");

  client.user.setActivity(client.guilds.cache.get(config.serverid).name, { type: "WATCHING" });
};
