import {Avatar} from "@/shared/components/Avatar";
import {Button} from "@/shared/components/Button";
import {Link} from "@/shared/components/Link";
import {LogoLink} from "@/shared/components/LogoLink";
import {Routes} from "@/shared/consts/routes";
import {HamburgerIcon} from "@/shared/icons/HamburgerIcon";
import {cn} from "@/shared/utils/cn";

import {MenuItem} from "./_components/MenuItem";
import {ProfileSwitcher} from "./_components/ProfileSwitcher";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className={cn("flex min-h-dvh flex-col")}>
      <div className={cn("bg-base-background")}>
        <Header />
      </div>
      <div className={cn("bg-base-background-subdued grow")}>
        <main className={cn("container mx-auto px-5 sm:px-0")}>{children}</main>
      </div>
      <div className={cn("bg-base-background-subdued")}>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className={cn("container mx-auto")}>
      {/* Desktop Header */}
      <div className={cn("hidden items-center justify-between py-6 sm:flex")}>
        <nav className={cn("flex items-center gap-12")}>
          <LogoLink />
          <MenuItem href={Routes.orders}>Orders</MenuItem>
        </nav>
        <div className={cn("flex items-center gap-5")}>
          <ProfileSwitcher />
          <Button>Go to store</Button>
        </div>
      </div>
      {/* Mobile Header */}
      <div
        className={cn(
          "flex items-center justify-between px-5 py-5 sm:hidden sm:px-0",
        )}>
        <HamburgerIcon aria-hidden />
        <LogoLink />
        <Avatar />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className={cn("border-base-border container mx-auto border-t py-5")}>
      <ul
        className={cn(
          "flex flex-col items-center gap-3.5 sm:flex-row sm:items-start sm:gap-5",
        )}>
        <li>
          <Link>Refund Policy</Link>
        </li>
        <li>
          <Link>Shipping Policy</Link>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li>
          <Link>Terms of Service</Link>
        </li>
      </ul>
    </footer>
  );
}
