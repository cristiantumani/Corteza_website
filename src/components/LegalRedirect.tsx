import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface LegalRedirectProps {
  title: string;
  url: string;
}

/** Old /privacy and /terms: the documents moved to the app (see src/lib/legal.ts) */
const LegalRedirect = ({ title, url }: LegalRedirectProps) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Helmet>
        <title>{`${title} — Corteza`}</title>
        <link rel="canonical" href={url} />
        <meta name="robots" content="noindex" />
        <meta httpEquiv="refresh" content={`0; url=${url}`} />
      </Helmet>
      <p className="text-muted-foreground text-center">
        {title}:{" "}
        <a href={url} className="underline text-foreground">
          {url.replace("https://", "")}
        </a>
      </p>
    </div>
  );
};

export default LegalRedirect;
