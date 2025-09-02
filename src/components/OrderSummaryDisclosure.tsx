"use client";

import {
  Button,
  Disclosure,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

import {FormattedMessage} from "@/i18n/react-intl";
import {CartIcon} from "@/icons/CartIcon";
import {cn} from "@/utils/cn";

import {ProductList} from "./ProductList";
import {SkeletonText} from "./Text";
import {Text} from "./Text";

export function OrderSummaryDisclosure({className}: {className?: string}) {
  return (
    <Disclosure className={cn("bg-base-background-subdued", className)}>
      {({isExpanded}) => (
        <>
          <Heading>
            <Button
              slot="trigger"
              className={cn(
                "p-large-200 border-base-border gap-base flex w-full cursor-pointer items-center justify-between border-b",
                "focus-visible:ring-base-accent focus-visible:ring-offset-base-background-subdued outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
              )}>
              <div className={cn("gap-small-200 flex items-center")}>
                <CartIcon aria-hidden className={cn("stroke-base-accent")} />
                <Text appearance="accent">
                  {isExpanded ? (
                    <FormattedMessage
                      id="lcPfsu"
                      defaultMessage="Hide order summary"
                    />
                  ) : (
                    <FormattedMessage
                      id="b7BHTd"
                      defaultMessage="Show order summary"
                    />
                  )}
                </Text>
              </div>
              <Text emphasis="semibold">$185.36</Text>
            </Button>
          </Heading>
          <DisclosurePanel
            className={cn(
              "overflow-hidden transition-discrete duration-300",
              isExpanded ? "animate-accordion-down" : "animate-accordion-up",
            )}>
            <div
              className={cn(
                "p-large-200 space-y-large-200",
                "border-base-border border-b",
              )}>
              <ProductList />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export function SkeletonOrderSummaryDisclosure() {
  return (
    <div
      className={cn(
        "-mx-large-200 p-large-200 gap-base flex justify-between",
        "bg-base-background-subdued border-base-border border-b",
      )}>
      <SkeletonText />
      <SkeletonText inlineSize="small" />
    </div>
  );
}
