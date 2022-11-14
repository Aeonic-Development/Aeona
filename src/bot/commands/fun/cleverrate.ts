import { AmethystBot, Context } from '@thereallonewolf/amethystframework';
export default {
	name: 'cleverrate',
	description: 'See how clever you are.',
	commandType: ['application', 'message'],
	category: 'fun',
	args: [
		{
			name: 'user',
			description: 'The user',
			required: false,
			type: 'User',
		},
	],
	async execute(client: AmethystBot, ctx: Context) {
		if (!ctx.guild || !ctx.user || !ctx.channel) return console.log(ctx.guild + ' ' + ctx.channel + ' ' + ctx.user);
		const result = Math.ceil(Math.random() * 100);

		client.extras.embed(
			{
				title: `Clever Rate`,
				desc: `You are ${result}% clever!`,
				type: 'reply',
			},
			ctx,
		);
	},
};
