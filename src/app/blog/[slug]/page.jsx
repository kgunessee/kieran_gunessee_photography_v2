// src/app/blog/[slug]/page.jsx
import Image from "next/image";
import { fetchEntry, fetchEntries } from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h2 className="mb-4 mt-8 text-xl font-bold">{children}</h2>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="mb-4 list-disc pl-5">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [INLINES.HYPERLINK]: (node) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        {node.content[0].value}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      return (
        <div className="shado my-4 lg:w-3/4 2xl:w-1/2">
          <Image
            style={{
              borderRadius: "0.5rem",
              boxShadow:
                " 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
            src={`https:${file.url}`}
            alt={description || title}
            height={2000}
            width={2000}
          />
        </div>
      );
    },
    [BLOCKS.HR]: () => (
      <hr className="border-t-1 mb-4 mt-8 border-almostBlack opacity-40 dark:border-almostWhite" />
    ),
  },
};

export async function generateMetadata({ params }) {
  const post = await fetchEntry(params.slug);
  const { title, description } = post.fields;

  return {
    title: title || "Blog Post",
    description: description || "An insightful blog post",
    keywords: ["photography", "astrophotography", "guides", "tutorials"],
  };
}

export async function generateStaticParams() {
  const posts = await fetchEntries();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const post = await fetchEntry(params.slug);
  const { title, date, blogImage, content } = post.fields;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  console.log(formattedDate);
  return (
    <>
      <Header />
      <div
        className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden border-t-[1px] border-white/20 bg-gradient-to-tr from-transparent from-50% lg:min-h-[calc(100dvh-80px)]`}
      >
        <article
          className={`mt-2 px-mobileXPadding text-almostBlack md:px-[10%] lg:mt-8 lg:px-[20%] dark:text-almostWhite`}
        >
          <div
            className={`mb-8 flex flex-col-reverse justify-between rounded-lg border-[1px] border-almostBlack/10 shadow-lg lg:flex-row dark:border-almostWhite/10`}
          >
            <div className={`flex flex-col justify-center p-4 lg:px-20`}>
              <div className={`mb-2 flex justify-between font-light lg:mb-4`}>
                <p>{post.fields.author.fields.authorName}</p>
                <p>{formattedDate}</p>
              </div>
              <h1 className={`text-2xl font-semibold lg:text-4xl`}>{title}</h1>
            </div>

            <figure className={`w-full`}>
              <Image
                style={{
                  borderTopRightRadius: "0.5rem",
                  borderBottomRightRadius: "0.5rem",
                  objectFit: "cover",
                }}
                src={`https:${blogImage.fields.file.url}`}
                alt={blogImage.fields.file.title}
                width={1000}
                height={300}
              />
            </figure>
          </div>
          <div>{documentToReactComponents(content, renderOptions)}</div>
        </article>
        <Footer />
      </div>
    </>
  );
}
