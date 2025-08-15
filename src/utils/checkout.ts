const CheckoutIdStorageKey = "checkout-id";

export function getCheckoutId() {
  return localStorage.getItem(CheckoutIdStorageKey);
}

export function setCheckoutId(checkoutId: string) {
  localStorage.setItem(CheckoutIdStorageKey, checkoutId);
}
