import { PRIVACY_URL, TERMS_URL } from "@/lib/legal";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/favicon-96x96.png" alt="Corteza logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg text-foreground">corteza.app</span>
          </div>

          <div className="flex items-center gap-8">
            <a href={PRIVACY_URL} className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors">
              Privacy
            </a>
            <a href={TERMS_URL} className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors">
              Terms
            </a>
            <a href="https://www.linkedin.com/company/111306406" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors">
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} corteza.app. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
