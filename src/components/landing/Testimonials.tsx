import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Corteza saved our team 5 hours per week. Now we can focus on building, not digging through Slack.",
    name: "John Smith",
    role: "Engineering Lead",
    company: "TechCorp",
    initials: "JS",
    avatarColor: "bg-blue-500",
  },
  {
    quote: "Finally, new engineers can understand why we built things the way we did. Onboarding time cut in half.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "ScaleUp",
    initials: "SC",
    avatarColor: "bg-purple-500",
  },
  {
    quote: "We used to lose decisions in 1000+ message threads. Now everything is captured and searchable instantly.",
    name: "Michael Torres",
    role: "Product Manager",
    company: "BuildFast",
    initials: "MT",
    avatarColor: "bg-emerald-500",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by engineering teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what teams are saying about Corteza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-accent" />
              </div>

              {/* Quote text */}
              <blockquote className="text-[22px] leading-relaxed text-foreground italic mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name and role */}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
