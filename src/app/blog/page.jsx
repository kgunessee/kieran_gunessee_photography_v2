// src/app/blog/page.jsx
import Link from "next/link";
import { fetchEntries } from "@/contentful";
import Image from "next/image";

export default async function BlogListPage() {
  const posts = await fetchEntries();
  console.log(posts[0].fields.blogImage.fields.file.url);
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
            <Image
              src={`https:${post.fields.blogImage.fields.file.url}`}
              alt={"img"}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
