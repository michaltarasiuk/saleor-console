import {Heading} from "@/shared/components/Heading";
import {IconButton} from "@/shared/components/IconButton";
import {CloseIcon} from "@/shared/icons/CloseIcon";
import {cn} from "@/shared/utils/cn";

export function DialogHeader({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  return (
    <header className={cn("flex items-center justify-between")}>
      <Heading level={2}>{title}</Heading>
      <IconButton aria-label="Close" className={cn("size-6")} onClick={onClose}>
        <CloseIcon aria-hidden />
      </IconButton>
    </header>
  );
}
