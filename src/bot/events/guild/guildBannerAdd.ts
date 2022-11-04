import { AmethystBot } from '@thereallonewolf/amethystframework';
import { Guild } from 'discordeno';

export default async (client: AmethystBot, guild: Guild, bannerURL: string) => {
	const logsChannel = await client.extras.getLogs(guild.id);
	if (!logsChannel) return;

	client.extras
		.embed(
			{
				title: `🖼️ New banner`,
				desc: `The server banner has been updated`,
				image: bannerURL,
			},
			logsChannel,
		)
		.catch();
};
