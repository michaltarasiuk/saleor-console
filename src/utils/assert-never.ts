export function assertNever(...values: never[]): never {
  throw new Error(`Received unexpected value(s): ${values.join(", ")}`);
}
