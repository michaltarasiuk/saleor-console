"use client";

import type {FragmentType} from "@apollo/client";
import {useFragment} from "@apollo/client";
import {use} from "react";

import {ChannelContext} from "@/channels/channel-context";
import {graphql} from "@/graphql/codegen";
import type {TaxedMoney_TaxedMoneyFragment} from "@/graphql/codegen/graphql";

import {Money} from "./Money";
import type {Text} from "./Text";
import {SkeletonText} from "./Text";

const TaxedMoney_TaxedMoneyFragment = graphql(`
  fragment TaxedMoney_TaxedMoney on TaxedMoney {
    net {
      ...Money_Money
    }
    gross {
      ...Money_Money
    }
  }
`);

interface TaxedMoneyProps extends React.ComponentProps<typeof Text> {
  taxedMoney: FragmentType<TaxedMoney_TaxedMoneyFragment>;
}

export function TaxedMoney({taxedMoney, ...props}: TaxedMoneyProps) {
  const {data, complete} = useFragment({
    fragment: TaxedMoney_TaxedMoneyFragment,
    from: taxedMoney,
  });
  if (!complete) {
    return <SkeletonText />;
  }
  const {taxConfiguration} = use(ChannelContext);
  return (
    <Money
      {...props}
      money={taxConfiguration.displayGrossPrices ? data.gross : data.net}
    />
  );
}
