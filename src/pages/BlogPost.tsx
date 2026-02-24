import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { getPostBySlug, BlogSection } from "@/data/blog";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const renderSection = (section: BlogSection, index: number) => {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4 tracking-tight">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-lg font-semibold text-foreground mt-7 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-5 text-base">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc list-outside pl-5 mb-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed text-base">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="list-decimal list-outside pl-5 mb-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed text-base">
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div
          key={index}
          className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-7"
        >
          {section.label && (
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              {section.label}
            </p>
          )}
          <p className="text-foreground text-sm leading-relaxed whitespace-pre-line font-mono">
            {section.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <div
          key={index}
          className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 my-10 text-center"
        >
          <p className="text-foreground font-medium text-lg mb-6 leading-relaxed">
            {section.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://app.corteza.app/demo" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Try Demo — no login required
              </Button>
            </a>
            <Link to="/early-access">
              <Button variant="outline" size="lg">
                Join early access
              </Button>
            </Link>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-2xl">

          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            All articles
          </Link>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                <Tag size={11} />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-5">
              <Calendar size={13} />
              <span>{formattedDate}</span>
              <span className="mx-2">·</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Article body */}
          <article>
            {post.content.map((section, index) => renderSection(section, index))}
          </article>

          {/* Bottom nav */}
          <div className="border-t border-border mt-14 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to all articles
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
