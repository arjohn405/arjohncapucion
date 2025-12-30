import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Figma, Layers, Palette, Users2, BarChart3, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Figma,
    title: "Design Tools",
    skills: ["Figma", "Sketch", "Adobe XD", "InVision", "Principle", "ProtoPie"],
  },
  {
    icon: Palette,
    title: "UI Design",
    skills: ["Design Systems", "Visual Design", "Typography", "Color Theory", "Iconography"],
  },
  {
    icon: Users2,
    title: "UX Research",
    skills: ["User Interviews", "Usability Testing", "Personas", "Journey Mapping", "Surveys"],
  },
  {
    icon: Layers,
    title: "UX Design",
    skills: ["Information Architecture", "Wireframing", "Prototyping", "Interaction Design"],
  },
  {
    icon: BarChart3,
    title: "Strategy",
    skills: ["Product Strategy", "Competitive Analysis", "A/B Testing", "Analytics", "KPIs"],
  },
  {
    icon: Code,
    title: "Technical",
    skills: ["HTML/CSS", "React Basics", "Responsive Design", "Accessibility (WCAG)"],
  },
];

const testimonials = [
  {
    quote: "Alex transformed our product with exceptional design thinking. User satisfaction increased by 40%.",
    author: "Sarah Chen",
    role: "Product Director, TechCorp",
  },
  {
    quote: "Outstanding attention to detail and ability to balance user needs with business goals.",
    author: "Michael Rodriguez",
    role: "Head of Design, StartupHub",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">Expertise</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Skills & Tools
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit honed through years of solving diverse design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <category.icon className="text-accent" size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold text-center mb-8 text-foreground">
              What Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.author}
                  className="border-border bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <p className="text-muted-foreground text-lg italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
