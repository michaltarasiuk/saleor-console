export function isShippingMethod<T extends {__typename?: string}>(
  value: T,
): value is Extract<T, {__typename: "ShippingMethod"}> {
  return value.__typename === "ShippingMethod";
}

export function isCollectionPoint<T extends {__typename?: string}>(
  value: T,
): value is Extract<T, {__typename: "Warehouse"}> {
  return value.__typename === "Warehouse";
}
