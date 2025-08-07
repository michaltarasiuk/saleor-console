"use client";

import {use} from "react";

import {assertNever} from "@/utils/assert-never";

import {OrderViewContext} from "../_utils/order-view-context";
import {OrdersGrid, OrdersGridSkeleton} from "./OrdersGrid";
import {NumberField} from "@/components/NumberField";

export function OrdersView() {
  const {orderView} = use(OrderViewContext);
  switch (orderView) {
    case "grid":
      return <OrdersGrid />;
    case "table":
      return <NumberFieldDemo />;
    default:
      assertNever(orderView);
  }
}

export function OrdersViewSkeleton() {
  const {orderView} = use(OrderViewContext);
  switch (orderView) {
    case "grid":
      return <OrdersGridSkeleton />;
    case "table":
      return null;
    default:
      assertNever(orderView);
  }
}

function NumberFieldDemo() {
  return <NumberField label="Label" minValue={0} maxValue={10} />;
}
