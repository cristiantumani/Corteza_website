import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { posts } from "@/data/blog";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Page header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Insights on team memory &amp; decision culture
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical articles on how product teams capture knowledge, reduce repeated work, and build institutional memory that lasts.
            </p>
          </div>

          {/* Article list */}
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    <Tag size={11} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
