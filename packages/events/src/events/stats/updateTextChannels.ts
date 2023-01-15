import { AeonaBot } from '../../extras/index.js';
import { Channel, Guild } from 'discordeno/transformers';
import { ChannelTypes } from 'discordeno/types';
import Schema from '../../database/models/stats.js';

export default async (client: AeonaBot, channel: Channel, guild: Guild) => {
  if (channel.type == ChannelTypes.GuildText) {
    try {
      const channels = await client.helpers.getChannels(guild.id);
      let channelName = await client.extras.getTemplate(guild.id);
      channelName = channelName.replace(`{emoji}`, '💬');
      channelName = channelName.replace(
        `{name}`,
        `Text Channels: ${
          channels.filter((channel) => channel.type === ChannelTypes.GuildText).size || 0
        }`,
      );

      const data = await Schema.findOne({ Guild: guild.id });
      if (!data || !data.TextChannels) return;
      client.helpers.editChannel(data.TextChannels, {
        name: channelName,
      });
    } catch {
      //Fix lint error
    }
  }
};
