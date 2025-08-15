import {CheckoutBreadcrumbs} from "./_components/CheckoutBreadcrumbs";

interface CheckoutTemplateProps {
  children: React.ReactNode;
}

export default function CheckoutTemplate({children}: CheckoutTemplateProps) {
  return (
    <>
      <CheckoutBreadcrumbs />
      {children}
    </>
  );
}
