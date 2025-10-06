"use client";

import {ChannelContext} from "./channel-context";

export function ChannelProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: typeof ChannelContext extends React.Context<infer T> ? T : never;
}) {
  return <ChannelContext value={value}>{children}</ChannelContext>;
}
