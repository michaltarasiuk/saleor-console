import {Button} from "@/shared/components/Button";
import {Text} from "@/shared/components/Text";
import {SuccessIcon} from "@/shared/icons/SuccessIcon";
import {cn} from "@/shared/utils/cn";

export function OrdersGridView() {
  return (
    <ul className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3")}>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
      <li>
        <OrderCard />
      </li>
    </ul>
  );
}

function OrderCard() {
  return (
    <div
      className={cn(
        "bg-base-background p-large-200 rounded-large",
        "gap-large-200 flex flex-col",
      )}>
      <div className={cn("bg-base-background-subdued rounded-base p-5")}>
        <div
          className={cn(
            "grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-1.5",
            "[grid-template-areas:'icon_status'_'empty_updated']",
          )}>
          <SuccessIcon
            aria-hidden
            className={cn("stroke-base-text [grid-area:icon]")}
          />
          <Text emphasis="semibold" className={cn("[grid-area:status]")}>
            Confirmed
          </Text>
          <Text className={cn("[grid-area:updated]")}>Updated Oct 17</Text>
        </div>
      </div>
      <div className={cn("flex flex-col")}>
        <Text emphasis="semibold">3 items</Text>
        <Text appearance="subdued">Order #1014</Text>
      </div>
      <Text emphasis="semibold">$75.55</Text>
      <div className={cn("grid grid-cols-2 gap-3.5")}>
        <Button>Pay now</Button>
        <Button kind="secondary">Manager</Button>
      </div>
    </div>
  );
}
