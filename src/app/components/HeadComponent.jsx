import Head from "next/head";

export function HeadComponent(title, keywords, description) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kieran Gunessee" key={"author"} />
      <link rel="icon" href="/favicon.ico" sizes="any" key={"favicon"} />
    </Head>
  );
}
