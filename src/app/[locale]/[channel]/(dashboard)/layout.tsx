import {Footer} from "@/components/Footer";
import type {Locale} from "@/i18n/consts";
import {cn} from "@/utils/cn";

import {Header} from "./_components/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const {locale} = await params;
  return (
    <div className={cn("flex min-h-dvh flex-col")}>
      <div className={cn("bg-base-background px-large-200")}>
        <Header locale={locale} />
      </div>
      <div className={cn("bg-base-background-subdued px-large-200 grow")}>
        <main className={cn("mx-auto mb-9 max-w-6xl")}>{children}</main>
      </div>
      <div className={cn("bg-base-background-subdued px-large-200")}>
        <Footer />
      </div>
    </div>
  );
}
