import "@/styles/globals.css";
import "@/styles/brands/plant.css";

import type {Viewport} from "next";

import {ApolloProvider} from "@/graphql/ApolloProvider";

import {Html} from "./_components/Html";
import {RouterProvider} from "./_components/RouterProvider";

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({children}: RootLayoutProps) {
  return (
    <Html>
      <body>
        <RouterProvider>
          <ApolloProvider>{children}</ApolloProvider>
        </RouterProvider>
      </body>
    </Html>
  );
}
