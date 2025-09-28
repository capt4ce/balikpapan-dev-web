import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Balikpapan.dev - Developer Community",
  description = "Balikpapan developer community - helping programmers grow and fostering the tech ecosystem in East Kalimantan",
  image = "https://balikpapan.dev/og-image.jpg",
  url = "https://balikpapan.dev",
  type = "website"
}: SEOProps) {
  const fullTitle = title.includes("Balikpapan.dev") ? title : `${title} | Balikpapan.dev`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Balikpapan.dev" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Balikpapan.dev Community" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}