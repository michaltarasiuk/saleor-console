"use client";

import {type FragmentType, useFragment} from "@apollo/client";
import {use} from "react";
import {useNumberFormatter} from "react-aria";

import {ChannelContext} from "@/channels/channel-context";
import {gql} from "@/graphql/codegen";
import type {Money_TaxedMoneyFragment} from "@/graphql/codegen/graphql";

import {Text} from "./Text";

const Money_TaxedMoneyFragment = gql(`
  fragment Money_TaxedMoney on TaxedMoney {
    currency
    gross {
      amount
    }
    net {
      amount
    }
  }
`);

interface MoneyProps extends React.ComponentProps<typeof Text> {
  taxedMoney: FragmentType<Money_TaxedMoneyFragment>;
}

export function Money({taxedMoney, ...props}: MoneyProps) {
  const {data, complete} = useFragment({
    fragment: Money_TaxedMoneyFragment,
    from: taxedMoney,
  });
  const formatter = useNumberFormatter({
    style: "currency",
    currency: data.currency,
    minimumFractionDigits: 0,
  });
  if (!complete) {
    return null;
  }
  const {taxConfiguration} = use(ChannelContext);
  return (
    <Text {...props}>
      {formatter.format(
        taxConfiguration.displayGrossPrices
          ? data.gross.amount
          : data.net.amount,
      )}
    </Text>
  );
}
