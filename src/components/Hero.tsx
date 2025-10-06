import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  Senior UI/UX Designer
                </span>
              </div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                Alex Morgan
              </h1>
              <div className="w-20 h-1 bg-foreground"></div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Creating exceptional digital experiences through thoughtful design,
              research-driven insights, and user-centered innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToWork}
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background text-base px-8 h-12 group font-medium"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 h-12 border-foreground/20 hover:bg-foreground hover:text-background font-medium"
              >
                <a href="/resume.pdf" download="Alex_Morgan_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">8+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-muted-foreground/20"></div>
        </div>
      </div>
    </section>
  );
};
