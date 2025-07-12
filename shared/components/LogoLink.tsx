import Image, {type ImageProps} from "next/image";

import {Routes} from "../consts/routes";
import {Link} from "./Link";

export function LogoLink({
  src = "/logo.png",
  alt = "",
  width = 112,
  height = 36,
  ...props
}: Partial<ImageProps>) {
  return (
    <Link href={Routes.home} aria-label="Go to homepage">
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </Link>
  );
}
