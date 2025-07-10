"use client";

import {Button} from "@/shared/components/Button";
import {Dialog, DialogTrigger} from "@/shared/components/Dialog";
import {Form} from "@/shared/components/Form";
import {Modal} from "@/shared/components/Modal";
import {cn} from "@/shared/utils/cn";

import {CancelButton} from "./CancelButton";
import {DeleteAddressDialog} from "./DeleteAddressDialog";
import {DialogHeader} from "./DialogHeader";
import {AddressFieldset} from "./Fieldset";
import {SaveButton} from "./SaveButton";

export function EditAddressDialog() {
  return (
    <DialogTrigger>
      <Button>Edit Address</Button>
      <Modal size="large" isDismissable>
        <Dialog className={cn("space-y-base")}>
          {({close}) => (
            <>
              <DialogHeader title="Edit address" onClose={close} />
              <EditAddressForm
                cancelButton={<CancelButton onClick={close} />}
              />
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

function EditAddressForm({cancelButton}: {cancelButton: React.ReactNode}) {
  return (
    <Form className={cn("space-y-base")}>
      <AddressFieldset />
      <div className={cn("gap-base flex justify-between")}>
        <DeleteAddressDialog />
        <div className={cn("space-x-base")}>
          {cancelButton}
          <SaveButton />
        </div>
      </div>
    </Form>
  );
}
