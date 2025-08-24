"use client";

import {ChannelContext} from "./channel-context";

interface ChannelProviderProps {
  children: React.ReactNode;
  value: typeof ChannelContext extends React.Context<infer T> ? T : never;
}

export function ChannelProvider({children, value}: ChannelProviderProps) {
  return <ChannelContext value={value}>{children}</ChannelContext>;
}
