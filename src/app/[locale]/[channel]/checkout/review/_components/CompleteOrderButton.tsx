"use client";

import {useTransition} from "react";

import {Button} from "@/components/Button";
import {usePathnameContext} from "@/hooks/use-pathname-context";
import {FormattedMessage} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

import {completeCheckout} from "../../_actions/complete-checkout";

export function CompleteOrderButton() {
  const [locale, channel] = usePathnameContext();
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      size="large"
      className={cn("w-full")}
      isDisabled={isPending}
      isPending={isPending}
      onClick={() => startTransition(() => completeCheckout(locale, channel))}>
      <FormattedMessage id="w8g8zN" defaultMessage="Complete order" />
    </Button>
  );
}
