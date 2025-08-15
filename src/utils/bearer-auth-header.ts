export function bearerAuthHeader(token: string) {
  return ["Authorization", `Bearer ${token}`] as const satisfies [
    string,
    string,
  ];
}
