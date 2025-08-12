import {cn} from "../utils/cn";

export function Skeleton({className}: {className?: string}) {
  return (
    <div
      className={cn("rounded-base bg-base-border animate-pulse", className)}
    />
  );
}
