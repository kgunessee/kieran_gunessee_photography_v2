// src/app/blog/page.jsx
import Link from "next/link";
import { fetchEntries } from "@/contentful";
import Image from "next/image";
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Blog",
  description:
    "My blog, offering guides, tutorials, tips and insight into photography and astrophotography. ",
  keywords: [
    "photography blog,astrophotography blog, guides, tutorials, photography",
  ],
};

const formatDate = (dateInput) => {
  return new Date(dateInput).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};

export default async function BlogListPage() {
  const posts = await fetchEntries();

  return (
    <>
      <Header />

      <section
        className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden border-t-[1px] border-white/20 bg-gradient-to-tr from-transparent from-50% lg:min-h-[calc(100dvh-80px)]`}
      >
        <main className={`px-mobileXPadding lg:px-desktopXPadding`}>
          <h1
            className={`my-4 text-2xl font-semibold text-almostBlack dark:text-almostWhite`}
          >
            Blog
          </h1>
          <ul
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}
          >
            {posts.map((post, index) => (
              <li
                className={`group w-fit rounded-lg border-[1px] border-almostBlack/10 shadow-xl dark:border-almostWhite/10`}
                key={post.sys.id}
              >
                <Link href={`/blog/${post.fields.slug}`}>
                  <div className={`blog-img-card w-full overflow-hidden`}>
                    <Image
                      className={`h-56 rounded-t-lg object-cover brightness-75 transition duration-200 group-hover:brightness-100 sm:h-full`}
                      src={`https:${post.fields.blogImage.fields.file.url}`}
                      alt={"img"}
                      width={2000}
                      height={2000}
                    />
                  </div>
                  <div
                    className={`flex flex-col p-8 text-almostBlack dark:text-almostWhite`}
                  >
                    <div className={`mb-2 flex justify-between opacity-80`}>
                      <p>{formatDate(post.fields.date)}</p>
                      <p>{post.fields.author.fields.authorName}</p>
                    </div>
                    <h3 className={`text-xl font-semibold`}>
                      {post.fields.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </section>
    </>
  );
}
