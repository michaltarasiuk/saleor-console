import {cn} from "@/shared/utils/cn";

import {PageTitle} from "../_components/PageTitie";
import {OrdersGridView} from "./_components/OrdersGridView";
import {OrderStatusTabs} from "./_components/OrderStatusTabs";
import {OrderViewSwitcher} from "./_components/OrderViewSwitcher";

export default function OrdersPage() {
  return (
    <>
      <PageTitle title="Orders">
        <div className={cn("hidden sm:block")}>
          <OrderViewSwitcher />
        </div>
      </PageTitle>
      <div className={cn("bg-base-background rounded-large mb-6 p-5")}>
        <OrderStatusTabs />
      </div>
      <div className={cn("mb-9")}>
        <OrdersGridView />
      </div>
    </>
  );
}
