import {cn} from "@/shared/utils/cn";

import {Footer} from "./_components/Footer";
import {Header} from "./_components/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className={cn("flex min-h-dvh flex-col")}>
      <div className={cn("bg-base-background px-5")}>
        <Header />
      </div>
      <div className={cn("bg-base-background-subdued grow px-5")}>
        <main className={cn("mx-auto max-w-6xl")}>{children}</main>
      </div>
      <div className={cn("bg-base-background-subdued px-5")}>
        <Footer />
      </div>
    </div>
  );
}
