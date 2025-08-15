import {cn} from "@/utils/cn";

import {SkeletonText} from "./SkeletonText";

export function SkeletonCheckbox() {
  return (
    <div className={cn("gap-small-100 flex items-center")}>
      <div
        className={cn(
          "border-base-border rounded-small size-5 shrink-0 border",
        )}
      />
      <SkeletonText />
    </div>
  );
}
