"use client";

import type {FragmentType} from "@apollo/client";
import {useFragment} from "@apollo/client";
import {useNumberFormatter} from "react-aria";

import {graphql} from "@/graphql/codegen";
import type {Money_MoneyFragment} from "@/graphql/codegen/graphql";

import {SkeletonText, Text} from "./Text";

const Money_MoneyFragment = graphql(`
  fragment Money_Money on Money {
    currency
    amount
  }
`);

interface MoneyProps extends React.ComponentProps<typeof Text> {
  money: FragmentType<Money_MoneyFragment>;
}

export function Money({money, ...props}: MoneyProps) {
  const {data, complete} = useFragment({
    fragment: Money_MoneyFragment,
    from: money,
  });
  const formatter = useNumberFormatter({
    style: "currency",
    currency: data.currency,
    minimumFractionDigits: 0,
  });
  if (!complete) {
    return <SkeletonText inlineSize="small" />;
  }
  return <Text {...props}>{formatter.format(data.amount)}</Text>;
}
