import {cn} from "@/shared/utils/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "p-large-200 rounded-large bg-base-background flex flex-col",
        className,
      )}>
      {children}
    </section>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex items-center justify-between sm:justify-start",
        className,
      )}>
      {children}
    </header>
  );
}
