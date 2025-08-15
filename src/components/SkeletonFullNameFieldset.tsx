import {cn} from "@/utils/cn";

import {SkeletonInput} from "./SkeletonInput";

export function SkeletonFullNameFieldset() {
  return (
    <div className={cn("gap-base grid grid-cols-1 sm:grid-cols-2")}>
      <SkeletonInput />
      <SkeletonInput />
    </div>
  );
}
