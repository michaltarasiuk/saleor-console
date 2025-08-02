import "@/styles/globals.css";

import type {ApolloClient} from "@apollo/client";

import {graphql} from "@/graphql/codegen";
import {getClient} from "@/graphql/server-client";

interface ChannelLayoutProps {
  children: React.ReactNode;
}

export default async function ChannelLayout({children}: ChannelLayoutProps) {
  return children;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const client = getClient();
  const channels = await getActiveChannelSlugs(client);
  return channels.map((channel) => ({
    channel,
  }));
}

async function getActiveChannelSlugs(client: ApolloClient<unknown>) {
  const {data} = await client.query({
    query: ChannelSlugsQuery,
  });
  const slugs: string[] = [];
  for (const channel of data.channels ?? []) {
    if (channel.isActive) {
      slugs.push(channel.slug);
    }
  }
  return slugs;
}

const ChannelSlugsQuery = graphql(`
  query ChannelSlugs {
    channels {
      slug
      isActive
    }
  }
`);
