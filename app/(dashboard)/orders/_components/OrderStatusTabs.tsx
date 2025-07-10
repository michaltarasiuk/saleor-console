"use client";

import {useId} from "react";

import {Tab, TabList, TabPanel, Tabs} from "@/shared/components/Tabs";
import {ClockIcon} from "@/shared/icons/ClockIcon";
import {OrderBoxIcon} from "@/shared/icons/OrderBoxIcon";
import {cn} from "@/shared/utils/cn";

export function OrderStatusTabs() {
  const confirmedTabId = useId();
  const pendingTabId = useId();
  return (
    <Tabs>
      <TabList aria-label="Order Status Tabs" className={cn("flex gap-3.5")}>
        <Tab id={confirmedTabId} icon={OrderBoxIcon}>
          Confirmed
        </Tab>
        <Tab id={pendingTabId} icon={ClockIcon}>
          Pending
        </Tab>
      </TabList>
      <TabPanel id={confirmedTabId} />
      <TabPanel id={pendingTabId} />
    </Tabs>
  );
}
