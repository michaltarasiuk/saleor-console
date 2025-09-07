"use client";

import {cva, type VariantProps} from "class-variance-authority";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps,
  Popover,
} from "react-aria-components";

import {cn} from "../utils/cn";

export {MenuTrigger} from "react-aria-components";

export function Menu<T extends object>({children, ...props}: MenuProps<T>) {
  return (
    <Popover>
      <AriaMenu
        {...props}
        className={cn(
          "p-base gap-small-500 bg-base-background rounded-base border-base-border shadow-extra-large flex w-64 flex-col border",
          "outline-none",
          props.className,
        )}>
        {children}
      </AriaMenu>
    </Popover>
  );
}

const menuItem = cva(
  [
    "px-base py-small-200 font-primary text-control-text rounded-small cursor-pointer text-base",
    "hover:bg-base-background-subdued",
    "focus-visible:bg-base-background-subdued outline-none",
    "disabled:cursor-default disabled:opacity-50",
    "data-route-match:underline data-route-match:underline-offset-2",
  ],
  {
    variants: {
      critical: {
        true: "text-critical hover:bg-critical-background-subdued",
      },
    },
  },
);

interface MenuItemProps<T>
  extends AriaMenuItemProps<T>,
    VariantProps<typeof menuItem> {}

export function MenuItem<T extends object>({
  children,
  critical,
  ...props
}: MenuItemProps<T>) {
  return (
    <AriaMenuItem
      {...props}
      className={cn(
        menuItem({
          critical,
        }),
        props.className,
      )}>
      {children}
    </AriaMenuItem>
  );
}
