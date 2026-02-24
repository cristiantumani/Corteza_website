import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/favicon-96x96.png" alt="Corteza logo" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-lg text-foreground">corteza.app</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Solution
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Integrations
          </a>
          <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Setup Guide
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.corteza.app" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </a>
          <a href="https://app.corteza.app/demo" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              Try Demo
            </Button>
          </a>
          <Link to="/early-access">
            <Button variant="hero" size="sm">
              Join early access
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Solution
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              How it works
            </a>
            <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Integrations
            </a>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Setup Guide
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <a href="https://app.corteza.app" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </a>
              <a href="https://app.corteza.app/demo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full">
                  Try Demo
                </Button>
              </a>
              <Link to="/early-access">
                <Button variant="hero" size="sm">
                  Join early access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
