import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  ogImage,
  noIndex = false,
}: SEOProps) {
  const router = useRouter();

  const siteTitle = "Aghead Alkoko | Full-Stack Developer";

  const displayTitle = title ? `${title} | Aghead Alkoko` : siteTitle;

  const displayDesc =
    description ||
    "Full-Stack Developer based in Vienna, Austria, building modern web applications, scalable software solutions, and digital products.";

  const siteUrl = "https://www.agheadalkoko.com";

  const cleanPath = router.asPath.split("?")[0].split("#")[0];

  const currentUrl = cleanPath === "/" ? siteUrl : `${siteUrl}${cleanPath}`;

  const defaultOgImage = `${siteUrl}/images/og-default.jpg`;

  const resolvedOgImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteUrl}${ogImage}`
    : defaultOgImage;

  return (
    <Head>
      <title>{displayTitle}</title>

      <meta name="description" content={displayDesc} />

      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aghead Alkoko" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDesc} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:alt" content={displayTitle} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDesc} />
      <meta name="twitter:image" content={resolvedOgImage} />
    </Head>
  );
}
