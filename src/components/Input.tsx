import {cn} from "@/utils/cn";
import {Input as AriaInput, type InputProps} from "react-aria-components";

export function Input(props: InputProps) {
  return (
    <AriaInput
      {...props}
      className={cn(
        "rounded-base font-primary border-control-border bg-control-background text-control-text h-[3.25rem] border p-3 text-base transition-all duration-300",
        "placeholder:text-control-text-subdued [&:not(:placeholder-shown)]:pt-6",
        "focus:ring-control-accent/50 focus:border-control-accent outline-none focus:shadow-none focus:ring-3",
        "invalid:border-critical invalid:ring-critical invalid:ring-1",
        "disabled:bg-[#F8F8F8] disabled:opacity-50",
        props.className,
      )}
    />
  );
}
