import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
}

export const ProjectCard = ({ title, description, image, tags, metrics }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-500 cursor-pointer bg-card">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-6">
          <div className="bg-accent text-accent-foreground rounded-full p-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        {metrics && (
          <p className="text-sm font-semibold text-accent mb-4">{metrics}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
