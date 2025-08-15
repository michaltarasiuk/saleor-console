"use client";

import {cva, type VariantProps} from "class-variance-authority";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import {cn} from "@/utils/cn";

import {text} from "../styles/text";
import {Skeleton} from "./Skeleton";

interface TextProps extends AriaTextProps, VariantProps<typeof text> {}

export function Text({
  children,
  appearance,
  emphasis,
  size,
  ...props
}: TextProps) {
  return (
    <AriaText
      elementType="span"
      {...props}
      className={cn(
        text({
          appearance,
          emphasis,
          size,
        }),
        props.className,
      )}>
      {children}
    </AriaText>
  );
}

interface SkeletonTextProps
  extends Pick<VariantProps<typeof text>, "size">,
    VariantProps<typeof skeletonText> {
  className?: string;
}

export function SkeletonText({inlineSize, ...props}: SkeletonTextProps) {
  return (
    <Text
      aria-hidden
      {...props}
      className={cn("relative flex w-full items-center", props.className)}>
      &#8203;
      <Skeleton
        className={cn(
          skeletonText({
            inlineSize,
          }),
        )}
      />
    </Text>
  );
}

const skeletonText = cva("absolute h-4/5 w-full", {
  variants: {
    inlineSize: {
      small: "max-w-20",
      base: "max-w-44",
      large: "max-w-64",
    },
  },
  defaultVariants: {
    inlineSize: "base",
  },
});
