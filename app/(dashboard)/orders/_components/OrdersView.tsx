"use client";

import {use} from "react";

import {assertNever} from "@/shared/utils/assert-never";

import {OrderViewContext} from "../_utils/order-view-context";
import {OrdersGrid, OrdersGridSkeleton} from "./OrdersGrid";

const wait = new Promise((resolve) => setTimeout(resolve, 1_000));

export function OrdersView() {
  use(wait);
  const {orderView} = use(OrderViewContext);
  switch (orderView) {
    case "grid":
      return <OrdersGrid />;
    case "table":
      return null;
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
