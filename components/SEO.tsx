import Head from "next/head";

type Props = {
  url?: string;
  ogImage?: string;
};

export const SEO: React.FC<Props> = (props) => {
  const title = `LGTM画像だお`;
  const url = props.url || "";
  const ogImage = props.ogImage || "";
  const description = `LGTM画像だお`;

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:image:src" content={ogImage} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:text:description" content={description} />
        </>
      )}
    </Head>
  );
};
