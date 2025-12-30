import { ProjectCard } from "./ProjectCard";
import gram from "@/assets/project-gram.png";
import hack from "@/assets/project-hack.png";
import digi from "@/assets/project-digi.png";
import eco from "@/assets/project-eco.png";

const projects = [
  {
    title: "Gramway Fitness App",
    description: "Designed a fitness app that adapts to user preferences and promotes healthy habits.",
    image: gram,
    tags: ["Mobile Design", "User Research", "Prototyping"],
    metrics: "↑45% user engagement",
  },
  {
    title: "HackHaive Hackathon Platform",
    description: "Developed a collaborative platform for hackathon participants, enhancing team communication and project management.",
    image: hack,
    tags: ["Web Design", "Collaboration", "Prototyping"],
    metrics: "↑50% team satisfaction",
  },
  {
    title: "Digi8 Music and Recording Studio",
    description: "Created a modern website for a music and recording studio, showcasing their services and portfolio.",
    image: digi,
    tags: ["Web Design", "Branding", "Portfolio"],
    metrics: "↑70% site traffic",
  },
  {
    title: "Resiklo Eco-Friendly App",
    description: "Led the design of an eco-friendly app promoting recycling and sustainable living through gamification.",
    image: eco,
    tags: ["Mobile App", "Personalization", "User Engagement"],
    metrics: "↑65%  user retention",
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
