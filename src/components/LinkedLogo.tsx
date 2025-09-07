"use client";

import Image from "next/image";

import {IntlLink} from "@/i18n/components/IntlLink";
import {useIntl} from "@/i18n/react-intl";

import {Routes} from "../consts/routes";

export function LinkedLogo() {
  const intl = useIntl();
  return (
    <IntlLink href={Routes.home}>
      <Image
        src="/logo.png"
        alt={intl.formatMessage({
          id: "k81S1y",
          defaultMessage: "Logo",
        })}
        width={112}
        height={36}
        priority
      />
    </IntlLink>
  );
}
