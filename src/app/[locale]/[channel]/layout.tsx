import {notFound} from "next/navigation";

import {getClient} from "@/graphql/apollo-client";
import {ChannelProvider} from "@/modules/channel/ChannelProvider";
import {queryActiveChannelSlugs} from "@/modules/channel/utils/query-active-channel-slugs";
import {queryChannelContextValue} from "@/modules/channel/utils/query-channel-context-value";
import {isDefined} from "@/utils/is-defined";

export default async function ChannelLayout({
  children,
  ...props
}: LayoutProps<"/[locale]/[channel]">) {
  const params = await props.params;
  const channel = await queryChannelContextValue(params.channel);
  if (!isDefined(channel)) {
    notFound();
  }
  return <ChannelProvider value={channel}>{children}</ChannelProvider>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const client = getClient();
  const channels = await queryActiveChannelSlugs(client);
  return channels.map((channel) => ({
    channel,
  }));
}
