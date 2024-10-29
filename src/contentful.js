import { createClient } from "contentful";
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries.items;
}

export async function fetchEntry(slug) {
  const entries = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });
  return entries.items[0];
}
