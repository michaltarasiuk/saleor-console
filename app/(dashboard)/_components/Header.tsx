import {Avatar} from "@/shared/components/Avatar";
import {Button} from "@/shared/components/Button";
import {IconButton} from "@/shared/components/IconButton";
import {LogoLink} from "@/shared/components/LogoLink";
import {Routes} from "@/shared/consts/routes";
import {HamburgerIcon} from "@/shared/icons/HamburgerIcon";
import {cn} from "@/shared/utils/cn";

import {MenuItem} from "./MenuItem";
import {ProfileSwitcher} from "./ProfileSwitcher";

export function Header() {
  return (
    <header className={cn("mx-auto max-w-6xl")}>
      {/* Desktop header */}
      <div className={cn("hidden items-center justify-between py-6 md:flex")}>
        <nav className={cn("flex items-center gap-12")}>
          <LogoLink priority />
          <MenuItem href={Routes.orders}>Orders</MenuItem>
        </nav>
        <div className={cn("flex items-center gap-5")}>
          <ProfileSwitcher />
          <Button>Go to store</Button>
        </div>
      </div>
      {/* Mobile header */}
      <div className={cn("flex items-center justify-between py-5 md:hidden")}>
        <IconButton aria-label="Open main navigation" className={cn("size-10")}>
          <HamburgerIcon aria-hidden />
        </IconButton>
        <LogoLink priority />
        <Avatar />
      </div>
    </header>
  );
}
