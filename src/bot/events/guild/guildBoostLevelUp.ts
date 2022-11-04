import { AmethystBot } from '@thereallonewolf/amethystframework';
import { Guild } from 'discordeno/transformers';

export default async (client: AmethystBot, guild: Guild, oldLevel: number, newLevel: number) => {
	const logsChannel = await client.extras.getLogs(guild.id);
	if (!logsChannel) return;

	client.extras
		.embed(
			{
				title: `🆙 New boost level`,
				desc: `This server has returned to a new boost level`,
				fields: [
					{
						name: `→ Old level`,
						value: `${oldLevel}`,
					},
					{
						name: `→ New level`,
						value: `${newLevel}`,
					},
				],
			},
			logsChannel,
		)
		.catch();
};
