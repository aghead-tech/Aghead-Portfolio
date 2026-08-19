import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export function SEO({
  title,
  description,
  keywords,
  ogImage,
}: SEOProps) {
  const router = useRouter();

  const siteTitle = "Aghead Alkoko | Full-Stack Developer";

  const displayTitle = title
    ? `${title} | Aghead Alkoko`
    : siteTitle;

  const displayDesc =
    description ||
    "Full-Stack Developer based in Vienna, Austria, building modern web applications, scalable software solutions, and digital products.";

  const siteUrl = "https://www.agheadalkoko.com";

  const currentUrl = `${siteUrl}${router.asPath}`;

  const defaultOgImage = `${siteUrl}/images/og-default.jpg`;

  return (
    <Head>
      <title>{displayTitle}</title>

      <meta name="description" content={displayDesc} />

      {keywords && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <link rel="canonical" href={currentUrl} />

      {/*--====-- Open Graph --====--*/}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aghead Alkoko" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDesc} />
      <meta
        property="og:image"
        content={ogImage || defaultOgImage}
      />

      {/*--====-- Twitter --====--*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDesc} />
      <meta
        name="twitter:image"
        content={ogImage || defaultOgImage}
      />
    </Head>
  );
}