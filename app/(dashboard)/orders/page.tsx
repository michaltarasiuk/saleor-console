import {Heading} from "@/shared/components/Heading";
import {cn} from "@/shared/utils/cn";

import {OrdersGridView} from "./_components/OrdersGridView";
import {OrderStatusTabs} from "./_components/OrderStatusTabs";
import {OrderViewSwitcher} from "./_components/OrderViewSwitcher";

export default function OrdersPage() {
  return (
    <>
      <div className={cn("flex items-center justify-between py-6")}>
        <Heading>Orders</Heading>
        <div className={cn("hidden sm:block")}>
          <OrderViewSwitcher />
        </div>
      </div>
      <div className={cn("bg-base-background rounded-large p-5")}>
        <OrderStatusTabs />
      </div>
      <div className={cn("h-6")} />
      <OrdersGridView />
      <div className={cn("h-9")} />
    </>
  );
}
