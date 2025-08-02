import {type Locale, Locales} from "@/i18n/consts";
import {IntlProvider} from "@/i18n/IntlProvider";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {locale} = await params;
  return <IntlProvider locale={locale}>{children}</IntlProvider>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Locales.map((locale) => ({
    locale,
  }));
}
