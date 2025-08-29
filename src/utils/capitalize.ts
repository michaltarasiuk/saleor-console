import invariant from "tiny-invariant";

export function capitalize(value: string) {
  const [first, ...rest] = value;
  invariant(first);
  return first.toUpperCase() + rest.join("").toLowerCase();
}
