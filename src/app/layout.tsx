import "@/styles/globals.css";

import {ApolloProvider} from "@/graphql/ApolloProvider";

import {Html} from "./_components/Html";
import {RouterProvider} from "./_components/RouterProvider";

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
