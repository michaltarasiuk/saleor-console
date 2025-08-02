"use client";

import {cva, type VariantProps} from "class-variance-authority";

import {useIntl} from "@/i18n/react-intl";
import {SpinnerIcon} from "@/icons/SpinnerIcon";
import {cn} from "@/utils/cn";

const spinner = cva("animate-spin [animation-duration:0.5s]", {
  variants: {
    size: {
      extraSmall: "size-2.5",
      small: "size-3.5",
      base: "size-4.5",
      large: "size-7.5",
      fill: "size-full",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

export function Spinner({size}: VariantProps<typeof spinner>) {
  const intl = useIntl();
  return (
    <SpinnerIcon
      aria-label={intl.formatMessage({
        id: "iFsDVR",
        defaultMessage: "Loading",
      })}
      className={cn(
        spinner({
          size,
        }),
      )}
    />
  );
}
