import {Button} from "@/shared/components/Button";

export function CancelButton({onClick}: {onClick: () => void}) {
  return (
    <Button kind="plain" onClick={onClick}>
      Cancel
    </Button>
  );
}
