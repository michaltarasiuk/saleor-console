import {Button} from "@/shared/components/Button";
import {Heading, HeadingGroup} from "@/shared/components/Heading";
import {TextBlock} from "@/shared/components/Text";
import {LockIcon} from "@/shared/icons/LockIcon";
import {cn} from "@/shared/utils/cn";

import {PageTitle} from "../_components/PageTitie";

export default function SettingsPage() {
  return (
    <>
      <PageTitle title="Settings" />
      <HeadingGroup>
        <section
          className={cn(
            "gap-large-200 sm:gap-large-400 grid sm:grid-cols-[1fr_2fr]",
          )}
          aria-labelledby="logout-everywhere-heading">
          <LogoutEverywhereHeader />
          <LogoutEverywhereActions />
        </section>
      </HeadingGroup>
    </>
  );
}

function LogoutEverywhereHeader() {
  return (
    <header className={cn("gap-small-400 flex flex-col justify-center")}>
      <div className={cn("gap-small-200 flex items-center")}>
        <LockIcon aria-hidden />
        <Heading id="logout-everywhere-heading">Log out everywhere</Heading>
      </div>
      <TextBlock appearance="subdued">
        If you&apos;ve lost a device or have security concerns, log out
        everywhere to ensure the security of your account.
      </TextBlock>
    </header>
  );
}

function LogoutEverywhereActions() {
  return (
    <aside
      className={cn(
        "gap-base flex flex-col md:flex-row md:items-center",
        "p-large-200 rounded-base bg-base-background",
      )}
      aria-describedby="logout-everywhere-heading">
      <Button kind="secondary" type="button" aria-describedby="logout-warning">
        Log out everywhere
      </Button>
      <TextBlock appearance="subdued" id="logout-warning">
        You will be logged out on this device as well.
      </TextBlock>
    </aside>
  );
}
