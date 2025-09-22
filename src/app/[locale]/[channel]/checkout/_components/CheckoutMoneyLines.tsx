import {Money} from "@/components/Money";
import {SkeletonText, Text} from "@/components/Text";
import {FormattedMessage} from "@/i18n/react-intl";
import {cn} from "@/utils/cn";

export function CheckoutMoneyLines() {
  return (
    <div className={cn("space-y-small-300")}>
      <div className={cn("flex justify-between")}>
        <Text>
          <FormattedMessage id="L8seEc" defaultMessage="Subtotal" />
        </Text>
        <Money
          money={{
            currency: "USD",
            amount: 0,
          }}
        />
      </div>
      <div className={cn("flex justify-between")}>
        <Text>
          <FormattedMessage id="PRlD0A" defaultMessage="Shipping" />
        </Text>
        <Text appearance="subdued">
          <FormattedMessage
            id="/Da0uc"
            defaultMessage="Enter shipping address"
          />
        </Text>
      </div>
      <div className={cn("flex justify-between")}>
        <Text>
          <FormattedMessage id="/+LHBr" defaultMessage="Estimated taxes" />
        </Text>
        <Money
          money={{
            currency: "USD",
            amount: 0,
          }}
        />
      </div>
      <div className={cn("flex justify-between")}>
        <Text size="large" emphasis="semibold">
          <FormattedMessage id="MJ2jZQ" defaultMessage="Total" />
        </Text>
        <Money
          money={{
            currency: "USD",
            amount: 0,
          }}
          size="large"
          emphasis="semibold"
        />
      </div>
    </div>
  );
}

export function SkeletonCheckoutMoneyLines() {
  return (
    <div className={cn("space-y-small-300")}>
      <div className={cn("flex justify-between")}>
        <SkeletonText inlineSize="small" />
        <SkeletonText inlineSize="small" />
      </div>
      <div className={cn("flex justify-between")}>
        <SkeletonText inlineSize="small" />
        <SkeletonText inlineSize="small" />
      </div>
      <div className={cn("flex justify-between")}>
        <SkeletonText />
        <SkeletonText inlineSize="small" />
      </div>
      <div className={cn("flex justify-between")}>
        <SkeletonText size="large" inlineSize="small" />
        <SkeletonText size="large" inlineSize="small" />
      </div>
    </div>
  );
}
