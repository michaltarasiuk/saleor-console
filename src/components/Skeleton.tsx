import {cva, type VariantProps} from "class-variance-authority";

import type {text} from "../styles/text";
import {cn} from "../utils/cn";
import {Text} from "./Text";

export function Skeleton({className}: {className?: string}) {
  return (
    <div
      aria-hidden
      className={cn("rounded-base bg-base-border animate-pulse", className)}
    />
  );
}

interface SkeletonTextProps
  extends Pick<VariantProps<typeof text>, "size">,
    VariantProps<typeof skeletonText> {
  className?: string;
}

export function SkeletonText({
  inlineSize,
  className,
  ...props
}: SkeletonTextProps) {
  return (
    <Text
      aria-hidden
      className={cn(
        skeletonText({
          inlineSize,
        }),
        className,
      )}
      {...props}>
      &#8203;{/* Zero-width space */}
      <Skeleton className={cn("absolute h-4/5 w-full")} />
    </Text>
  );
}

const skeletonText = cva("relative flex w-full items-center", {
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
