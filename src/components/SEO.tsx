import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBaseUrl } from "@/lib/utils";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tagName?: string[];
  };
}

export function SEO({
  title = "Balikpapan.dev - Developer Community",
  description = "Balikpapan developer community — helping programmers grow and fostering the tech ecosystem in East Kalimantan.",
  image = "/og-image.jpg",
  url,
  type = "website",
  articleMeta,
}: SEOProps) {
  const location = useLocation();

  // Build page-specific metadata
  const cleanTitle = title.trim();
  const finalTitle = cleanTitle === "Balikpapan.dev - Developer Community"
    ? cleanTitle
    : `${cleanTitle} | Balikpapan.dev`;

  const finalUrl = url
    ? new URL(url, getBaseUrl()).toString()
    : new URL(location.pathname, getBaseUrl()).toString();

  const finalImage = image.startsWith("http")
    ? image
    : `${getBaseUrl()}${image}`;

  // Inject JSON-LD structured data into document head
  useEffect(() => {
    const isArticlePage = type === "article";

    // Organization schema (always present)
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Balikpapan.dev",
      "url": getBaseUrl(),
      "logo": `${getBaseUrl()}/favicon.ico`,
      "description": "Komunitas developer Balikpapan — membantu programmer berkembang dan membangun ekosistem teknologi di Kalimantan Timur.",
      "sameAs": [
        "https://twitter.com/balikpapandev",
        "https://github.com/balikpapan-dev",
        "https://linkedin.com/company/balikpapan-dev",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@balikpapan.dev",
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"],
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Balikpapan",
        "addressRegion": "Kalimantan Timur",
        "addressCountry": "ID",
      },
    });
    document.head.appendChild(orgScript);

    // Article schema (only on article pages)
    if (isArticlePage && articleMeta) {
      const articleScript = document.createElement("script");
      articleScript.type = "application/ld+json";
      articleScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": finalImage,
        "author": {
          "@type": "Person",
          "name": articleMeta.author ?? "Team Balikpapan.dev",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Balikpapan.dev",
          "logo": {
            "@type": "ImageObject",
            "url": `${getBaseUrl()}/favicon.ico`,
          },
        },
        "datePublished": articleMeta.publishedTime ?? new Date().toISOString(),
        ...(articleMeta.modifiedTime
          ? { "dateModified": articleMeta.modifiedTime }
          : {}),
        "articleSection": articleMeta.tagName?.[0] ?? "Community",
        "wordCount": description.split(/\s+/).length,
        "inLanguage": "id-ID",
      });
      document.head.appendChild(articleScript);
    }

    // Breadcrumbs schema (except homepage)
    if (location.pathname !== "/") {
      const breadcrumbScript = document.createElement("script");
      breadcrumbScript.type = "application/ld+json";
      const isPostDetail = location.pathname.startsWith("/posts/");
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
          ...(isPostDetail
            ? [
                { "@type": "ListItem", position: 2, name: "Articles", item: `${getBaseUrl()}/posts` },
                { "@type": "ListItem", position: 3, name: title, item: finalUrl },
              ]
            : location.pathname === "/posts"
            ? [{ "@type": "ListItem", position: 2, name: "Articles", item: `${getBaseUrl()}/posts` }]
            : location.pathname === "/about"
            ? [{ "@type": "ListItem", position: 2, name: "About", item: `${getBaseUrl()}/about` }]
            : []),
        ].filter(Boolean),
      });
      document.head.appendChild(breadcrumbScript);
    }

    return () => {
      document.head.removeChild(orgScript);
      if (isArticlePage) {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        scripts.forEach((s) => {
          if (s.textContent.includes('"BlogPosting"')) s.remove();
        });
      }
      if (location.pathname !== "/") {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        scripts.forEach((s) => {
          if (s.textContent.includes('"BreadcrumbList"')) s.remove();
        });
      }
    };
  }, [title, description, finalImage, finalUrl, type, articleMeta, location.pathname]);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="Indonesian" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Balikpapan.dev" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={`Banner ${finalTitle}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      {type === "article" && articleMeta?.publishedTime && (
        <meta property="article:published_time" content={articleMeta.publishedTime} />
      )}
      {type === "article" && articleMeta?.modifiedTime && (
        <meta property="article:modified_time" content={articleMeta.modifiedTime} />
      )}
      {type === "article" && articleMeta?.author && (
        <meta property="article:author" content={articleMeta.author} />
      )}
      {type === "article" && articleMeta?.tagName && articleMeta.tagName.length > 0 && (
        <meta property="article:section" content={articleMeta.tagName[0]} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@balikpapandev" />
      <meta name="twitter:creator" content="@balikpapandev" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={`Banner ${finalTitle}`} />
    </Helmet>
  );
}