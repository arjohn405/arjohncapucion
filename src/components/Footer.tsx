import { Linkedin, Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Alex Morgan</h3>
            <p className="text-primary-foreground/80">Senior UI/UX Designer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:alex.morgan@example.com"
              className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p className="flex items-center justify-center gap-1">
            Designed & Built with <Heart size={14} className="text-accent fill-accent" /> by Alex Morgan © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
