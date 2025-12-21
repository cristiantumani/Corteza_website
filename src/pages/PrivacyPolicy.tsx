import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy for Corteza.app</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> December 13, 2024 | <strong>Effective Date:</strong> December 13, 2024
          </p>

          <hr className="border-border my-8" />

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy describes how Corteza.app ("we," "our," or "the Service") collects, uses, stores, and protects your information when you use our Slack application.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Your privacy is important to us.</strong> We are committed to protecting your personal data and being transparent about what information we collect and how we use it.
            </p>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Service Provider:</strong> Cristian Tumani</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Email:</strong> cristiantumani@gmail.com</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Service Name:</strong> corteza.app</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">2.1 Information from Slack</h3>
            <p className="text-muted-foreground mb-2">When you install and use Corteza.app in your Slack workspace, we automatically collect:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Workspace Information:</strong> Workspace ID, workspace name, team domain</li>
              <li><strong className="text-foreground">User Information:</strong> User ID, username, display name, email address (if made available by your workspace settings)</li>
              <li><strong className="text-foreground">Channel Information:</strong> Channel IDs and names where the bot is used</li>
              <li><strong className="text-foreground">Message Content:</strong> Text of decisions you log, meeting transcripts you upload, and any comments or alternatives you provide</li>
              <li><strong className="text-foreground">Interaction Data:</strong> Commands you execute, buttons you click, modals you submit</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">2.2 Information You Provide</h3>
            <p className="text-muted-foreground mb-2">You directly provide us with:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Decision Content:</strong> The text of decisions you log via Slack commands</li>
              <li><strong className="text-foreground">Meeting Transcripts:</strong> Files you upload for AI-powered decision extraction</li>
              <li><strong className="text-foreground">Jira Integration Data:</strong> Epic keys, ticket information when you connect decisions to Jira</li>
              <li><strong className="text-foreground">Tags and Metadata:</strong> Tags, decision types (product/UX/technical), additional comments</li>
              <li><strong className="text-foreground">Feedback:</strong> Reactions to AI suggestions (approve/reject/edit)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">2.3 Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-2">We automatically collect:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Timestamps:</strong> When decisions are created, edited, or deleted</li>
              <li><strong className="text-foreground">Usage Data:</strong> Which features are used, frequency of commands</li>
              <li><strong className="text-foreground">Technical Data:</strong> Request logs, error logs, API response times</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">2.4 Information from Third-Party Services</h3>
            <p className="text-muted-foreground mb-2">When you use optional integrations:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Jira:</strong> Epic summaries, ticket status, ticket types, Jira issue URLs (only when you provide a Jira epic key)</li>
              <li><strong className="text-foreground">Anthropic Claude API:</strong> We send meeting transcripts to Anthropic's Claude API for AI-powered decision extraction. Anthropic may process this data according to their own privacy policy.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">3.1 Core Service Functionality</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Store and organize decisions</strong> you log through Slack</li>
              <li><strong className="text-foreground">Process meeting transcripts</strong> with AI to extract decisions</li>
              <li><strong className="text-foreground">Fetch Jira ticket information</strong> when you link decisions to epics</li>
              <li><strong className="text-foreground">Display decisions</strong> in the web dashboard filtered by your workspace</li>
              <li><strong className="text-foreground">Enable search and filtering</strong> of your team's decisions</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Improve AI accuracy</strong> by analyzing which suggestions are approved or rejected</li>
              <li><strong className="text-foreground">Debug issues</strong> using error logs and usage patterns</li>
              <li><strong className="text-foreground">Optimize performance</strong> based on usage data</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">3.3 Communication</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Send notifications</strong> within Slack about decision confirmations, AI suggestions, and errors</li>
              <li><strong className="text-foreground">Respond to support requests</strong> if you contact us</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">3.4 Legal Compliance</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Comply with legal obligations</strong> under GDPR, CCPA, and other applicable laws</li>
              <li><strong className="text-foreground">Enforce our Terms of Service</strong></li>
              <li><strong className="text-foreground">Protect our rights</strong> and prevent abuse</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">4.1 Where We Store Data</h3>
            <p className="text-muted-foreground mb-2">Your data is stored using the following services:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Database:</strong> MongoDB Atlas (cloud-hosted MongoDB)</li>
              <li><strong className="text-foreground">Application Hosting:</strong> Railway (cloud hosting platform)</li>
              <li><strong className="text-foreground">Geography:</strong> Data may be stored in data centers located in the United States and Europe</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">4.2 How We Protect Data</h3>
            <p className="text-muted-foreground mb-2">We implement security measures including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Encryption in Transit:</strong> All data transmitted between your browser/Slack and our servers uses TLS 1.2+ encryption</li>
              <li><strong className="text-foreground">Encryption at Rest:</strong> Database stored with encryption enabled</li>
              <li><strong className="text-foreground">Access Controls:</strong> Workspace-based multi-tenancy ensures teams can only access their own data</li>
              <li><strong className="text-foreground">Authentication:</strong> Slack OAuth for user authentication</li>
              <li><strong className="text-foreground">Secure Infrastructure:</strong> Hosted on enterprise-grade cloud platforms (Railway, MongoDB Atlas)</li>
              <li><strong className="text-foreground">Regular Backups:</strong> Automated database backups to prevent data loss</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">4.3 Data Retention</h3>
            <p className="text-muted-foreground mb-2">We retain your data as follows:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Active Data:</strong> Decisions, transcripts, and suggestions are retained as long as your workspace uses the service</li>
              <li><strong className="text-foreground">Deleted Data:</strong> When you delete a decision, it is permanently removed from our database</li>
              <li><strong className="text-foreground">Workspace Deletion:</strong> If you uninstall the app, you can request complete data deletion (see Section 6)</li>
              <li><strong className="text-foreground">Logs:</strong> Error logs and usage logs are retained for 90 days</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">Note: We plan to implement configurable data retention policies in the future, allowing workspace admins to automatically delete decisions older than a specified period.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Sharing and Third Parties</h2>
            
            <h3 className="text-xl font-medium text-foreground mb-3">5.1 Third-Party Services</h3>
            <p className="text-muted-foreground mb-4">We share your data with the following third-party services to provide our functionality:</p>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-border rounded-lg">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left p-3 text-foreground font-medium">Service</th>
                    <th className="text-left p-3 text-foreground font-medium">Purpose</th>
                    <th className="text-left p-3 text-foreground font-medium">Data Shared</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Slack</td>
                    <td className="p-3">Core platform integration</td>
                    <td className="p-3">User IDs, workspace IDs, messages posted by the bot</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Anthropic (Claude API)</td>
                    <td className="p-3">AI-powered transcript analysis</td>
                    <td className="p-3">Meeting transcript text only (when you upload files)</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">MongoDB Atlas</td>
                    <td className="p-3">Database storage</td>
                    <td className="p-3">All collected data</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Railway</td>
                    <td className="p-3">Application hosting</td>
                    <td className="p-3">All data processed by the app</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium text-foreground">Jira (Atlassian)</td>
                    <td className="p-3">Optional integration to fetch ticket data</td>
                    <td className="p-3">Epic keys you provide</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mb-3">5.2 We Do NOT Sell Your Data</h3>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">5.3 Legal Disclosures</h3>
            <p className="text-muted-foreground mb-2">We may disclose your information if required by law, such as:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>In response to a valid court order or subpoena</li>
              <li>To comply with legal processes</li>
              <li>To protect the rights, property, or safety of our users or others</li>
              <li>In connection with a business transfer (merger, acquisition, sale of assets)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">Under privacy laws including GDPR (European Union) and CCPA (California), you have the following rights:</p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">6.1 Right to Access</h3>
            <p className="text-muted-foreground mb-2">You can access your data at any time through:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Slack commands:</strong> /decisions recent, /decisions search [keyword]</li>
              <li><strong className="text-foreground">Web dashboard:</strong> View all decisions at the dashboard URL</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">6.2 Right to Data Portability (Export)</h3>
            <p className="text-muted-foreground mb-4">You can request a complete export of all your workspace's data in machine-readable format (JSON or CSV). Email us with your workspace ID. Response time: within 30 days.</p>

            <h3 className="text-xl font-medium text-foreground mb-3">6.3 Right to Deletion ("Right to be Forgotten")</h3>
            <p className="text-muted-foreground mb-2">You can request deletion of:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Individual decisions:</strong> Use the delete button in the dashboard or ask us to delete specific decision IDs</li>
              <li><strong className="text-foreground">All workspace data:</strong> Request complete deletion of all data associated with your workspace</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">Note: Some data may be retained in backups for up to 90 days after deletion</p>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-4">6.4 Right to Rectification (Correction)</h3>
            <p className="text-muted-foreground mb-4">You can edit decisions directly through the Dashboard or email us to correct any inaccurate data.</p>

            <h3 className="text-xl font-medium text-foreground mb-3">6.5 Right to Restrict Processing</h3>
            <p className="text-muted-foreground mb-4">You can request that we stop processing your data while maintaining storage (e.g., during a dispute).</p>

            <h3 className="text-xl font-medium text-foreground mb-3">6.6 Right to Object</h3>
            <p className="text-muted-foreground mb-4">You can object to processing of your data for specific purposes (e.g., analytics).</p>

            <h3 className="text-xl font-medium text-foreground mb-3">6.7 Right to Withdraw Consent</h3>
            <p className="text-muted-foreground mb-4">You can uninstall the Corteza.app from your Slack workspace at any time, which will stop all data collection.</p>

            <h3 className="text-xl font-medium text-foreground mb-3">6.8 How to Exercise Your Rights</h3>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Email:</strong> cristiantumani@gmail.com</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Subject Line:</strong> "Privacy Request - [Your Workspace ID]"</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Response Time:</strong> Within 30 days</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Data Transfers</h2>
            <p className="text-muted-foreground mb-4">
              If you are located outside the United States, please be aware that your data may be transferred to, stored, and processed in the United States and other countries where our service providers operate.
            </p>
            <p className="text-muted-foreground">
              By using Corteza.app, you consent to the transfer of your data to countries that may have different data protection laws than your country of residence.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong className="text-foreground">For EU Users:</strong> We rely on Standard Contractual Clauses and adequacy decisions to ensure appropriate safeguards for data transfers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Corteza.app is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately at cristiantumani@gmail.com and we will delete the information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-2">Our web dashboard uses minimal tracking:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Session Storage:</strong> To maintain your filter selections (search terms, date ranges) during your browsing session</li>
              <li><strong className="text-foreground">URL Parameters:</strong> Workspace ID is passed as a URL parameter for filtering</li>
              <li><strong className="text-foreground">No Cookies:</strong> We do not currently use cookies for tracking or analytics</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">Note: Slack may use its own cookies and tracking when you interact with the bot through their platform.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. AI and Automated Decision-Making</h2>
            <p className="text-muted-foreground mb-2">We use Anthropic's Claude AI to analyze meeting transcripts and suggest decisions. This process:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Is optional:</strong> You choose whether to upload transcripts</li>
              <li><strong className="text-foreground">Requires review:</strong> AI suggestions are presented to you for approval; they are not automatically saved</li>
              <li><strong className="text-foreground">Learns from feedback:</strong> We may use your approval/rejection patterns to improve AI accuracy</li>
              <li><strong className="text-foreground">No automated decisions:</strong> The AI assists you but does not make decisions without human review</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Data Breach Notification</h2>
            <p className="text-muted-foreground mb-2">In the event of a data breach that affects your personal information, we will:</p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Notify affected users</strong> via Slack message or email within 72 hours of discovering the breach</li>
              <li><strong className="text-foreground">Describe the breach</strong> including what data was compromised</li>
              <li><strong className="text-foreground">Explain the steps</strong> we are taking to address the breach</li>
              <li><strong className="text-foreground">Provide recommendations</strong> for protecting your information</li>
            </ol>
            <p className="text-muted-foreground mt-4">We will also notify relevant data protection authorities as required by law.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-2">We may update this Privacy Policy from time to time to reflect:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Changes in our practices</li>
              <li>Changes in applicable laws</li>
              <li>New features or functionality</li>
            </ul>
            <p className="text-muted-foreground mb-2">When we make changes:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>We will update the "Last Updated" date at the top</li>
              <li>For material changes, we will notify you via Slack message in your workspace</li>
              <li>Continued use of the service after changes constitutes acceptance of the new policy</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. California Privacy Rights (CCPA)</h2>
            <p className="text-muted-foreground mb-4">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Categories of Personal Information Collected</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Identifiers (Slack user ID, email, workspace ID)</li>
              <li>Internet activity (commands, interactions with the bot)</li>
              <li>User-generated content (decision text, transcripts)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Business Purpose</h3>
            <p className="text-muted-foreground mb-4">We use this information solely to provide the corteza.app service. We do not sell your personal information.</p>

            <h3 className="text-xl font-medium text-foreground mb-3">Your CCPA Rights</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Right to Know:</strong> Request disclosure of what personal information we collect, use, and share</li>
              <li><strong className="text-foreground">Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong className="text-foreground">Right to Opt-Out:</strong> Opt-out of the "sale" of personal information (though we do not sell data)</li>
              <li><strong className="text-foreground">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. European Privacy Rights (GDPR)</h2>
            <p className="text-muted-foreground mb-4">If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR):</p>
            
            <h3 className="text-xl font-medium text-foreground mb-3">Legal Basis for Processing</h3>
            <p className="text-muted-foreground mb-2">We process your data based on:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li><strong className="text-foreground">Consent:</strong> You install and use the app voluntarily</li>
              <li><strong className="text-foreground">Contract:</strong> To provide the service you requested</li>
              <li><strong className="text-foreground">Legitimate Interest:</strong> To improve the service and prevent abuse</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Your GDPR Rights</h3>
            <p className="text-muted-foreground mb-2">All rights listed in Section 6 apply, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Data Protection Officer</h3>
            <p className="text-muted-foreground">For GDPR-related inquiries, contact: cristiantumani@gmail.com</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Us</h2>
            <p className="text-muted-foreground mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <div className="bg-secondary/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Service Provider:</strong> Cristian Tumani</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Email:</strong> cristiantumani@gmail.com</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Response Time:</strong> We aim to respond within 48 hours for general inquiries and 30 days for formal data requests.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Supervisory Authority</h2>
            <p className="text-muted-foreground">
              If you are located in the EEA, UK, or Switzerland and believe we have not addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority.
            </p>
          </section>

          <hr className="border-border my-8" />

          <p className="text-muted-foreground text-center italic">
            By using Corteza.app, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and sharing of your information as described herein.
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
