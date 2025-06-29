import {Heading} from "@/shared/components/Heading";
import {cn} from "@/shared/utils/cn";

import {OrderStatusTabs} from "./_components/OrderStatusTabs";
import {OrderViewSwitcher} from "./_components/OrderViewSwitcher";

export default function OrdersPage() {
  return (
    <>
      <div className={cn("flex items-center justify-between py-6")}>
        <Heading>Orders</Heading>
        <OrderViewSwitcher />
      </div>
      <div className={cn("bg-base-background rounded-large p-5")}>
        <OrderStatusTabs />
      </div>
    </>
  );
}
