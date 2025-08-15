import {AddressFieldset} from "@/components/AddressFieldset";
import {Heading, SkeletonHeading} from "@/components/Heading";
import {SkeletonAddressFieldset} from "@/components/SkeletonAddressFieldset";
import {FormattedMessage} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

export function ShippingAddress() {
  return (
    <section className={cn("space-y-base")}>
      <Heading>
        <FormattedMessage id="DP5VOH" defaultMessage="Shipping Address" />
      </Heading>
      <AddressFieldset />
    </section>
  );
}

export function SkeletonShippingAddress() {
  return (
    <div className={cn("space-y-base")}>
      <SkeletonHeading />
      <SkeletonAddressFieldset />
    </div>
  );
}
