import {cn} from "@/utils/cn";

import {SkeletonText} from "./SkeletonText";

export function SkeletonInput() {
  return (
    <div
      className={cn(
        "h-input rounded-base border-base-border p-base flex items-center border",
      )}>
      <SkeletonText />
    </div>
  );
}
