import { fetchEntries } from "@/contentful";

export default async function sitemap() {
  const pages = [
    "astrophotography",
    "water",
    "woodland",
    "landscape",
    "macro",
    "iceland",
    "midlands",
    "peak-district",
    "devon",
    "blog",
    "equipment",
    "gallery-menu",
    "locations",
  ];

  const posts = await fetchEntries();

  const blogPosts = posts.map((post) => {
    return { url: `${process.env.NEXT_PUBLIC_BASE_URL}${post.fields.slug}` };
  });

  const pageUrl = pages.map((page) => {
    return { url: `${process.env.NEXT_PUBLIC_BASE_URL}${page}` };
  });

  return [...pageUrl, ...blogPosts];
}
