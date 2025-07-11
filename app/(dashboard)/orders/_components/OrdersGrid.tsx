import {cn} from "@/shared/utils/cn";

import {OrderCard, SkeletonOrderCard} from "./OrderCard";

export function OrdersGrid() {
  return (
    <OrdersGridRoot>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <li key={i}>
            <OrderCard />
          </li>
        ))}
    </OrdersGridRoot>
  );
}

export function OrdersGridSkeleton() {
  return (
    <OrdersGridRoot>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <li key={i}>
            <SkeletonOrderCard />
          </li>
        ))}
    </OrdersGridRoot>
  );
}

function OrdersGridRoot({children}: {children: React.ReactNode}) {
  return (
    <ul className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3")}>
      {children}
    </ul>
  );
}
