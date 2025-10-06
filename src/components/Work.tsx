import { ProjectCard } from "./ProjectCard";
import fintechImg from "@/assets/project-fintech.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import healthImg from "@/assets/project-health.jpg";
import foodImg from "@/assets/project-food.jpg";

const projects = [
  {
    title: "FinTech Mobile Banking",
    description: "Redesigned mobile banking experience for a leading fintech startup, focusing on simplified navigation and real-time insights.",
    image: fintechImg,
    tags: ["Mobile Design", "User Research", "Prototyping"],
    metrics: "↑45% user engagement",
  },
  {
    title: "Luxury E-Commerce Platform",
    description: "Created an elegant shopping experience for a premium fashion brand, balancing aesthetics with conversion optimization.",
    image: ecommerceImg,
    tags: ["E-Commerce", "UI Design", "A/B Testing"],
    metrics: "↑32% conversion rate",
  },
  {
    title: "Healthcare Patient Portal",
    description: "Designed an accessible patient portal for a healthcare network, prioritizing ease of use for diverse age groups.",
    image: healthImg,
    tags: ["Healthcare", "Accessibility", "UX Strategy"],
    metrics: "↑60% appointment bookings",
  },
  {
    title: "Food Delivery App",
    description: "Streamlined ordering flow and personalized recommendations for a food delivery platform serving 2M+ users.",
    image: foodImg,
    tags: ["Mobile App", "Personalization", "User Testing"],
    metrics: "↑28% repeat orders",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of impactful projects where design meets measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
