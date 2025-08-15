import {createContext} from "react";

export interface Channel {
  taxConfiguration: {
    displayGrossPrices: boolean;
  };
}

export const ChannelContext = createContext<Channel>(undefined as never);
