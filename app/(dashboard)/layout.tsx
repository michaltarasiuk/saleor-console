import {cn} from "@/shared/utils/cn";

import {Footer} from "./_components/Footer";
import {Header} from "./_components/Header";

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
