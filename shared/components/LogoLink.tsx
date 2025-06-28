import Image from "next/image";
import {Link} from "./Link";
import {Routes} from "../consts/routes";

export function LogoLink(props: {className?: string}) {
  return (
    <Link href={Routes.home} aria-label="Go to homepage" {...props}>
      <Image src="/logo.png" alt="" width={112} height={35} />
    </Link>
  );
}
