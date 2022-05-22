const Discord = require("discord.js");
const Command = require("../../structures/Command");
module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "give",
      aliases: [],
      usage: "",
      description: "Give Action Points to a player",
      category: "tanktactics",
      cooldown: 3,
    });
  }

  async run(message, args, bot) {
    let game = await message.client.tankTacticsHandler.getGame(
      message.channel.id
    );

    if (!game) {
      return message.channel.send(
        "There is no game running currently! \n Use `+create ` to make one."
      );
    }

    if (
      !message.client.tankTacticsHandler.getUser(
        message.channel.id,
        message.author.id
      )
    )
      return message.channel.send(
        "You are not in the game! \n Use `+join` to join."
      );
    message.user = interaction.member;
    message.user.userId = message.user.id;
    await message.client.tankTacticsHandler.geGiveOptions(
      game,
      message.user,
      message
    );
  }
};
