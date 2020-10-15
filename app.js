const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./util/config.json")

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection;

for (const file of commandFiles) {

  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
  console.log(`Loading command ${file}`)
}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      
      let eventName = file.split(".")[0];

      client.on(eventName, event.bind(null, client));

      delete require.cache[require.resolve(`./events/${file}`)];

      console.log(`Loading event ${file}`)

    });
});

client.login(token);
