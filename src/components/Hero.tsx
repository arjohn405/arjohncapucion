import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(230 50% 25% / 0.95), hsl(240 45% 35% / 0.9)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-accent font-semibold text-lg mb-4 tracking-wide uppercase">
              Senior UI/UX Designer
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Crafting Intuitive
              <br />
              Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transforming complex problems into elegant, user-centered solutions that drive engagement and delight users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToWork}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
