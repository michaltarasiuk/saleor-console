import {Text} from "@/shared/components/Text";
import {cn} from "@/shared/utils/cn";

import {PageTitle} from "../_components/PageTitie";
import {AddAddressDialog} from "./_components/AddAddressDialog";
import {Card, CardHeader} from "./_components/Card";
import {EditProfileDialog} from "./_components/EditProfileDialog";

export default function ProfilePage() {
  return (
    <>
      <PageTitle title="Profile" />
      <div className={cn("space-y-large-300")}>
        <Card className={cn("space-y-base")}>
          <CardHeader className={cn("gap-small-300")}>
            <Text>Kristin Watson</Text>
            <EditProfileDialog />
          </CardHeader>
        </Card>
        <Card className={cn("space-y-large-200")}>
          <CardHeader className={cn("gap-base")}>
            <Text>Address</Text>
            <AddAddressDialog />
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
