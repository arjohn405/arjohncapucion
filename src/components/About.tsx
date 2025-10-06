import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "User-Centered",
    description: "Every design decision is rooted in user research and validated through testing.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I see design as a strategic tool to solve complex business and user challenges.",
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Success is measured by tangible metrics: engagement, conversion, and satisfaction.",
  },
  {
    icon: Sparkles,
    title: "Detail-Obsessed",
    description: "Beautiful pixels matter, but so does the invisible work that makes experiences seamless.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Design Philosophy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                With over 3 years of experience crafting digital products, I specialize in transforming complex user needs into elegant, intuitive interfaces.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I've worked with startups and individual clients, leading cross-functional teams to deliver products that users love and businesses rely on. My approach blends strategic thinking, rigorous research, and a passion for pixel-perfect execution.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-primary-foreground">
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-display font-bold mb-2">30+</p>
                    <p className="text-primary-foreground/80">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-5xl font-display font-bold mb-2">3+</p>
                    <p className="text-primary-foreground/80">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-5xl font-display font-bold mb-2">10+</p>
                    <p className="text-primary-foreground/80">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={principle.title}
                className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
