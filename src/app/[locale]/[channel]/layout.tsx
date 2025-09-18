import {notFound} from "next/navigation";

import {getClient} from "@/graphql/apollo-client";
import {ChannelProvider} from "@/modules/channels/ChannelProvider";
import {getChannelContextValue} from "@/modules/channels/utils/get-channel-context-value";
import {getChannelSlugs} from "@/modules/channels/utils/get-channel-slugs";
import {isDefined} from "@/utils/is-defined";

interface ChannelLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    channel: string;
  }>;
}

export default async function ChannelLayout({
  children,
  ...props
}: ChannelLayoutProps) {
  const params = await props.params;
  const channel = await getChannelContextValue(params.channel);
  if (!isDefined(channel)) {
    notFound();
  }
  return <ChannelProvider value={channel}>{children}</ChannelProvider>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const client = getClient();
  const channels = await getChannelSlugs(client);
  return channels.map((channel) => ({
    channel,
  }));
}
