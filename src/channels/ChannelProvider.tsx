"use client";

import {type Channel, ChannelContext} from "./channel-context";

export function ChannelProvider({
  children,
  channel,
}: {
  children: React.ReactNode;
  channel: Channel;
}) {
  return <ChannelContext value={channel}>{children}</ChannelContext>;
}
