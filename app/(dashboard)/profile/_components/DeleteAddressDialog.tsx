import {Button} from "@/shared/components/Button";
import {Dialog, DialogTrigger} from "@/shared/components/Dialog";
import {Modal} from "@/shared/components/Modal";
import {Text} from "@/shared/components/Text";
import {cn} from "@/shared/utils/cn";

import {DialogHeader} from "./DialogHeader";

export function DeleteAddressDialog() {
  return (
    <DialogTrigger>
      <Button kind="plain" appearance="critical">
        Delete
      </Button>
      <Modal size="medium" isDismissable>
        <Dialog>
          {({close}) => (
            <>
              <DialogHeader title="Delete address?" onClose={close} />
              <Text>Existing orders are not affected.</Text>
              <div className={cn("gap-small-200 mt-base flex justify-end")}>
                <Button kind="plain" onClick={close}>
                  Back
                </Button>
                <Button appearance="critical">Delete address</Button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
