import {IntlLink} from "@/i18n/components/IntlLink";
import {ChevronLeftIcon} from "@/icons/ChevronLeftIcon";
import {cn} from "@/utils/cn";

interface ReturnLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ReturnLink({href, children}: ReturnLinkProps) {
  return (
    <IntlLink
      href={href}
      className={cn("gap-small-200 flex items-center justify-center")}>
      <ChevronLeftIcon aria-hidden className={cn("stroke-base-accent")} />
      {children}
    </IntlLink>
  );
}
