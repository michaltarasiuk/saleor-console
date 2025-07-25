import {Routes} from "@/consts/routes";
import {IntlLink} from "@/i18n/components/IntlLink";
import type {Locale} from "@/i18n/consts";
import {FormattedMessage} from "@/i18n/react-intl";

import {SignupForm} from "../_components/SignupForm";

interface SignupPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function SignupPage({params}: SignupPageProps) {
  const {locale} = await params;
  return (
    <>
      <SignupForm locale={locale} />
      <IntlLink href={Routes.signin}>
        <FormattedMessage
          id="JapGs4"
          defaultMessage="Already have an account? Sign in"
        />
      </IntlLink>
    </>
  );
}
