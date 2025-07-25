import {Routes} from "@/consts/routes";
import {IntlLink} from "@/i18n/components/IntlLink";
import type {Locale} from "@/i18n/consts";
import {FormattedMessage} from "@/i18n/react-intl";

import {SigninForm} from "../_components/SigninForm";

interface SigninPageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function SigninPage({params}: SigninPageProps) {
  const {locale} = await params;
  return (
    <>
      <SigninForm locale={locale} />
      <IntlLink href={Routes.signup}>
        <FormattedMessage
          id="jq3zbE"
          defaultMessage="Don't have an account? Sign up"
        />
      </IntlLink>
    </>
  );
}
