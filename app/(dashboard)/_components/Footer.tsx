import {Link} from "@/shared/components/Link";
import {cn} from "@/shared/utils/cn";

export function Footer() {
  return (
    <footer
      className={cn("border-base-border container mx-auto border-t py-5")}>
      <ul
        className={cn(
          "flex flex-col items-center gap-3.5 sm:flex-row sm:items-start sm:gap-5",
        )}>
        <li>
          <Link>Refund Policy</Link>
        </li>
        <li>
          <Link>Shipping Policy</Link>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        <li>
          <Link>Terms of Service</Link>
        </li>
      </ul>
    </footer>
  );
}
