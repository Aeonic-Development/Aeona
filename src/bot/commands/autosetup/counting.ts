import Counting from '../../database/models/countChannel.js';

import { CommandOptions, Context } from '@thereallonewolf/amethystframework';
import { AeonaBot } from '../../extras/index.js';
import { ChannelTypes } from 'discordeno';
export default {
	name: 'counting',
	description: 'Setup the counting channel',
	commandType: ['application', 'message'],
	category: 'autosetup',
	args: [],
	userGuildPermissions: ['MANAGE_GUILD'],
	async execute(client: AeonaBot, ctx: Context) {
		if (!ctx.guild || !ctx.user || !ctx.channel) return console.log(ctx.guild + ' ' + ctx.channel + ' ' + ctx.user);

		const channel = await client.helpers.createChannel(ctx.guild!.id!, {
			name: 'Counting',
			//@ts-ignore
			type: ChannelTypes.GuildText,
		});

		client.extras.embed(
			{
				title: `Counting`,
				desc: `This is the start of counting! The first number is **1**`,
			},
			channel,
		);

		client.extras.createChannelSetup(Counting, channel, ctx);
	},
} as CommandOptions;
