import {Heading} from "@/shared/components/Heading";
import {cn} from "@/shared/utils/cn";

interface PageTitleProps {
  title: string;
  children?: React.ReactNode;
}

export function PageTitle({title, children}: PageTitleProps) {
  return (
    <header className={cn("flex min-h-24 items-center justify-between py-6")}>
      <Heading>{title}</Heading>
      {children}
    </header>
  );
}
