import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold text-lg mb-2 uppercase tracking-wide">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:alex.morgan@example.com"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">alex.morgan@example.com</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://linkedin.com/in/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Linkedin size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">@alexmorgan</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Github size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">GitHub</h3>
                  <p className="text-sm text-muted-foreground">@alexmorgan</p>
                </CardContent>
              </Card>
            </a>
          </div>

          <Card className="border-border shadow-[var(--shadow-elegant)] bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
