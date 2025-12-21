import { Button } from "@/components/ui/button";
import { 
  Download, 
  MessageSquare, 
  LayoutDashboard, 
  CheckCircle2, 
  Mail,
  ExternalLink,
  Copy
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BetaTest = () => {
  const { toast } = useToast();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(label);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const steps = [
    {
      step: 1,
      title: "Install the Bot",
      icon: Download,
      content: (
        <div className="space-y-3">
          <p className="text-muted-foreground">
            Click the button below to install in your Slack workspace:
          </p>
          <a 
            href="https://slack.com/oauth/v2/authorize?client_id=30663056564.10060673235955&scope=channels:history,channels:read,chat:write,chat:write.public,commands,files:read,groups:history,im:history,mpim:history,users:read,users:read.email&user_scope="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <img 
              alt="Add to Slack" 
              height="40" 
              width="139" 
              src="https://platform.slack-edge.com/img/add_to_slack.png" 
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" 
            />
          </a>
          <ul className="text-sm text-muted-foreground space-y-1 mt-4">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Select your workspace from the dropdown
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Review the permissions and click "Allow"
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              You'll be redirected to the dashboard
            </li>
          </ul>
        </div>
      ),
    },
    {
      step: 2,
      title: "Try Creating a Decision",
      icon: MessageSquare,
      content: (
        <div className="space-y-3">
          <p className="text-muted-foreground">
            In any Slack channel, type:
          </p>
          <div 
            className="bg-muted/50 border border-border rounded-lg p-3 font-mono text-sm flex items-center justify-between cursor-pointer hover:bg-muted/70 transition-colors"
            onClick={() => copyToClipboard("/decision We decided to use React for the frontend", "Command")}
          >
            <code className="text-foreground">/decision We decided to use React for the frontend</code>
            <Copy className={`w-4 h-4 ${copiedCommand === "Command" ? "text-accent" : "text-muted-foreground"}`} />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            A form will pop up where you can:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Choose decision type (Product, UX, Technical)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Add Jira epic key (optional)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Add tags and comments
            </li>
          </ul>
        </div>
      ),
    },
    {
      step: 3,
      title: "View Your Dashboard",
      icon: LayoutDashboard,
      content: (
        <div className="space-y-3">
          <p className="text-muted-foreground">
            Access your dashboard by typing:
          </p>
          <div 
            className="bg-muted/50 border border-border rounded-lg p-3 font-mono text-sm flex items-center justify-between cursor-pointer hover:bg-muted/70 transition-colors"
            onClick={() => copyToClipboard("/login", "Login command")}
          >
            <code className="text-foreground">/login</code>
            <Copy className={`w-4 h-4 ${copiedCommand === "Login command" ? "text-accent" : "text-muted-foreground"}`} />
          </div>
          <p className="text-sm text-muted-foreground">
            Click the dashboard link in the response to see all your decisions!
          </p>
        </div>
      ),
    },
  ];

  const featuresToTest = [
    "Create decisions via /decision command",
    "Upload meeting transcripts for AI extraction (text files)",
    "Link decisions to Jira epics",
    "View/filter/search decisions in dashboard",
    "Edit and delete decisions from dashboard",
  ];

  return (
    <section id="beta-test" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-medium">Beta Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started as a Beta Tester
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thanks for joining the beta! Follow these steps to install and start testing corteza.app.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          {steps.map((item) => (
            <div 
              key={item.step}
              className="bg-card border border-border rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features to Test */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 shadow-soft mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Features to Test
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {featuresToTest.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Report Issues */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Report Issues
                </h3>
                <p className="text-muted-foreground mb-3">
                  Found a bug or have feedback? Email us with:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• What you were trying to do</li>
                  <li>• What happened vs. what you expected</li>
                  <li>• Your workspace ID (from /decisions workspace)</li>
                </ul>
                <Button variant="heroOutline" size="lg" className="mt-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaTest;
