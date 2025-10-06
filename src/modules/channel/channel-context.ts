"use client";

import {createContext} from "react";

import type {queryChannelContextValue} from "./utils/query-channel-context-value";

type QueryChannelContextValueReturn = Awaited<
  ReturnType<typeof queryChannelContextValue>
>;
type ContextValue = NonNullable<QueryChannelContextValueReturn>;

export const ChannelContext = createContext<ContextValue>(undefined as never);
