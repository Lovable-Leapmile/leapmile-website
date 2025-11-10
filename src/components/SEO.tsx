import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEO = ({
  title = "Leapmile Robotics | Nano Warehouse Automation & Intelligent Fulfillment Solutions",
  description = "Leapmile Robotics revolutionizes warehouse fulfillment operations through advanced robotics automation. Our platform efficiently handles storage, retrieval, picking, auditing, and dispatch — transforming traditional warehouse facilities into smart, autonomous environments.",
  keywords = "warehouse automation, nano warehouse, robotic storage, automated retrieval, smart logistics, warehouse fulfillment robots, robotic picking systems, Leapmile Robotics, intelligent warehouse, automated warehouse systems",
  canonical,
  ogImage = "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/leapmile_thum.jpg",
  schemaData,
}: SEOProps) => {
  const siteUrl = "https://leapmileweb.lovable.app";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
