import {joinPathSegments} from "@/utils/join-path-segments";

export const Routes = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  orders: "/orders",
  profile: "/profile",
  settings: "/settings",
  order(id: string) {
    return joinPathSegments(this.orders, id);
  },
};
