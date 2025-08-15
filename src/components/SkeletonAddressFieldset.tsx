import {cn} from "@/utils/cn";

import {SkeletonFullNameFieldset} from "./SkeletonFullNameFieldset";
import {SkeletonInput} from "./SkeletonInput";

export function SkeletonAddressFieldset() {
  return (
    <div className={cn("space-y-base")}>
      <SkeletonInput />
      <SkeletonFullNameFieldset />
      <SkeletonInput />
      <SkeletonInput />
      <div className={cn("gap-base grid grid-cols-1 sm:grid-cols-2")}>
        <SkeletonInput />
        <SkeletonInput />
      </div>
    </div>
  );
}
