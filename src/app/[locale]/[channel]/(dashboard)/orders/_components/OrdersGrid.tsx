import {cn} from "@/utils/cn";

import {OrderCard, SkeletonOrderCard} from "./OrderCard";

export function OrdersGrid() {
  return (
    <OrdersGridList>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
    </OrdersGridList>
  );
}

export function OrdersGridSkeleton() {
  return (
    <OrdersGridList>
      <li>
        <SkeletonOrderCard />
      </li>
      <li>
        <SkeletonOrderCard />
      </li>
      <li>
        <SkeletonOrderCard />
      </li>
    </OrdersGridList>
  );
}

function OrdersGridList({children}: {children: React.ReactNode}) {
  return (
    <ul className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3")}>
      {children}
    </ul>
  );
}
