// src/app/blog/[slug]/page.jsx
import { fetchEntry, fetchEntries } from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const posts = await fetchEntries();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const post = await fetchEntry(params.slug);
  console.log(post.fields);
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.date}</p>
      <div>{documentToReactComponents(post.fields.content)}</div>
    </div>
  );
}
