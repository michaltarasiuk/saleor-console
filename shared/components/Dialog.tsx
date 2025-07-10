"use client";

import {Dialog as AriaDialog, type DialogProps} from "react-aria-components";

import {cn} from "../utils/cn";

export {DialogTrigger} from "react-aria-components";

export function Dialog({children, ...props}: DialogProps) {
  return (
    <AriaDialog
      {...props}
      className={cn(
        "bg-base-background p-large-200 size-full",
        "outline-none",
        props.className,
      )}>
      {children}
    </AriaDialog>
  );
}
