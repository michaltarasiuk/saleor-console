import {Footer} from "@/components/Footer";
import {HeadingGroup} from "@/components/Heading";
import {LinkedLogo} from "@/components/LinkedLogo";
import {OrderSummaryDisclosure} from "@/components/OrderSummaryDisclosure";
import type {Locale} from "@/i18n/consts";
import {cn} from "@/utils/cn";

interface CheckoutLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function CheckoutLayout({
  children,
  params,
}: CheckoutLayoutProps) {
  const {locale} = await params;
  return (
    <div className={cn("flex min-h-dvh flex-col")}>
      <header className={cn("bg-base-background p-large-200 flex")}>
        <LinkedLogo locale={locale} />
      </header>
      <OrderSummaryDisclosure />
      <main
        className={cn(
          "bg-base-background-subdued p-large-200 space-y-large-300 grow",
        )}>
        <HeadingGroup>{children}</HeadingGroup>
      </main>
      <Footer />
    </div>
  );
}
