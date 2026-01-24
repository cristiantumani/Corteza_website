import { useState, useEffect } from "react";
import slackModalScreenshot from "@/assets/slack-modal-screenshot.png";
import dashboardChatScreenshot from "@/assets/dashboard-chat-screenshot.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  ExternalLink,
  Mail,
  Github,
  Check,
  AlertCircle,
  Clock,
  Zap,
  Target,
  Lock,
  Link2,
  BarChart3,
  Lightbulb,
  Bug,
  MessageSquare,
  Home,
  Headphones,
} from "lucide-react";

const DocsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("quick-start");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTips, setExpandedTips] = useState<string[]>([]);
  const [expandedTroubleshooting, setExpandedTroubleshooting] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const tableOfContents = [
    {
      id: "quick-start",
      title: "Quick Start",
      icon: Zap,
      subsections: [
        { id: "install-slack", title: "Install to Slack" },
        { id: "first-decision", title: "Log Your First Decision" },
        { id: "access-dashboard", title: "Access Dashboard" },
        { id: "ai-search", title: "Try AI Search" },
        { id: "upload-transcript", title: "Upload Transcript" },
      ],
    },
    { id: "commands", title: "Available Commands", icon: Target },
    { id: "permissions", title: "Understanding Permissions", icon: Lock },
    { id: "jira-integration", title: "Jira Integration", icon: Link2 },
    { id: "dashboard", title: "Using the Dashboard", icon: BarChart3 },
    { id: "best-practices", title: "Best Practices", icon: Lightbulb },
    { id: "troubleshooting", title: "Troubleshooting", icon: Bug },
    { id: "feedback", title: "Feedback & Support", icon: MessageSquare },
  ];

  const filteredTOC = tableOfContents.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subsections?.some((sub) =>
        sub.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTip = (id: string) => {
    setExpandedTips((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const toggleTroubleshooting = (id: string) => {
    setExpandedTroubleshooting((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#4A154B] flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg text-gray-900">corteza.app</span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <a href="mailto:cristiantumani@gmail.com">
              <Button variant="outline" size="sm" className="gap-2">
                <Headphones className="w-4 h-4" />
                Contact Support
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile TOC Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 md:hidden overflow-y-auto">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <nav className="space-y-1">
              {filteredTOC.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-[#4A154B]/10 text-[#4A154B]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4 inline-block mr-2" />
                    {item.title}
                  </button>
                  {item.subsections && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => scrollToSection(sub.id)}
                          className="w-full text-left px-3 py-1.5 rounded text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
              <Link to="/" className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <a href="mailto:cristiantumani@gmail.com" className="block">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Headphones className="w-4 h-4" />
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="pt-16 flex">
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="fixed top-16 w-64 h-[calc(100vh-4rem)] overflow-y-auto border-r border-gray-200 p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
            <nav className="space-y-1">
              {filteredTOC.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                      activeSection === item.id
                        ? "bg-[#4A154B]/10 text-[#4A154B]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </button>
                  {item.subsections && activeSection === item.id && (
                    <div className="ml-6 mt-1 space-y-0.5">
                      {item.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => scrollToSection(sub.id)}
                          className="w-full text-left px-3 py-1.5 rounded text-xs text-gray-500 hover:text-[#4A154B] hover:bg-gray-50 transition-colors"
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-8 max-w-4xl">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corteza Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Everything you need to get started with your AI-powered team memory
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A154B]/10 text-[#4A154B] text-sm font-medium">
                <Clock className="w-4 h-4" />
                10 minutes to get started
              </span>
              <a href="https://app.corteza.app/slack/install" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white gap-2">
                  Install to Slack
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </section>

          {/* Section 1: Quick Start */}
          <section id="quick-start" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Zap className="w-7 h-7 text-[#4A154B]" />
              Quick Start
            </h2>
            <p className="text-gray-600 mt-4 mb-8">
              Follow these 5 steps to start building your team's knowledge base
            </p>

            {/* Step 1 */}
            <div id="install-slack" className="mb-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Install Corteza to Your Workspace
                  </h3>
                  <span className="text-sm text-gray-500">~2 minutes</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-[#4A154B]">1.</span>
                      Click the button below to start installation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-[#4A154B]">2.</span>
                      Select your Slack workspace
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium text-[#4A154B]">3.</span>
                      Review permissions and click "Allow"
                    </li>
                  </ol>
                </div>
                <a href="https://app.corteza.app/slack/install" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white gap-2">
                    Install Corteza to Slack
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Permissions needed:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-500">
                    <li>Read messages in channels where Corteza is added</li>
                    <li>Access file uploads for transcript processing</li>
                    <li>View basic user info (name, avatar)</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-[#2EB67D] font-medium">
                  <Check className="w-5 h-5" />
                  You're done! Corteza is installed
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div id="first-decision" className="mb-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Log Your First Decision
                  </h3>
                  <span className="text-sm text-gray-500">~2 minutes</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <p className="text-gray-600">Type this command in any Slack channel:</p>
                <code className="block bg-gray-900 text-green-400 px-4 py-3 rounded-lg font-mono text-sm">
                  /decision
                </code>
                <p className="text-gray-600">A modal will appear: "🧠 Add to Team Memory"</p>
                
                {/* Slack Modal Screenshot */}
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => setLightboxImage(slackModalScreenshot)}
                    className="cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:ring-offset-2 rounded-lg"
                  >
                    <img 
                      src={slackModalScreenshot} 
                      alt="The Corteza decision logging modal in Slack"
                      loading="lazy"
                      className="max-w-[600px] w-full rounded-lg shadow-md border border-[#E1E4E8] hover:shadow-lg transition-shadow"
                    />
                  </button>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    The Corteza decision logging modal in Slack
                  </p>
                </div>

                <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                  <p className="font-medium text-gray-900 mb-3">Fill in the form:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Content:</span>{" "}
                      <span className="text-gray-500">"We're beta testing Corteza to improve our team's knowledge sharing"</span>
                    </li>
                    <li>
                      <span className="font-medium">Type:</span>{" "}
                      <span className="text-gray-500">Decision</span>
                    </li>
                    <li>
                      <span className="font-medium">Category:</span>{" "}
                      <span className="text-gray-500">Product</span>
                    </li>
                    <li>
                      <span className="font-medium">Tags:</span>{" "}
                      <span className="text-gray-500">beta, tools</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-[#2EB67D] font-medium">
                  <Check className="w-5 h-5" />
                  Logged to team memory as #1
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div id="access-dashboard" className="mb-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Access the Dashboard
                  </h3>
                  <span className="text-sm text-gray-500">~2 minutes</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <code className="block bg-gray-900 text-green-400 px-4 py-3 rounded-lg font-mono text-sm">
                  /login
                </code>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Click the dashboard link Corteza sends you</li>
                  <li>2. Click "Login with Slack" button</li>
                  <li>3. Authorize the connection</li>
                </ol>
                <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                  <p className="font-medium text-gray-900 mb-2">What you'll see:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>All team decisions in one place</li>
                    <li>Powerful search functionality</li>
                    <li>AI chat interface</li>
                    <li>Analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div id="ai-search" className="mb-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Try Semantic Search
                  </h3>
                  <span className="text-sm text-gray-500">~2 minutes</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <ol className="space-y-2 text-gray-700">
                  <li>1. Click the purple chat bubble (bottom right of dashboard)</li>
                  <li>2. Ask questions in natural language</li>
                </ol>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Example queries:</p>
                  <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                    "Show me all decisions about tools"
                  </code>
                  <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                    "What did we decide about beta testing?"
                  </code>
                </div>

                {/* Dashboard Chat Screenshot */}
                <div className="flex flex-col items-center mt-6">
                  <button 
                    onClick={() => setLightboxImage(dashboardChatScreenshot)}
                    className="cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:ring-offset-2 rounded-lg"
                  >
                    <img 
                      src={dashboardChatScreenshot} 
                      alt="AI-powered semantic search in the dashboard showing decision results"
                      loading="lazy"
                      className="max-w-[700px] w-full rounded-lg shadow-md border border-[#E1E4E8] hover:shadow-lg transition-shadow"
                    />
                  </button>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    AI-powered semantic search in the dashboard
                  </p>
                </div>

                <p className="text-gray-600">
                  AI responds with relevant decisions from your team's memory.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div id="upload-transcript" className="mb-10 scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4A154B] text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Upload a Meeting Transcript
                  </h3>
                  <span className="text-sm text-gray-500">~2 minutes (optional)</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 text-[#4A154B] font-medium hover:underline">
                    <ChevronRight className="w-4 h-4" />
                    View sample meeting notes
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <pre className="mt-2 bg-gray-900 text-gray-300 px-4 py-3 rounded-lg font-mono text-xs overflow-x-auto">
{`Meeting Notes - Jan 15, 2026
Attendees: Sarah, Alex, Mike

Discussion:
- Reviewed Q1 roadmap priorities
- DECISION: Launch beta in February
- Need to finalize pricing before launch
- Alex will handle documentation

Action items:
- Sarah: Prepare marketing materials
- Mike: Set up analytics tracking`}
                    </pre>
                  </CollapsibleContent>
                </Collapsible>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Upload the file directly to a Slack channel</li>
                  <li>2. Wait ~10 seconds for AI processing</li>
                  <li>3. Review extracted items (Decisions, Explanations, Context)</li>
                  <li>4. Approve, Edit, or Reject each item</li>
                </ol>
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">AI extracts:</span> 1 Decision, 1 Explanation, 1 Context
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Commands */}
          <section id="commands" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Target className="w-7 h-7 text-[#4A154B]" />
              Available Commands
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Everyone</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#F8F9FA]">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Command</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Description</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/decision</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Log a decision, explanation, or context</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/decision We're using React</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/memory</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Alias for /decision</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/memory API uses JWT tokens</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/decisions</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Search your knowledge base</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/decisions search authentication</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/login</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Get your dashboard link</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/login</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Admins Only</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#F8F9FA]">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Command</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Description</th>
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/settings</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Configure Jira integration</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/settings</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-sm">/permissions</code></td>
                        <td className="px-4 py-3 text-gray-600 text-sm">Manage admin roles</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">/permissions list</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Permissions */}
          <section id="permissions" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Lock className="w-7 h-7 text-[#4A154B]" />
              Understanding Permissions
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#4A154B]/5 rounded-xl p-6 border border-[#4A154B]/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#4A154B]" />
                  Admins
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Edit/delete ANY decision
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Configure Jira settings
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Grant admin access to others
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Revoke admin access
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-[#4A154B]/20">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Who are admins?</span>
                    <br />
                    Slack Workspace Admins/Owners are automatically admins. Admins can promote others.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Regular Users
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    View all decisions (read-only for others)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Create new decisions
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Edit/delete THEIR OWN decisions only
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check className="w-4 h-4 text-[#2EB67D]" />
                    Search and use AI features
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-sm font-medium text-gray-700">Permission commands:</p>
              <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                /permissions list
              </code>
              <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                /permissions grant @teammate
              </code>
              <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                /permissions revoke @teammate
              </code>
            </div>
          </section>

          {/* Section 4: Jira Integration */}
          <section id="jira-integration" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Link2 className="w-7 h-7 text-[#4A154B]" />
              Optional: Configure Jira Integration
            </h2>

            <div className="mt-8">
              <div className="bg-[#ECB22E]/10 border border-[#ECB22E]/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium">Requirements:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECB22E]" />
                    You must be a Workspace Admin
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECB22E]" />
                    You need Jira URL, email, and API token
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4A154B] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-gray-700">Type <code className="bg-gray-100 px-2 py-1 rounded">/settings</code> in Slack</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4A154B] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">Fill in Jira configuration:</p>
                    <div className="bg-[#F8F9FA] rounded-lg p-4 border border-gray-200 space-y-2 text-sm">
                      <p><span className="font-medium">Jira URL:</span> <span className="text-gray-500">https://yourcompany.atlassian.net</span></p>
                      <p><span className="font-medium">Jira Email:</span> <span className="text-gray-500">your@email.com</span></p>
                      <p>
                        <span className="font-medium">API Token:</span>{" "}
                        <a href="https://id.atlassian.com/manage-profile/security/api-tokens" target="_blank" rel="noopener noreferrer" className="text-[#4A154B] hover:underline">
                          Generate here <ExternalLink className="w-3 h-3 inline" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#4A154B] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <p className="text-gray-700">Click "Save & Test"</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#2EB67D] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-[#2EB67D] font-medium">Jira configuration saved!</p>
                </div>
              </div>

              <div className="mt-6 bg-[#F8F9FA] rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Note:</span> Settings are encrypted and isolated per workspace. Now you can add Jira Epic Keys (PROJ-123) when logging decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Dashboard */}
          <section id="dashboard" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-[#4A154B]" />
              Using the Dashboard
            </h2>

            <div className="mt-8 space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">5.1 Browse & Filter</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Filter by type, category, Jira epic, date range</li>
                  <li>Search by keywords</li>
                  <li>Sort by newest or oldest</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 View & Edit</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Click "👁️ View" for full details</li>
                  <li>See Jira epic info, tags, and context</li>
                  <li>Admins can edit any decision; users can only edit their own</li>
                  <li>"Read-only" label appears for others' decisions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">5.3 AI Chat Interface</h3>
                <p className="text-gray-600 mb-4">Click the purple chat bubble and ask questions naturally:</p>
                <div className="space-y-2">
                  <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                    "Show me all product decisions from last month"
                  </code>
                  <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                    "What explanations do we have about authentication?"
                  </code>
                  <code className="block bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                    "Find context about our Q1 roadmap"
                  </code>
                </div>

                {/* Dashboard Chat Screenshot */}
                <div className="flex flex-col items-center mt-6">
                  <button 
                    onClick={() => setLightboxImage(dashboardChatScreenshot)}
                    className="cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A154B] focus:ring-offset-2 rounded-lg"
                  >
                    <img 
                      src={dashboardChatScreenshot} 
                      alt="AI-powered semantic search in the dashboard showing decision results"
                      loading="lazy"
                      className="max-w-[700px] w-full rounded-lg shadow-md border border-[#E1E4E8] hover:shadow-lg transition-shadow"
                    />
                  </button>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    AI-powered semantic search in the dashboard
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">5.4 Export Data</h3>
                <p className="text-gray-600">
                  Click "📥 Export CSV" to download your team's knowledge base. GDPR-compliant data export.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Best Practices */}
          <section id="best-practices" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Lightbulb className="w-7 h-7 text-[#4A154B]" />
              Best Practices
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#4A154B]/5 rounded-xl p-6 border border-[#4A154B]/20">
                <h3 className="font-semibold text-gray-900 mb-3">📌 Decision</h3>
                <p className="text-sm text-gray-500 mb-4">Choices and commitments</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "We will use PostgreSQL for the database"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "We decided to launch beta in February"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "We're hiring 2 engineers for backend"
                  </li>
                </ul>
              </div>

              <div className="bg-[#36C5F0]/5 rounded-xl p-6 border border-[#36C5F0]/20">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Explanation</h3>
                <p className="text-sm text-gray-500 mb-4">How things work</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "The API authentication uses JWT tokens"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "Deployment uses GitHub Actions"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "Permissions check user_id in DB"
                  </li>
                </ul>
              </div>

              <div className="bg-[#2EB67D]/5 rounded-xl p-6 border border-[#2EB67D]/20">
                <h3 className="font-semibold text-gray-900 mb-3">📋 Context</h3>
                <p className="text-sm text-gray-500 mb-4">Background info, constraints</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "Budget approved is $50k for Q1"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "Design must be WCAG AA accessible"
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#2EB67D] mt-0.5" />
                    "Launch deadline is end of Q2"
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips</h3>
              {[
                {
                  id: "tip-1",
                  title: "Be Specific",
                  content: (
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-[#2EB67D]"><Check className="w-4 h-4" /> "We will use React 18 for the frontend"</p>
                      <p className="flex items-center gap-2 text-[#E01E5A]"><X className="w-4 h-4" /> "We talked about frontend stuff"</p>
                    </div>
                  ),
                },
                {
                  id: "tip-2",
                  title: "Add Context",
                  content: <p>Use the "Additional comments" field. Mention alternatives considered and reasoning.</p>,
                },
                {
                  id: "tip-3",
                  title: "Tag Consistently",
                  content: (
                    <p>Use consistent tags: <code className="bg-gray-100 px-1 rounded">backend</code>, <code className="bg-gray-100 px-1 rounded">frontend</code>, <code className="bg-gray-100 px-1 rounded">q1-2026</code>, <code className="bg-gray-100 px-1 rounded">urgent</code></p>
                  ),
                },
                {
                  id: "tip-4",
                  title: "Link to Jira",
                  content: <p>Connect decisions to epics for traceability. Corteza auto-fetches epic details.</p>,
                },
                {
                  id: "tip-5",
                  title: "Upload Transcripts",
                  content: <p>Upload .txt or .docx files. Review AI suggestions before approving.</p>,
                },
              ].map((tip) => (
                <Collapsible key={tip.id} open={expandedTips.includes(tip.id)} onOpenChange={() => toggleTip(tip.id)}>
                  <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-3 bg-[#F8F9FA] rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">{tip.title}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedTips.includes(tip.id) ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-3 text-sm text-gray-600">
                    {tip.content}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>

          {/* Section 7: Troubleshooting */}
          <section id="troubleshooting" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <Bug className="w-7 h-7 text-[#4A154B]" />
              Troubleshooting
            </h2>

            <div className="mt-8 space-y-2">
              {[
                {
                  id: "issue-1",
                  title: "Command doesn't respond",
                  problem: "Corteza isn't responding to slash commands",
                  solutions: [
                    "Make sure Corteza is installed in your workspace",
                    "Try reinstalling from app.corteza.app/slack/install",
                    "Check if the bot was removed from the channel",
                  ],
                },
                {
                  id: "issue-2",
                  title: "Dashboard shows 'Authentication required'",
                  problem: "Can't access the dashboard",
                  solutions: [
                    "Type /login for a fresh link",
                    "Make sure you clicked 'Allow' when authorizing",
                    "Try logging out and back in",
                  ],
                },
                {
                  id: "issue-3",
                  title: "'Read-only' label on my own decision",
                  problem: "Can't edit your own decision",
                  solutions: [
                    "Check you're logged in as the same Slack user",
                    "Refresh the page",
                    "Report if the issue persists",
                  ],
                },
                {
                  id: "issue-4",
                  title: "Upload doesn't trigger AI extraction",
                  problem: "Uploaded transcript but no AI analysis",
                  solutions: [
                    "Make sure bot is in the channel (/invite @Corteza)",
                    "Use supported formats: .txt, .docx, .pdf",
                    "Upload directly to Slack (not external links)",
                    "Wait 10 seconds for processing",
                  ],
                },
                {
                  id: "issue-5",
                  title: "Can't configure Jira settings",
                  problem: "/settings shows 'permission denied'",
                  solutions: [
                    "Only Workspace Admins can configure",
                    "Ask an admin to run /settings",
                    "Or get admin access: /permissions grant @you",
                  ],
                },
              ].map((issue) => (
                <Collapsible key={issue.id} open={expandedTroubleshooting.includes(issue.id)} onOpenChange={() => toggleTroubleshooting(issue.id)}>
                  <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-3 bg-[#F8F9FA] rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#E01E5A]" />
                      {issue.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedTroubleshooting.includes(issue.id) ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 py-4 text-sm border-l-2 border-[#E01E5A]/20 ml-4 mt-2">
                    <p className="text-gray-600 mb-3"><span className="font-medium">Problem:</span> {issue.problem}</p>
                    <p className="font-medium text-gray-900 mb-2">Solutions:</p>
                    <ol className="space-y-1 text-gray-600">
                      {issue.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#4A154B] font-medium">{i + 1}.</span>
                          {solution}
                        </li>
                      ))}
                    </ol>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </section>

          {/* Section 8: Feedback & Support */}
          <section id="feedback" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pb-4 border-b border-gray-200 flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-[#4A154B]" />
              Feedback & Support
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-[#E01E5A]" />
                  Report Bugs
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Note what you were trying to do</li>
                  <li>• Note what happened vs. expected</li>
                  <li>• Include screenshots if possible</li>
                </ul>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#4A154B]" />
                    <a href="mailto:cristiantumani@gmail.com" className="text-[#4A154B] hover:underline">cristiantumani@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#4A154B]" />
                    <a href="https://github.com/cristiantumani/corteza.app/issues" target="_blank" rel="noopener noreferrer" className="text-[#4A154B] hover:underline">
                      GitHub Issues <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#ECB22E]" />
                  Share Ideas
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Feature requests</li>
                  <li>• Usability improvements</li>
                  <li>• Workflow suggestions</li>
                  <li>• Integration requests</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-[#4A154B]/5 rounded-xl p-6 border border-[#4A154B]/20 text-center">
              <p className="text-lg font-medium text-gray-900 mb-4">
                Your feedback shapes Corteza! 🙏
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:cristiantumani@gmail.com">
                  <Button className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white gap-2">
                    <Mail className="w-4 h-4" />
                    Email Feedback
                  </Button>
                </a>
                <a href="https://github.com/cristiantumani/corteza.app/issues" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Open GitHub Issue
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Right Sidebar - Help Card */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="fixed top-24 w-56">
            <div className="bg-[#4A154B]/5 rounded-xl p-5 border border-[#4A154B]/20">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-[#4A154B]" />
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We're here to help you get the most out of Corteza.
              </p>
              <div className="space-y-3 text-sm">
                <a href="mailto:cristiantumani@gmail.com" className="flex items-center gap-2 text-[#4A154B] hover:underline">
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
                <a href="https://github.com/cristiantumani/corteza.app/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#4A154B] hover:underline">
                  <Github className="w-4 h-4" />
                  GitHub Issues
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#4A154B] text-white rounded-full shadow-lg hover:bg-[#4A154B]/90 transition-colors flex items-center justify-center z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Footer */}
      <footer className="bg-[#F8F9FA] border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#4A154B] transition-colors">Home</Link>
              <Link to="/privacy" className="hover:text-[#4A154B] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#4A154B] transition-colors">Terms</Link>
              <a href="https://github.com/cristiantumani/corteza.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A154B] transition-colors">GitHub</a>
              <a href="mailto:cristiantumani@gmail.com" className="hover:text-[#4A154B] transition-colors">Contact</a>
            </div>
            <p className="text-sm text-gray-500">
              © 2026 Corteza. All rights reserved.
            </p>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Made with ❤️ for teams who learn from their decisions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DocsPage;
