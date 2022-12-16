import boostLogs from '../../database/models/boostChannels.js';

import { CommandOptions, Context } from '@thereallonewolf/amethystframework';
import { AeonaBot } from '../../extras/index.js';
import { ChannelTypes } from 'discordeno/types';
export default {
	name: 'boostlogs',
	description: 'Setup boostlog channel',
	commandType: ['application', 'message'],
	category: 'autosetup',
	args: [],
	userGuildPermissions: ['MANAGE_GUILD'],
	async execute(client: AeonaBot, ctx: Context) {
		if (!ctx.guild || !ctx.user || !ctx.channel) return console.log(ctx.guild + ' ' + ctx.channel + ' ' + ctx.user);

		const channel = await client.helpers.createChannel(ctx.guild!.id!, {
			name: 'boostLogs',
			//@ts-ignore
			type: ChannelTypes.GuildText,
		});

		client.extras.createChannelSetup(boostLogs, channel, ctx);
	},
} as CommandOptions;
