export const Routes = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  orders: "/orders",
  profile: "/profile",
  settings: "/settings",
  order(id: string) {
    return `/orders/${id}`;
  },
};
